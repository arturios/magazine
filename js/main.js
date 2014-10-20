var support = Modernizr.multiplebgs;

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
	inicio();
});

$(window).load(function() {
	Resize_Page();
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

function inicio() {
	$('article').scrollTop(0);
	$('.full,.vertical,.horizontal').ConvertToBackground();
	Resize_Page();
	$('a').click(function(e) {
		e.preventDefault();
		pagina = $(this).attr('href');
		loadUrl(pagina);
	})

	$('article').scrollStopped(function() {
		if ((document.documentElement.clientWidth / window.innerWidth) == 1) {
			goto(0);
		}
	});
}

function goto(inc) {
	if ($('body').width() < 721) {
		return;
	}
	pagenumber = (inc * $('section').height()) + parseInt($('article').scrollTop() / $('section').height() + .5) * $('section').height();
	Duration = 500 * (Math.abs(pagenumber - $('article').scrollTop()) / $('section').height());
	if (Duration !== 0) {
		$('article').scrollTop($('article').scrollTop() + 1);
		$('article').scrollTop($('article').scrollTop() - 1);
		$('article:not(:animated)').animate({
			scrollTop: pagenumber
		}, Duration);
	}
}

function Resize_fonts() {
	fsize = $('#fontsize').html();
	if (fsize == undefined) {
		fsize = 9;
	}
	var ajuste = .9;
	initial_value = 554.2562584220408; //Math.sqrt((640 * 480));
	end_value = Math.sqrt(($('article').width() * $('section').height()));
	ratio = $('article').width() / $('article').height();
	if (ratio < 1) {
		ajuste = .85;
	}
	font_size = ajuste * (fsize / initial_value) * end_value * (1 + (1 - ratio) / 16);
	$('body').css({
		fontSize: font_size + 'px'
	});
}

function Resize_Page() {
    $('.full, .vertical, .horizontal').ConvertToBackground();
    Resize_fonts();
    if ($('body').width() < 721) {
        $('body').css({
            fontSize: '18px'
        });
        $('body, article, section, .horizontal, .vertical, .full, .square, .vrt, .hrt').css({
            width: '100%',
            height: 'auto',
            top: 0,
            left: 0,
            display: 'block'
        });
    }
    goto(0);
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
    $('article').addClass('zoomOut');
    document.location.href = pagina;
}
