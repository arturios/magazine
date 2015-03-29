$('article').fadeOut(0);
var waitForFinalEvent = (function() {
	var timers = {};
	return function(callback, ms, uniqueId) {
		if (!uniqueId) {
			uniqueId = 'identificador unico';
		}
		if (timers[uniqueId]) {
			clearTimeout(timers[uniqueId]);
		}
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();
$(document).ready(function() {
	$('article').each(function() {
		$('article').fadeIn(1000);
		materializate();
		Resize_Page();
	});

	$('a').not('.prev, .next').click(function(e) {
		e.preventDefault();
		pagina = $(this).attr('href');
		loadUrl(pagina);
	})

	$('.prev').click(function(e) {
		if (mobile()) {
			return
		}
		e.preventDefault();
		goto(-1);
	})
	$('.next').click(function(e) {
			if (mobile()) {
				return
			}
			e.preventDefault();
			goto(1);
		})
		/* * /
			$('#content').scrollStopped(function() {
				if (mobile()){return}
					goto(0);
			}); 
		/* */
	$('#content').mousewheel(function(event, delta) {
		if (mobile()) {
			return
		}
		this.scrollLeft -= (delta * 30);
		event.preventDefault();
	});
	$('.overflow-y').mousewheel(function(event, delta) {
		if (mobile()) {
			return
		}
		this.scrollTop -= (delta * 30);
		event.preventDefault();
	});
});
$(window).load(function() {
	Resize_Page();
	$('article').fadeIn(1000);
});
$(window).resize(function() {
	waitForFinalEvent(function() {
		Resize_Page();
	}, 100, 'some unique string');
});
$(window).bind('orientationchange', function(event) {
	Resize_Page();
});
$(document).keydown(function(event) {
	if (event.keyCode == 33 || event.keyCode == 37) {
		event.preventDefault();
		goto(-1);
	};
	if (event.keyCode == 34 || event.keyCode == 39) {
		event.preventDefault();
		goto(1);
	};
	if (event.keyCode == 32) {
		event.preventDefault();
		goto(0);
	};
	if (event.keyCode == 40) {
		event.preventDefault();
		pagina = $('.next').attr('href');
		loadUrl(pagina);
	};
	if (event.keyCode == 38) {
		event.preventDefault();
		pagina = $('.prev').attr('href');
		loadUrl(pagina);
	};
});

function goto(inc) {
	if (mobile()) {
		return;
	}
	factor = 1;
	if (portrait()) {
		factor = .5;
	}
	sectionwidth = $('section').width() * factor;
	pagenumber = (inc * sectionwidth) + parseInt($('#content').scrollLeft() / sectionwidth + .5) * sectionwidth;
	$('#content:not(:animated)').animate({
		scrollLeft: pagenumber
	}, 500);

	if (pagenumber > ($('article').width() - sectionwidth + 1)) {
		pagina = $('.next').attr('href');
		loadUrl(pagina);
	};
	if (pagenumber < 0) {
		pagina = $('.prev').attr('href');
		loadUrl(pagina);
	};
}

function Resize_Page() {
	if (mobile()) {
		$('body').css({
			fontSize: '18px'
		});
		$('article, section').width('100%');
		$('article a').addClass('light-blue waves-effect waves-light btn col s12');
	}
	else {
		$('article a').removeClass('light-blue waves-effect waves-light btn col s12');
		$('.full,.vertical,.horizontal').ConvertToBackground();
		$('.square,.cuadrado').square();

        /* scroll horizontal */
		$('article').width(($('article section').length * 100) + '%');
		$('section').width((100 / $('article section').length) + '%');
		$('#coments').removeClass('left-0').addClass('left-6');
		if (portrait()) {
			$('article').width(($('article section').length * 200) + '%');
			$('#coments').removeClass('left-6').addClass('left-0');
		}
		/* /scroll horizontal */

		/* resize fonts */
		fsize = $('#fontsize').html();
		if (fsize == undefined) {
			fsize = 9;
		}
		var ajuste = .85;
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


function loadUrl(pagina) {
	if (pagina == '#' || pagina === undefined) {
		return;
	}
	$('article').fadeOut(500, function() {
		document.location.href = pagina;
	});
}

function mobile() {
	return ($(window).width() < 741);
}

function portrait() {
	return ($(window).width() < $(window).height());
}

function materializate() {
	// añade efecto a los enlaces
	$('aside a, .page-numbers').addClass('waves-effect waves-light');
	// prepara los enlaces de los laterales
	$('aside ul li a').addClass('light-blue waves-light btn col s12');
	// menu móvil
	$('.button-collapse').sideNav();
	//prepara los submenús
	$('.menu-item-has-children').each(function() {
		var idf = 'ul-' + $(this).attr('id');
		$(this).children('a').last().addClass('dropdown-button').attr('data-activates', idf).attr('href', '#').append('<i class="mdi-navigation-arrow-drop-down right"></i>');
		$(this).children('.sub-menu').last().addClass('dropdown-content').attr('id', idf).insertBefore('#desktop');
		$('.dropdown-button').dropdown();
	});
}