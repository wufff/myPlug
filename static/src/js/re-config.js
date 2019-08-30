require.config({
	baseUrl: "/myPlug/static/src/js",
	urlArgs: "v=" + new Date().getTime(),
	paths: {
			"jquery": "./lib/jquery/jquery",
			"bootstrap":"./lib/bootstrap/bootstrap.min.3.3.7",
			"bootstrap-hover-dropdown":"./lib/bootstrap/extend/bootstrap-hover-dropdown.min",
			"nicescroll":"./lib/jquery.nicescroll",
			"velocity": "./lib/velocity/velocity1.5.2",
			"velocity-ui": "./lib/velocity/velocity.ui1.5.2",
			"aos":"./lib/aos/aos",
			"expression": "./ui/expression",
			"album": "./ui/album",
			"dialog": "./ui/dialog",
			"path":"./tools/path",
			"page": "./tools/pags",
			"inputE":"./ui/inputedit/index",
			"fly":"./lib/fly",
			"anchor":"./ui/Anchor",
			"dot":"./lib/jquery.dotdotdot.min.umd",
			"ui":"./ui/change",
			"sHover":"./ui/sHover.min"
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
         },
         "velocity":{
            deps: ["jquery"]
        },
        "velocity-ui":{
            deps: ["velocity"]
        }
	}
});
