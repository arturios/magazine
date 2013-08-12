/***********************************************************/
var ie = (navigator.appName == 'Microsoft Internet Explorer'),
	fsize = 9.5,
	Duration = 250;

var Tools = {
  createCookie: function(name, value,hours) {
    if (hours) {
      var date = new Date();
      date.setTime(date.getTime()+(hours*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }else var expires = "";
      document.cookie = name+"="+value+expires+"; path=/";
  },

  readCookie: function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  },

  eraseCookie: function(name) {
    Tools.createCookie(name,"",-1);
  }
};

pagina = Tools.readCookie("last_url");
if (pagina == null) {
	pagina = window.location.href;
	Tools.createCookie("last_url", pagina, 2);
	} else {
//	if (!ie || !desktop()) {loadUrl(pagina);}	
	}


$(document).ready(function () {
	$('article').css({
		opacity: 0
	});

	$('#despliega').click(function () {
		desplegar();
	});

	$('.repliega').click(function () {
		replegar();
	});
	
	preparado();

});

$(document).keydown(function (event) {
	if (desktop()) {
		if (event.keyCode == 33) {
			event.preventDefault();
			gotopage(-1);
		};
		if (event.keyCode == 34) {
			event.preventDefault();
			gotopage(1);
		};
		if (event.keyCode == 37) {
			event.preventDefault();
			gotopage(-1);
		};
		if (event.keyCode == 39) {
			event.preventDefault();
			gotopage(1);
		};
		if (event.keyCode == 40) {
			event.preventDefault();
			desplegar();
		};
		if (event.keyCode == 38) {
			event.preventDefault();
			replegar();
		};
	}
});

$(window).load(function () {
	$('article').animate({
		opacity: 1
	}, 500);
	Resize_Page();
});
$(window).resize(function () {
	var timer;
	$(window).bind('resize', function () {
		timer && clearTimeout(timer);
		timer = setTimeout(onResize, 100);
	});
	Resize_Page();
});


$(window).bind('orientationchange', function (event) {
	Resize_Page();
});


function preparado() {
	$('img.horizontal,img.vertical,img.full').ConvertToBackground();
	$main = $('article');
	$pages = $main.children('section');
	$iterate = $('#iterateEffects');
	animcursor = 1;
	pagesCount = $pages.length;
	current = 0;
	isAnimating = false;
	endCurrPage = false;
	endgotopage = false;
	animEndEventNames = {
		'WebkitAnimation': 'webkitAnimationEnd',
		'OAnimation': 'oAnimationEnd',
		'msAnimation': 'MSAnimationEnd',
		'animation': 'animationend'
	};
	// animation end event name
	animEndEventName = animEndEventNames[Modernizr.prefixed('animation')];
	// support css animations
	support = Modernizr.cssanimations;
	backimg = Modernizr.multiplebgs;

	Hyphenator.run();
	if (desktop()) {
		$pages = $main.children('section'),
		current = 0,
		$pages.each(function () {
			var $page = $(this);
			$page.data('originalClassList', $page.attr('class'));
		});

		$pages.eq(current).addClass('section-current');

		fsize = $('#fontsize').html();
		if (fsize == undefined) {
			fsize = 9;
		}

		$('a.loop,.sidebar a, nav a:not(.prev, .next)').click(function (e) {
			e.preventDefault();
			pagina = $(this).attr('href');
			loadUrl(pagina);
		})

		$('.prev').click(function (e) {
			e.preventDefault();
			gotopage(-1);
		})
		$('.next').click(function (e) {
			e.preventDefault();
			gotopage(1);
		})

		$("article").swipe({
			swipe: function (event, direction, distance, duration, fingerCount) {
				if (direction == 'left') {
					gotopage(1);
				}
				if (direction == 'right') {
					gotopage(-1);
				}
				if (direction == 'down') {
					desplegar();
				}
			},
			//Default is 75px, set to 0 for demo so any distance triggers swipe
			threshold: 0
		});

		$("#mainsidebar").swipe({
			swipe: function (event, direction, distance, duration, fingerCount) {
				if (direction == 'up') {
					replegar();
				}
			},
			//Default is 75px, set to 0 for demo so any distance triggers swipe
			threshold: 0
		});
	}
	Resize_page();
	Resize_page();
	Resize_page();
}



function Resize_Page() {
	var Def_width = 640; /* ancho estandar de las im�genes */
	var Def_height = 480; /* alto estandar de las im�genes */

	if (desktop()) {
//		$('img.horizontal,img.vertical,img.full').resizeToParent();
		ratio = $('section').width() / $('section').height();
		ajuste = 1.0; //esto sirve para ajustar las tipografías, si se cambian, sin tener que retocar los artículos
		landscape = 1;
		if (ratio > 1.5) {
			landscape = .88;
		}
		if (ratio < 1) {
			landscape = 1.05;
		}

		if (ratio < .7) {
			landscape = .97;
		}

		$('body').css({
			fontSize: (landscape * ajuste * (fsize / Math.sqrt(Def_width * Def_height)) * Math.sqrt($('section').width() * $('section').height())) + 'px'
		});
		$('#wrapper').css('overflow', 'hidden');
		$('article, section').css('overflow', 'hidden');
/* */	$('#wrapper, #mainsidebar').css({
			'height': $('body').height() - ($('nav').height() + 10)
		});/* */
		swidth = '100';
		sheight = 100 * $('section').width() / $('section').height();
		if (sheight > 1) {
			sheight = '100%';
			sheight = 100 * $('section').height() / $('section').width();
		}
		swidth = swidth + '%';
		sheight = sheight + '%';
		$('.square').css({
			width: swidth,
			height: sheight
		})
	} else {
		$('body').css({
			fontSize: (fsize / 640 * 3 * $('section').width()) + 'px'});
		$('#wrapper, article, section').css({
			width: '100%'
			});
		$('body').css('overflowY','auto');
		$('.horizontal, .vertical, .full').css({
			width: '100%',
			height: 'auto',
			top: 0,
			left: 0,
			display: 'block'
		});
	}
}

/* Read: http://tympanus.net/codrops/2013/05/07/a-collection-of-page-transitions/ */
function gotopage(inc) {

	if (isAnimating) {
		return false;
	}

	isAnimating = true;

	var $currPage = $pages.eq(current),
		outClass = '',
		inClass = '';

	if (inc == 1) {
		outClass = 'section-rotateFoldLeft';
		inClass = 'section-moveFromRightFade';
		if (current < pagesCount - 1) {
			++current;
		} else {
			pagina = $('.next').attr('href');
			loadUrl(pagina);
		}

	} else {
		outClass = 'section-rotateFoldRight';
		inClass = 'section-moveFromLeftFade';
		if (current > 0) {
			--current;
		} else {
			pagina = $('.prev').attr('href');
			loadUrl(pagina);
		}
	}
	var $gotopage = $pages.eq(current).addClass('section-current');

	$currPage.addClass(outClass).on(animEndEventName, function () {
		$currPage.off(animEndEventName);
		endCurrPage = true;
		if (endgotopage) {
			onEndAnimation($currPage, $gotopage);
		}
	});

	$gotopage.addClass(inClass).on(animEndEventName, function () {
		$gotopage.off(animEndEventName);
		endgotopage = true;
		if (endCurrPage) {
			onEndAnimation($currPage, $gotopage);
		}
	});

	if (!support) {
		onEndAnimation($currPage, $gotopage);
	}
	Resize_Page();
}

function onEndAnimation($outpage, $inpage) {
	endCurrPage = false;
	endgotopage = false;
	resetPage($outpage, $inpage);
	isAnimating = false;
}

function resetPage($outpage, $inpage) {
	$outpage.attr('class', $outpage.data('originalClassList'));
	$inpage.attr('class', $inpage.data('originalClassList') + ' section-current');
}

/* end of http://tympanus.net/codrops/2013/05/07/a-collection-of-page-transitions/ */

function desplegar() {
	$('#mainsidebar').animate({
		top: '0'
	}, Duration);
	$('#despliega').animate({
		opacity: 0,
		top: '100%'
	}, Duration);
}

function replegar() {
	$('#mainsidebar').animate({
		top: '-100%'
	}, Duration);
	$('#despliega').animate({
		opacity: 1,
		top: 0
	}, Duration);
}

function desktop() {
//	if ($('#wrapper').css('background-color') == 'rgb(0, 0, 0)') {
	if ($(window).width() < 721) {
		return false;
	} else {
		return true;
	}

}

function loadUrl(pagina) {
	if (pagina == '#') {
		return;
	}
	if (pagina == undefined) {
		return;
	}

	if (ie) {
		if (pagina == (window.location.href.substr(window.location.href.lastIndexOf('/') + 1))) {
			return;
		}
		$('article').animate({
			opacity: 0
		}, Duration * 2, function () {
			document.location.href = pagina;
		});
	} else {
		replegar();
		history.pushState({
			path: pagina
		}, pagina, pagina);
		
		Tools.createCookie('last_url', pagina, 2);

		$('nav').load(pagina + ' nav > *');
		$('#social').load(pagina + ' div#social > *');

		$('article').animate({
			opacity: 0
		}, Duration * 2, function () {
			$('article').load(pagina + ' article > *', function (response, status, xhr) {
				if (status == 'error') {
					newUrl(pagina);
				}
				if (status == 'success') {
					if ($('#pagination .text-black').html() == undefined) {
						document.title = $('header h1').html();
					} else {
						document.title = $('#pagination .text-black').html();
					};
					pagesCount = $('article section').length;
					current = 0;
					$('article').animate({
						opacity: 1
					}, Duration * 2, function () {
						replegar();
					});
					preparado();
					

				}
			});
		});
	}
}


function newUrl(pagina) {
	if (pagina == '#') {
		return;
	}
	if (pagina == undefined) {
		return;
	}
	if (pagina == (window.location.href.substr(window.location.href.lastIndexOf('/') + 1))) {
		return;
	}
	$('article').animate({
		opacity: 0
	}, duration * 2, function () {
		document.location.href = pagina;
	});
}

/*
 * Plugin Name: Resize Image to Parent Container
 *
 * Author: Christian Varga
 * Author URI: http://christianvarga.com
 *
 * (con pequeñas variaciones para elegir el punto de anclaje)
 */
jQuery.fn.resizeToParent = function (options) {
	var defaults = {
		parent: "figure"
	};
	var options = jQuery.extend(defaults, options);
	return this.each(function () {
		if (!support) {return}

		var o = options;
		var obj = jQuery(this);
		obj.load(function () {
			var parentWidth = obj.parents(o.parent).width();
			var parentHeight = obj.parents(o.parent).height();
			var imageWidth = obj.width();
			var imageHeight = obj.height();
			var diff = imageWidth / parentWidth;
			if ((imageHeight / diff) < parentHeight) {
				obj.css({
					width: "auto",
					height: parentHeight
				});
				imageWidth = imageWidth / (imageHeight / parentHeight);
				imageHeight = parentHeight
			} else {
				obj.css({
					height: "auto",
					width: parentWidth
				});
				imageWidth = parentWidth;
				imageHeight = imageHeight / diff
			}
			var leftOffset = (imageWidth - parentWidth) / -2;
			var topOffset = (imageHeight - parentHeight) / -2;
			obj.css({
				left: leftOffset,
				top: topOffset
			});
			/* situar el punto de anclaje, hay que darle una vuelta a esto, no me gusta */
			if (obj.hasClass("top-left")) {
				obj.css({
					top: 0,
					left: 0
				})
			}
			if (obj.hasClass("top-mid")) {
				obj.css({
					top: 0,
					left: leftOffset
				})
			}
			if (obj.hasClass("top-right")) {
				obj.css({
					top: 0,
					right: 0
				})
			}
			if (obj.hasClass("mid-left")) {
				obj.css({
					top: topOffset,
					left: 0
				})
			}
			if (obj.hasClass("mid-mid")) {
				obj.css({
					top: topOffset,
					left: leftOffset
				})
			}
			if (obj.hasClass("mid-right")) {
				obj.css({
					top: topOffset,
					right: 0
				})
			}
			if (obj.hasClass("bottom-left")) {
				obj.css({
					bottom: 0,
					left: 0
				})
			}
			if (obj.hasClass("bottom-mid")) {
				obj.css({
					bottom: 0,
					left: leftOffset
				})
			}
			if (obj.hasClass("bottom-right")) {
				obj.css({
					bottom: 0,
					right: 0
				})
			}
			/* fin de la eleccion de punto de anclaje */
		});
		if (this.complete) {
			obj.trigger("load")
		}
	})
};




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
			
						if (obj.hasClass("top-left")) {
				obj.parents(o.parent).css('background-position','left top');
			}
			if (obj.hasClass("top-mid")) {
				obj.parents(o.parent).css('background-position','center top');
				}
			if (obj.hasClass("top-right")) {
				obj.parents(o.parent).css('background-position','right top');
				}
			if (obj.hasClass("mid-left")) {
				obj.parents(o.parent).css('background-position','left center');
				}
			if (obj.hasClass("mid-mid")) {
				obj.parents(o.parent).css('background-position','center center');
				}
			if (obj.hasClass("mid-right")) {
				obj.parents(o.parent).css('background-position','right center');
				}
			if (obj.hasClass("bottom-left")) {
				obj.parents(o.parent).css('background-position','left bottom');
				}
			if (obj.hasClass("bottom-mid")) {
				obj.parents(o.parent).css('background-position','center bottom');
				}
			if (obj.hasClass("bottom-right")) {
				obj.parents(o.parent).css('background-position','right bottom');
				}

		});
		if (this.complete) {
			obj.trigger("load")
		}
	})
};
