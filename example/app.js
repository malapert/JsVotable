define(["../app/utils","../app/votable"], function(Utils, Votable) {


    var VotableWidget = function (div) {
        this.div = div;
    };

    function parseVotable(xhr, output) {
        var outputGroup = "";
        var votable = new Votable(xhr.responseXML);
        var groups = votable.getGroups();
        for (i=0;i<groups.length;i++) {
            var group = groups[i];
            outputGroup+="<fieldset><legend>"+group.utype()+"</legend>";
            var subGroups = group.getGroups();
            for(j=0;j<subGroups.length;j++) {
                var subGroup = subGroups[j];
                outputGroup+="<fieldset><legend>"+subGroup.utype()+"</legend>";
                var params = subGroup.getParams();
                for(k=0;k<params.length;k++) {
                    var param = params[k];
                    outputGroup+=param.name()+" : "+param.value()+"<br/>";
                }
                outputGroup+="</fieldset>";
            }
            outputGroup+="</fieldset>";
        }

        var resource  = votable.getResources()[0];
        var table = resource.getResourcesOrTables()[0]["TABLE"];
        var fields = table.getFields();
        var data = table.getData();
        if (data!=null && data.getDataImplementationName() == 'TableData') {
            output += "<table border='1'>";
            var tabledata = data.getData();
            var trs = tabledata.getTrs();
            output+="<tr>";
            for (i =0 ;i<fields.length;i++) {
                var field = fields[i];
                output+="<th>"+field.name()+"</th>";
            }
            output+="</tr>";
            for(i=0;i<trs.length;i++){
                output+="<tr>";
                var tr = trs[i];
                var tds = tr.getTds();
                for (j=0;j<tds.length;j++) {
                    var td = tds[j];
                    output+="<td>"+td.getContent()+"</td>";
                }
                output+="</tr>";
            }
            output+="</table>";

        } else {
            for(i=0;i<fields.length;i++) {
                var field = fields[i];
                output+="<b>"+field.name()+"</b> : "+field.ucd()+"</br>";
            }
        }
        return outputGroup+output;

    }

    VotableWidget.prototype.do_work = function() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', document.getElementById("votableUrl").value, false);
        xhr.send(null);
        var output="";
        if (xhr.status == 200) {
            try {
                output += parseVotable(xhr, output);
            } catch(e) {
                output+="Error : "+e;
            }
        } else {
            output+="Error when retrieving the VOTable, Please change the URL";
        }

        document.getElementById(this.div).innerHTML=output;
    };

    return VotableWidget;

});