var requirejs = require('requirejs');
requirejs.config({
    baseUrl: 'node_modules/requirejs/',
    nodeRequire: require
});
var assert = require('chai').assert;
var fs = require('fs');
var JsVotable = requirejs("../../app/JsVotable");
var Base64 = requirejs("../../app/converter/base64");

describe("VOTable transformation", function () {

    describe("GeoJson", function () {

        it("it converts a VOTable from CDS", function () {
            var txt = fs.readFileSync(__dirname + '/vizier_votable.vot', 'utf8');
            var parser = new DOMParser();
            var xml = parser.parseFromString(txt, "application/xml");
            var votableTest = new JsVotable.Votable(xml);
	    var geojson = votableTest.convertToGeoJSon(true);
            var GeoJSon = JSON.parse(geojson);            
            assert.equal(GeoJSon.features[0].properties["Notes"],"V10550 DIRECT");
        });

        it("it converts a VOTable from IMCCE", function () {
            var txt = fs.readFileSync(__dirname + '/imcce.vot', 'utf8');
            var parser = new DOMParser();
            var xml = parser.parseFromString(txt, "application/xml");
            var votableTest = new JsVotable.Votable(xml);
            console.log(votableTest.convertToGeoJSon(true));
            assert.ok(true);
        });

        it("it converts a VOTable from Base64", function () {
            var txt = fs.readFileSync(__dirname + '/vizier_votable.b64', 'utf8');
            var parser = new DOMParser();
            var xml = parser.parseFromString(txt, "application/xml");
            var votableTest = new JsVotable.Votable(xml);
            votableTest.convertToGeoJSon();
            var geojson = votableTest.convertToGeoJSon(true);
            var GeoJSon = JSON.parse(geojson);
            assert.equal(GeoJSon.features[0].properties["Notes"],"V10550 DIRECT");
        });


    });

});

