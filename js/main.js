var waitForFinalEvent = (function() {
	var timers = {};
	return function(callback, ms, uniqueId) {
		if (!uniqueId) {
			uniqueId = "Don't call this twice without a uniqueId";
		}
		if (timers[uniqueId]) {
			clearTimeout(timers[uniqueId]);
		}
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

$(document).ready(function() {
	$('article').scrollTop(0);
	materializate();
	$('article').fadeIn(2000);

	$('a').click(function(e) {
		e.preventDefault();
		pagina = $(this).attr('href');
		loadUrl(pagina);
	})

	$('article').scrollStopped(function() {
		if ((document.documentElement.clientWidth / window.innerWidth) == 1) {
			goto(0);
		}
	})
	Resize_Page();
});

$(window).load(function() {
	Resize_Page();
	$('article').fadeIn(1000);
});

$(window).resize(function() {
	waitForFinalEvent(function() {
		Resize_Page();
	}, 1000, "some unique string");
});

$(window).bind('orientationchange', function(event) {
	Resize_Page();
});

$(document).keydown(function(event) {
	if (event.keyCode == 33) {
		event.preventDefault();
		goto(-1);
	};
	if (event.keyCode == 34) {
		event.preventDefault();
		goto(1);
	};
	if (event.keyCode == 38) {
		event.preventDefault();
		goto(-1);
	};
	if (event.keyCode == 40) {
		event.preventDefault();
		goto(1);
	};
	if (event.keyCode == 39) {
		event.preventDefault();
		pagina = $('.next').attr('href');
		loadUrl(pagina);
	};
	if (event.keyCode == 37) {
		event.preventDefault();
		pagina = $('.prev').attr('href');
		loadUrl(pagina);
	};
});

function goto(inc) {
	if ($('body').width() < 741) {
		return;
	}
	pagenumber = (inc * $('section').height()) + parseInt($('article').scrollTop() / $('section').height() + .5) * $('section').height();
	pagenumberH = 0;
	Duration = 500 * (Math.abs(pagenumber - $('article').scrollTop()) / $('section').height());
	if (Duration !== 0) {
		$('article').scrollTop($('article').scrollTop() + 1);
		$('article').scrollTop($('article').scrollTop() - 1);
		$('article:not(:animated)').animate({
			scrollTop: pagenumber
		}, Duration);
	}
}

function Resize_Page() {
	if ($('body').width() < 741) {
		$('body').css({
			fontSize: '18px'
		});
        $('article a').addClass("light-blue waves-light btn col s12");
	}
	else {
        $('article a').removeClass("light-blue waves-light btn col s12");
		$('.full,.vertical,.horizontal').ConvertToBackground();
		$('.square,.cuadrado').square();

		/* resize fonts */
		fsize = $('#fontsize').html();
		if (fsize == undefined) {
			fsize = 9;
		}
		var ajuste = .95;
		initial_value = 554.2562584220408; //Math.sqrt((640 * 480));
		end_value = Math.sqrt(($('section').width() * $('section').height()));
		ratio = $('section').width() / $('section').height();
		if (ratio < 1) {
			ajuste = .85;
		}
		font_size = ajuste * (fsize / initial_value) * end_value * (1 + (1 - ratio) / 16);
		$('body').css({
			fontSize: font_size + 'px'
		});
		goto(0);
	}
}

jQuery.fn.square = function(options) {
	var defaults = "";
	var options = jQuery.extend(defaults, options);
	return this.each(function() {
		var obj = jQuery(this);
		obj_width = obj.width;
		obj.css({
			'height': obj_width
		})
	})
}

/*
 * Plugin Name: Resize Image to Parent Container
 *
 * Author: Christian Varga
 * Author URI: http://christianvarga.com
 *
 * (con algunas variaciones para elegir el punto de anclaje y para, si está soportado,
 * -o sea, todos los navegadores modernos excepto IE < 10 - convertir la imagen en
 * en background con cover, más eficaz que el método original)
 */

jQuery.fn.ConvertToBackground = function(options) {
    if ($('body').width() < 741) {return}
	var defaults = {
		parent: "figure"
	};
	var options = jQuery.extend(defaults, options);
	return this.each(function() {
		var parent = jQuery(this).parent();
		var o = options;
		var obj = jQuery(this);
		obj.css({
			'width': '100%',
			'height': 'auto',
			'margin-left': 0,
			'margin-top': 0
		});
		obj.load(function() {
			var parentWidth = obj.parents(o.parent).width();
			var parentHeight = obj.parents(o.parent).height();
			var imageWidth = obj.width();
			var imageHeight = obj.height();
			var diff = imageWidth / parentWidth;

			if ((imageHeight / diff) < parentHeight) {
				obj.css({
					'width': 'auto',
					'height': parentHeight
				});

				imageWidth = imageWidth / (imageHeight / parentHeight);
				imageHeight = parentHeight;
			}
			else {
				obj.css({
					'height': 'auto',
					'width': parentWidth
				});

				imageWidth = parentWidth;
				imageHeight = imageHeight / diff;
			}
			var leftOffset = (imageWidth - parentWidth) / -2;
			var topOffset = (imageHeight - parentHeight) / -2;
			var imageSrc = obj.attr('src');

			imageSrc = 'url("' + imageSrc + '")';
			obj.fadeOut();
			obj.parents(o.parent).css("background-image", imageSrc);
			obj.parents(o.parent).attr("title", obj.attr("title"));
			if (obj.attr("title") == null) {
				obj.parents(o.parent).attr("title", obj.attr("alt"));
			}
			if (obj.hasClass("left")) {
				leftOffset = 0;
				obj.parents(o.parent).css('background-position-x', 'left');

			}
			if (obj.hasClass("right")) {
				leftOffset = (parentWidth - imageWidth);
				obj.parents(o.parent).css('background-position-x', 'right');
			}
			if (obj.hasClass("top")) {
				topOffset = 0;
				obj.parents(o.parent).css('background-position-y', 'top');
			}
			if (obj.hasClass("bottom")) {
				topOffset = (parentHeight - imageHeight);
				obj.parents(o.parent).css('background-position-y', 'bottom');
			}

			obj.css({
				'margin-left': leftOffset,
				'margin-top': topOffset
			});
		});
		if (this.complete) {
			obj.trigger("load")
		}
	})
/* */	
}

/*
 * Plugin Name: event scroll stop
 *
 * Author: Jason Sebring
 *
 * URI: http://stackoverflow.com/questions/14035083/jquery-bind-event-on-scroll-stops
 */
$.fn.scrollStopped = function(callback) {
	$(this).scroll(function() {
		var self = this,
			$this = $(self);
		if ($this.data('scrollTimeout')) {
			clearTimeout($this.data('scrollTimeout'));
		}
		$this.data('scrollTimeout', setTimeout(callback, 750, self));
	});
};

function loadUrl(pagina) {
	setTimeout(function(){document.location.href = pagina},1000);
}

function materializate() {
	// añade efecto a los enlaces
	$('#article a, aside a').addClass('waves-effect');
	
	// prepara los enlaces de los laterales
	$('aside ul li a').addClass('light-blue waves-light btn col s12');
	
	//prepara el menú
	$('#menu ul').addClass('right side-nav');
	$('.button-collapse').sideNav();
	
	// añade efectos a la navegación
	$('.page-numbers').addClass('waves-effect waves-light');
	
	//prepara los submenús
	$('.menu-item-has-children').each(function(){
		var idf = 'ul-' + $(this).attr('id');
		$(this).children('a').first().addClass('dropdown-button').attr('data-activates',idf).attr('href','#!').append('<i class="mdi-navigation-arrow-drop-down right"></i>');
		$(this).children('.sub-menu').first().addClass('dropdown-content').attr('id',idf).insertBefore('#menu');
		$('.dropdown-button').dropdown();
	});
	
}