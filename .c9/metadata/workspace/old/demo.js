{"changed":true,"filter":false,"title":"demo.js","tooltip":"/old/demo.js","value":"\nvar baseUrl = 'https://rest.ehrscape.com/rest/v1';\nvar queryUrl = baseUrl + '/query';\n\nvar username = \"ois.seminar\";\nvar password = \"ois4fri\";\n\nfunction getSessionId() {\n    var response = $.ajax({\n        type: \"POST\",\n        url: baseUrl + \"/session?username=\" + encodeURIComponent(username) +\n                \"&password=\" + encodeURIComponent(password),\n        async: false\n    });\n    return response.responseJSON.sessionId;\n}\n\n\nfunction kreirajEHRzaBolnika() {\n\tsessionId = getSessionId();\n\n\tvar ime = $(\"#kreirajIme\").val();\n\tvar priimek = $(\"#kreirajPriimek\").val();\n\tvar datumRojstva = $(\"#kreirajDatumRojstva\").val();\n\n\tif (!ime || !priimek || !datumRojstva || ime.trim().length == 0 || priimek.trim().length == 0 || datumRojstva.trim().length == 0) {\n\t\t$(\"#kreirajSporocilo\").html(\"<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevane podatke!</span>\");\n\t} else {\n\t\t$.ajaxSetup({\n\t\t    headers: {\"Ehr-Session\": sessionId}\n\t\t});\n\t\t$.ajax({\n\t\t    url: baseUrl + \"/ehr\",\n\t\t    type: 'POST',\n\t\t    success: function (data) {\n\t\t        var ehrId = data.ehrId;\n\t\t        var partyData = {\n\t\t            firstNames: ime,\n\t\t            lastNames: priimek,\n\t\t            dateOfBirth: datumRojstva,\n\t\t            partyAdditionalInfo: [{key: \"ehrId\", value: ehrId}]\n\t\t        };\n\t\t        $.ajax({\n\t\t            url: baseUrl + \"/demographics/party\",\n\t\t            type: 'POST',\n\t\t            contentType: 'application/json',\n\t\t            data: JSON.stringify(partyData),\n\t\t            success: function (party) {\n\t\t                if (party.action == 'CREATE') {\n\t\t                    $(\"#kreirajSporocilo\").html(\"<span class='obvestilo label label-success fade-in'>Uspešno kreiran EHR '\" + ehrId + \"'.</span>\");\n\t\t                    console.log(\"Uspešno kreiran EHR '\" + ehrId + \"'.\");\n\t\t                    $(\"#preberiEHRid\").val(ehrId);\n\t\t                }\n\t\t            },\n\t\t            error: function(err) {\n\t\t            \t$(\"#kreirajSporocilo\").html(\"<span class='obvestilo label label-danger fade-in'>Napaka '\" + JSON.parse(err.responseText).userMessage + \"'!\");\n\t\t            \tconsole.log(JSON.parse(err.responseText).userMessage);\n\t\t            }\n\t\t        });\n\t\t    }\n\t\t});\n\t}\n}\n\n\nfunction preberiEHRodBolnika() {\n\tsessionId = getSessionId();\n\n\tvar ehrId = $(\"#preberiEHRid\").val();\n\n\tif (!ehrId || ehrId.trim().length == 0) {\n\t\t$(\"#preberiSporocilo\").html(\"<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevan podatek!\");\n\t} else {\n\t\t$.ajax({\n\t\t\turl: baseUrl + \"/demographics/ehr/\" + ehrId + \"/party\",\n\t\t\ttype: 'GET',\n\t\t\theaders: {\"Ehr-Session\": sessionId},\n\t    \tsuccess: function (data) {\n\t\t\t\tvar party = data.party;\n\t\t\t\t$(\"#preberiSporocilo\").html(\"<span class='obvestilo label label-success fade-in'>Bolnik '\" + party.firstNames + \" \" + party.lastNames + \"', ki se je rodil '\" + party.dateOfBirth + \"'.</span>\");\n\t\t\t\tconsole.log(\"Bolnik '\" + party.firstNames + \" \" + party.lastNames + \"', ki se je rodil '\" + party.dateOfBirth + \"'.\");\n\t\t\t},\n\t\t\terror: function(err) {\n\t\t\t\t$(\"#preberiSporocilo\").html(\"<span class='obvestilo label label-danger fade-in'>Napaka '\" + JSON.parse(err.responseText).userMessage + \"'!\");\n\t\t\t\tconsole.log(JSON.parse(err.responseText).userMessage);\n\t\t\t}\n\t\t});\n\t}\t\n}\n\n\nfunction dodajMeritveVitalnihZnakov() {\n\tsessionId = getSessionId();\n\n\tvar ehrId = $(\"#dodajVitalnoEHR\").val();\n\tvar datumInUra = $(\"#dodajVitalnoDatumInUra\").val();\n\tvar telesnaVisina = $(\"#dodajVitalnoTelesnaVisina\").val();\n\tvar telesnaTeza = $(\"#dodajVitalnoTelesnaTeza\").val();\n\tvar telesnaTemperatura = $(\"#dodajVitalnoTelesnaTemperatura\").val();\n\tvar sistolicniKrvniTlak = $(\"#dodajVitalnoKrvniTlakSistolicni\").val();\n\tvar diastolicniKrvniTlak = $(\"#dodajVitalnoKrvniTlakDiastolicni\").val();\n\tvar nasicenostKrviSKisikom = $(\"#dodajVitalnoNasicenostKrviSKisikom\").val();\n\tvar merilec = $(\"#dodajVitalnoMerilec\").val();\n\n\tif (!ehrId || ehrId.trim().length == 0) {\n\t\t$(\"#dodajMeritveVitalnihZnakovSporocilo\").html(\"<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevane podatke!</span>\");\n\t} else {\n\t\t$.ajaxSetup({\n\t\t    headers: {\"Ehr-Session\": sessionId}\n\t\t});\n\t\tvar podatki = {\n\t\t\t// Preview Structure: https://rest.ehrscape.com/rest/v1/template/Vital%20Signs/example\n\t\t    \"ctx/language\": \"en\",\n\t\t    \"ctx/territory\": \"SI\",\n\t\t    \"ctx/time\": datumInUra,\n\t\t    \"vital_signs/height_length/any_event/body_height_length\": telesnaVisina,\n\t\t    \"vital_signs/body_weight/any_event/body_weight\": telesnaTeza,\n\t\t   \t\"vital_signs/body_temperature/any_event/temperature|magnitude\": telesnaTemperatura,\n\t\t    \"vital_signs/body_temperature/any_event/temperature|unit\": \"°C\",\n\t\t    \"vital_signs/blood_pressure/any_event/systolic\": sistolicniKrvniTlak,\n\t\t    \"vital_signs/blood_pressure/any_event/diastolic\": diastolicniKrvniTlak,\n\t\t    \"vital_signs/indirect_oximetry:0/spo2|numerator\": nasicenostKrviSKisikom\n\t\t};\n\t\tvar parametriZahteve = {\n\t\t    \"ehrId\": ehrId,\n\t\t    templateId: 'Vital Signs',\n\t\t    format: 'FLAT',\n\t\t    committer: merilec\n\t\t};\n\t\t$.ajax({\n\t\t    url: baseUrl + \"/composition?\" + $.param(parametriZahteve),\n\t\t    type: 'POST',\n\t\t    contentType: 'application/json',\n\t\t    data: JSON.stringify(podatki),\n\t\t    success: function (res) {\n\t\t    \tconsole.log(res.meta.href);\n\t\t        $(\"#dodajMeritveVitalnihZnakovSporocilo\").html(\"<span class='obvestilo label label-success fade-in'>\" + res.meta.href + \".</span>\");\n\t\t    },\n\t\t    error: function(err) {\n\t\t    \t$(\"#dodajMeritveVitalnihZnakovSporocilo\").html(\"<span class='obvestilo label label-danger fade-in'>Napaka '\" + JSON.parse(err.responseText).userMessage + \"'!\");\n\t\t\t\tconsole.log(JSON.parse(err.responseText).userMessage);\n\t\t    }\n\t\t});\n\t}\n}\n\n\nfunction preberiMeritveVitalnihZnakov() {\n\tsessionId = getSessionId();\t\n\n\tvar ehrId = $(\"#meritveVitalnihZnakovEHRid\").val();\n\tvar tip = $(\"#preberiTipZaVitalneZnake\").val();\n\n\tif (!ehrId || ehrId.trim().length == 0 || !tip || tip.trim().length == 0) {\n\t\t$(\"#preberiMeritveVitalnihZnakovSporocilo\").html(\"<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevan podatek!\");\n\t} else {\n\t\t$.ajax({\n\t\t\turl: baseUrl + \"/demographics/ehr/\" + ehrId + \"/party\",\n\t    \ttype: 'GET',\n\t    \theaders: {\"Ehr-Session\": sessionId},\n\t    \tsuccess: function (data) {\n\t\t\t\tvar party = data.party;\n\t\t\t\t$(\"#rezultatMeritveVitalnihZnakov\").html(\"<br/><span>Pridobivanje podatkov za <b>'\" + tip + \"'</b> bolnika <b>'\" + party.firstNames + \" \" + party.lastNames + \"'</b>.</span><br/><br/>\");\n\t\t\t\tif (tip == \"telesna temperatura\") {\n\t\t\t\t\t$.ajax({\n\t\t\t\t\t    url: baseUrl + \"/view/\" + ehrId + \"/\" + \"body_temperature\",\n\t\t\t\t\t    type: 'GET',\n\t\t\t\t\t    headers: {\"Ehr-Session\": sessionId},\n\t\t\t\t\t    success: function (res) {\n\t\t\t\t\t    \tif (res.length > 0) {\n\t\t\t\t\t\t    \tvar results = \"<table class='table table-striped table-hover'><tr><th>Datum in ura</th><th class='text-right'>Telesna temperatura</th></tr>\";\n\t\t\t\t\t\t        for (var i in res) {\n\t\t\t\t\t\t            results += \"<tr><td>\" + res[i].time + \"</td><td class='text-right'>\" + res[i].temperature + \" \" \t+ res[i].unit + \"</td>\";\n\t\t\t\t\t\t        }\n\t\t\t\t\t\t        results += \"</table>\";\n\t\t\t\t\t\t        $(\"#rezultatMeritveVitalnihZnakov\").append(results);\n\t\t\t\t\t    \t} else {\n\t\t\t\t\t    \t\t$(\"#preberiMeritveVitalnihZnakovSporocilo\").html(\"<span class='obvestilo label label-warning fade-in'>Ni podatkov!</span>\");\n\t\t\t\t\t    \t}\n\t\t\t\t\t    },\n\t\t\t\t\t    error: function() {\n\t\t\t\t\t    \t$(\"#preberiMeritveVitalnihZnakovSporocilo\").html(\"<span class='obvestilo label label-danger fade-in'>Napaka '\" + JSON.parse(err.responseText).userMessage + \"'!\");\n\t\t\t\t\t\t\tconsole.log(JSON.parse(err.responseText).userMessage);\n\t\t\t\t\t    }\n\t\t\t\t\t});\n\t\t\t\t} else if (tip == \"telesna teža\") {\n\t\t\t\t\t$.ajax({\n\t\t\t\t\t    url: baseUrl + \"/view/\" + ehrId + \"/\" + \"weight\",\n\t\t\t\t\t    type: 'GET',\n\t\t\t\t\t    headers: {\"Ehr-Session\": sessionId},\n\t\t\t\t\t    success: function (res) {\n\t\t\t\t\t    \tif (res.length > 0) {\n\t\t\t\t\t\t    \tvar results = \"<table class='table table-striped table-hover'><tr><th>Datum in ura</th><th class='text-right'>Telesna teža</th></tr>\";\n\t\t\t\t\t\t        for (var i in res) {\n\t\t\t\t\t\t            results += \"<tr><td>\" + res[i].time + \"</td><td class='text-right'>\" + res[i].weight + \" \" \t+ res[i].unit + \"</td>\";\n\t\t\t\t\t\t        }\n\t\t\t\t\t\t        results += \"</table>\";\n\t\t\t\t\t\t        $(\"#rezultatMeritveVitalnihZnakov\").append(results);\n\t\t\t\t\t    \t} else {\n\t\t\t\t\t    \t\t$(\"#preberiMeritveVitalnihZnakovSporocilo\").html(\"<span class='obvestilo label label-warning fade-in'>Ni podatkov!</span>\");\n\t\t\t\t\t    \t}\n\t\t\t\t\t    },\n\t\t\t\t\t    error: function() {\n\t\t\t\t\t    \t$(\"#preberiMeritveVitalnihZnakovSporocilo\").html(\"<span class='obvestilo label label-danger fade-in'>Napaka '\" + JSON.parse(err.responseText).userMessage + \"'!\");\n\t\t\t\t\t\t\tconsole.log(JSON.parse(err.responseText).userMessage);\n\t\t\t\t\t    }\n\t\t\t\t\t});\t\t\t\t\t\n\t\t\t\t} else if (tip == \"telesna temperatura AQL\") {\n\t\t\t\t\tvar AQL = \n\t\t\t\t\t\t\"select \" +\n    \t\t\t\t\t\t\"t/data[at0002]/events[at0003]/time/value as cas, \" +\n    \t\t\t\t\t\t\"t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude as temperatura_vrednost, \" +\n    \t\t\t\t\t\t\"t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/units as temperatura_enota \" +\n\t\t\t\t\t\t\"from EHR e[e/ehr_id/value='\" + ehrId + \"'] \" +\n\t\t\t\t\t\t\"contains OBSERVATION t[openEHR-EHR-OBSERVATION.body_temperature.v1] \" +\n\t\t\t\t\t\t\"where t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude<35 \" +\n\t\t\t\t\t\t\"order by t/data[at0002]/events[at0003]/time/value desc \" +\n\t\t\t\t\t\t\"limit 10\";\n\t\t\t\t\t$.ajax({\n\t\t\t\t\t    url: baseUrl + \"/query?\" + $.param({\"aql\": AQL}),\n\t\t\t\t\t    type: 'GET',\n\t\t\t\t\t    headers: {\"Ehr-Session\": sessionId},\n\t\t\t\t\t    success: function (res) {\n\t\t\t\t\t    \tvar results = \"<table class='table table-striped table-hover'><tr><th>Datum in ura</th><th class='text-right'>Telesna temperatura</th></tr>\";\n\t\t\t\t\t    \tif (res) {\n\t\t\t\t\t    \t\tvar rows = res.resultSet;\n\t\t\t\t\t\t        for (var i in rows) {\n\t\t\t\t\t\t            results += \"<tr><td>\" + rows[i].cas + \"</td><td class='text-right'>\" + rows[i].temperatura_vrednost + \" \" \t+ rows[i].temperatura_enota + \"</td>\";\n\t\t\t\t\t\t        }\n\t\t\t\t\t\t        results += \"</table>\";\n\t\t\t\t\t\t        $(\"#rezultatMeritveVitalnihZnakov\").append(results);\n\t\t\t\t\t    \t} else {\n\t\t\t\t\t    \t\t$(\"#preberiMeritveVitalnihZnakovSporocilo\").html(\"<span class='obvestilo label label-warning fade-in'>Ni podatkov!</span>\");\n\t\t\t\t\t    \t}\n\n\t\t\t\t\t    },\n\t\t\t\t\t    error: function() {\n\t\t\t\t\t    \t$(\"#preberiMeritveVitalnihZnakovSporocilo\").html(\"<span class='obvestilo label label-danger fade-in'>Napaka '\" + JSON.parse(err.responseText).userMessage + \"'!\");\n\t\t\t\t\t\t\tconsole.log(JSON.parse(err.responseText).userMessage);\n\t\t\t\t\t    }\n\t\t\t\t\t});\n\t\t\t\t}\n\t    \t},\n\t    \terror: function(err) {\n\t    \t\t$(\"#preberiMeritveVitalnihZnakovSporocilo\").html(\"<span class='obvestilo label label-danger fade-in'>Napaka '\" + JSON.parse(err.responseText).userMessage + \"'!\");\n\t\t\t\tconsole.log(JSON.parse(err.responseText).userMessage);\n\t    \t}\n\t\t});\n\t}\n}\n\n\n$(document).ready(function() {\n\t$('#preberiObstojeciEHR').change(function() {\n\t\t$(\"#preberiSporocilo\").html(\"\");\n\t\t$(\"#preberiEHRid\").val($(this).val());\n\n\t});\n\t$('#preberiPredlogoBolnika').change(function() {\n\t\t$(\"#kreirajSporocilo\").html(\"\");\n\t\tvar podatki = $(this).val().split(\",\");\n\t\t$(\"#kreirajIme\").val(podatki[0]);\n\t\t$(\"#kreirajPriimek\").val(podatki[1]);\n\t\t$(\"#kreirajDatumRojstva\").val(podatki[2]);\n\t});\n\t$('#preberiObstojeciVitalniZnak').change(function() {\n\t\t$(\"#dodajMeritveVitalnihZnakovSporocilo\").html(\"\");\n\t\tvar podatki = $(this).val().split(\"|\");\n\t\t$(\"#dodajVitalnoEHR\").val(podatki[0]);\n\t\t$(\"#dodajVitalnoDatumInUra\").val(podatki[1]);\n\t\t$(\"#dodajVitalnoTelesnaVisina\").val(podatki[2]);\n\t\t$(\"#dodajVitalnoTelesnaTeza\").val(podatki[3]);\n\t\t$(\"#dodajVitalnoTelesnaTemperatura\").val(podatki[4]);\n\t\t$(\"#dodajVitalnoKrvniTlakSistolicni\").val(podatki[5]);\n\t\t$(\"#dodajVitalnoKrvniTlakDiastolicni\").val(podatki[6]);\n\t\t$(\"#dodajVitalnoNasicenostKrviSKisikom\").val(podatki[7]);\n\t\t$(\"#dodajVitalnoMerilec\").val(podatki[8]);\n\t});\n\t$('#preberiEhrIdZaVitalneZnake').change(function() {\n\t\t$(\"#preberiMeritveVitalnihZnakovSporocilo\").html(\"\");\n\t\t$(\"#rezultatMeritveVitalnihZnakov\").html(\"\");\n\t\t$(\"#meritveVitalnihZnakovEHRid\").val($(this).val());\n\t});\n});","undoManager":{"mark":8,"position":9,"stack":[[{"group":"doc","deltas":[{"start":{"row":255,"column":40},"end":{"row":256,"column":0},"action":"insert","lines":["",""]},{"start":{"row":256,"column":0},"end":{"row":256,"column":2},"action":"insert","lines":["\t\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":256,"column":2},"end":{"row":256,"column":3},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":256,"column":3},"end":{"row":256,"column":4},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":256,"column":4},"end":{"row":256,"column":5},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":256,"column":5},"end":{"row":256,"column":6},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":256,"column":6},"end":{"row":256,"column":7},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":256,"column":7},"end":{"row":256,"column":9},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":256,"column":8},"end":{"row":256,"column":21},"action":"insert","lines":["$(this).val()"]}]}],[{"group":"doc","deltas":[{"start":{"row":256,"column":22},"end":{"row":256,"column":23},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":256,"column":0},"end":{"row":256,"column":23},"action":"remove","lines":["\t\talert($(this).val());"]}]}]]},"ace":{"folds":[],"scrolltop":2442,"scrollleft":0,"selection":{"start":{"row":216,"column":7},"end":{"row":216,"column":62},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":202,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1418406061526}