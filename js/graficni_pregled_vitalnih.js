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



//d3.tsv("podatki-graf.tsv", function(error, data) {



sessionId = getSessionId();

var ehrId = localStorage.getItem('ehr_' + globalni_priimek);


$("#timel").html('<ul class="timeline" id="timel"></ul>');

if (ehrId == null) {
    alert("EHR še ne obstaja! Ponovno zgenerirajte podatke.");
} else {
    $.ajax({
        url: baseUrl + "/demographics/ehr/" + ehrId + "/party",
        type: 'GET',
        headers: {"Ehr-Session": sessionId},
        success: function (data) {
            var party = data.party;
            var AQL =
                "select " +
                "a_a/data[at0002]/events[at0003]/time/value as cas, " +
                "a_a/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude as Temperature, " +
                "a_b/data[at0001]/events[at0006]/data[at0003]/items[at0004]/value/magnitude as Systolic, " +
                "a_b/data[at0001]/events[at0006]/data[at0003]/items[at0005]/value/magnitude as Diastolic, " +
                "a_c/data[at0001]/events[at0002]/data[at0003]/items[at0004, 'Body Height/Length']/value/magnitude as Body_Height_Length, " +
                "a_d/data[at0002]/events[at0003]/data[at0001]/items[at0004, 'Body weight']/value/magnitude as Body_Weight, " +
                "a_f/data[at0001]/events[at0002]/data[at0003]/items[at0006]/value/numerator as spO2, " +
                "a_f/data[at0001]/events[at0002]/data[at0003]/items[at0036]/value/value as ime "+
                "from EHR e[e/ehr_id/value='" + ehrId + "'] " +
                "contains COMPOSITION a " +
                "contains (" +
                "OBSERVATION a_a[openEHR-EHR-OBSERVATION.body_temperature.v1] and " +
                "OBSERVATION a_b[openEHR-EHR-OBSERVATION.blood_pressure.v1] and " +
                "OBSERVATION a_c[openEHR-EHR-OBSERVATION.height.v1] and " +
                "OBSERVATION a_d[openEHR-EHR-OBSERVATION.body_weight.v1] and " +
                "OBSERVATION a_f[openEHR-EHR-OBSERVATION.indirect_oximetry.v1]) "+
                "order by a_a/data[at0002]/events[at0003]/time/value desc " +
                "offset 0";

            $.ajax({
                url: baseUrl + "/query?" + $.param({"aql": AQL}),
                type: 'GET',
                headers: {"Ehr-Session": sessionId},
                success: function (res) {

                    if (res) {

                        var dat = [];
                        var dat1 = [];
                        var dat2 = [];
                        var dat3 = [];
                        var dat4 = [];

                        var margin = {top: 20, right: 80, bottom: 30, left: 50},
                            width = 790 - margin.left - margin.right,
                            height = 500 - margin.top - margin.bottom;

                        var parseDate = d3.time.format("%Y%m%d").parse;

                        var x = d3.time.scale()
                            .range([0, width]);

                        var y = d3.scale.linear()
                            .range([height, 0]);

                        var color = d3.scale.category10();

                        var xAxis = d3.svg.axis()
                            .scale(x)
                            .orient("bottom");

                        var yAxis = d3.svg.axis()
                            .scale(y)
                            .orient("left");

                        var line = d3.svg.line()
                            .interpolate("basis")
                            .x(function(d) { return x(d.date); })
                            .y(function(d) { return y(d.temperature); });

                        var svg = d3.select("#temp").append("svg")
                            .attr("width", width + margin.left + margin.right)
                            .attr("height", height + margin.top + margin.bottom)
                            .append("g")
                            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                        var svg1 = d3.select("#itm").append("svg")
                            .attr("width", width + margin.left + margin.right)
                            .attr("height", height + margin.top + margin.bottom)
                            .append("g")
                            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                        var svg2 = d3.select("#visina").append("svg")
                            .attr("width", width + margin.left + margin.right)
                            .attr("height", height + margin.top + margin.bottom)
                            .append("g")
                            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                        var svg3 = d3.select("#tlak").append("svg")
                            .attr("width", width + margin.left + margin.right)
                            .attr("height", height + margin.top + margin.bottom)
                            .append("g")
                            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                        var svg4 = d3.select("#nas").append("svg")
                            .attr("width", width + margin.left + margin.right)
                            .attr("height", height + margin.top + margin.bottom)
                            .append("g")
                            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


                        var rows = res.resultSet;
                        for (var i in rows) {
                            var datumInUra = rows[i].cas;
                            var telesnaVisina = rows[i].Body_Height_Length;
                            var telesnaTeza = rows[i].Body_Weight;
                            var telesnaTemperatura = rows[i].Temperature;
                            var sistolicniKrvniTlak = rows[i].Systolic;
                            var diastolicniKrvniTlak = rows[i].Diastolic;
                            var nasicenostKrviSKisikom = rows[i].spO2;
                            var merilec = rows[i].ime;

                            var telVisM = telesnaVisina / 100;
                            var itm = parseFloat(telesnaTeza) / (parseFloat(telVisM) * parseFloat(telVisM));
                            itm = Number((itm).toFixed(1));

                            var obj = {date:  datumInUra.split("T")[0].replace("-", "").replace("-", ""), telesnaTemperatura: telesnaTemperatura, normalna: 36.8};
                            var obj1 = {date:  datumInUra.split("T")[0].replace("-", "").replace("-", ""), ITM: itm, normalna: 23.5};
                            var obj2 = {date:  datumInUra.split("T")[0].replace("-", "").replace("-", ""), visina: telesnaVisina};
                            var obj3 = {date:  datumInUra.split("T")[0].replace("-", "").replace("-", ""), Sistolični: sistolicniKrvniTlak, Diastolični: diastolicniKrvniTlak, SistoličniNormalno: 125, DiastoličniNormalno: 85};
                            var obj4 = {date:  datumInUra.split("T")[0].replace("-", "").replace("-", ""), NasičenostSKisikom: nasicenostKrviSKisikom, normalna: 98};


                            if(preveriVitalne("temp", telesnaTemperatura) != 0){
                                $("#meritve-temp").append("<tr> <td><i style='font-size: small'>"+datumInUra.split("T")[0]+"</i></td> <td><i style='font-size: small; color: red;'>"+telesnaTemperatura+"</i></td> </tr>")

                            }else{
                                $("#meritve-temp").append("<tr> <td><i style='font-size: small'>"+datumInUra.split("T")[0]+"</i></td> <td><i style='font-size: small'>"+telesnaTemperatura+"</i></td> </tr>")

                            }
                            if(preveriVitalne("itm", itm) != 0){
                                $("#meritve-itm").append("<tr> <td><i style='font-size: small'>"+datumInUra.split("T")[0]+"</i></td> <td><i style='font-size: small; color: red;'>"+itm+"</i></td> </tr>")

                            }else{
                                $("#meritve-itm").append("<tr> <td><i style='font-size: small'>"+datumInUra.split("T")[0]+"</i></td> <td><i style='font-size: small'>"+itm+"</i></td> </tr>")

                            }

                            if(preveriVitalne("sis", sistolicniKrvniTlak, diastolicniKrvniTlak) != 0){
                                $("#meritve-tlak").append("<tr> <td><i style='font-size: small'>"+datumInUra.split("T")[0]+"</i></td> <td><i style='font-size: small; color: red;'>"+sistolicniKrvniTlak+"/"+diastolicniKrvniTlak+"</i></td> </tr>")

                            }else{
                                $("#meritve-tlak").append("<tr> <td><i style='font-size: small'>"+datumInUra.split("T")[0]+"</i></td> <td><i style='font-size: small'>"+sistolicniKrvniTlak+"/"+diastolicniKrvniTlak+"</i></td> </tr>")

                            }

                            if(preveriVitalne("nas", nasicenostKrviSKisikom) != 0){
                                $("#meritve-nas").append("<tr> <td><i style='font-size: small'>"+datumInUra.split("T")[0]+"</i></td> <td><i style='font-size: small; color: red;'>"+nasicenostKrviSKisikom+"</i></td> </tr>")

                            }else{
                                $("#meritve-nas").append("<tr> <td><i style='font-size: small'>"+datumInUra.split("T")[0]+"</i></td> <td><i style='font-size: small'>"+nasicenostKrviSKisikom+"</i></td> </tr>")

                            }

                            $("#meritve-visina").append("<tr> <td><i style='font-size: small'>"+datumInUra.split("T")[0]+"</i></td> <td><i style='font-size: small'>"+telesnaVisina+"</i></td> </tr>")


                            dat.push(obj);
                            dat1.push(obj1);
                            dat2.push(obj2);
                            dat3.push(obj3);
                            dat4.push(obj4);


                        }
                        color.domain(d3.keys(dat[0]).filter(function(key) { return key !== "date"; }));

                        dat.forEach(function(d) {
                            d.date = parseDate(d.date);

                        });

                        var cities = color.domain().map(function(name) {
                            return {
                                name: name,
                                values: dat.map(function(d) {
                                    return {date: d.date, temperature: +d[name]};
                                })
                            };
                        });

                        x.domain(d3.extent(dat, function(d) { return d.date; }));

                        y.domain([
                            d3.min(cities, function(c) { return d3.min(c.values, function(v) { return v.temperature; }); }),
                            d3.max(cities, function(c) { return d3.max(c.values, function(v) { return v.temperature; }); })
                        ]);

                        svg.append("g")
                            .attr("class", "x axis")
                            .attr("transform", "translate(0," + height + ")")
                            .call(xAxis);

                        svg.append("g")
                            .attr("class", "y axis")
                            .call(yAxis)
                            .append("text")
                            .attr("transform", "rotate(-90)")
                            .attr("y", 6)
                            .attr("dy", ".71em")
                            .style("text-anchor", "end")
                            .text("Temperature (ºC)");

                        var city = svg.selectAll(".city")
                            .data(cities)
                            .enter().append("g")
                            .attr("class", "city");

                        city.append("path")
                            .attr("class", "line")
                            .attr("d", function(d) { return line(d.values); })
                            .style("stroke", function(d) { return color(d.name); });

                        city.append("text")
                            .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
                            .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")"; })
                            .attr("x", 3)
                            .attr("dy", ".35em")
                            .text(function(d) { return d.name; });

                        // ------------------------ITM----------------------------------------------------

                        color.domain(d3.keys(dat1[0]).filter(function(key) { return key !== "date"; }));

                        dat1.forEach(function(d) {
                            d.date = parseDate(d.date);
                        });

                        var cities1 = color.domain().map(function(name) {
                            return {
                                name: name,
                                values: dat1.map(function(d) {
                                    return {date: d.date, temperature: +d[name]};
                                })
                            };
                        });

                        x.domain(d3.extent(dat1, function(d) { return d.date; }));

                        y.domain([
                            d3.min(cities1, function(c) { return d3.min(c.values, function(v) { return v.temperature; }); }),
                            d3.max(cities1, function(c) { return d3.max(c.values, function(v) { return v.temperature; }); })
                        ]);

                        svg1.append("g")
                            .attr("class", "x axis")
                            .attr("transform", "translate(0," + height + ")")
                            .call(xAxis);

                        svg1.append("g")
                            .attr("class", "y axis")
                            .call(yAxis)
                            .append("text")
                            .attr("transform", "rotate(-90)")
                            .attr("y", 6)
                            .attr("dy", ".71em")
                            .style("text-anchor", "end")
                            .text("ITM");

                        var city1 = svg1.selectAll(".city")
                            .data(cities1)
                            .enter().append("g")
                            .attr("class", "city");

                        city1.append("path")
                            .attr("class", "line")
                            .attr("d", function(d) { return line(d.values); })
                            .style("stroke", function(d) { return color(d.name); });

                        city1.append("text")
                            .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
                            .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")"; })
                            .attr("x", 3)
                            .attr("dy", ".35em")
                            .text(function(d) { return d.name; });

                        // ------------------------VISINA----------------------------------------------------

                        color.domain(d3.keys(dat2[0]).filter(function(key) { return key !== "date"; }));

                        dat2.forEach(function(d) {
                            d.date = parseDate(d.date);
                        });

                        var cities2 = color.domain().map(function(name) {
                            return {
                                name: name,
                                values: dat2.map(function(d) {
                                    return {date: d.date, temperature: +d[name]};
                                })
                            };
                        });

                        x.domain(d3.extent(dat2, function(d) { return d.date; }));

                        y.domain([
                            d3.min(cities2, function(c) { return d3.min(c.values, function(v) { return v.temperature; }); }),
                            d3.max(cities2, function(c) { return d3.max(c.values, function(v) { return v.temperature; }); })
                        ]);

                        svg2.append("g")
                            .attr("class", "x axis")
                            .attr("transform", "translate(0," + height + ")")
                            .call(xAxis);

                        svg2.append("g")
                            .attr("class", "y axis")
                            .call(yAxis)
                            .append("text")
                            .attr("transform", "rotate(-90)")
                            .attr("y", 6)
                            .attr("dy", ".71em")
                            .style("text-anchor", "end")
                            .text("Telesna višina");

                        var city2 = svg2.selectAll(".city")
                            .data(cities2)
                            .enter().append("g")
                            .attr("class", "city");

                        city2.append("path")
                            .attr("class", "line")
                            .attr("d", function(d) { return line(d.values); })
                            .style("stroke", function(d) { return color(d.name); });

                        city2.append("text")
                            .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
                            .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")"; })
                            .attr("x", 3)
                            .attr("dy", ".35em")
                            .text(function(d) { return d.name; });

                        // ------------------------TLAK----------------------------------------------------

                        color.domain(d3.keys(dat3[0]).filter(function(key) { return key !== "date"; }));

                        dat3.forEach(function(d) {
                            d.date = parseDate(d.date);
                        });

                        var cities3 = color.domain().map(function(name) {
                            return {
                                name: name,
                                values: dat3.map(function(d) {
                                    return {date: d.date, temperature: +d[name]};
                                })
                            };
                        });

                        x.domain(d3.extent(dat3, function(d) { return d.date; }));

                        y.domain([
                            d3.min(cities3, function(c) { return d3.min(c.values, function(v) { return v.temperature; }); }),
                            d3.max(cities3, function(c) { return d3.max(c.values, function(v) { return v.temperature; }); })
                        ]);

                        svg3.append("g")
                            .attr("class", "x axis")
                            .attr("transform", "translate(0," + height + ")")
                            .call(xAxis);

                        svg3.append("g")
                            .attr("class", "y axis")
                            .call(yAxis)
                            .append("text")
                            .attr("transform", "rotate(-90)")
                            .attr("y", 6)
                            .attr("dy", ".71em")
                            .style("text-anchor", "end")
                            .text("Tlak");

                        var city3 = svg3.selectAll(".city")
                            .data(cities3)
                            .enter().append("g")
                            .attr("class", "city");

                        city3.append("path")
                            .attr("class", "line")
                            .attr("d", function(d) { return line(d.values); })
                            .style("stroke", function(d) { return color(d.name); });

                        city3.append("text")
                            .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
                            .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")"; })
                            .attr("x", 3)
                            .attr("dy", ".35em")
                            .text(function(d) { return d.name; });


                        // ------------------------NASICENOST----------------------------------------------------

                        color.domain(d3.keys(dat4[0]).filter(function(key) { return key !== "date"; }));

                        dat4.forEach(function(d) {
                            d.date = parseDate(d.date);
                        });

                        var cities4 = color.domain().map(function(name) {
                            return {
                                name: name,
                                values: dat4.map(function(d) {
                                    return {date: d.date, temperature: +d[name]};
                                })
                            };
                        });

                        x.domain(d3.extent(dat4, function(d) { return d.date; }));

                        y.domain([
                            d3.min(cities4, function(c) { return d3.min(c.values, function(v) { return v.temperature; }); }),
                            d3.max(cities4, function(c) { return d3.max(c.values, function(v) { return v.temperature; }); })
                        ]);

                        svg4.append("g")
                            .attr("class", "x axis")
                            .attr("transform", "translate(0," + height + ")")
                            .call(xAxis);

                        svg4.append("g")
                            .attr("class", "y axis")
                            .call(yAxis)
                            .append("text")
                            .attr("transform", "rotate(-90)")
                            .attr("y", 6)
                            .attr("dy", ".71em")
                            .style("text-anchor", "end")
                            .text("Nasičenost krvi s kisikom");

                        var city4 = svg4.selectAll(".city")
                            .data(cities4)
                            .enter().append("g")
                            .attr("class", "city");

                        city4.append("path")
                            .attr("class", "line")
                            .attr("d", function(d) { return line(d.values); })
                            .style("stroke", function(d) { return color(d.name); });

                        city4.append("text")
                            .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
                            .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")"; })
                            .attr("x", 3)
                            .attr("dy", ".35em")
                            .text(function(d) { return d.name; });


                    } else {
                        alert("ni podatkov");
                    }

                },
                error: function (err) {
                    alert(JSON.parse(err.responseText).userMessage);
                }
            });
        },
        error: function (err) {
            alert(JSON.parse(err.responseText).userMessage);
        }
    });
}





//});