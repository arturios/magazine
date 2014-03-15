var support = Modernizr.multiplebgs;

var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) {
			uniqueId = "Don't call this twice without a uniqueId";
		}
		if (timers[uniqueId]) {
			clearTimeout(timers[uniqueId]);
		}
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

$(document).ready(function () {
	inicio();
});


$(window).load(function () {
	Resize_Page();
});

$(window).resize(function () {
	waitForFinalEvent(function () {
		Resize_Page();
	}, 1000, "some unique string");
});

$(window).bind('orientationchange', function (event) {
	Resize_Page();
});

$(document).keydown(function (event) {
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
		$('section').addClass('section-moveToLeft');
		loadUrl(pagina);
	};
	if (event.keyCode == 37) {
		event.preventDefault();
		pagina = $('.prev').attr('href');
		$('section').addClass('section-moveToRight');
		loadUrl(pagina);
	};
});


/* */

function inicio() {
	$('section').scrollTop(0);
	$('section').removeClass('section-moveToRight section-moveToLeft');
	if (support) {
		$('.full').ConvertToBackground();
	}
	else {
		$('.full').resizeToParent();
	}
	$('a.loop,.sidebar a, .top_menu a').click(function (e) {
		e.preventDefault();
		pagina = $(this).attr('href');
		if ($(this).hasClass('prev')) {
			$('section').addClass('section-moveToRight');
		}
		if ($(this).hasClass('next')) {
			$('section').addClass('section-moveToLeft');
		}
		loadUrl(pagina);
	})

	$('section').scrollStopped(function () {
		if ((document.documentElement.clientWidth / window.innerWidth) == 1) {goto(0);}
	});
	fsize = $('#fontsize').html();
	if (fsize == undefined) {
		fsize = 9;
	}
	$("section").swipe({
/* */  allowPageScroll:"auto", /* */
		swipe: function (event, direction, distance, duration, fingerCount) {
    		if ((document.documentElement.clientWidth / window.innerWidth) !== 1) {return;}
			if (direction == 'up') {
				goto(1);
			}
			if (direction == 'down') {
				goto(-1);
			}
			if (direction == 'left') {
				pagina = $('.next').attr('href');
				$('section').addClass('section-moveToLeft');
				loadUrl(pagina);
			}
			if (direction == 'right') {
				pagina = $('.prev').attr('href');
				$('section').addClass('section-moveToRight');
				loadUrl(pagina);
			}
		},
		//Default is 75px, set to 0 for demo so any distance triggers swipe
		threshold: 75
	});
}

function goto(inc) {
	pagenumber = (inc * $('article').height()) + parseInt($('section').scrollTop() / $('article').height() + .5) * $('article').height();
	Duration = 500 * (Math.abs(pagenumber - $('section').scrollTop()) / $('article').height());
	if (Duration !== 0) {
		$('section').scrollTop($('section').scrollTop() + 1);
		$('section').scrollTop($('section').scrollTop() - 1);
		$('section:not(:animated)').animate({
			scrollTop: pagenumber
		}, Duration);
	}
}

function Resize_Page() {
	if (!support) {
		$('.full').resizeToParent();
	};
	var Def_width = 640;
	var Def_height = 480;
	var ajuste = 1;
	inicial = Math.sqrt((Def_width * Def_height));
	final = Math.sqrt(($('article').width() * $('article').height()));
	ratio = $('article').width() / $('article').height();
	font_size = ajuste * (fsize / inicial) * final * (1 + (1 - ratio) / 16);
	$('body').css({
		fontSize: font_size + 'px'
	});

	swidth = '100%';
	sheight = (100 * ratio) + '%';
	if (ratio > 1) {
		sheight = '100%';
		swidth = (100 / ratio) + '%';
	}
	$('.square').css({
		width: swidth,
		height: sheight
	})

	if ($('body').width() < 721) {
		$('body').css({
			fontSize: '3vw'
		});
		$('body, section, article').css({
			width: '100%'
		});
		$('.horizontal, .vertical, .full').css({
			width: '100%',
			height: 'auto',
			top: 0,
			left: 0,
			display: 'block'
		});
		$('#cabecera .full').resizeToParent();
	}
	goto(0);
}
/*
 * Plugin Name: Resize Image to Parent Container
 *
 * Author: Christian Varga
 * Author URI: http://christianvarga.com
 * Plugin Source: https://github.com/levymetal/jquery-resize-image-to-parent/
 *
 */
