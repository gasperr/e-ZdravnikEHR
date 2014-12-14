/**
 * Created by gasper on 12/12/14.
 */
var baseUrl = 'https://rest.ehrscape.com/rest/v1';
var queryUrl = baseUrl + '/query';

var username = "ois.seminar";
var password = "ois4fri";

function getSessionId() {
    var response = $.ajax({
        type: "POST",
        url: baseUrl + "/session?username=" + encodeURIComponent(username) +
        "&password=" + encodeURIComponent(password),
        async: false
    });
    return response.responseJSON.sessionId;
}

var globalno_ime = localStorage.getItem('ime_uporabnika').split(" ")[0];
var globalni_priimek = localStorage.getItem('ime_uporabnika').split(" ")[1];

/* ------ podatki -------- */
var picture,
    naslovBivanja,
    krajBivanja,
    posta,
    rojstniDatum,
    starost,
    rojstniKraj,
    stevilkaKartice,
    zavarovalnica,
    stPolice,
    tipZavarovanja,
    poteceDne;

var nezakljSpecPregledi = [{}];
var zdEkipa = [{}];
var zdEkipaVec = [{}];
var oce = [{}];
var mati = [{}];
var oceOceta = [{}];
var matiOceta = [{}];
var oceMati = [{}];
var matiMati = [{}];


switch(globalno_ime){
    case "Peter":
        picture = "images/old_man_by_lash_upon_lash-d5j71hq.jpg";
        naslovBivanja = "Metleče 224";
        krajBivanja = "Šoštanj";
        posta = "3325";
        rojstniDatum = "1949-10-07T09:08";
        starost = (new Date().getFullYear() - parseInt(rojstniDatum.split("-")[0])).toString();
        rojstniKraj = "Slovenj Gradec";
        stevilkaKartice = "032822733";
        zavarovalnica = "Zavarovalnica Maribor";
        stPolice = "11-180-980";
        tipZavarovanja = "Nezgodno";
        poteceDne = "15.10.2018";

        nezakljSpecPregledi = [ {specialist: 'Kardiolog', ustanova: 'SB Celje', nasljPregled: '19.5.2015'},
                                 {specialist: 'Nevrolog', ustanova: 'UKC LJ', nasljPregled: '04.05.2015'}];
        zdEkipa = [{naziv: 'dr.med. Olga Lonec Pogačar', institucija: 'Zdravstveni dom Ljubljana, Rožna, Aškarčeva', vrsta: 'Osebni'},
            {naziv: 'dr.med. Olga Lonec Pogačar', institucija: 'Zdravstveni dom Ljubljana, Rožna, Aškarčeva', vrsta: 'Kardiolog'},
            {naziv: 'dr.med. Olga Lonec Pogačar', institucija: 'Zdravstveni dom Ljubljana, Rožna, Aškarčeva', vrsta: 'Nevrolog'}];

        zdEkipaVec = [{kontakt: '041-768-998' , ordUre: 'Pon-Sre: 08h-15h', slika: 'images/doctor-1-female.jpg'},
            {kontakt: '041-768-998' , ordUre: 'Pon-Sre: 08h-15h', slika: 'images/doctor-1-female.jpg'},
            {kontakt: '041-768-998' , ordUre: 'Pon-Sre: 08h-15h', slika: 'images/doctor-1-female.jpg'}];

        oce = [{name: "Janez Demolis", rojen: "31.5.1929-25.6.2011", genBolezni: 'Parkinsova'}];
        mati = [{name: "Magda Petrovič", rojen: "24.3.1932-25.6.2005", genBolezni: 'Kožni rak (melancitni melanom)'}];

        oceOceta = [{name: "Peter Demolis", rojen: "31.5.1911-25.6.2000", genBolezni: 'N/A'}];
        matiOceta = [{name: "Petra Lorbek", rojen: "26.5.1911-9.5.2002", genBolezni: 'N/A'}];

        oceMati = [{name: "Rajko Lorbek", rojen: "31.7.1909-25.6.1999", genBolezni: 'N/A'}];
        matiMati = [{name: "Ivica Kranjec", rojen: "22.7.1911-19.9.2000", genBolezni: 'N/A'}];
        break;

    case "Ana":
        picture = "images/ana-konda.jpg";
        naslovBivanja = "Cesta 27. aprila 31, 22";
        krajBivanja = "Ljubljana";
        posta = "1188";
        rojstniDatum = "1982-12-1T12:08";
        starost = (new Date().getFullYear() - parseInt(rojstniDatum.split("-")[0])).toString();
        rojstniKraj = "Ljubljana";
        stevilkaKartice = "031232544";
        zavarovalnica = "Triglav";
        stPolice = "21-156-230";
        tipZavarovanja = "Nezgodno";
        poteceDne = "1.8.2022";

        nezakljSpecPregledi = [{specialist: 'Dermatolog', ustanova: 'SB Celje', nasljPregled: '10.5.2015'},
                                 {specialist: 'Hematolog', ustanova: 'UKC Celje', nasljPregled: '22.8.2015'}];

        zdEkipa = [{naziv: 'dr.med. Olga Lonec Pogačar', institucija: 'Zdravstveni dom Ljubljana, Rožna, Aškarčeva', vrsta: 'Osebni'},
            {naziv: 'dr.med. Olga Lonec Pogačar', institucija: 'Zdravstveni dom Ljubljana, Rožna, Aškarčeva', vrsta: 'Dermatolog'},
            {naziv: 'dr.med. Olga Lonec Pogačar', institucija: 'Zdravstveni dom Ljubljana, Rožna, Aškarčeva', vrsta: 'Hematolog'}];

        zdEkipaVec = [{kontakt: '041-768-998' , ordUre: 'Pon-Sre: 08h-15h', slika: 'images/doctor-1-female.jpg'},
            {kontakt: '041-768-998' , ordUre: 'Pon-Sre: 08h-15h', slika: 'images/doctor-1-female.jpg'},
            {kontakt: '041-768-998' , ordUre: 'Pon-Sre: 08h-15h', slika: 'images/doctor-1-female.jpg'}];

        oce = [{name: "Marko Konda", rojen: "01.4.1952-N/A", genBolezni: "N/A"}];
        mati = [{name: "Marjeta Čuper", rojen: "24.3.1962-15.5.2005", genBolezni: "Rak na črevesju"}];

        oceOceta = [{name: "Branko Konda", rojen: "31.5.1932-25.6.2002", genBolezni: "N/A"}];
        matiOceta = [{name: "Ivica Kenda", rojen: "26.5.1930-9.5.2000", genBolezni: "N/A"}];

        oceMati = [{name: "Aleksander Kenda", rojen: "5.8.1942-25.6.2010", genBolezni: "N/A"}];
        matiMati = [{name: "Branka Karc", rojen: "22.7.1940-19.9.2000", genBolezni: "N/A"}];
        break;

    case "Rok":
        picture = "images/rok-nerovac.jpg";
        naslovBivanja = "Mestni log 55b";
        krajBivanja = "Ljubljana";
        posta = "1000";
        rojstniDatum = "1994-10-7T20:12";
        starost = (new Date().getFullYear() - parseInt(rojstniDatum.split("-")[0])).toString();
        rojstniKraj = "Ljubljana";
        stevilkaKartice = "031776544";
        zavarovalnica = "Triglav";
        stPolice = "29-998-670";
        tipZavarovanja = "Nezgodno";
        poteceDne = "5.11.2028";

        nezakljSpecPregledi = [{specialist: 'Dermatolog', ustanova: 'SB Celje', nasljPregled: '10.5.2015'},
            {specialist: 'Onkolog', ustanova: 'UKC LJ', nasljPregled: '15.12.2014'}];

        zdEkipa = [{naziv: 'dr.med. Olga Lonec Pogačar', institucija: 'Zdravstveni dom Ljubljana, Rožna, Aškarčeva', vrsta: 'Osebni'},
                 {naziv: 'dr.med. Olga Lonec Pogačar', institucija: 'Zdravstveni dom Ljubljana, Rožna, Aškarčeva', vrsta: 'Dermatolog'},
                {naziv: 'dr.med. Olga Lonec Pogačar', institucija: 'Zdravstveni dom Ljubljana, Rožna, Aškarčeva', vrsta: 'Onkolog'}];

        zdEkipaVec = [{kontakt: '041-768-998' , ordUre: 'Pon-Sre: 08h-15h', slika: 'images/doctor-1-female.jpg'},
            {kontakt: '041-768-998' , ordUre: 'Pon-Sre: 08h-15h', slika: 'images/doctor-1-female.jpg'},
            {kontakt: '041-768-998' , ordUre: 'Pon-Sre: 08h-15h', slika: 'images/doctor-1-female.jpg'}];

        oce = [{name: "Grega Nerovec", rojen: "01.4.1971-N/A", genBolezni: 'N/A'}];
        mati = [{name: "Bojana Brešč", rojen: "24.3.1972-15.5.2005", genBolezni: 'Težave s ščitnico'}];

        oceOceta = [{name: "Janez Nerovec", rojen: "31.5.1950-25.6.2009", genBolezni: 'Rak na črevesju'}];
        matiOceta = [{name: "Tatjana Grun", rojen: "26.5.1949-9.5.2010", genBolezni: 'Kožni rak (MM)'}];

        oceMati = [{name: "Ivica Grun", rojen: "5.8.1942-N/A", genBolezni: 'N/A'}];
        matiMati = [{name: "Bogdana Mark", rojen: "22.7.1940-N/A", genBolezni: 'N/A'}];
        break;
}


