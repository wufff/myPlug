require(["jquery","fly"],function($){
	  // 调用选项
	  $(".stat").click(function(event){
	  	 var flyzb  = '',
	      flyer = $('<img class="flyer" src="/myPlug/static/src/img/port.png" style="width:40px;height:40px;z-index:5;">');
	      flyzb = $('.over');
	      flyer.fly({
				start: {
					left: event.pageX,
					top: event.pageY-$(window).scrollTop()
				},
				end: {
					left: flyzb.offset().left,
					top: flyzb.offset().top-$(window).scrollTop()+20,
					width: 0,
					height: 0
				},
				onEnd: function(){						
					flyer.remove();																		
				}
			});
	  })
})

