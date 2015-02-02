/**
 * Created by gasper on 12/9/14.
 */

function toggle_visibility(id) {
    if(id == "visibility-dodaj-vpis-vitalnih"){
        var date = new Date();
        $("#datum-vnosa").val(date.toISOString());
    }

    var e = document.getElementById(id);
    if(e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}


/*setInterval(function setTime(){
    var currentdate = new Date();
    var mins = currentdate.getMinutes();
    if(currentdate.getMinutes().toString().length < 2){
        mins = "0"+currentdate.getMinutes();
    }else{
        mins = currentdate.getMinutes();
    }
    var datetime = currentdate.getHours() + ":" + mins;

    document.getElementById('time').innerHTML = datetime;
}, 3000);*/

function rotatePictureBody(){
    jQuery('.center-image').load("back-body.html");
}
function rotatePictureBodyBack(){
    jQuery('.center-image').load("front-body.html");
}

$(document).ready(function() {
    var up = localStorage.getItem('ime_uporabnika');
    $("#naslovnoIme").text(up);
    $("#up-ime-tag").text(" "+up);
    $("#up-ime-opis").text(" "+up);

    $("#disabledInput\\ 1").attr("placeholder", up.split(" ")[0]);
    $("#disabledInput\\ 2").attr("placeholder", up.split(" ")[1]);

    nastaviIndexStran();


});




function generirajDogodke(){
    sessionId = getSessionId();
    var ehr = localStorage.getItem('ehr_'+globalni_priimek);
    if(globalni_priimek == "Demolis"){
        ehr = ehrIdDemolis;
    }else if(globalni_priimek == "Konda"){
        ehr = ehrIdKonda;
    }else if(globalni_priimek == "Nerovac"){
        ehr = ehrIdNerovac;
    }
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
        "from EHR e[e/ehr_id/value='" + ehr + "'] " +
        "contains COMPOSITION a " +
        "contains (" +
        "OBSERVATION a_a[openEHR-EHR-OBSERVATION.body_temperature.v1] and " +
        "OBSERVATION a_b[openEHR-EHR-OBSERVATION.blood_pressure.v1] and " +
        "OBSERVATION a_c[openEHR-EHR-OBSERVATION.height.v1] and " +
        "OBSERVATION a_d[openEHR-EHR-OBSERVATION.body_weight.v1] and " +
        "OBSERVATION a_f[openEHR-EHR-OBSERVATION.indirect_oximetry.v1]) "+
        "order by a_a/data[at0002]/events[at0003]/time/value desc " +
        "offset 0 limit 1";

    $.ajax({
        url: baseUrl + "/query?" + $.param({"aql": AQL}),
        type: 'GET',
        headers: {"Ehr-Session": sessionId},
        success: function (res) {
            if (res) {
                var rows = res.resultSet;
                for (var i in rows) {
                    var datumInUra = rows[i].cas;



                    var dat = datumInUra.split("T");
                    datumInUra = dat[0] + " (" + dat[1].substring(0, 5) + ")";
                    var datInt = dat[0].replace("-", "").replace("-", "");

                    var now = new Date();

                    var zdaj = parseInt(now.toISOString().split("T")[0].replace('-', '').replace("-", ""));


                    // dodajanje opomnika za vitalne znake (tip: 0)
                    if(parseInt(datInt) + 600 < zdaj) {

                        var x = '<tr> <td><span class="glyphicon glyphicon-warning-sign yellow"></span> Že več kot (6) mesecev niste posodobili svojih <a href="vitalni_znaki.html">vitalnih znakov</a>. Čimprej posodobite podatke.</td> <td>' + now.toISOString().split("T")[0] + '</td> <td><a href="javascript:void(0)" class="glyphicon glyphicon-remove small remove-opomnik"></a></td> </tr>';
                        $("#tbh").after(x);

                    }

                    // dodajanje opomnika ce je zadnji vitalni slab (tip: 2)


                    var telesnaTemperatura = rows[i].Temperature;
                    var sistolicniKrvniTlak = rows[i].Systolic;
                    var diastolicniKrvniTlak = rows[i].Diastolic;
                    var nasicenostKrviSKisikom = rows[i].spO2;




                    if(preveriVitalne("temp", telesnaTemperatura) != 0 || preveriVitalne("sis", sistolicniKrvniTlak, diastolicniKrvniTlak) != 0 || preveriVitalne("nas", nasicenostKrviSKisikom) != 0) {

                        var x = '<tr> <td><span class="glyphicon glyphicon-warning-sign yellow"></span> Vaši zadnji <a href="vitalni_znaki.html">vitalni znaki</a> nakazujejo na bolezen. Čimprej obiščite zdravnika (<a href="map.html">zemljevid najbližnjih zdr.inst.</a>).</td> <td>' + now.toISOString().split("T")[0] + '</td> <td><a href="javascript:void(0)" class="glyphicon glyphicon-remove small remove-opomnik"></a></td> </tr>';
                        $("#tbh").after(x);

                    }else{

                    }

                    //dodajanje opomnika za spec.pregledi (tip: 1)

                    $.ajax({
                        url: baseUrl + "/demographics/ehr/" + ehr + "/party",
                        type: 'GET',
                        headers: {"Ehr-Session": sessionId},
                        success: function (data) {
                            var party = data.party;
                            var nezakSpec = "";

                            party.partyAdditionalInfo.forEach(function (el) {

                                if(el.key === 'nezakljSpecPregledi'){
                                    nezakSpec = el.value.split("|||");
                                }

                            });
                            var now = new Date();

                            var zdaj = parseInt(now.toISOString().split("T")[0].replace('-', '').replace("-", ""));
                            for(var i = 0; i < nezakSpec.length; i++){
                                var nezak = nezakSpec[i].split("|");

                                var specialist = nezak[0];

                                d = new Date();
                                cez3Dni = new Date(d.setDate(d.getDate() + 3));
                                pred3Dni = new Date(d.setDate(d.getDate() - 3));
                                var dates = [];
                                dates = nezak[2].split(".");

                                if(new Date(dates[2], dates[1]-1, dates[0]) < cez3Dni && new Date(dates[2], dates[1]-1, dates[0]) > cez3Dni) {
                                    var x = '<tr> <td><span class="glyphicon glyphicon-eye-open blue"></span> Bliža se vaš <a href="pregled_podatkov.html">pregled pri '+specialist+'-u</a>. Ne pozabite izvidov!</td> <td>' + now.toISOString().split("T")[0] + '</td> <td><a href="javascript:void(0)" class="glyphicon glyphicon-remove small remove-opomnik" id=""></a></td> </tr>';
                                    $("#tbh").after(x);




                                }else{

                                }

                            }

                            //dodajanje opomnika za alergije (tip: 2)
                             var AQL =
                             "select "+
                             "a_a/data[at0001]/items[at0002]/value/value as Substance_Agent, "+
                             "a_a/data[at0001]/items[at0006]/value/value as Comment, "+
                             "a_a/data[at0001]/items[at0048]/value/value as Recorded, "+
                             "a_a/protocol[at0042]/items[at0045]/value/value as Clinical_Impact, "+
                             "a_a/protocol[at0042]/items[at0047]/value/value as Certainty "+
                             "from EHR e[e/ehr_id/value='" + ehr + "'] " +
                             "contains COMPOSITION a "+
                             "contains EVALUATION a_a[openEHR-EHR-EVALUATION.adverse_reaction-allergy.v1] "+
                             "offset 0";

                             $.ajax({
                                 url: baseUrl + "/query?" + $.param({"aql": AQL}),
                                 type: 'GET',
                                 headers: {"Ehr-Session": sessionId},
                                 success: function (res) {
                                 if (res) {
                                     var rows = res.resultSet;
                                     for (var i in rows) {
                                     var al = rows[i].Substance_Agent;
                                     var zd = rows[i].Clinical_Impact;
                                     var tr = rows[i].Certainty;



                                     var d = new Date();
                                     var n = d.getMonth()+1;

                                         //spremeni 'n' pri pomladi
                                     if((tr == "Pomlad" && n == 12) || (tr == "Poletje" && n == 6) || (tr == "Pozimi" && n == 12) || (tr == "Jesen" && n == 10)) {
                                         var x = '<tr> <td><span class="glyphicon glyphicon-eye-open blue"></span> Prihaja ' + tr + ' - čas vaših <a href="alergije.html">alergij</a> - ' + al + '. Priporočam vam ' + zd + ', ki ste ga do sedaj najbolje prenašali.</td> <td>' + (new Date).toISOString().split("T")[0] + '</td> <td><a href="javascript:void(0)" class="glyphicon glyphicon-remove small remove-opomnik" id=""></a></td> </tr>';
                                         if(zd == "/"){
                                             x = '<tr> <td><span class="glyphicon glyphicon-eye-open blue"></span> Prihaja ' + tr + ' - čas vaših <a href="alergije.html">alergij</a> - ' + al + '. Priporočam vam pazlivejše ravnanje.</td> <td>' + (new Date).toISOString().split("T")[0] + '</td> <td><a href="javascript:void(0)" class="glyphicon glyphicon-remove small remove-opomnik" id=""></a></td> </tr>';

                                         }
                                         $("#tbh").after(x);

                                     }else{

                                     }



                                     }

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
                if(globalno_ime == "Peter"){
                    var x = '<tr> <td><span class="glyphicon glyphicon-eye-open blue"></span> Ste v letih, ko je vaš oče dobil diagnozo Parkinsove - priporočam testni pregled. Zglasite se pri svoji osebni zdravnici. Kontakt ter ordinacijske ure so napisane malo nižje.</td> <td>2014-12-12</td> <td><a href="javascript:void(0)" class="glyphicon glyphicon-remove small remove-opomnik"></a></td> </tr>';
                    $("#tbh").after(x);
                }
                else if(globalno_ime == "Ana"){
                    var x = '<tr> <td><span class="glyphicon glyphicon-eye-open blue"></span> Ste v letih, ko je vaša mati dobila diagnozo raka na črevesju - priporočam testni pregled. Zglasite se pri svoji osebni zdravnici. Kontakt ter ordinacijske ure so napisane malo nižje.</td> <td>2014-12-12</td> <td><a href="javascript:void(0)" class="glyphicon glyphicon-remove small remove-opomnik"></a></td> </tr>';
                    $("#tbh").after(x);
                }

            } else {
                alert("ni podatkov");
            }

        },
        error: function (err) {
            alert(JSON.parse(err.responseText).userMessage);
        }


    });
}




$("#tabela-opomnikov").on('click', '.remove-opomnik', function(e){

    $(this).parent().parent().html("");

});