function kreirajEHRDemoOseb() {
    sessionId = getSessionId();

    var ime = globalno_ime;
    var priimek = globalni_priimek;
    var datumRojstva = rojstniDatum;


    var specPregledi = "";
    nezakljSpecPregledi.forEach(function(data){
       specPregledi = specPregledi +  data.specialist + "|" + data.ustanova + "|" + data.nasljPregled + "|||";
    });
    specPregledi = specPregledi.substring(0, specPregledi.length-3);

    var zdEk = "";
    zdEkipa.forEach(function(data){
        zdEk = zdEk + data.naziv +"|"+data.institucija+"|"+data.vrsta+"|||";
    });
    zdEk = zdEk.substring(0, zdEk.length-3);

    var zdEkVec = "";
    zdEkipaVec.forEach(function(data){
        zdEkVec = zdEkVec + data.kontakt +"|"+data.ordUre+"|"+data.slika+"|||";
    });
    zdEkVec = zdEkVec.substring(0, zdEkVec.length-3);


    var oc = "";
    oce.forEach(function(data){
        oc = oc + data.name + "|" + data.rojen + "|" + data.genBolezni;
    });

    var ma = "";
    mati.forEach(function(data){
        ma = ma + data.name + "|" + data.rojen + "|" + data.genBolezni;
    });

    var ocOc = "";
    oceOceta.forEach(function(data){
        ocOc = ocOc + data.name + "|" + data.rojen+ "|" + data.genBolezni;
    });

    var maOc = "";
    matiOceta.forEach(function(data){
        maOc = maOc + data.name + "|" + data.rojen + "|" + data.genBolezni;
    });

    var ocMa = "";
    oceMati.forEach(function(data){
        ocMa = ocMa + data.name + "|" + data.rojen+ "|" + data.genBolezni;
    });

    var maMa = "";
    matiMati.forEach(function(data){
        maMa = maMa + data.name + "|" + data.rojen + "|" + data.genBolezni;
    });



    $.ajaxSetup({
        headers: {"Ehr-Session": sessionId}
    });
    $.ajax({
        url: baseUrl + "/ehr",
        type: 'POST',
        success: function (data) {
            var ehrId = data.ehrId;
            localStorage.setItem('ehr_'+globalni_priimek, ehrId);

            var partyData = {
                firstNames: ime,
                lastNames: priimek,
                dateOfBirth: datumRojstva,
                partyAdditionalInfo: [
                    {key: "ehrId", value: ehrId},
                    {key: "picture", value: picture},
                    {key: "naslovBivanja", value: naslovBivanja},
                    {key: "krajBivanja", value: krajBivanja},
                    {key: "posta", value: posta},
                    {key: "starost", value: starost},
                    {key: "rojstniKraj", value: rojstniKraj},
                    {key: "stevilkaKartice", value: stevilkaKartice},
                    {key: "zavarovalnica", value: zavarovalnica},
                    {key: "stevilkaPolice", value: stPolice},
                    {key: "tipZavarovanja", value: tipZavarovanja},
                    {key: "poteceDne", value: poteceDne},
                    {key: "nezakljSpecPregledi", value: specPregledi},
                    {key: "zdEkipa", value: zdEk},
                    {key: "zdEkipaVec", value: zdEkVec},
                    {key: "oce", value: oc},
                    {key: "mati", value: ma},
                    {key: "oceOce", value: ocOc},
                    {key: "oceMati", value: ocMa},
                    {key: "matiOce", value: maOc},
                    {key: "matiMati", value: maMa}
                ]
            };
            $.ajax({
                url: baseUrl + "/demographics/party",
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(partyData),
                success: function (party) {
                    if (party.action == 'CREATE') {
                        location.reload(true);
                       alert("Uspešno kreiran EHR za osebo "+globalno_ime+" "+globalni_priimek+"; EHR ID = "+ehrId+" .");
                    }
                },
                error: function(err) {
                    alert("ERROR: "+JSON.parse(err.responseText).userMessage);
                }
            });
            generirajVitalneZnakeDemoOseb(ime);
        }

    });





}

function generirajVitalneZnakeDemoOseb(oseba){

    var datum, merilec, visina, teza, temp, sis, dis, nas;
    var alerg, simp, zdrav, record, traj;
    var naz, razl, jem, zac, kon;

    switch(oseba){
        case "Peter":

            datum = "1951-11-5T11:56";
            merilec = "dr med Peter Žgank";
            visina = 90;
            teza = 13;
            temp = 37.8;
            sis = 120;
            dis = 80;
            nas = 95;
            dodajVitalniZnakParametri("Demolis", datum, merilec, visina, teza, temp, sis, dis, nas);

            datum = "1952-12-2T12:16";
            merilec = "dr med Peter Žgank";
            visina = 93;
            teza = 15.5;
            temp = 37;
            sis = 120;
            dis = 80;
            nas = 97;
            dodajVitalniZnakParametri("Demolis", datum, merilec, visina, teza, temp, sis, dis, nas);

            datum = "1955-02-12T05:56";
            merilec = "dr med Peter Žgank";
            visina = 120;
            teza = 20;
            temp = 38.8;
            sis = 123;
            dis = 81;
            nas = 93;
            dodajVitalniZnakParametri("Demolis", datum, merilec, visina, teza, temp, sis, dis, nas);

            datum = "1955-02-14T08:13";
            merilec = "dr med Peter Žgank";
            visina = 120;
            teza = 20.5;
            temp = 39.0;
            sis = 119;
            dis = 80;
            nas = 92;
            dodajVitalniZnakParametri("Demolis", datum, merilec, visina, teza, temp, sis, dis, nas);

            datum = "1955-02-17T09:19";
            merilec = "dr med Peter Žgank";
            visina = 121;
            teza = 21;
            temp = 37.2;
            sis = 121;
            dis = 82;
            nas = 97;
            dodajVitalniZnakParametri("Demolis", datum, merilec, visina, teza, temp, sis, dis, nas);

            datum = "1959-10-07T09:15";
            merilec = "dr med Majda Potrč Žeru";
            visina = 130;
            teza = 40;
            temp = 36.6;
            sis = 129;
            dis = 86;
            nas = 98;
            dodajVitalniZnakParametri("Demolis", datum, merilec, visina, teza, temp, sis, dis, nas);

            datum = "1964-11-05T10:10";
            merilec = "dr med Majda Potrč Žeru";
            visina = 141;
            teza = 55;
            temp = 37.0;
            sis = 125;
            dis = 85;
            nas = 95;
            dodajVitalniZnakParametri("Demolis", datum, merilec, visina, teza, temp, sis, dis, nas);

            datum = "1966-10-10T12:10";
            merilec = "dr med Majda Potrč Žeru";
            visina = 155;
            teza = 65;
            temp = 36.5;
            sis = 129;
            dis = 88;
            nas = 98;
            dodajVitalniZnakParametri("Demolis", datum, merilec, visina, teza, temp, sis, dis, nas);

            datum = "1970-05-05T13:12";
            merilec = "dr med Majda Potrč Žeru";
            visina = 175;
            teza = 77;
            temp = 36.9;
            sis = 131;
            dis = 91;
            nas = 92;
            dodajVitalniZnakParametri("Demolis", datum, merilec, visina, teza, temp, sis, dis, nas);

            datum = "1980-12-29T22:12";
            merilec = "dežurni doktor dr.med. Marko Kranjec";
            visina = 179;
            teza = 81;
            temp = 38.9;
            sis = 135;
            dis = 98;
            nas = 89;
            dodajVitalniZnakParametri("Demolis", datum, merilec, visina, teza, temp, sis, dis, nas);

            // dodaj alergije

            alerg = "Alergija na cvetni prah";
            simp = "Zamašen nos, kihanje";
            zdrav = "Letizen-S";
            record = "1966-03-15T12:21";
            traj = "Pomlad";

            dodajAlergijeParametri("Demolis", alerg, simp, record, zdrav, traj);

            alerg = "Alergija na pršice";
            simp = "Suh kašelj, suha usta";
            zdrav = "/";
            record = "1954-06-12T12:21";
            traj = "Vseskozi";

            dodajAlergijeParametri("Demolis", alerg, simp, record, zdrav, traj);


            //dodaj zdravila
            naz = "Arcoxia";
            razl = "Vnetje kolen";
            jem = "1/24ur";
            zac = "1955-02-12T12:12";
            kon = "1955-02-17T12:12";
            dodajZdraviloParametri("Demolis",naz, razl, jem, zac, kon);

            naz = "Gentamicin";
            razl = "Okužba z gram-neg bakterijo";
            jem = "2/24ur";
            zac = "1980-12-29T12:12";
            kon = "1981-01-12T12:12";
            dodajZdraviloParametri("Demolis",naz, razl, jem, zac, kon);

            naz = "Gentamicin";
            razl = "Okužba";
            jem = "2/12ur";
            zac = "1980-12-29T12:12";
            kon = "2015-01-12T12:12";
            dodajZdraviloParametri("Demolis",naz, razl, jem, zac, kon);

            break;


    }
}

