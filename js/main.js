var pagenumber = 0,
    pagenumbers = jQuery('article section').length;
jQuery('article').fadeOut(0);
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
    jQuery('article').animate({
        opacity: 1
    }, 600);
    Resize_Page();

    jQuery('figure').click(function () {
        var transparente = jQuery('#zoom').attr('src');
        jQuery('#zoom').attr('src', jQuery(this).find('img').attr('src'));
        jQuery('#images').fadeIn(600);
    })
    jQuery('#images').click(function () {
        jQuery('#images').fadeOut(600).attr('src', transparente);

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
    jQuery('article').fadeIn(1000);
    jQuery('#images').css('zIndex', '10000').css('opacity', 1).fadeOut(1000);
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
    jQuery('.square,.cuadrado').square();
    jQuery('body').css('fontsize', .88 * jQuery(window).width() / 100 + .75 * jQuery(window).height() / 100);
    if (!portrait()) {
        jQuery('article').width('100%');
    }
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