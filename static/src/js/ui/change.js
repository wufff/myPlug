define(["jquery"],function($){
  var me = {
  	   hover:function(e,classname,child){
  	   	  if(classname==undefined){classname="hover";}
			if(child==undefined){
				$(e).hover(
					function(){$(this).addClass(classname);},
					function(){$(this).removeClass(classname);}
				);
			}
			else{
				$(e).hover(
					function(){$(this).find(child).addClass(classname);},
					function(){$(this).find(child).removeClass(classname);}
				);
			}
  	   },
  	   /*	多行文本省略号	*/
      //获取日期
	  active:function(ele){
		  $(ele).click(function(){
			  $(ele).removeClass('active');
			  $(this).addClass('active')
		  })
	  },
	  active:function(ele){
		  $(ele).click(function(){
			  $(ele).removeClass('active');
			  $(this).addClass('active')
		  })
	  },
		//新tab切换
	  tabdiv:function (tab,div,event,speed,fun){
		  speed=isNaN(speed)?0:speed;
		  $(div).each(function(index, element) {
			  $(this).attr("idx",index);
		  });
		  $(tab).each(function(index, element) {
			  $(this).bind(event,function(){
				  $(tab).removeClass("active");
				  $(this).addClass("active");
				  $(div+"[idx='"+index+"']").fadeIn(speed);
				  $(div+"[idx!='"+index+"']").hide();
				  if(fun){
					  fun(index);
				  }
			  });
		  });
	  },
		ellipsis:function(ele){
			$(ele).each(function(i){
			    var divH = $(this).height();
			    var $p = $("p", $(this)).eq(0);
			    while ($p.outerHeight() > divH) {
			        $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
			    };
			    $p.css("visibility","visible");
			});
		}

  };
  return  me;
});
