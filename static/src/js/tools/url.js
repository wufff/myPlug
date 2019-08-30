define(['path','layui'],function(path,layui){
	 var layer = layui.layer;
     var $ = jQuery = layui.jquery;
     var my =  {
        getTr:function(obj){
             var data = {}
             var tr = $(obj).parents("tr");
             var tds = tr.find("td");
             tds.each(function(index,item){
                 var k = $(item).attr("data-k");
                 var v = $(item).attr("value");
                 if(k){
                     if(v){
                        data[k] = v;
                     }else{
                        data[k] = $(item).text();
                     }
                 }
             })
             return data;
         },
        filter: function(ele, value) {
            var k = $(ele).attr("v-k");
            var v = value;
            var oldUrl = GetUrl();
            var obj = {};
            obj[k] = v;
            var parmObj = getQueryStringArgs();
            var baseUrl = GetUrl();
            $.extend(parmObj,obj);
            var parmStr = getQueryforUrl(parmObj);
            if (parmStr){
                  var currtUrl = baseUrl + "?" + parmStr;
                  window.location.href = currtUrl;
            }else{
                 window.location.href = baseUrl;
            }
        },
        filterTownId:function(ele,value){
            var k = $(ele).attr("v-k");
            var v = value;
            var oldUrl = GetUrl();
            var obj = {};
            obj[k] = v;
            var parmObj = getQueryStringArgs();
            var baseUrl = GetUrl();
            $.extend(parmObj,obj);
            var parmStr = getQueryforUrl(parmObj);
            var arr = [];
            if (parmStr){
                if(k == 'city_id' && value.length == 0){
                    var param_arr = parmStr.split('&');
                    for(var i = 0;i<param_arr.length;i++){
                        if(param_arr[i].indexOf("town_id") == -1 && param_arr[i].indexOf("school_id") == -1){
                           arr.push(param_arr[i]);
                        }
                    }
                    parmStr = arr.join("&");
                }
                  var currtUrl = baseUrl + "?" + parmStr;
                  window.location.href = currtUrl;
            }else{
                 window.location.href = baseUrl;
            }
        },
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
        request:function  (name) {
        var args = getQueryStringArgs ()
        var result = "";
        if (args) {
            $.each(args, function (key, value) {
                if (key == name) {
                    result = value;
                    //退出遍历
                    return false;
                }
            });
        }
        if(result == ""){
            return undefined;
        }else{
             return result;
        }
       
       }
     }
     return my;
})
function getQueryStringArgs () {
        //取得查询字符串并去掉问号
        var qs = location.search.length > 0 ? location.search.substring(1) : "";
        //保存数据的对象
        var args = {};
        //取得每一项
        var items = qs.length ? qs.split("&") : [];
        var item = null;
        var value = null;
        var len = items.length;
        for (var i = 0; i < len; i++) {
            item = items[i].split("=");
            //参数解码
            name = decodeURIComponent(item[0])
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value;
            }
        }
        return args;
    };


    function GetUrl(){
        var sHref = window.location.href;
        var args = sHref.split('?');
        return args[0];
    }

    function getQueryStringArgs(){
    //取得查询字符串并去掉开头的问号
    var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
    //保存数据的对象
    args = {},
    //取得每一项
    items = qs.length ? qs.split("&") : [],
    item = null,
    name = null,
    value = null,
    //在 for 循环中使用
    i = 0,
    len = items.length;
    //逐个将每一项添加到 args 对象中
    for (i=0; i < len; i++){
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if (name.length) {
            args[name] = value;
        }
    }
    return args;
}

//对象转为query字符串
function getQueryforUrl(obj){
     var arry = [];
     for (x in obj){
        if(obj[x]){
            var str = x + "=" + obj[x];
            arry.push(str)
        }
     }
    return arry.join("&");
}

