jQuery('article').fadeOut(0);
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
    Resize_Page();

    jQuery('article').each(function () {
        jQuery('article').fadeIn(1000);
        jQuery('#images').css('zIndex', '1000').css('opacity', 1).fadeOut();

        Resize_Page();
    });
    jQuery('figure').click(function () {
        jQuery('#zoom').attr('src', jQuery(this).find('img').attr('src'));
        jQuery('#images').fadeIn(600);
    })
    jQuery('#images').click(function () {
        jQuery('#images').fadeOut(600);
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
    Resize_Page();
    jQuery('article').fadeIn(1000);
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
    if (event.keyCode == 32) {
        event.preventDefault();
        goto(0);
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
    factor = 1;
    if (portrait()) {
        factor = .5;
    }
    sectionwidth = jQuery('section').width() * factor;
    pagenumber = (inc * sectionwidth) + parseInt(jQuery('#content').scrollLeft() / sectionwidth + .5) * sectionwidth;
    jQuery('#content:not(:animated)').animate({
        scrollLeft: pagenumber
    }, 500);

    if (pagenumber > (jQuery('article').width() - sectionwidth + 1)) {
        pagina = jQuery('.next').attr('href');
        loadUrl(pagina);
    };
    if (pagenumber < 0) {
        pagina = jQuery('.prev').attr('href');
        loadUrl(pagina);
    };
}

function Resize_Page() {
    if (mobile()) {
        jQuery('body').css({
            fontSize: '18px'
        });
        jQuery('article, section').width('100%');
    } else {
        jQuery('.square,.cuadrado').square();
        /* font-size para los navegadores que aun no soportan vw y vh */
        jQuery('body').css('fontsize', .88 * jQuery(window).width() / 100 + .75 * jQuery(window).height() / 100);

        /* scroll horizontal */
        jQuery('article').width((jQuery('article section').length * 100) + '%');
        jQuery('section').width((100 / jQuery('article section').length) + '%');
        if (portrait()) {
            jQuery('article').width((jQuery('article section').length * 200) + '%');
            jQuery('section').width(jQuery('article').width() / jQuery('article section').length);
            jQuery('article section:last-child').width(jQuery('section').width() / 2);
            jQuery('article section:first-child').width(jQuery('article').width() / jQuery('article section').length);
            jQuery('article').width(jQuery('article').width() - jQuery('section').width() / 2);
        }
        goto(0);
    }
}


function loadUrl(pagina) {
    if (pagina == '#' || pagina === undefined) {
        return;
    }
    jQuery('article').fadeOut(700, function () {
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