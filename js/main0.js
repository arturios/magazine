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

var main = jQuery('article'),
    pages = main.children('section'),
    animcursor = 1,
    pagesCount = pages.length,
    current = 0,
    isAnimating = false,
    endCurrPage = false,
    endgoto = false,
    animEndEventNames = {
        'WebkitAnimation': 'webkitAnimationEnd',
        'OAnimation': 'oAnimationEnd',
        'msAnimation': 'MSAnimationEnd',
        'animation': 'animationend'
    },
    // animation end event name
    animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
    // support css animations
    support = Modernizr.cssanimations;

jQuery(document).ready(function () {
	jQuery('html, body, #content, article, section').css('position','absolute');
	jQuery('#content').addClass('pt-perspective');
	
    pages.each(function () {
        var page = jQuery(this);
        pages.addClass('pt-page');
        page.data('originalClassList', page.attr('class'));
    });

    pages.eq(current).addClass('pt-page-current');

    jQuery('article').each(function () {
        jQuery('article').fadeIn(1000);
        Resize_Page();
    });

    jQuery('figure').click(function () {
        jQuery(this).parents('section').focus();
        jQuery(this).toggleClass("fig");
    })
    jQuery('figure').click(function () {
        jQuery(this).parents('section').focus();
        jQuery(this).toggleClass("fig");
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
})

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

function Resize_Page() {
    if (mobile()) {
        jQuery('body').css({
            fontSize: '18px'
        });
        jQuery('article, section').width('100%');
    } else {
        jQuery('.square,.cuadrado').square();
        /* font-size para los navegadores que aun no soportan vw y vh */
        jQuery('body').css('fontsize', .88 * jQuery('body').width() / 100 + .8 * jQuery('body').height() / 100);
    }
}

function loadUrl(pagina) {

    if (pagina == '#' || pagina === undefined) {
        return false;
    }

    jQuery('article').fadeOut(500, function () {
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

function goto(options) {

    if (isAnimating) {
        return false;
    }

    isAnimating = true;

    var currPage = pages.eq(current);

    if (options == 1) {
        ++current;
        outClass = 'pt-page-rotateRoomLeftOut pt-page-ontop';
        inClass = 'pt-page-rotateRoomLeftIn';
    }
    if (options == -1) {
        --current;
        outClass = 'pt-page-rotateRoomRightOut pt-page-ontop';
        inClass = 'pt-page-rotateRoomRightIn';
    }

    if (current > pagesCount - 1) {
        current = 0;
        pagina = jQuery('.next').attr('href');
        loadUrl(pagina);
    }

    if (current < 0) {
        current = pagesCount - 1;
        pagina = jQuery('.prev').attr('href');
        loadUrl(pagina);
    }

    pages.eq(current).removeClass('pt-page-current')
    var goto = pages.eq(current).addClass('pt-page-current');



    currPage.addClass(outClass).on(animEndEventName, function () {
        currPage.off(animEndEventName);
        endCurrPage = true;
        if (endgoto) {
            onEndAnimation(currPage, goto);
        }
    });

    goto.addClass(inClass).on(animEndEventName, function () {
        goto.off(animEndEventName);
        endgoto = true;
        if (endCurrPage) {
            onEndAnimation(currPage, goto);
        }
    });

    if (!support) {
        onEndAnimation(currPage, goto);
    }
}


function onEndAnimation(outpage, inpage) {
    endCurrPage = false;
    endgoto = false;
    resetPage(outpage, inpage);
    isAnimating = false;
}

function resetPage(outpage, inpage) {
    outpage.attr('class', outpage.data('originalClassList'));
    inpage.attr('class', inpage.data('originalClassList') + ' pt-page-current');
}