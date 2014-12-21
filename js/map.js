/**
 * Created by gasper on 12/21/14.
 */

var map;
var infowindow;

$('.check').click(function() {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);

        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }

});

$("#radij").focusout(function() {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);

        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }

});


window.onload = function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
};



function showPosition(position) {
    var lat=position.coords.latitude;
    var long=position.coords.longitude;

    var mojaLokacija = new google.maps.LatLng(lat, long);

    map = new google.maps.Map(document.getElementById('zemljevid'), {
        center: mojaLokacija,
        zoom: 15
    });

    var request = {
        location: mojaLokacija,
        radius: 900,
        types: ['hospital', 'doctor', 'health', 'pharmacy']
    };

    request.radius = $("#radij").val();



    if($("#lekarne").is(':checked')){
        request.types.push("pharmacy");
    }
    else{
       var index = request.types.indexOf("pharmacy");
        request.types.splice(index, 1);
    }

    if($("#bolnice").is(':checked')){
        request.types.push("hospital");
    }
    else{
        index = request.types.indexOf("hospital");
        request.types.splice(index, 1);
    }

    if($("#doctor").is(':checked')){
        request.types.push("doctor");
    }
    else{
        index = request.types.indexOf("doctor");
        request.types.splice(index, 1);
    }

    if($("#health").is(':checked')){
        request.types.push("health");
    }
    else{
        index = request.types.indexOf("health");
        request.types.splice(index, 1);
    }




    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

//google.maps.event.addDomListener(window, 'load', showPosition);