jQuery.fn.resizeToParent = function (options) {
	var defaults = {
		parent: "figure"
	};
	var options = jQuery.extend(defaults, options);
	return this.each(function () {
		var o = options;
		var obj = jQuery(this);
		obj.load(function () {
			var parentWidth = obj.parents(o.parent).width();
			var parentHeight = obj.parents(o.parent).height();
			var imageWidth = obj.width();
			var imageHeight = obj.height();
			var diff = imageWidth / parentWidth;
			if ((imageHeight / diff) < parentHeight) {
				obj.fadeIn;
				obj.css({
					width: "auto",
					height: parentHeight
				});
				imageWidth = imageWidth / (imageHeight / parentHeight);
				imageHeight = parentHeight
			}
			else {
				obj.css({
					height: "auto",
					width: parentWidth
				});
				imageWidth = parentWidth;
				imageHeight = imageHeight / diff
			}
			var leftOffset = (parentWidth - imageWidth) / 2;
			var topOffset = (parentHeight - imageHeight) / 2;
			if (obj.hasClass("left")) {
				leftOffset = 0;
			}
			if (obj.hasClass("right")) {
				leftOffset = (parentWidth - imageWidth);
			}
			if (obj.hasClass("top")) {
				topOffset = 0;
			}
			if (obj.hasClass("bottom")) {
				topOffset = (parentHeight - imageHeight);
			}

			obj.css({
				left: leftOffset,
				top: topOffset
			})
		});
		if (this.complete) {
			obj.trigger("load")
		}
	})
}

jQuery.fn.ConvertToBackground = function (options) {
	var defaults = {
		parent: "figure"
	};
	var options = jQuery.extend(defaults, options);
	return this.each(function () {
		var o = options;
		var obj = jQuery(this);
		obj.load(function () {
			var imageSrc = obj.attr('src');
			imageSrc = 'url("' + imageSrc + '")';
			obj.fadeOut();
			obj.parents(o.parent).css("background-image", imageSrc);

			if (obj.hasClass("top")) {
				obj.parents(o.parent).css('background-position-y', 'top');
			}
			if (obj.hasClass("right")) {
				obj.parents(o.parent).css('background-position-x', 'right');
			}
			if (obj.hasClass("left")) {
				obj.parents(o.parent).css('background-position-x', 'left');
			}
			if (obj.hasClass("bottom")) {
				obj.parents(o.parent).css('background-position-y', 'bottom');
			}

		});
		if (this.complete) {
			obj.trigger("load")
		}
	})
};

/*
 * Plugin Name: event scroll stop
 *
 * Author: Jason Sebring
 *
 * URI: http://stackoverflow.com/questions/14035083/jquery-bind-event-on-scroll-stops
 */
$.fn.scrollStopped = function (callback) {
	$(this).scroll(function () {
		var self = this,
			$this = $(self);
		if ($this.data('scrollTimeout')) {
			clearTimeout($this.data('scrollTimeout'));
		}
		$this.data('scrollTimeout', setTimeout(callback, 750, self));
	});
};


function loadUrl(pagina) {
	if (pagina == '#') {
		return;
	}
	if (pagina == undefined) {
		return;
	}
	if (!support) {
		document.location.href = pagina;
        return;
	};


    history.pushState({
		path: pagina
	}, pagina, pagina);
	$('nav').load(pagina + ' nav > *');
	$('section').scrollTop(0);
    Document.title = "";
	$('section').fadeOut(500, function () {
		$('section').load(pagina + ' section > *', function (response, status, xhr) {
			if (status == 'success') {
				$('section').fadeIn(500, function () {
					inicio();
				});
			}
		});
	});
}