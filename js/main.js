var pagenumber = 0,
	pagenumbers = jQuery('main section').length;

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

	jQuery('main section').addClass('sect').eq(pagenumber).addClass('current');

	jQuery('figure, picture').not('#zoom').click(function () {
		var fig = jQuery(this);
		f_left = jQuery(this).offset().left;
		f_top = jQuery(this).offset().top;
		f_width = jQuery(this).width();
		f_height = jQuery(this).height();
		imagen = jQuery(this).find('img');
		jQuery('#zoom').find('img').attr('src', imagen.attr('src'));
		jQuery('#zoom').offset({
			top: f_top,
			left: f_left
		});		
		jQuery('#zoom').width(f_width).height(f_height);
		natural_ratio = imagen.get(0).naturalWidth / imagen.get(0).naturalHeight;
		margin = jQuery('#overlayer').width() * .05;
		final_width = jQuery('#overlayer').width() - (margin * 2);
		final_height = jQuery('#overlayer').height() - (margin * 2);
		window_ratio = final_width / final_height;
		ratio = natural_ratio / window_ratio;
		if ((ratio) < 1) {
			final_width = final_width * ratio;
		} else {
			final_height = final_height / ratio;
		}
		final_left = (jQuery('#overlayer').width() - final_width) / 2;
		final_top = (jQuery('#overlayer').height() - final_height) / 2;
		jQuery('#overlayer').addClass('set');
		jQuery('#zoom').width(final_width).height(final_height).offset({
			top: final_top,
			left: final_left
		});

		jQuery('#overlayer').click(function () {
			f_left = fig.offset().left;
			f_top = fig.offset().top;
			f_width = fig.width();
			f_height = fig.height();
			jQuery('#zoom').width(f_width).height(f_height).offset({
				top: f_top,
				left: f_left
			});
			jQuery('#overlayer').delay(600).removeClass('set');
		})
	})
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
	// load window
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
	pagenumbers = jQuery('main section').length;
	if (mobile()) {
		return;
	}
	if (inc == 0) {
		return;
	}
	if (portrait() && inc > 0 && jQuery('main').scrollLeft() < jQuery(window).width()) {
		jQuery('main').animate({
			scrollLeft: jQuery(window).width()
		}, 600);
		return;
	}
	if (portrait() && inc < 0 && jQuery('main').scrollLeft() > 0) {
		jQuery('main').animate({
			scrollLeft: 0
		}, 600);
		return;
	}
	if (portrait() && jQuery('main').scrollLeft() > 0) {
		jQuery('main').animate({
			scrollLeft: 0
		}, 600);
	}
	jQuery('main section').eq(pagenumber).removeClass('current');

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
	jQuery('main section').eq(pagenumber).addClass('current');
}

function Resize_Page() {}


function loadUrl(pagina) {
	if (pagina == '#' || pagina === undefined) {
		return;
	}
	jQuery('body').fadeIn(1200).fadeOut(1200, function () {
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
	var f_left = fig.offset().left,
		f_top = fig.offset().top,
		f_width = fig.width(),
		f_height = fig.height();
	ratio = (imagen.get(0).naturalWidth / imagen.get(0).naturalHeight) / (jQuery(window).width() / jQuery(window).height());
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
	}).find('img').attr('src', imagen.attr('src'));
	jQuery('#overlayer').addClass('activate');
	jQuery("#zoom").animate({
		"left": margin_left,
		"top": margin_top,
		"width": final_width,
		"height": final_height,
		"opacity": 1
	}, 600);
}

function photo_out() {
	jQuery('#overlayer').delay(600).removeClass('activate');
	jQuery("#zoom").animate({
		"left": f_left,
		"top": f_top,
		"width": f_width,
		"height": f_height,
		"opacity": 0
	}, 300);
}