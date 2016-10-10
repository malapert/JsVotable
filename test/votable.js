var requirejs = require('requirejs');
requirejs.config({
    baseUrl: 'node_modules/requirejs/',
    nodeRequire: require
});
var assert = require('chai').assert;

var Votable = requirejs("../../app/votable");

describe("VOTable parser", function() {
  var votable;
  describe("Parsing votable", function() {
   
    it("it loads a VOTable", function() {
   	XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
	DOMParser = require('domparser').DOMParser;
    	xhr = new XMLHttpRequest();
    	xhr.open('GET', "http://axel.u-strasbg.fr/HiPSCatService/I/284/out/metadata.xml", false);
    	xhr.send(null);
        var txt = xhr.responseText;

	var parser = new DOMParser();
	var xml = parser.parseFromString(txt, "application/xml");
	votable = new Votable(xml);
	assert.ok(true);
    });

    it("it parses a description", function() {
        var description = votable.getDescription();	
	assert.equal(description.getContent(),"Generated by the Java software CDSCatFile developed by F.-X. Pineau\n\t\tPlease report any problem to: francois-xavier.pineau@astro.unistra.fr");
    });

    it("it parses a coordinate system", function() {
	var definitions = votable.getDefinitions();
    	var coosys = definitions.getCoosyss()[0];
    	assert.equal(coosys.ID(),"COOSYS");
	assert.equal(coosys.system(),"ICRS");
	assert.equal(coosys.equinox(),"2000.0");
	assert.equal(coosys.epoch(),"200.0");
    });

    it("it parses a resource", function() {
   	var resource = votable.getResources()[0];
    	var table = resource.getResourcesOrTables()[0]["TABLE"];    	
	var fields = table.getFields();		
        assert.equal(fields.length,22);
	var field4 = table.getFields()[3];
	var description = field4.getDescription();
	assert.equal(description.getContent(),"Half Major axis of the positional error");
	assert.equal(field4.name(),"errHalfMaj");
	assert.equal(field4.datatype(),"float");
	assert.equal(field4.unit(),"arcsec");
	assert.equal(field4.ucd(),"phys.angSize.smajAxis;pos.errorEllipse;meta.main");
    });});

  describe("Testing cache", function() {

    it("it loads by ID", function() {   
    	var elt = votable.getVotableEltByID("CDSCatFileQuery");
    	var fields = elt.getFields();	
	assert.equal(fields.length,22);
    });

    it("it loads by name", function() {       
    	var elts = votable.getVotableEltsByName("CDSCatFileQuery");
    	var fields = elts[0].getFields();
        assert.equal(fields.length,22);
    });

    it("it cannot find the ID", function() {
        var elt = votable.getVotableEltByID("ID not found");       
        assert.equal(elt,null);
    });

    it("it cannot find the name", function() {
        var elts = votable.getVotableEltsByName("ID not found");
        assert.equal(elts,null);
    });


 });

});
