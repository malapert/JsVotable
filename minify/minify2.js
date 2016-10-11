({
	baseUrl: "../app",
	name: "../node_modules/almond/almond",
	include: ['votable'],
	out: "../votable.min.js",
	wrap: {
		start: "(function (root, factory) {\
		    if (typeof define === 'function' && define.amd) {\
			define(['jquery'], factory);\
		    } else {\
			root.votable = factory(root.$);\
		    }\
		}(this, function ($) {",
		end: "return require('votable');}));"
	},
	optimize: "uglify",
	paths: {
		"jquery": "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
	},
	shim: {
		'jquery': {
			deps: [],
			exports: 'jQuery'
		}
	},
	uglify: {
		//Example of a specialized config. If you are fine
		//with the default options, no need to specify
		//any of these properties.
		output: {
			beautify: false
		},
		compress: {
			unsafe: true
		},
		warnings: true,
		mangle: true
	}
})
