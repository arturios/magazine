/*
 * Plugin Name: square
 *
 * Author: Arturo Rios
 */

jQuery.fn.square=function(t){var e="",t=jQuery.extend(e,t);return this.each(function(){var t=jQuery(this);obj_width=t.width,t.height(obj_width)})};
/*
 * Plugin Name: convert image to parent container's background
 *
 * Author: Arturo Rios
 */
jQuery.fn.ConvertToBackground=function(t){var a={parent:"figure"},t=jQuery.extend(a,t);return this.each(function(){var a=(jQuery(this).parent(),t),r=jQuery(this);r.css({width:"100%",height:"auto","margin-left":0,"margin-top":0}),r.load(function(){var t=r.parents(a.parent).width(),e=r.parents(a.parent).height(),s=r.width(),n=r.height(),i=s/t;e>n/i?(r.css({width:"auto",height:e}),s/=n/e,n=e):(r.css({height:"auto",width:t}),s=t,n/=i);var o=(s-t)/-2,p=(n-e)/-2,h=r.attr("src");h='url("'+h+'")',r.fadeOut(),r.parents(a.parent).css("background-image",h),r.parents(a.parent).attr("title",r.attr("title")),null==r.attr("title")&&r.parents(a.parent).attr("title",r.attr("alt")),r.hasClass("left")&&(o=0,r.parents(a.parent).css("background-position-x","left")),r.hasClass("right")&&(o=t-s,r.parents(a.parent).css("background-position-x","right")),r.hasClass("top")&&(p=0,r.parents(a.parent).css("background-position-y","top")),r.hasClass("bottom")&&(p=e-n,r.parents(a.parent).css("background-position-y","bottom")),r.css({"margin-left":o,"margin-top":p})}),this.complete&&r.trigger("load")})};/*
 
 * Plugin Name: event scroll stop
 *
 * Author: Jason Sebring
 *
 * URI: http://stackoverflow.com/questions/14035083/jquery-bind-event-on-scroll-stops
 */
$.fn.scrollStopped=function(t){$(this).scroll(function(){var o=this,l=$(o);l.data("scrollTimeout")&&clearTimeout(l.data("scrollTimeout")),l.data("scrollTimeout",setTimeout(t,750,o))})};


/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 *
 * url: https://github.com/jquery/jquery-mousewheel
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});