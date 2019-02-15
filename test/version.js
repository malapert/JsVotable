var requirejs = require('requirejs');
requirejs.config({
    baseUrl: 'node_modules/requirejs/',
    nodeRequire: require
});
var assert = require('chai').assert;
var fs = require('fs');
var JsVotable = requirejs("../../src/JsVotable");

describe("Checking version", function () {

   it("it checks the version", function () {
   	assert.equal(JsVotable.version,"2.0.2");
   });
});
