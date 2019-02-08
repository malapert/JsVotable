var requirejs = require('requirejs');
requirejs.config({
    baseUrl: 'node_modules/requirejs/',
    nodeRequire: require
});
var assert = require('chai').assert;
var fs = require('fs');
var JsVotable = requirejs("../../src/JsVotable");
var Base64 = requirejs("../../src/converter/base64");

describe("VOTable parser", function () {

    var votable;
    describe("Parsing votable", function () {

        it("it cannot load a VOTable with a null object", function () {
            assert.throws(function() { new JsVotable.Votable(null)}, Error, "xml cannot be null");
        });

        it("it cannot load a VOTable as an Object", function () {
            assert.throws(function() { new JsVotable.Votable(new Object())}, Error, "This object is not supported");
        });

        it("it detects a no VOTable ", function () {
            assert.throws(function() { new JsVotable.Votable("<test>Hello</test>")}, Error, "This input is not a VOTable");
        });

        it("it loads a VOTable from http", function () {
            XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
            DOMParser = require('domparser').DOMParser;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', "http://axel.u-strasbg.fr/HiPSCatService/I/284/out/metadata.xml", false);
            xhr.send(null);
            var txt = xhr.responseText;

            var parser = new DOMParser();
            var xml = parser.parseFromString(txt, "application/xml");
            votable = new JsVotable.Votable(xml);
            assert.ok(true);
        });

        it("it parses a description", function () {
            var description = votable.getDescription();
            assert.equal(description.getContent(), "Generated by the Java software CDSCatFile developed by F.-X. Pineau\n\t\tPlease report any problem to: francois-xavier.pineau@astro.unistra.fr");
        });

        it("it parses a coordinate system", function () {
            var definitions = votable.getDefinitions();
            var coosys = definitions.getCoosyss()[0];
            assert.equal(coosys.ID(), "COOSYS");
            assert.equal(coosys.system(), "ICRS");
            assert.equal(coosys.equinox(), "2000.0");
            assert.equal(coosys.epoch(), "2000.0");
        });

        it("it parses a resource", function () {
            var resource = votable.getResources()[0];
            var table = resource.getResourcesOrTables()[0];
            var fields = table.getFields();
            assert.equal(fields.length, 22);
            var field4 = table.getFields()[3];
            var description = field4.getDescription();
            assert.equal(description.getContent(), "Half Major axis of the positional error");
            assert.equal(field4.name(), "errHalfMaj");
            assert.equal(field4.datatype(), "float");
            assert.equal(field4.unit(), "arcsec");
            assert.equal(field4.ucd(), "phys.angSize.smajAxis;pos.errorEllipse;meta.main");
        });

        it("it parses a generated VOTable from xsd", function () {
            var txt = fs.readFileSync(__dirname + '/sampleVotable.xml', 'utf8');
            var parser = new DOMParser();
            var xml = parser.parseFromString(txt, "application/xml");
            var votableTest = new JsVotable.Votable(xml);
            assert.ok(true);
        });

        it("it parses a VOTable from IMCCE", function () {
            var txt = fs.readFileSync(__dirname + '/imcce.vot', 'utf8');
            var parser = new DOMParser();
            var xml = parser.parseFromString(txt, "application/xml");
            var votableTest = new JsVotable.Votable(xml);
            assert.ok(true);
        });

        it("it parses a VOTable from VOparis", function () {
            var txt = fs.readFileSync(__dirname + '/sia-voparis.vot', 'utf8');
            var parser = new DOMParser();
            var xml = parser.parseFromString(txt, "application/xml");
            var votableTest = new JsVotable.Votable(xml);
            assert.ok(true);
        });

        it("it parses a VOTable bin-64 from CDS", function () {
            var txt = fs.readFileSync(__dirname + '/vizier_votable.b64', 'utf8');
            var parser = new DOMParser();
            var xml = parser.parseFromString(txt, "application/xml");
            var votableTest = new JsVotable.Votable(xml);
            assert.ok(true);
        });

        it("it parses a VOTable from CDS", function () {
            var txt = fs.readFileSync(__dirname + '/vizier_votable.vot', 'utf8');
            var parser = new DOMParser();
            var xml = parser.parseFromString(txt, "application/xml");
            var votableTest = new JsVotable.Votable(xml);
            assert.ok(true);
        });

        it("it parses a VOTable with STC", function () {
            var txt = fs.readFileSync(__dirname + '/votable_stc.vot', 'utf8');
            var parser = new DOMParser();
            var xml = parser.parseFromString(txt, "application/xml");
            var votableTest = new JsVotable.Votable(xml);
            assert.ok(true);
        });
    });

    describe("Testing cache", function () {

        it("it loads by ID", function () {
            var elt = votable.getVotableEltByID("CDSCatFileQuery");
            var fields = elt.getFields();
            assert.equal(fields.length, 22);
        });

        it("it loads by name", function () {
            var elts = votable.getVotableEltsByName("CDSCatFileQuery");
            var fields = elts[0].getFields();
            assert.equal(fields.length, 22);
        });

        it("it cannot find the ID", function () {
            var elt = votable.getVotableEltByID("ID not found");
            assert.equal(elt, null);
        });

        it("it cannot find the name", function () {
            var elts = votable.getVotableEltsByName("ID not found");
            assert.equal(elts, null);
        });


    });

    describe("Decoding base 64", function () {

        it("it decodes base 64", function () {
            var txt = fs.readFileSync(__dirname + '/vizier_votable.b64', 'utf8');
            var parser = new DOMParser();
            var xml = parser.parseFromString(txt, "application/xml");
            var votableTest = new JsVotable.Votable(xml);
            var table = votableTest.getVotableEltByID("J_MNRAS_362_1006_tables");
            var fields = table.getFields();
            var data = table.getData();
            var binary = data.getData();
            var stream = binary.getStream();
            assert.equal(stream.encoding(),"base64");
            var content = stream.getContent(true, fields);
            
            //assert.equal(encoding,"base64");
        });

    });  
    
    describe("Reading a Votable with several tables", function () {

        it("it retrieves tables", function () {
            var txt = fs.readFileSync(__dirname + '/jonathan.vot', 'utf8');
            var parser = new DOMParser();
            var xml = parser.parseFromString(txt, "application/xml");
            var votable = new JsVotable.Votable(xml);
            var resource = votable.getResources()[0];
            var tables = resource.getResourcesOrTables();
            assert.equal(2, tables.length)            
        });

    });    

});