function nastaviIndexStran(){

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

                $("#indexIme").text(" "+party.firstNames);
                $("#indexPriimek").text(" "+party.lastNames);
                $("#indexRojDan").text(" "+party.dateOfBirth.split("T")[0]);
                $("#indexEhrId").text(" "+ehr);
                var zdE = [];
                var zdEV = [];
                party.partyAdditionalInfo.forEach(function (el) {
                    if (el.key === 'naslovBivanja') {
                        $("#indexNaslovBivanja").text(" "+el.value);
                    }
                    if (el.key === 'krajBivanja') {
                        $("#indexKrajBivanja").text(" "+el.value);
                    }
                    if (el.key === 'posta') {
                        $("#indexPosta").text(" "+el.value);
                    }
                    if (el.key === 'starost') {
                        $("#indexStarost").text(" "+el.value);
                    }
                    if (el.key === 'rojstniKraj') {
                        $("#indexRojKraj").text(" "+el.value);
                    }
                    if (el.key === 'stevilkaKartice') {
                        $("#indexStZZZS").text(" "+el.value);
                    }
                    if (el.key === 'starost') {
                        $("#indexStarost").text(" "+el.value); }
                    if (el.key === 'picture') {
                        $("#indexPicture").html("<img src='"+el.value+"'id='indPc''>");

                    }

                    if(el.key === 'zdEkipa'){
                        zdE = el.value.split("|||");
                    }
                    if(el.key === 'zdEkipaVec'){
                        zdEV = el.value.split("|||");
                    }




                });
                $("#zd-ekipa-ul").html("");
                for(var i = 0; i < zdE.length; i++) {
                    var zdEkipa = zdE[i].split("|");
                    var zdEkipaVec = zdEV[i].split("|")
                    var label = "primary";
                    if (zdEkipa[2] == "Osebni") {
                        label = "success"

                    }
                    var html = '<li><div class="zd-ekipa-img"> <img src="' + zdEkipaVec[2] + '" alt="..." class="img-thumbnail"> </div> <strong>Naziv:</strong> ' + zdEkipa[0] + '<br> <strong>Institucija:</strong> ' + zdEkipa[1] + '<br> <strong>Vrsta:</strong> <span class="label-' + label + ' label label-default">' + zdEkipa[2] + '</span><br> <strong>Kontakt:</strong> <span> ' + zdEkipaVec[0] + '</span><br> <strong>Ordinacijske ure:</strong> <span> ' + zdEkipaVec[1] + '</span></li>'
                    $("#zd-ekipa-ul").append(html);
                }

            },
            error: function (err) {
                alert(JSON.parse(err.responseText).userMessage);
            }
        });
    }
}

function posodobiOsnovnePodatke(){
    sessionId = getSessionId();

    var  naslov,
        kraj,
        posta,
        rojDat,
        rojKraj,
        stZZZS;

    naslov = $("#ind_naslov").val();
    kraj = $("#ind_kraj").val();
    posta = $("#ind_posta").val();
    rojDat = $("#ind_rojDat").val();
    rojKraj = $("#ind_rojKraj").val();
    stZZZS = $("#ind_stZZZS").val();
    var starost = (new Date().getFullYear() - parseInt(rojDat.split("-")[0])).toString();

    $.ajaxSetup({
        headers: {"Ehr-Session": sessionId}
    });
    var ehrId = localStorage.getItem('ehr_'+globalni_priimek);
    $.ajax({
        url: baseUrl + "/ehr/"+ehrId,
        type: 'GET',
        success: function (data) {

            if(data.action == "RETRIEVE"){
                alert(data.ehrStatus.modifiable);
            }

            var partyData = {
                dateOfBirth: rojDat,
                partyAdditionalInfo: [
                    {key: "ehrId", value: ehrId},
                    {key: "naslovBivanja", value: naslov},
                    {key: "krajBivanja", value: kraj},
                    {key: "posta", value: posta},
                    {key: "starost", value: starost},
                    {key: "rojstniKraj", value: rojKraj},
                    {key: "stevilkaKartice", value: stZZZS},
                ]
            };
            $.ajax({
                url: baseUrl + "/demographics/party",
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(partyData),
                success: function (party) {
                    if (party.action == 'UPDATE') {
                        alert("Uspešno kreiran EHR za osebo "+globalno_ime+" "+globalni_priimek+"; EHR ID = "+ehrId+" .");
                    }
                },
                error: function(err) {
                    alert("ERROR: "+JSON.parse(err.responseText).userMessage);
                }
            });
        }
    });


}

