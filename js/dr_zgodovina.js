var baseUrl = 'https://rest.ehrscape.com/rest/v1';
var queryUrl = baseUrl + '/query';

var username = "ois.seminar";
var password = "ois4fri";

var globalni_priimek = localStorage.getItem('ime_uporabnika').split(" ")[1];

function getSessionId() {
    var response = $.ajax({
        type: "POST",
        url: baseUrl + "/session?username=" + encodeURIComponent(username) +
        "&password=" + encodeURIComponent(password),
        async: false
    });
    return response.responseJSON.sessionId;
}

var margin = {top: 0, right: 320, bottom: 0, left: 0},
    width = 960 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;



var tree = d3.layout.tree()
    .separation(function(a, b) { return a.parent === b.parent ? 1 : .5; })
    .children(function(d) { return d.parents; })
    .size([height, width]);

var svg = d3.select(".center-image").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



d3.json("json/tree.json", function(json) {

    sessionId = getSessionId();
    var ehr = localStorage.getItem('ehr_'+globalni_priimek);
    if(ehr == null){
        alert("EHR še ne obstaja! Ponovno zgenerirajte podatke.");
    }else {


        $.ajax({
            url: baseUrl + "/demographics/ehr/" + ehr + "/party",
            type: 'GET',
            headers: {"Ehr-Session": sessionId},
            success: function (data) {
                var party = data.party;

                var oce = [];
                var    mati = [];
                var    oceOce = [];
                var    oceMati = [];
                var    matiOce = [];
                var    matiMati = [];

                party.partyAdditionalInfo.forEach(function (el) {
                    if (el.key === 'oce') {
                        oce = el.value.split("|");
                    }
                    if (el.key === 'mati') {
                        mati = el.value.split("|");
                    }
                    if (el.key === 'oceOce') {
                       oceOce = el.value.split("|");
                    }
                    if (el.key === 'oceMati') {
                       oceMati = el.value.split("|");
                    }
                    if (el.key === 'matiOce') {
                       matiOce = el.value.split("|");
                    }
                    if (el.key === 'matiMati') {
                       matiMati = el.value.split("|");
                    }




                });

                json.name = localStorage.getItem('ime_uporabnika');
                json.born = party.dateOfBirth.split("T")[0];

                json.parents[0].name = oce[0];
                json.parents[0].born = (oce[1].split("|"))[0];
                json.parents[0].genetske = oce[2];

                json.parents[1].name = mati[0];
                json.parents[1].born = (mati[1].split("|"))[0];
                json.parents[1].genetske = mati[2];


                json.parents[0].parents[0].name = oceOce[0];
                json.parents[0].parents[0].born = oceOce[1].split("|")[0];
                json.parents[0].parents[0].genetske = oceOce[2];

                json.parents[0].parents[1].name = matiOce[0];
                json.parents[0].parents[1].born = matiOce[1].split("|")[0];
                json.parents[0].parents[1].genetske = matiOce[2];

                json.parents[1].parents[0].name = oceMati[0];
                json.parents[1].parents[0].born = oceMati[1].split("|")[0];
                json.parents[1].parents[0].genetske = oceMati[2];

                json.parents[1].parents[1].name = matiMati[0];
                json.parents[1].parents[1].born = matiMati[1].split("|")[0];
                json.parents[1].parents[1].genetske = matiMati[2];

                var nodes = tree.nodes(json);

                var link = svg.selectAll(".link")
                    .data(tree.links(nodes))
                    .enter().append("path")
                    .attr("class", "link")
                    .attr("d", elbow);

                var node = svg.selectAll(".node")
                    .data(nodes)
                    .enter().append("g")
                    .attr("class", "node")
                    .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })

                node.append("text")
                    .attr("class", "name")
                    .attr("x", 8)
                    .attr("y", -6)
                    .text(function(d) { return d.name; });

                node.append("text")
                    .attr("x", 8)
                    .attr("y", 8)
                    .attr("dy", ".71em")
                    .attr("class", "about lifespan")
                    .text(function(d) { return d.born; });

                node.append("text")
                    .attr("x", 8)
                    .attr("y", 8)
                    .attr("dy", "1.86em")
                    .attr("class", "about location")
                    .text(function(d) { return d.location; });
                node.append("text")
                    .attr("x", 8)
                    .attr("y", 8)
                    .attr("dy", "1.96em")
                    .attr("class", "about location")
                    .text(function(d) { return "Bolezni: "+d.genetske; });















            },
            error: function (err) {
                alert(JSON.parse(err.responseText).userMessage);
            }
        });
    }



});

function elbow(d, i) {
    return "M" + d.source.y + "," + d.source.x
        + "H" + d.target.y + "V" + d.target.x
        + (d.target.children ? "" : "h" + margin.right);
}


/**
 * Created by gasper on 12/10/14.
 */
