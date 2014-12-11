/**
 * Created by gasper on 12/9/14.
 */

function toggle_visibility(id) {
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
    jQuery('#center-image').load("back-body.html");
}
function rotatePictureBodyBack(){
    jQuery('#center-image').load("front-body.html");
}

$(document).ready(function() {
    var up = localStorage.getItem('ime_uporabnika');
    $("#naslovnoIme").text(up);
    $("#up-ime-tag").text(" "+up);
    $("#up-ime-opis").text(" "+up);
});

$('#xray_body').mapster(
{
    fillOpacity: 0.2,
    singleSelect: true
});

