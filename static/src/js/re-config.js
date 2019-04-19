require.config({
	baseUrl: "/myPlug/static/src/js",
	urlArgs: "v=" + new Date().getTime(),
	paths: {
			"jquery": "./lib/jquery/jquery",
			"bootstrap":"./lib/bootstrap/bootstrap.min.3.3.7",
			"bootstrap-hover-dropdown":"./lib/bootstrap/extend/bootstrap-hover-dropdown.min",
			"nicescroll":"./lib/jquery.nicescroll",
			"expression": "./ui/expression",
			"album": "./ui/album",
			"dialog": "./ui/dialog",
			"path":"./tools/path",
			"page": "./tools/pags",
			"inputE":"./ui/inputedit/index",
			"fly":"./lib/fly",
			"anchor":"./ui/Anchor",
			"dot":"./lib/jquery.dotdotdot.min.umd"
	},
	shim: {
         "bootstrap":["jquery"],
         "bootstrap-hover-dropdown":["bootstrap"],
         // 把全局变量导出
         "modells":{
         	exports:"modells"
         },
         "nicescroll":{
         	deps:['jquery']
         },
         "fly":{
         	deps:['jquery']
         }
	}
});
