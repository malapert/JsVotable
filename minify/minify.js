({
    name: "../minify/almond",
    include: ["JsVotable"],
    out: "../JsVotable.min.js",
    optimize: "none",
    api_version:"[TO BE DEFINED]",
    mainConfigFile: "../src/rconfig.js",
    onBuildRead: function (moduleName, path, contents) {
        //Always return a value.
        //This is just a contrived example.
        return contents.replace(/\[VERSION_API\]/g, this.api_version);
    },		
	// optimize: "uglify2",
	preserveLicenseComments: false,
	uglify2: {
		//Example of a specialized config. If you are fine
		//with the default options, no need to specify
		//any of these properties.
		output: {
			beautify: false
		},
		compress: {
			unsafe: false,
			dead_code: false,
		},
		warnings: true,
		mangle: true
	}

});
