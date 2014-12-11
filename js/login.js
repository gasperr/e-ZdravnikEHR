

function vpisime(){
    var username=$("#upime").val();
    var password=$("#inputPassword3").val();

    var upimena = ["Peter Demolis", "Rok Nerovac", "Ana Konda"];
    var gesla = ["000666", "1221", "lolne"]


    for(var i in upimena){
        if(upimena[i] === username && gesla[i] === password){
            window.location.href="index.html";

            localStorage.setItem('ime_uporabnika', username);
            return true;
        }
    }
    $("#inputPassword3").val("");
    $("#passGroup").removeClass("form-group").addClass("form-group has-error");
    $("#usernameGroup").removeClass("form-group").addClass("form-group has-error");
    $("#kreirajSporocilo").html("<span class='obvestilo label label-danger fade-in'>Uporabniško ime in geslo se bodisi ne ujemaata ali pa uporabnik ne obstaja.</span>");



    return false;
}

function registriraj(){

    window.location.href="registracija.html";

    return false;
}




$(document).ready(function() {
    $('#dodajDemoLogin').change(function() {
        $("#kreirajSporocilo").html("");
        var podatki = $(this).val().split(",");
        $("#upime").val(podatki[0]);
        $("#inputPassword3").val(podatki[1]);
    });
});/**
 * Created by gasper on 12/9/14.
 */
