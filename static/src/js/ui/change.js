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
	 getdate:function(ele){
			var day="";
			var month="";
			var ampm="";
			var ampmhour="";
			var myweekday="";
			var year="";
			mydate=new Date();
			myweekday=mydate.getDay();
			mymonth=mydate.getMonth()+1;
			myday= mydate.getDate();
			myyear= mydate.getYear();
			year=(myyear > 200) ? myyear : 1900 + myyear;
			if(myweekday == 0)
			weekday=" 星期日 ";
			else if(myweekday == 1)
			weekday=" 星期一 ";
			else if(myweekday == 2)
			weekday=" 星期二 ";
			else if(myweekday == 3)
			weekday=" 星期三 ";
			else if(myweekday == 4)
			weekday=" 星期四 ";
			else if(myweekday == 5)
			weekday=" 星期五 ";
			else if(myweekday == 6)
			weekday=" 星期六 ";
			$(ele).text(year+"年"+mymonth+"月"+myday+"日 "+weekday)
		},
		//新tab切换
		 tabdiv:function (tab,div,event,speed){
			speed=isNaN(speed)?0:speed;
			$(div).each(function(index, element) {
		        $(this).attr("idx",index);
		    });
			$(tab).each(function(index, element) {
		        $(this).bind(event,function(){
					$(tab).removeClass("now");
					$(this).addClass("now");
					$(div+"[idx='"+index+"']").fadeIn(speed);
					$(div+"[idx!='"+index+"']").hide();
				});
		    });
		}
  }
  return  me;
$(".figcaption").each(function(i){
    var divH = $(this).height();
    var $p = $("p", $(this)).eq(0);
    while ($p.outerHeight() > divH) {
        $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
    };
});
});