function nastaviPregledPodatkov(){
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
                var nezakSpec = "";
                $("#indexIme").text(" "+party.firstNames);
                $("#indexPriimek").text(" "+party.lastNames);
                $("#indexRojDan").text(" "+party.dateOfBirth.split("T")[0]);
                $("#indexEhrId").text(" "+ehr);
                var zdE = [];
                var zdEV = [];
                party.partyAdditionalInfo.forEach(function (el) {
                    if (el.key === 'naslovBivanja') {
                        $("#indexNaslovBivanja").text(" "+el.value);
                    }
                    if (el.key === 'krajBivanja') {
                        $("#indexKrajBivanja").text(" "+el.value);
                    }
                    if (el.key === 'posta') {
                        $("#indexPosta").text(" "+el.value);
                    }
                    if (el.key === 'starost') {
                        $("#indexStarost").text(" "+el.value);
                    }
                    if (el.key === 'rojstniKraj') {
                        $("#indexRojKraj").text(" "+el.value);
                    }
                    if (el.key === 'stevilkaKartice') {
                        $("#indexStZZZS").text(" "+el.value);
                    }
                    if (el.key === 'starost') {
                        $("#indexStarost").text(" "+el.value); }
                    if (el.key === 'picture') {
                        $("#indexPicture").html("<img src='"+el.value+"'id='indPc''>");
                    }

                    //zavarovalniski podatki

                    if (el.key === 'zavarovalnica') {
                        $("#zav").html(el.value);
                    }
                    if (el.key === 'stevilkaPolice') {
                        $("#stPol").html(el.value);
                    }
                    if (el.key === 'tipZavarovanja') {
                        $("#tip").html(el.value);
                    }
                    if (el.key === 'poteceDne') {
                        $("#potece").html(el.value);
                    }
                    if (el.key === 'stevilkaKartice') {
                        $("#stZs").html(el.value);
                    }

                    if(el.key === 'nezakljSpecPregledi'){
                        nezakSpec = el.value.split("|||");
                    }




                });
                $("#nezakljSpecPreg").html("");
                $("#nezakljSpecPreg").append("<tr> <th>Specialist</th> <th>Ustanova</th> <th>Nasl.pregled</th> </tr>");
                for(var i = 0; i < nezakSpec.length; i++){
                    var nezak = nezakSpec[i].split("|");

                    var html = '<tr> <td>'+nezak[0]+'</td> <td>'+nezak[1]+'</td> <td>'+nezak[2]+' <a href="#" title="Zakluči" class="glyphicon glyphicon-check" id="zakljuci-spec"></span></td> </tr>'
                    $("#nezakljSpecPreg").append(html);
                }

                // NASTAVI ZADNJE VITALNE PODATKE


                var AQL =
                    "select " +
                    "a_a/data[at0002]/events[at0003]/time/value as cas, " +
                    "a_a/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude as Temperature, " +
                    "a_b/data[at0001]/events[at0006]/data[at0003]/items[at0004]/value/magnitude as Systolic, " +
                    "a_b/data[at0001]/events[at0006]/data[at0003]/items[at0005]/value/magnitude as Diastolic, " +
                    "a_c/data[at0001]/events[at0002]/data[at0003]/items[at0004, 'Body Height/Length']/value/magnitude as Body_Height_Length, " +
                    "a_d/data[at0002]/events[at0003]/data[at0001]/items[at0004, 'Body weight']/value/magnitude as Body_Weight, " +
                    "a_f/data[at0001]/events[at0002]/data[at0003]/items[at0006]/value/numerator as spO2 " +
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
                                var telesnaVisina = rows[i].Body_Height_Length;
                                var telesnaTeza = rows[i].Body_Weight;
                                var telesnaTemperatura = rows[i].Temperature;
                                var sistolicniKrvniTlak = rows[i].Systolic;
                                var diastolicniKrvniTlak = rows[i].Diastolic;
                                var nasicenostKrviSKisikom = rows[i].spO2;
                                var merilec = rows[i].ime;
                                //  alert(merilec);
                                var tezaColor = "";
                                var itmColor = "";
                                var tempColor = "";
                                var sisColor = "";
                                var disColor = "";
                                var nasColor = "";

                                var telVisM = telesnaVisina / 100;
                                var itm = parseFloat(telesnaTeza) / (parseFloat(telVisM) * parseFloat(telVisM));
                                itm = Number((itm).toFixed(1));

                                var dat = datumInUra.split("T");
                                datumInUra = dat[0] + " (" + dat[1].substring(0, 5) + ")";

                                $("#zadnjicPosodobljeni").text(datumInUra);

                                $("#indexTeza").text(telesnaTeza);
                                $("#indexVisina").text(telesnaVisina);
                                $("#indexSis").text(sistolicniKrvniTlak);
                                $("#indexDis").text(diastolicniKrvniTlak);
                                $("#indexNas").text(nasicenostKrviSKisikom);
                                $("#indexTemp").text(telesnaTemperatura);
                                $("#indexItm").text(itm);
                            }

                        } else {
                            alert("ni podatkov");
                        }

                    },
                    error: function (err) {
                        alert(JSON.parse(err.responseText).userMessage);
                    }
                });

                var AQL =
                    "select "+
                    "a_a/activities[at0001]/description[at0002]/items[at0003]/value/value as Medicine, "+
                    "a_a/activities[at0001]/description[at0002]/items[at0010, 'Medication timing']/items[at0012]/value/value as Start_date, "+
                    "a_a/activities[at0001]/description[at0002]/items[at0010, 'Medication timing']/items[at0013]/value/value as Stop_date, "+
                    "a_b/items[at0003]/value/value as Description, "+
                    "a_a/activities[at0001]/description[at0002]/items[at0010, 'Medication timing']/items[at0008]/value/value as Timing_description "+ "" +
                    "from EHR e[e/ehr_id/value='" + ehr + "'] " +
                    "contains COMPOSITION a "+
                    "contains ("+
                    "INSTRUCTION a_a[openEHR-EHR-INSTRUCTION.medication.v1] and "+
                    "CLUSTER a_b[openEHR-EHR-CLUSTER.medication_amount.v1]) "+
                    "offset 0;"
                $("#trenutno-jemajoca-podatki").html('<tr> <th>Naziv</th> <th>Razlog</th> <th>Jemanje</th></tr>');
                $.ajax({
                    url: baseUrl + "/query?" + $.param({"aql": AQL}),
                    type: 'GET',
                    headers: {"Ehr-Session": sessionId},
                    success: function (res) {
                        if (res) {
                            var rows = res.resultSet;
                            for (var i in rows) {
                                var med = rows[i].Medicine;
                                var sd = rows[i].Start_date;
                                var ed = rows[i].Stop_date;
                                var raz = rows[i].Description;
                                var jem = rows[i].Timing_description;

                                var html = '<tr> <td>'+med+'</td> <td>'+raz+'</td> <td>'+jem+'</td> <td>'+sd.split("T")[0]+' - '+ed.split("T")[0]+'</td></tr>'
                                var now = new Date();

                                var zdaj = parseInt(now.toISOString().split("T")[0].replace('-', ''));
                                var zdKonec = parseInt(ed.split("T")[0].replace('-', ''));
                                if(zdaj < zdKonec){
                                    html = '<tr> <td>'+med+'</td> <td>'+raz+'</td> <td>'+jem+'</td></tr>'
                                    $("#trenutno-jemajoca-podatki").append(html);
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
}

function dodajVitalniZnak(){
    sessionId = getSessionId();

    var ehr = localStorage.getItem('ehr_'+globalni_priimek);

    if(ehr == null){
        alert("EHR še ne obstaja! Ponovno zgenerirajte podatke.");
    }else{
        var datumInUra = $("#datum-vnosa").val();
        var telesnaVisina = $("#visina-input").val();
        var telesnaTeza = $("#teza-input").val();
        var telesnaTemperatura = $("#temp-input").val();
        var sistolicniKrvniTlak = $("#sis-input").val();
        var diastolicniKrvniTlak = $("#dis-input").val();
        var nasicenostKrviSKisikom = $("#nas-input").val();
        var merilec = $("#vnos-izvedel").val();

        if (!datumInUra || !telesnaTemperatura || !telesnaTeza || !telesnaVisina || !sistolicniKrvniTlak || !diastolicniKrvniTlak) {
            $("#dodajanjeZnakov").prepend("<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevane podatke!</span>");
        } else {
            $.ajaxSetup({
                headers: {"Ehr-Session": sessionId}
            });
            var podatki = {
                // Preview Structure: https://rest.ehrscape.com/rest/v1/template/Vital%20Signs/example
                "ctx/language": "en",
                "ctx/territory": "SI",
                "ctx/time": datumInUra,
                "vital_signs/indirect_oximetry:0/comment": merilec,
                "vital_signs/height_length/any_event/body_height_length": telesnaVisina,
                "vital_signs/body_weight/any_event/body_weight": telesnaTeza,
                "vital_signs/body_temperature/any_event/temperature|magnitude": telesnaTemperatura,
                "vital_signs/body_temperature/any_event/temperature|unit": "°C",
                "vital_signs/blood_pressure/any_event/systolic": sistolicniKrvniTlak,
                "vital_signs/blood_pressure/any_event/diastolic": diastolicniKrvniTlak,
                "vital_signs/indirect_oximetry:0/spo2|numerator": nasicenostKrviSKisikom
            };
            var parametriZahteve = {
                "ehrId": ehr,
                templateId: 'Vital Signs',
                format: 'FLAT',
                committer: merilec
            };
            $.ajax({
                url: baseUrl + "/composition?" + $.param(parametriZahteve),
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(podatki),
                success: function (res) {
                    toggle_visibility('visibility-dodaj-vpis-vitalnih')
                    var x = document.getElementById("timel").firstChild.className;

                    var tezaColor,
                        itmColor,
                        tempColor,
                        sisColor,
                        disColor,
                        nasColor;

                    var telVisM = telesnaVisina / 100;
                    var itm = parseFloat(telesnaTeza) / (parseFloat(telVisM) * parseFloat(telVisM));
                    itm = Number((itm).toFixed(1));

                    var dat = datumInUra.split("T");
                    datumInUra = dat[0] + " (" + dat[1].substring(0, 5)+")";


                    var danger = 0;
                    var warning = 0;
                    switch(preveriVitalne("itm", itm)){
                        case 1: itmColor = "darkorange";
                                tezaColor = "darkorange";
                                warning = 1;
                                break;
                        case 2: itmColor = "red";
                                tezaColor = "red";
                                danger = 1;
                                break;
                    }
                    switch(preveriVitalne("temp", telesnaTemperatura)){
                        case 1: tempColor = "darkorange";
                                warning = 1;
                                break;
                        case 2: tempColor = "red";
                                danger = 1;
                    }
                    switch(preveriVitalne("sis", sistolicniKrvniTlak, diastolicniKrvniTlak)){
                        case 1: sisColor = "darkorange";
                                disColor = sisColor;
                                warning = 1;
                                break;
                        case 2: sisColor = "red";
                                disColor = sisColor;
                                danger = 1;
                    }
                    switch(preveriVitalne("nas", nasicenostKrviSKisikom)){
                        case 1: nasColor = "darkorange";
                                warning = 1;
                                break;
                        case 2: nasColor = "red"
                                danger = 1;
                    }

                    var statusLabel = "success";

                    if(warning == 1){
                        statusLabel = "warning";
                    }
                    if(danger == 1){
                        statusLabel = "danger";
                    }

                    var statusMessage, statusIcon;
                    switch(statusLabel){
                        case "success": statusMessage = "Vitalni znaki zadovoljivi.";
                            statusIcon = "thumbs-up";
                            break;
                        case "warning": statusMessage = "Bodite pozorni na označena področja.";
                            statusIcon = "eye-open";
                            break;
                        case "danger": statusMessage = "Čimprej se posvetujte s svojim zdravnikom."
                            statusIcon = "warning-sign"

                    }




                    var html = '<li class="timeline-inverted"> <div class="timeline-badge '+statusLabel+'"><i class="glyphicon glyphicon-'+statusIcon+'"></i></div> <div class="timeline-panel"> <div class="timeline-heading"> <h4 class="timeline-title">'+datumInUra+'</h4> <p><small class="text-muted"> ' +merilec+'</small></p> </div> <div class="timeline-body"> <div class="row"> <div class="col-lg-5 col-md-5"> <p><b>Višina:</b> '+telesnaVisina+'</p> <p style="color: '+tezaColor+'"><b>Teža:</b> '+telesnaTeza+'</p> <p style="color: '+itmColor+'"><b>Indeks tel. mase:</b> '+itm+'</p> </div> <div class="col-lg-7 col-md-7"> <p style="color: '+tempColor+'"><b>Temperatura:</b> '+telesnaTemperatura+'</p> <p style="color: '+sisColor+'"><b>Sistolični krvni tlak:</b> '+sistolicniKrvniTlak+'</p> <p style="color: '+disColor+'"><b>Diastolični krvni tlak:</b> '+diastolicniKrvniTlak+'</p> <p style="color: '+nasColor+'"><b>Nasičenost krvi s kisikom:</b> '+nasicenostKrviSKisikom+'</p> </div> <span class="label label-'+statusLabel+' style="margin-left: 20px">'+statusMessage+'</span> </div> </div> </div> </li>';

                    if(x == "timeline-inverted"){
                        html = '<li> <div class="timeline-badge '+statusLabel+'"><i class="glyphicon glyphicon-'+statusIcon+'"></i></div> <div class="timeline-panel"> <div class="timeline-heading"> <h4 class="timeline-title">'+datumInUra+'</h4> <p><small class="text-muted"> ' +merilec+'</small></p> </div> <div class="timeline-body"> <div class="row"> <div class="col-lg-5 col-md-5"> <p><b>Višina:</b> '+telesnaVisina+'</p> <p style="color: '+tezaColor+'"><b>Teža:</b> '+telesnaTeza+'</p> <p style="color: '+itmColor+'"><b>Indeks tel. mase:</b> '+itm+'</p> </div> <div class="col-lg-7 col-md-7"> <p style="color: '+tempColor+'"><b>Temperatura:</b> '+telesnaTemperatura+'</p> <p style="color: '+sisColor+'"><b>Sistolični krvni tlak:</b> '+sistolicniKrvniTlak+'</p> <p style="color: '+disColor+'"><b>Diastolični krvni tlak:</b> '+diastolicniKrvniTlak+'</p> <p style="color: '+nasColor+'"><b>Nasičenost krvi s kisikom:</b> '+nasicenostKrviSKisikom+'</p> </div> <span class="label label-'+statusLabel+' style="margin-left: 20px">'+statusMessage+'</span> </div> </div> </div> </li>';                    }

                    $("#timel").prepend(html);

                },
                error: function (err) {
                    $(".content").prepend("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
                    console.log(JSON.parse(err.responseText).userMessage);
                }
            });
        }
    }
}

function dodajVitalniZnakParametri(gpriimek, gdat, gmer, gvis, gtez, gtmp, gsis, gdis, gnas){
    sessionId = getSessionId();
    var ehr = localStorage.getItem('ehr_'+gpriimek);

    if(ehr == null){
        alert("EHR še ne obstaja! Ponovno zgenerirajte podatke.");
    }else{
        var datumInUra = gdat;
        var telesnaVisina = gvis;
        var telesnaTeza = gtez;
        var telesnaTemperatura = gtmp;
        var sistolicniKrvniTlak = gsis;
        var diastolicniKrvniTlak = gdis;
        var nasicenostKrviSKisikom = gnas;
        var merilec = gmer;


            $.ajaxSetup({
                headers: {"Ehr-Session": sessionId}
            });
            var podatki = {
                // Preview Structure: https://rest.ehrscape.com/rest/v1/template/Vital%20Signs/example
                "ctx/language": "en",
                "ctx/territory": "SI",
                "ctx/time": datumInUra,
                "vital_signs/indirect_oximetry:0/comment": merilec,
                "vital_signs/height_length/any_event/body_height_length": telesnaVisina,
                "vital_signs/body_weight/any_event/body_weight": telesnaTeza,
                "vital_signs/body_temperature/any_event/temperature|magnitude": telesnaTemperatura,
                "vital_signs/body_temperature/any_event/temperature|unit": "°C",
                "vital_signs/blood_pressure/any_event/systolic": sistolicniKrvniTlak,
                "vital_signs/blood_pressure/any_event/diastolic": diastolicniKrvniTlak,
                "vital_signs/indirect_oximetry:0/spo2|numerator": nasicenostKrviSKisikom
            };
            var parametriZahteve = {
                "ehrId": ehr,
                templateId: 'Vital Signs',
                format: 'FLAT',
                committer: merilec
            };

            $.ajax({
                url: baseUrl + "/composition?" + $.param(parametriZahteve),
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(podatki),
                success: function (res) {
                    console.log(res.meta.href);

                },
                error: function (err) {
                    alert(JSON.parse(err.responseText).userMessage);

                }
            });
        }

}

function dodajAlergijeParametri(gpriimek, alerg, simp, record, zdrav, lasts){
    sessionId = getSessionId();
    var ehr = localStorage.getItem('ehr_'+gpriimek);

    if(ehr == null){
        alert("EHR še ne obstaja! Ponovno zgenerirajte podatke.");
    }else{

        $.ajaxSetup({
            headers: {"Ehr-Session": sessionId}
        });

        var podatki = {
            // Preview Structure: https://rest.ehrscape.com/rest/v1/template/Vital%20Signs/example
            "ctx/language": "en",
            "ctx/territory": "SI",
            "allergies/adverse_reaction_-_allergy:0/substance_agent":alerg,
            "allergies/adverse_reaction_-_allergy:0/comment":simp,
            "allergies/adverse_reaction_-_allergy:0/recorded": record,
            "allergies/adverse_reaction_-_allergy:0/link_to_adverse_reaction_report":zdrav,
            "allergies/adverse_reaction_-_allergy:0/links_to_supporting_clinical_record_information":lasts

        };

        var parametriZahteve = {
            "ehrId": ehr,
            templateId: 'Allergies',
            format: 'FLAT',
            committer: 'Someone'
        };

        $.ajax({
            url: baseUrl + "/composition?" + $.param(parametriZahteve),
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(podatki),
            success: function (res) {
                console.log(res.meta.href);

            },
            error: function (err) {
                alert(JSON.parse(err.responseText).userMessage);

            }
        });


    }

}

function dodajZdraviloParametri(gpriimek, naz, razl, jem, zac, kon){
    sessionId = getSessionId();
    var ehr = localStorage.getItem('ehr_'+gpriimek);

    if(ehr == null){
        alert("EHR še ne obstaja! Ponovno zgenerirajte podatke.");
    }else{

        $.ajaxSetup({
            headers: {"Ehr-Session": sessionId}
        });

        var podatki = {
            // Preview Structure: https://rest.ehrscape.com/rest/v1/template/Vital%20Signs/example
            'medications/medication_instruction/order/timing|formalism': 'timing',
            'medications/medication_instruction/order/timing|value': 'R1',
            'medications/medication_instruction/narrative': 'none',
            "ctx/language": "en",
            "ctx/territory": "SI",
            "medications/medication_instruction:0/order:0/medicine":naz,
            "medications/medication_instruction:0/order:0/medication_timing/start_date": zac,
            "medications/medication_instruction:0/order:0/medication_timing/stop_date":kon,
            "medications/medication_instruction:0/order:0/dose/description": razl,
            "medications/medication_instruction:0/order:0/medication_timing/timing_description":jem

        };

        var parametriZahteve = {
            "ehrId": ehr,
            templateId: 'Medications',
            format: 'FLAT',
            committer: 'Someone'
        };

        $.ajax({
            url: baseUrl + "/composition?" + $.param(parametriZahteve),
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(podatki),
            success: function (res) {
                console.log(res.meta.href);

            },
            error: function (err) {
                alert(JSON.parse(err.responseText).userMessage);

            }
        });


    }
}

function preveriVitalne(vitalni, data,  dis){
    if(vitalni == "itm"){
        if(data > 18.5 && data < 24.9){
            return 0;
        }
        else if((data < 18 && data > 13) || (data > 25 && data < 28)){
            return 1;
        }
        else if((data < 13) || (data > 28)){
            return 2;
        }
    }
    else if(vitalni == "temp"){
        if(data > 35.8 && data < 37.3){
            return 0;
        }
        else if((data < 35.8 && data > 35.5) || (data > 37.3 && data < 37.6)){
            return 1;
        }
        else if((data < 35.5) || (data > 37.6)){
            return 2;
        }
    }
    else if(vitalni == "sis"){
        if(data >= 120 && data <= 129 && dis >= 80 && dis <= 84){
            return 0;
        }
        else if((data >= 130 && data <= 139 && dis >= 85 && dis <= 89)){
            return 1;
        }
        else if((data >= 140) || (dis >= 90)){
            return 2;
        }

    }

    else if(vitalni == "nas"){
        if(data >= 95 && data <= 100){
            return 0;
        }
        else if(data < 95 && data >= 85){
            return 1;
        }
        else if(data < 85){
            return 2;
        }
    }
}

function nastaviVitalneZnake(){
    sessionId = getSessionId();

    var ehrId = localStorage.getItem('ehr_'+globalni_priimek);

    var datumi = [];
    var temp = [];
    var teze = [];
    var visine = [];
    var sisi = [];
    var disi = [];
    var nasi = [];
    var merilci = [];

    $("#timel").html('<ul class="timeline" id="timel"></ul>');

    if(ehrId == null){
        alert("EHR še ne obstaja! Ponovno zgenerirajte podatke.");
    }else{
        $.ajax({
            url: baseUrl + "/demographics/ehr/" + ehrId + "/party",
            type: 'GET',
            headers: {"Ehr-Session": sessionId},
            success: function (data) {
                var party = data.party;

                $.ajax({
                        url: baseUrl + "/view/" + ehrId + "/" + "body_temperature",
                        type: 'GET',
                        headers: {"Ehr-Session": sessionId},
                        success: function (res) {
                            for(var i in res){

                                datumi.push(res[i].time);
                                temp.push(res[i].temperature);
                            }
                            $.ajax({
                                url: baseUrl + "/view/" + ehrId + "/" + "weight",
                                type: 'GET',
                                headers: {"Ehr-Session": sessionId},
                                success: function (res) {
                                    for(var i in res){
                                        teze.push(res[i].weight);
                                    }
                                    $.ajax({
                                        url: baseUrl + "/view/" + ehrId + "/" + "height",
                                        type: 'GET',
                                        headers: {"Ehr-Session": sessionId},
                                        success: function (res) {
                                            for(var i in res){
                                                visine.push(res[i].height);
                                            }
                                            $.ajax({
                                                url: baseUrl + "/view/" + ehrId + "/" + "blood_pressure",
                                                type: 'GET',
                                                headers: {"Ehr-Session": sessionId},
                                                success: function (res) {
                                                    for(var i in res){
                                                        sisi.push(res[i].systolic);
                                                        disi.push(res[i].diastolic);
                                                    }
                                                    $.ajax({
                                                        url: baseUrl + "/view/" + ehrId + "/" + "spO2",
                                                        type: 'GET',
                                                        headers: {"Ehr-Session": sessionId},
                                                        success: function (res) {
                                                            for(var i in res){
                                                                nasi.push(res[i].spO2);
                                                            }

                                                            for(var k = 0; k < datumi.length; k++){


                                                                var datumInUra = datumi[k];
                                                                var telesnaVisina = visine[k];
                                                                var telesnaTeza = teze[k];
                                                                var telesnaTemperatura = temp[k];
                                                                var sistolicniKrvniTlak = sisi[k];
                                                                var diastolicniKrvniTlak = disi[k];
                                                                var nasicenostKrviSKisikom = nasi[k];
                                                                var merilec = "Potocnik";




                                                                var tezaColor = "";
                                                                var   itmColor = "";
                                                                var   tempColor = "";
                                                                var  sisColor = "";
                                                                var  disColor = "";
                                                                var   nasColor = "";

                                                                var telVisM = telesnaVisina / 100;
                                                                var itm = parseFloat(telesnaTeza) / (parseFloat(telVisM) * parseFloat(telVisM));
                                                                itm = Number((itm).toFixed(1));

                                                                var dat = datumInUra.split("T");
                                                                datumInUra = dat[0] + " (" + dat[1].substring(0, 5)+")";


                                                                var danger = 0;
                                                                var warning = 0;
                                                                switch(preveriVitalne("itm", itm)){
                                                                    case 1: itmColor = "darkorange";
                                                                        tezaColor = "darkorange";
                                                                        warning = 1;
                                                                        break;
                                                                    case 2: itmColor = "red";
                                                                        tezaColor = "red";
                                                                        danger = 1;
                                                                        break;
                                                                }
                                                                switch(preveriVitalne("temp", telesnaTemperatura)){
                                                                    case 1: tempColor = "darkorange";
                                                                        warning = 1;
                                                                        break;
                                                                    case 2: tempColor = "red";
                                                                        danger = 1;
                                                                }
                                                                switch(preveriVitalne("sis", sistolicniKrvniTlak, diastolicniKrvniTlak)){
                                                                    case 1: sisColor = "darkorange";
                                                                        disColor = sisColor;
                                                                        warning = 1;
                                                                        break;
                                                                    case 2: sisColor = "red";
                                                                        disColor = sisColor;
                                                                        danger = 1;
                                                                }
                                                                switch(preveriVitalne("nas", nasicenostKrviSKisikom)){
                                                                    case 1: nasColor = "darkorange";
                                                                        warning = 1;
                                                                        break;
                                                                    case 2: nasColor = "red"
                                                                        danger = 1;
                                                                }

                                                                var statusLabel = "success";

                                                                if(warning == 1){
                                                                    statusLabel = "warning";
                                                                }
                                                                if(danger == 1){
                                                                    statusLabel = "danger";
                                                                }

                                                                var statusMessage, statusIcon;
                                                                switch(statusLabel){
                                                                    case "success": statusMessage = "Vitalni znaki zadovoljivi.";
                                                                        statusIcon = "thumbs-up";
                                                                        break;
                                                                    case "warning": statusMessage = "Bodite pozorni na označena področja.";
                                                                        statusIcon = "eye-open";
                                                                        break;
                                                                    case "danger": statusMessage = "Čimprej se posvetujte s svojim zdravnikom."
                                                                        statusIcon = "warning-sign"

                                                                }




                                                                var html = '<li class="timeline-inverted"> <div class="timeline-badge '+statusLabel+'"><i class="glyphicon glyphicon-'+statusIcon+'"></i></div> <div class="timeline-panel"> <div class="timeline-heading"> <h4 class="timeline-title">'+datumInUra+'</h4> <p><small class="text-muted"> ' +merilec+'</small></p> </div> <div class="timeline-body"> <div class="row"> <div class="col-lg-5 col-md-5"> <p><b>Višina:</b> '+telesnaVisina+'</p> <p style="color: '+tezaColor+'"><b>Teža:</b> '+telesnaTeza+'</p> <p style="color: '+itmColor+'"><b>Indeks tel. mase:</b> '+itm+'</p> </div> <div class="col-lg-7 col-md-7"> <p style="color: '+tempColor+'"><b>Temperatura:</b> '+telesnaTemperatura+'</p> <p style="color: '+sisColor+'"><b>Sistolični krvni tlak:</b> '+sistolicniKrvniTlak+'</p> <p style="color: '+disColor+'"><b>Diastolični krvni tlak:</b> '+diastolicniKrvniTlak+'</p> <p style="color: '+nasColor+'"><b>Nasičenost krvi s kisikom:</b> '+nasicenostKrviSKisikom+'</p> </div> <span class="label label-'+statusLabel+' style="margin-left: 20px">'+statusMessage+'</span> </div> </div> </div> </li>';

                                                                if(k%2 == 0){
                                                                    html = '<li> <div class="timeline-badge '+statusLabel+'"><i class="glyphicon glyphicon-'+statusIcon+'"></i></div> <div class="timeline-panel"> <div class="timeline-heading"> <h4 class="timeline-title">'+datumInUra+'</h4> <p><small class="text-muted"> ' +merilec+'</small></p> </div> <div class="timeline-body"> <div class="row"> <div class="col-lg-5 col-md-5"> <p><b>Višina:</b> '+telesnaVisina+'</p> <p style="color: '+tezaColor+'"><b>Teža:</b> '+telesnaTeza+'</p> <p style="color: '+itmColor+'"><b>Indeks tel. mase:</b> '+itm+'</p> </div> <div class="col-lg-7 col-md-7"> <p style="color: '+tempColor+'"><b>Temperatura:</b> '+telesnaTemperatura+'</p> <p style="color: '+sisColor+'"><b>Sistolični krvni tlak:</b> '+sistolicniKrvniTlak+'</p> <p style="color: '+disColor+'"><b>Diastolični krvni tlak:</b> '+diastolicniKrvniTlak+'</p> <p style="color: '+nasColor+'"><b>Nasičenost krvi s kisikom:</b> '+nasicenostKrviSKisikom+'</p> </div> <span class="label label-'+statusLabel+' style="margin-left: 20px">'+statusMessage+'</span> </div> </div> </div> </li>';                    }

                                                                $("#timel").append(html);
                                                            }
                                                        },
                                                        error: function() {
                                                            alert("Napaka pri branju krvnega tlaka!");
                                                        }
                                                    });
                                                },
                                                error: function() {
                                                    alert("Napaka pri branju krvnega tlaka!");
                                                }
                                            });
                                        },
                                        error: function() {
                                            alert("Napaka pri branju telesne višine!");
                                        }
                                    });
                                },
                                error: function() {
                                    alert("Napaka pri branju telesne teže!");
                                }
                            });

                        },
                        error: function() {
                            alert("Napaka pri branju temperatur!");
                        }
                    });

            },
            error: function(err) {
                alert(JSON.parse(err.responseText).userMessage);
            }
        });
    }




}

function nastaviVitalneZnake1() {
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
                                      //  alert(merilec);
                                var tezaColor = "";
                                var itmColor = "";
                                var tempColor = "";
                                var sisColor = "";
                                var disColor = "";
                                var nasColor = "";

                                var telVisM = telesnaVisina / 100;
                                var itm = parseFloat(telesnaTeza) / (parseFloat(telVisM) * parseFloat(telVisM));
                                itm = Number((itm).toFixed(1));

                                var dat = datumInUra.split("T");
                                datumInUra = dat[0] + " (" + dat[1].substring(0, 5) + ")";


                                var danger = 0;
                                var warning = 0;
                                switch (preveriVitalne("itm", itm)) {
                                    case 1:
                                        itmColor = "darkorange";
                                        tezaColor = "darkorange";
                                        warning = 1;
                                        break;
                                    case 2:
                                        itmColor = "red";
                                        tezaColor = "red";
                                        danger = 1;
                                        break;
                                }
                                switch (preveriVitalne("temp", telesnaTemperatura)) {
                                    case 1:
                                        tempColor = "darkorange";
                                        warning = 1;
                                        break;
                                    case 2:
                                        tempColor = "red";
                                        danger = 1;
                                }
                                switch (preveriVitalne("sis", sistolicniKrvniTlak, diastolicniKrvniTlak)) {
                                    case 1:
                                        sisColor = "darkorange";
                                        disColor = sisColor;
                                        warning = 1;
                                        break;
                                    case 2:
                                        sisColor = "red";
                                        disColor = sisColor;
                                        danger = 1;
                                }
                                switch (preveriVitalne("nas", nasicenostKrviSKisikom)) {
                                    case 1:
                                        nasColor = "darkorange";
                                        warning = 1;
                                        break;
                                    case 2:
                                        nasColor = "red"
                                        danger = 1;
                                }

                                var statusLabel = "success";

                                if (warning == 1) {
                                    statusLabel = "warning";
                                }
                                if (danger == 1) {
                                    statusLabel = "danger";
                                }

                                var statusMessage, statusIcon;
                                switch (statusLabel) {
                                    case "success":
                                        statusMessage = "Vitalni znaki zadovoljivi.";
                                        statusIcon = "thumbs-up";
                                        break;
                                    case "warning":
                                        statusMessage = "Bodite pozorni na označena področja.";
                                        statusIcon = "eye-open";
                                        break;
                                    case "danger":
                                        statusMessage = "Čimprej se posvetujte s svojim zdravnikom."
                                        statusIcon = "warning-sign"

                                }


                                var html = '<li class="timeline-inverted"> <div class="timeline-badge ' + statusLabel + '"><i class="glyphicon glyphicon-' + statusIcon + '"></i></div> <div class="timeline-panel"> <div class="timeline-heading"> <h4 class="timeline-title">' + datumInUra + '</h4> <p><small class="text-muted"> ' + merilec + '</small></p> </div> <div class="timeline-body"> <div class="row"> <div class="col-lg-5 col-md-5"> <p><b>Višina:</b> ' + telesnaVisina + '</p> <p style="color: ' + tezaColor + '"><b>Teža:</b> ' + telesnaTeza + '</p> <p style="color: ' + itmColor + '"><b>Indeks tel. mase:</b> ' + itm + '</p> </div> <div class="col-lg-7 col-md-7"> <p style="color: ' + tempColor + '"><b>Temperatura:</b> ' + telesnaTemperatura + '</p> <p style="color: ' + sisColor + '"><b>Sistolični krvni tlak:</b> ' + sistolicniKrvniTlak + '</p> <p style="color: ' + disColor + '"><b>Diastolični krvni tlak:</b> ' + diastolicniKrvniTlak + '</p> <p style="color: ' + nasColor + '"><b>Nasičenost krvi s kisikom:</b> ' + nasicenostKrviSKisikom + '</p> </div> <span class="label label-' + statusLabel + ' style="margin-left: 20px">' + statusMessage + '</span> </div> </div> </div> </li>';

                                if (i % 2 == 0) {
                                    html = '<li> <div class="timeline-badge ' + statusLabel + '"><i class="glyphicon glyphicon-' + statusIcon + '"></i></div> <div class="timeline-panel"> <div class="timeline-heading"> <h4 class="timeline-title">' + datumInUra + '</h4> <p><small class="text-muted"> ' + merilec + '</small></p> </div> <div class="timeline-body"> <div class="row"> <div class="col-lg-5 col-md-5"> <p><b>Višina:</b> ' + telesnaVisina + '</p> <p style="color: ' + tezaColor + '"><b>Teža:</b> ' + telesnaTeza + '</p> <p style="color: ' + itmColor + '"><b>Indeks tel. mase:</b> ' + itm + '</p> </div> <div class="col-lg-7 col-md-7"> <p style="color: ' + tempColor + '"><b>Temperatura:</b> ' + telesnaTemperatura + '</p> <p style="color: ' + sisColor + '"><b>Sistolični krvni tlak:</b> ' + sistolicniKrvniTlak + '</p> <p style="color: ' + disColor + '"><b>Diastolični krvni tlak:</b> ' + diastolicniKrvniTlak + '</p> <p style="color: ' + nasColor + '"><b>Nasičenost krvi s kisikom:</b> ' + nasicenostKrviSKisikom + '</p> </div> <span class="label label-' + statusLabel + ' style="margin-left: 20px">' + statusMessage + '</span> </div> </div> </div> </li>';
                                }

                                $("#timel").append(html);
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
}

function nastaviAlergije(){
    sessionId = getSessionId();
    var date = new Date();
    $("#al_prvic").val(date.toISOString());
    var ehrId = localStorage.getItem('ehr_' + globalni_priimek);
    $("#tabela-alergij").html("<tr> <th>Alergija</th> <th>Simptomi</th> <th>Zdravila</th> <th>Prvič opažena</th> <th>Trajanja</th> </tr>");


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
                    "select "+
                    "a_a/data[at0001]/items[at0002]/value/value as Substance_Agent, "+
                    "a_a/data[at0001]/items[at0006]/value/value as Comment, "+
                    "a_a/data[at0001]/items[at0048]/value/value as Recorded, "+
                    "a_a/protocol[at0042]/items[at0045]/value/value as Clinical_Impact, "+
                    "a_a/protocol[at0042]/items[at0047]/value/value as Certainty "+
                    "from EHR e[e/ehr_id/value='" + ehrId + "'] " +
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
                                var sm = rows[i].Comment;
                                var zd = rows[i].Clinical_Impact;
                                var pr = rows[i].Recorded.split("T")[0];
                                var tr = rows[i].Certainty;

                                var html = '<tr> <td>'+al+'</td> <td>'+sm+'</td> <td>'+zd+'</td> <td>'+pr+'</td> <td>'+tr+'</td> </tr>'




                                $("#tabela-alergij").append(html);

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
}

function dodajAlergijo(){
    sessionId = getSessionId();



    var alerg, simp, record, zdrav, lasts;

    var ehr = localStorage.getItem('ehr_'+globalni_priimek);

    if(ehr == null){
        alert("EHR še ne obstaja! Ponovno zgenerirajte podatke.");
    }else{
        alerg = $("#al_alergija").val();
        simp = $("#al_simptomi").val();
        record = $("#al_prvic").val();
        zdrav = $("#al_zdravila").val();
        lasts = $("#al_trajanja").val();

        $.ajaxSetup({
            headers: {"Ehr-Session": sessionId}
        });

        var podatki = {
            // Preview Structure: https://rest.ehrscape.com/rest/v1/template/Vital%20Signs/example
            "ctx/language": "en",
            "ctx/territory": "SI",
            "allergies/adverse_reaction_-_allergy:0/substance_agent":alerg,
            "allergies/adverse_reaction_-_allergy:0/comment":simp,
            "allergies/adverse_reaction_-_allergy:0/recorded": record,
            "allergies/adverse_reaction_-_allergy:0/link_to_adverse_reaction_report":zdrav,
            "allergies/adverse_reaction_-_allergy:0/links_to_supporting_clinical_record_information":lasts

        };

        var parametriZahteve = {
            "ehrId": ehr,
            templateId: 'Allergies',
            format: 'FLAT',
            committer: 'Someone'
        };

        $.ajax({
            url: baseUrl + "/composition?" + $.param(parametriZahteve),
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(podatki),
            success: function (res) {
                console.log(res.meta.href);
                record = record.split("T")[0];
                var html = '<tr> <td>'+alerg+'</td> <td>'+simp+'</td> <td>'+zdrav+'</td> <td>'+record+'</td> <td>'+lasts+'</td> </tr>'
                $("#tabela-alergij").append(html);
            },
            error: function (err) {
                alert(JSON.parse(err.responseText).userMessage);

            }
        });
    }
}

function nastaviZdravila(){
    sessionId = getSessionId();


    $("#tabela-zdravil").html("<tr> <th>Zdravilo</th> <th>Uporablja za</th> <th>Nacin jemanja</th> <th>Čas. perioda jemanja</th> <th>Status</th> </tr>");
    $("#tabelaZdravil").html("<tr> <th>Zdravilo</th> <th>Uporablja za</th> <th>Nacin jemanja</th> <th>Začetek</th> <th>Konec</th><th>Zaključi</th> </tr>");

    var now = new Date();
    $("#zd_zacetek").val(now.toISOString());
    $("#zd_konec").val(now.toISOString());

    var ehrId = localStorage.getItem('ehr_' + globalni_priimek);
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
                    "select "+
                        "a_a/activities[at0001]/description[at0002]/items[at0003]/value/value as Medicine, "+
                        "a_a/activities[at0001]/description[at0002]/items[at0010, 'Medication timing']/items[at0012]/value/value as Start_date, "+
                        "a_a/activities[at0001]/description[at0002]/items[at0010, 'Medication timing']/items[at0013]/value/value as Stop_date, "+
                        "a_b/items[at0003]/value/value as Description, "+
                        "a_a/activities[at0001]/description[at0002]/items[at0010, 'Medication timing']/items[at0008]/value/value as Timing_description "+ "" +
                        "from EHR e[e/ehr_id/value='" + ehrId + "'] " +
                        "contains COMPOSITION a "+
                        "contains ("+
                        "INSTRUCTION a_a[openEHR-EHR-INSTRUCTION.medication.v1] and "+
                        "CLUSTER a_b[openEHR-EHR-CLUSTER.medication_amount.v1]) "+
                        "offset 0;"

                $.ajax({
                    url: baseUrl + "/query?" + $.param({"aql": AQL}),
                    type: 'GET',
                    headers: {"Ehr-Session": sessionId},
                    success: function (res) {
                        if (res) {
                            var rows = res.resultSet;
                            for (var i in rows) {
                                var med = rows[i].Medicine;
                                var sd = rows[i].Start_date;
                                var ed = rows[i].Stop_date;
                                var raz = rows[i].Description;
                                var jem = rows[i].Timing_description;

                                var html = '<tr> <td>'+med+'</td> <td>'+raz+'</td> <td>'+jem+'</td> <td>'+sd.split("T")[0]+' - '+ed.split("T")[0]+'</td></tr>'
                                var now = new Date();

                                var zdaj = parseInt(now.toISOString().split("T")[0].replace('-', ''));
                                var zdKonec = parseInt(ed.split("T")[0].replace('-', ''));
                                if(zdaj < zdKonec){
                                    html = '<tr> <td>'+med+'</td> <td>'+raz+'</td> <td>'+jem+'</td> <td>'+sd.split("T")[0]+'</td> <td>'+ed.split("T")[0]+'</td> <td><a href="javascript:void(0)" class="btn btn-info zaklj"><i class="glyphicon glyphicon-check"></i></a> </td></tr>'
                                    $("#tabelaZdravil").append(html);
                                }
                                else{
                                    $("#tabela-zdravil").append(html);

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
}

function dodajZdravilo(){
    sessionId = getSessionId();
    var ehr = localStorage.getItem('ehr_'+globalni_priimek);

    var al = $("#zd_naziv").val();
    var sm = $("#zd_razlog").val();
    var zd = $("#zd_jemanje").val();
    var pr = $("#zd_zacetek").val();
    var tr = $("#zd_konec").val();

    if(ehr == null){
        alert("EHR še ne obstaja! Ponovno zgenerirajte podatke.");
    }else{

        $.ajaxSetup({
            headers: {"Ehr-Session": sessionId}
        });

        var podatki = {
            // Preview Structure: https://rest.ehrscape.com/rest/v1/template/Vital%20Signs/example
            'medications/medication_instruction/order/timing|formalism': 'timing',
            'medications/medication_instruction/order/timing|value': 'R1',
            'medications/medication_instruction/narrative': 'none',
            "ctx/language": "en",
            "ctx/territory": "SI",
            "medications/medication_instruction:0/order:0/medicine":al,
            "medications/medication_instruction:0/order:0/medication_timing/start_date": pr,
            "medications/medication_instruction:0/order:0/medication_timing/stop_date":tr,
            "medications/medication_instruction:0/order:0/dose/description": sm,
            "medications/medication_instruction:0/order:0/medication_timing/timing_description":zd

        };

        var parametriZahteve = {
            "ehrId": ehr,
            templateId: 'Medications',
            format: 'FLAT',
            committer: 'Someone'
        };

        $.ajax({
            url: baseUrl + "/composition?" + $.param(parametriZahteve),
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(podatki),
            success: function (res) {
                console.log(res.meta.href);
                var html = '<tr> <td>'+al+'</td> <td>'+sm+'</td> <td>'+zd+'</td> <td>'+pr.split("T")[0]+' - '+tr.split("T")[0]+'</td></tr>'
                var now = new Date();

                if(now.toISOString() < tr){
                    html = '<tr> <td>'+al+'</td> <td>'+sm+'</td> <td>'+zd+'</td> <td>'+pr.split("T")[0]+'</td> <td>'+tr.split("T")[0]+'</td> <td><a href="javascript:void(0)" class="btn btn-info zaklj"><i class="glyphicon glyphicon-check"></i></a> </td></tr>'
                    $("#tabelaZdravil").append(html);
                }
                else{
                    $("#tabela-zdravil").append(html);

                }
            },
            error: function (err) {
                alert(JSON.parse(err.responseText).userMessage);

            }
        });


    }
}


$("#tabelaZdravil").on('click', '.zaklj', function(){
    sessionId = getSessionId();

    var ehrId = localStorage.getItem('ehr_'+globalni_priimek);

    var naz, raz, jem, zac, kon;

        var x = $(this).parent().parent().html();
        $(this).parent().parent().html("");

        var el = $( '<div></div>' );
        el.html(x);

    naz = $('td', el).html();
    raz = $('td:eq(1)', el).html();
    jem =  $('td:eq(2)', el).html();
    zac = $('td:eq(3)', el).html();
    kon = $('td:eq(4)', el).html();


    if(ehrId == null){
        alert("EHR še ne obstaja! Ponovno zgenerirajte podatke.");
    }else{

        $.ajax({
            url: baseUrl + "/demographics/ehr/" + ehrId + "/party",
            type: 'GET',
            headers: {"Ehr-Session": sessionId},
            success: function (data) {
                var party = data.party;
                var AQL =
                    "select "+
                "a/uid/value as uid, "+
                "b_a/activities[at0001]/description[at0002]/items[at0003]/value as Medicine, "+
                "b_b/items[at0003]/value as Description, "+
                "b_a/activities[at0001]/description[at0002]/items[at0010, 'Medication timing']/items[at0008]/value as Timing_description "+
                "from EHR e[e/ehr_id/value='"+ehrId+"'] "+
                "contains COMPOSITION a[openEHR-EHR-COMPOSITION.encounter.v1] "+
                "contains ( "+
                    "INSTRUCTION b_a[openEHR-EHR-INSTRUCTION.medication.v1] and "+
                "CLUSTER b_b[openEHR-EHR-CLUSTER.medication_amount.v1]) "+
                "where a/name/value='Medications' and "+
                "b_a/activities[at0001]/description[at0002]/items[at0003]/value='"+naz+"' and "+
                "b_b/items[at0003]/value='"+raz+"' and "+
                "b_a/activities[at0001]/description[at0002]/items[at0010, 'Medication timing']/items[at0008]/value='"+jem+"' "+

                "offset 0 limit 1"

                $.ajax({
                    url: baseUrl + "/query?" + $.param({"aql": AQL}),
                    type: 'GET',
                    headers: {"Ehr-Session": sessionId},
                    success: function (res) {
                        if (res) {
                            var rows = res.resultSet;
                            var uid = rows[0].uid;
                            var date = new Date().toISOString();

                            var podatki = {
                                'medications/medication_instruction/order/timing|formalism': 'timing',
                                'medications/medication_instruction/order/timing|value': 'R1',
                                'medications/medication_instruction/narrative': 'none',
                                "ctx/language": "en",
                                "ctx/territory": "SI",
                                "medications/medication_instruction:0/order:0/medicine":naz,
                                "medications/medication_instruction:0/order:0/medication_timing/start_date": zac,
                                "medications/medication_instruction:0/order:0/medication_timing/stop_date":date,
                                "medications/medication_instruction:0/order:0/dose/description": raz,
                                "medications/medication_instruction:0/order:0/medication_timing/timing_description":jem

                            };

                            var parametriZahteve = {
                                templateId: 'Medications'
                            };

                            $.ajax({
                                url: baseUrl + "/composition/"+uid+"?" + $.param(parametriZahteve),
                                type: 'PUT',
                                headers: {"Ehr-Session": sessionId},
                                contentType: 'application/json',
                                data: JSON.stringify(podatki),
                                success: function (res) {
                                    console.log(res.meta.href);
                                    var html = '<tr> <td>'+naz+'</td> <td>'+raz+'</td> <td>'+jem+'</td> <td>'+zac+' - '+new Date().toISOString().split("T")[0]+'</td></tr>'
                                    $("#tabela-zdravil").append(html);
                                },
                                error: function (err) {
                                    alert(JSON.parse(err.responseText).userMessage);

                                }
                            });

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
});


