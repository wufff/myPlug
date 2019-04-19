require(["jquery", "anchor"], function($, anchor) {
			// 调用选项



			/*
			 * 导航/菜单高亮组件
			 * option
			 *   nav 导航/菜单选择器
			 *   content 内容模块选择器
			 *   diffTop 距离顶部的误差值
			 *   diffBottom 距离底部的误差值
			 *   lightCls 高亮的class
			 *
			 */
			function navLight(option, callback) {


				var $content = $(option.content);
				var $nav = $(option.nav);
				var diff = option.diff;
				var time = option.time;
				// 记录每个分类的位置
				var contentPosi = [];
				$content.each(function(idx, elem) {
					var $cont = $(elem)
					var top = $cont.offset().top
					var height = $cont.height();
					var obj = {
						top: top + diff,
						bottom: top + height + diff
					}
					contentPosi.push(obj);
				})

				console.log(contentPosi);

				var $win = $(window)
				var $doc = $(document)



				$nav.click(function() {
					var index = $nav.index($(this));
					var pos = contentPosi[index].top;
					console.log(pos)
					if (time) {
						$("html,body").animate({
							scrollTop: pos+1
						}, time);
					} else {
						$(window).scrollTop(pos+1);
					}
				})

				$(window).scroll(function(e) {
					var postion = $(this).scrollTop();
					$.each(contentPosi, function(index, val) {
						if (val.top < postion && val.bottom > postion) {
							$nav.removeClass('curr')
							$nav.eq(index).addClass('curr');
						}
					});
				})
			};


     navLight ({content:".content",nav:".nav",diff:-130,time:200})

     anchor.scoll(".btn1",{anchortag: "scrollTo"})
     anchor.scoll(".btn2",{anchortag: "scrollTo"})
	 anchor.scoll(".btn3",{anchorSmooth: false})
})


