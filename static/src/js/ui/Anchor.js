
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-04-18 16:29:16
 * @version $Id$
 */
 
define(["jquery"], function($) {
	var me = {
		scoll:function(ele,options) {
			var defaults = {
				ieFreshFix: true,
				anchorSmooth: true,
				anchortag: "anchor",
				animateTime: 500
			};
			var sets = $.extend({}, defaults, options || {});
			//淇IE涓嬪埛鏂伴敋鐐瑰け鏁堢殑闂
			if (sets.ieFreshFix) {
				var url = window.location.toString();
				var id = url.split("#")[1];
				if (id) {
					var t = $("#" + id).offset().top;
					$(window).scrollTop(t);
				}
			}
			//鐐瑰嚮閿氱偣璺宠浆
			$(ele).each(function() {
				$(ele).click(function() {
					var aim = $(ele).attr(sets.anchortag).replace(/#/g, ""); //璺宠浆瀵硅薄id
					var pos = $("#" + aim).offset().top;
					if (sets.anchorSmooth) {
						//骞虫粦
						$("html,body").animate({
							scrollTop: pos
						}, sets.animateTime);
					} else {
						$(window).scrollTop(pos);
					}
					return false;
				});
			});
		}
	}
	return me;
})