/**
 * Created by malapert on 11/10/16.
 */

$(function() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://axel.u-strasbg.fr/HiPSCatService/I/337/gaia/metadata.xml", false);
    xhr.send(null);

    var response = xhr.responseXML;
    var votable = new JsVotable(response);

});
