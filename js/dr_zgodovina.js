var margin = {top: 0, right: 320, bottom: 0, left: 0},
    width = 960 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

var tree = d3.layout.tree()
    .separation(function(a, b) { return a.parent === b.parent ? 1 : .5; })
    .children(function(d) { return d.parents; })
    .size([height, width]);

var svg = d3.select("#content").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("json/tree.json", function(json) {

    var field = "name";
    var oldvalue = "Moje Ime";
    var newvalue  = "Gasper Andrejc"


    json.name = localStorage.getItem('ime_uporabnika');
    json.born = "lol not alive";

    json.parents[0].name = "father";
    json.parents[1].name = "mother";

    json.parents[0].parents[0].name = "father of father";
    json.parents[0].parents[1].name = "mother of father";

    json.parents[1].parents[0].name = "father of mother";
    json.parents[1].parents[1].name = "mother of mother";

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
        .text(function(d) { return d.born + "–" + d.died; });

    node.append("text")
        .attr("x", 8)
        .attr("y", 8)
        .attr("dy", "1.86em")
        .attr("class", "about location")
        .text(function(d) { return d.location; });
    node.append("text")
        .attr("x", 8)
        .attr("y", 8)
        .attr("dy", "2.96em")
        .attr("class", "gen-bolezni")
        .text(function(d) { return "Genetske bolezni: "+d.genetske; });
});

function elbow(d, i) {
    return "M" + d.source.y + "," + d.source.x
        + "H" + d.target.y + "V" + d.target.x
        + (d.target.children ? "" : "h" + margin.right);
}


/**
 * Created by gasper on 12/10/14.
 */
