var pagenumber = 0,
	pagenumbers = jQuery('article section').length,
	fig = null;
f_left = 0,
	f_top = 0,
	f_width = 0,
	f_height = 0;

// jQuery('article').css('overflow', 'hidden').fadeOut(0);
jQuery('article section').css('position', 'absolute').fadeOut(0).eq(pagenumber).fadeIn(0);

var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) {
			uniqueId = 'identificador unico';
		}
		if (timers[uniqueId]) {
			clearTimeout(timers[uniqueId]);
		}
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();
jQuery(document).ready(function () {
	jQuery("article").delay(3000).fadeIn(1000);
	Resize_Page();


	jQuery('figure').not("#zoom").click(function () {
		figura = this;
		photo_in(figura);
	});

	jQuery('#images').click(function () {
		photo_out();
	});

	jQuery('a').not('.prev, .next').click(function (e) {
		e.preventDefault();
		pagina = jQuery(this).attr('href');
		loadUrl(pagina);
	})
	jQuery('.prev').click(function (e) {
		if (mobile()) {
			return
		}
		e.preventDefault();
		goto(-1);
	})
	jQuery('.next').click(function (e) {
		if (mobile()) {
			return
		}
		e.preventDefault();
		goto(1);
	})
});
jQuery(window).load(function () {
	jQuery('article').fadeIn(1000);
	jQuery('#images').css('zIndex', '10').css('opacity', 1).fadeOut(0);
});
jQuery(window).resize(function () {
	waitForFinalEvent(function () {
		Resize_Page();
	}, 100, 'some unique string');
});
jQuery(window).bind('orientationchange', function (event) {
	Resize_Page();
});
jQuery(document).keydown(function (event) {
	if (event.keyCode == 33 || event.keyCode == 37) {
		event.preventDefault();
		goto(-1);
	};
	if (event.keyCode == 34 || event.keyCode == 39) {
		event.preventDefault();
		goto(1);
	};
	if (event.keyCode == 40) {
		event.preventDefault();
		pagina = jQuery('.next').attr('href');
		loadUrl(pagina);
	};
	if (event.keyCode == 38) {
		event.preventDefault();
		pagina = jQuery('.prev').attr('href');
		loadUrl(pagina);
	};
});

function goto(inc) {
	if (mobile()) {
		return;
	}
	if (inc == 0) {
		return;
	}
	if (portrait() && inc > 0 && jQuery('article').scrollLeft() < jQuery(window).width()) {
		jQuery('article').animate({
			scrollLeft: jQuery(window).width()
		}, 600);
		return;
	}
	if (portrait() && inc < 0 && jQuery('article').scrollLeft() > 0) {
		jQuery('article').animate({
			scrollLeft: 0
		}, 600);
		return;
	}
	if (portrait() && jQuery('article').scrollLeft() > 0) {
		jQuery('article').animate({
			scrollLeft: 0
		}, 600);
	}
	jQuery('article section').eq(pagenumber).fadeOut(600);

	pagenumber = pagenumber + inc;
	if (pagenumber > (pagenumbers - 1)) {
		pagina = jQuery('.next').attr('href');
		loadUrl(pagina);
		return;
	};
	if (pagenumber < 0) {
		pagina = jQuery('.prev').attr('href');
		loadUrl(pagina);
		return;
	};
	jQuery('article section').eq(pagenumber).fadeIn(600);
}

function Resize_Page() {
	jQuery('article section').css('position', 'absolute').fadeOut(0).eq(pagenumber).fadeIn(0);
	//	jQuery('.square,.cuadrado').square();
	//  jQuery('body').css('fontsize', .85 * (jQuery(window).width() / 100 + .70 * jQuery(window).height() / 100) + 'px');
	if (mobile()) {
		jQuery('body').css({
			fontSize: '18px'
		});
		jQuery('article, section').css('position', 'relative').width('100%').fadeIn();
	}
}


function loadUrl(pagina) {
	if (pagina == '#' || pagina === undefined) {
		return;
	}
	jQuery('article').fadeIn(1200).fadeOut(1200, function () {
		document.location.href = pagina;
	});
}

function mobile() {
	return (jQuery(window).width() < 741);
}

function portrait() {
	return (jQuery(window).width() < jQuery(window).height());
}

jQuery.fn.square = function (t) {
	var e = "",
		t = jQuery.extend(e, t);
	return this.each(function () {
		var t = jQuery(this);
		obj_width = t.width, t.height(obj_width)
	})
};

function ratio(img) {
	var image = jQuery(img);
	var tmpImg = jQuery('<img/>').attr('src', image.attr('src'));
	ratio = tmpImg[0].width / tmpImg[0].height;
}

function photo_in(figura) {
	fig = jQuery(figura);
	f_left = fig.offset().left;
	f_top = fig.offset().top;
	f_width = fig.width();
	f_height = fig.height();
	ratio = (fig.find('img').get(0).naturalWidth / fig.find('img').get(0).naturalHeight) / (jQuery(window).width() / jQuery(window).height());
	margin = jQuery(window).width() / 30;
	final_width = jQuery(window).width();
	final_height = jQuery(window).height();
	if ((ratio) < 1) {
		final_width = final_width * ratio;
	} else {
		final_height = final_height / ratio;
	}
	final_width = final_width - (2 * margin);
	final_height = final_height - (2 * margin);
	margin_left = (jQuery(window).width() - final_width) / 2;
	margin_top = (jQuery(window).height() - final_height) / 2;
	jQuery("#zoom").css({
		"left": f_left,
		"top": f_top,
		"width": f_width,
		"height": f_height
	}).find('img').attr('src', fig.find('img').attr('src'));
	jQuery('#images').fadeIn(600);
	jQuery("#zoom").animate({
		"left": margin_left,
		"top": margin_top,
		"width": final_width,
		"height": final_height
	}, 600);
	jQuery('article section').eq(pagenumber).addClass('animated_blur');
}

function photo_out() {
	jQuery('#images').delay(300).fadeOut(600);
	fig.delay(300).fadeTo(300, 1);
	jQuery('article section').eq(pagenumber).removeClass('animated_blur');
}