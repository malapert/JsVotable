var requirejs = require('requirejs');
requirejs.config({
    baseUrl: 'node_modules/requirejs/',
    nodeRequire: require
});
var assert = require('chai').assert;
var fs = require('fs');
var JsVotable = requirejs("../../app/JsVotable");
var Base64 = requirejs("../../app/converter/base64");

describe("Checking attributes and nodes value", function () {

    var txt = fs.readFileSync(__dirname + '/sampleVotable.xml', 'utf8');
    DOMParser = require('domparser').DOMParser;
    var parser = new DOMParser();
    var xml = parser.parseFromString(txt, "application/xml");
    var votableTest = new JsVotable.Votable(xml);
    
    describe("for VOTable", function () {

        it("it checks ID", function () {
            assert.equal(votableTest.ID(),"myIDVotable");
        });

        it("it checks version", function () {
            assert.equal(votableTest.version(),"1.0");
        });

        it("it checks description", function () {
            assert.equal(votableTest.getDescription().getContent(),"My descritpion");
        });        
        
    });

    describe("for Coosys", function () {
        var defs = votableTest.getDefinitions();
        var coosys = defs.getCoosyss()[0];
        it("it checks ID", function () {
            assert.equal(coosys.ID(),"coosysID");
        });

        it("it checks equinox", function () {
            assert.equal(coosys.equinox(),"2000");
        });

        it("it checks epoch", function () {
            assert.equal(coosys.epoch(),"2000.0");
        });        

        it("it checks system", function () {
            assert.equal(coosys.system(),"eq_FK5");
        });
    });
    var resource1 = votableTest.getResources()[0];
    var resource2 = votableTest.getResources()[1];

    describe("for Resource 1", function () {
        it("it checks name", function () {
            assert.equal(resource1.name(),"nameResource");
        });

        it("it checks ID", function () {
            assert.equal(resource1.ID(),"IDResource");
        });

        it("it checks utype", function () {
            assert.equal(resource1.utype(),"fakeUtype");
        });

        it("it checks type", function () {
            assert.equal(resource1.type(),"results");
        });

        it("it checks description", function () {
            assert.equal(resource1.getDescription().getContent(),"My second description");
        });
    });

    describe("for Resource 2", function () {
        it("it checks name", function () {
            assert.equal(resource2.name(),"");
        });

        it("it checks ID", function () {
            assert.equal(resource2.ID(),"");
        });

        it("it checks utype", function () {
            assert.equal(resource2.utype(),"");
        });

        it("it checks type", function () {
            assert.equal(resource2.type(),"results");
        });
        
    });

    var infos = resource1.getInfos();
    var info1 = infos[0];
    var info2 = infos[1];
    var info3 = infos[2];
    describe("for info 1", function () {
        it("it checks name", function () {
            assert.equal(info1.name(),"name1");
        });

        it("it checks ID", function () {
            assert.equal(info1.ID(),"ID1");
        });

        it("it checks value", function () {
            assert.equal(info1.value(),"value1");
        });

        it("it checks unit", function () {
            assert.equal(info1.unit(),"unit1");
        });

        it("it checks xtype", function () {
            assert.equal(info1.xtype(),"xtype1");
        });
        
        it("it checks ref", function () {
            assert.equal(info1.ref(),"ref1");
        });

        it("it checks ucd", function () {
            assert.equal(info1.ucd(),"ucd1");
        });

        it("it checks utype", function () {
            assert.equal(info1.utype(),"utype1");
        });

    });

    describe("for info 2", function () {
        it("it checks name", function () {
            assert.equal(info2.name(),"name2");
        });

        it("it checks ID", function () {
            assert.equal(info2.ID(),"ID2");
        });

        it("it checks value", function () {
            assert.equal(info2.value(),"value2");
        });

        it("it checks unit", function () {
            assert.equal(info2.unit(),"unit2");
        });

        it("it checks xtype", function () {
            assert.equal(info2.xtype(),"xtype2");
        });

        it("it checks ref", function () {
            assert.equal(info2.ref(),"ref2");
        });

        it("it checks ucd", function () {
            assert.equal(info2.ucd(),"ucd2");
        });

        it("it checks utype", function () {
            assert.equal(info2.utype(),"utype2");
        });

    });

    describe("for info 3", function () {
        it("it checks name", function () {
            assert.equal(info3.name(),"name3");
        });

        it("it checks ID", function () {
            assert.equal(info3.ID(),"ID3");
        });

        it("it checks value", function () {
            assert.equal(info3.value(),"value3");
        });

        it("it checks unit", function () {
            assert.equal(info3.unit(),"unit3");
        });

        it("it checks xtype", function () {
            assert.equal(info3.xtype(),"xtype3");
        });

        it("it checks ref", function () {
            assert.equal(info3.ref(),"ref3");
        });

        it("it checks ucd", function () {
            assert.equal(info3.ucd(),"ucd3");
        });

        it("it checks utype", function () {
            assert.equal(info3.utype(),"utype3");
        });

    });

    var rortable = resource1.getResourcesOrTables()[0];
    var table = rortable["TABLE"];

    describe("for table", function () {
        it("it checks name", function () {
            assert.equal(table.name(),"name7");
        });

        it("it checks ref", function () {
            assert.equal(table.ref(),"ref7");
        });

        it("it checks ID", function () {
            assert.equal(table.ID(),"ID7");
        });

        it("it checks ucd", function () {
            assert.equal(table.ucd(),"ucd7");
        });

        it("it checks utype", function () {
            assert.equal(table.utype(),"utyp7");
        });

        it("it checks nrows", function () {
            assert.equal(table.nrows(),"5");
        });

        it("it checks description", function () {
            assert.equal(table.getDescription().getContent(),"my description");
        });

    });

    var field = table.getFields()[0];
    describe("for field", function () {
        it("it checks name", function () {
            assert.equal(field.name(),"name1");
        });

        it("it checks ID", function () {
            assert.equal(field.ID(),"f1");
        });

        it("it checks unit", function () {
            assert.equal(field.unit(),"u1");
        });

        it("it checks datatype", function () {
            assert.equal(field.datatype(),"d1");
        });

        it("it checks precision", function () {
            assert.equal(field.precision(),"p1");
        });

        it("it checks width", function () {
            assert.equal(field.width(),"10");
        });

        it("it checks xtype", function () {
            assert.equal(field.xtype(),"x1");
        });

        it("it checks ref1", function () {
            assert.equal(field.ref(),"ref1");
        });

        it("it checks ucd", function () {
            assert.equal(field.ucd(),"ucd1");
        });

        it("it checks utype", function () {
            assert.equal(field.utype(),"utype1");
        });

        it("it checks arraysize", function () {
            assert.equal(field.arraysize(),"*");
        });

        it("it checks type", function () {
            assert.equal(field.type(),"type1");
        });

        it("it checks description", function () {
            assert.equal(field.getDescription().getContent(),"desc1");
        });

    });
    var values = field.getValues();
    describe("for values", function () {

        it("it checks ID", function () {
            assert.equal(values.ID(),"val1");
        });

        it("it checks type", function () {
            assert.equal(values.type(),"legal");
        });

        it("it checks null", function () {
            assert.equal(values.null(),"4");
        });

        it("it checks ref", function () {
            assert.equal(values.ref(),"4");
        });

    });

    var option = values.getOptions()[0];
    describe("for option", function () {

        it("it checks name", function () {
            assert.equal(option.name(),"toto");
        });

        it("it checks value", function () {
            assert.equal(option.value(),"trtr");
        });

    });

    var min = values.getMin();
    describe("for min", function () {

        it("it checks value", function () {
            assert.equal(min.value(),"10");
        });

        it("it checks inclusive", function () {
            assert.equal(min.inclusive(),"yes");
        });
    });

    var max = values.getMax();
    describe("for max", function () {

        it("it checks value", function () {
            assert.equal(max.value(),"20");
        });

        it("it checks inclusive", function () {
            assert.equal(max.inclusive(),"yes");
        });
    });
});

