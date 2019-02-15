require.config({
    baseUrl: "../src",
    name: "JsVotable",
    include: ["JsVotable"],
    insertRequire: ["JsVotable"],
    out: "../JsVotable.min.js",
    optimize: "none",
    paths: {
        "JsVotable": "JsVotable"            
    }	
});
