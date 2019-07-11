require(["jquery", "velocity", "velocity-ui"], function($, velocity) {

// /#================================#/
	$(".a").velocity(
	{
		width:"600px"
		
	},
	   "ease-in-out" //时间
	)

	 $(".b").velocity(
	{
		width:"600px",

	},{
	    duration: 500, //时间
	         //延迟
	  }
	)

// /#===================complete=============#/
	// $(".a").velocity({
	// 	width: "300px",
	// }, {
	// 	duration: 2000, //时间
	// 	complete: function() {
	// 		$(".b").velocity({
	// 			width: "300px",

	// 		}, {
	// 			duration: 2000, //时间
	// 		})
	// 	}
	// })

// /#===================动画序列=============#/
  //  var seq = [
  //     {
  //     	elements:$(".a"),
  //       properties:{width:"300px"},
  //       options:{
  //       	duration:2000,
        	
  //       }
  //     },
  //     {
  //     	elements:$(".b"),
  //     	properties:{width:"300px"},
  //     	  options:{
  //       	duration:1000,
  //       	sequenceQueue:false      //设置此属性会同时执行
  //       }
  //     }
  //  ]
  // $.Velocity.RunSequence(seq);


// /#===================自定义动画 官网搜索pre-regist=============#/

 //  $(".a").mouseover(function(){
 //  	  $(this).velocity("callout.shake")
 //  })

 // $.Velocity.RegisterEffect('Lixin.pulse',{
 // 	defaultDuration:300,
 // 	calls:[
 //      [{scaleX:1.1},0.5],  //效果和所占百分比
 //      [{scaleX:1.0},0.5]
 // 	]
 // })





// /#===================自由=============#/







 // $(".b").mouseover(function(){
 //  	  $(this).velocity("Lixin.pulse")
 //  })


 //  $(".imgbg").hover(function(){
 //  	  $(this).velocity({scale:1.1},{duration:1000})
 //  },function(){
 //  	  $(this).velocity({scale:1.0},{duration:1000})
 //  })


})

