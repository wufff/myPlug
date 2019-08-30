define(['layui','path'],function(layui,path){
     var $ = jQuery = layui.jquery;
     return {
        //格式化
         fomartTime:function(timestamp){
         	    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		        var Y = date.getFullYear() + '-';
		        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
		        var D = date.getDate();
		        var h = date.getHours() + ':';
		        var m = date.getMinutes() + ':';
		        var s = date.getSeconds();
		        return Y+M+D;
         },
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
         //时间
        prevWeek:function(dateStr){
                var sdate = new Date(Date.parse(dateStr.replace(/-/g, "/")))
                var prevDate = new Date(sdate.getTime() - 7 * 24 *60 *60 *1000);
                var Reznow = prevDate.toLocaleDateString('zh-Hans-CN').replace(/日/g, '').replace(/\/|年|月/g, '-').replace(/[^\d-]/g,'');
                Rez = Reznow.replace(/\//g,'-')
                return Rez;
            },
        nextWeek:function(dateStr){
                var sdate = new Date(Date.parse(dateStr.replace(/-/g, "/")))
                var nextDate = new Date(sdate.getTime() + 7 * 24 *60 *60 *1000);
                var Reznow = nextDate.toLocaleDateString('zh-Hans-CN').replace(/日/g, '').replace(/\/|年|月/g, '-').replace(/[^\d-]/g,'');
                Rez = Reznow.replace(/\//g,'-')
                return Rez;
        },
        nextWeekPei:function(dateStr,num){
                var sdate = new Date(Date.parse(dateStr.replace(/-/g, "/")))
                var nextDate = new Date(sdate.getTime() + num * 7 * 24 *60 *60 *1000);
                var Reznow = nextDate.toLocaleDateString('zh-Hans-CN').replace(/日/g, '').replace(/\/|年|月/g, '-').replace(/[^\d-]/g,'');;
                Rez = Reznow.replace(/\//g,'-')
                return Rez;
        },
        calcDtScopeByMonth:function(index) {
            serachIndex = index;
            var today = new Date();
            var month = today.getMonth();
            var year = today.getFullYear();
            var startS = new Date(year, month + index, 1);
            var millisecond = 1000 * 60 * 60 * 24;
            var lastDay = new Date(year, month + index + 1, 1);
            var lastDay = new Date(lastDay.getTime() - millisecond);
            var startDay = setStandardTimeto(startS);
            var lastDay =  setStandardTimeto(lastDay);
             return {
               start:startDay,
               last:lastDay
             }
        },
        calcDtScopeByWeek:function(index){
            serachIndex = index;
            var today = new Date();
            var day = today.getDate() == 0 ? 7 :today.getDay();
            var millisecond = 1000 * 60 * 60 * 24;
            var addDays = index * 7 - day + 1;
            var mondayDt = new Date(today.getTime() + addDays * millisecond );
            var sundayDt = new Date(today.getTime() + (addDays + 6) * millisecond );
          
            var  startDay = setStandardTimeto(mondayDt);
            var  lastDay =  setStandardTimeto(sundayDt);
            return {
               start:startDay,
               last:lastDay
             }
        }
    }  
})



function  setStandardTimeto(d){
    // + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
     youWant = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
     return youWant;      
};