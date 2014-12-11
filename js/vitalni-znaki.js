function dodajVitalniZnak(){

    var datum = jQuery("#datum-vnosa").val();
    var dokt = jQuery("#vnos-izvedel").val();
    var visina = jQuery("#visina-input").val();
    var teza = jQuery("#teza-input").val();
    var itm = jQuery("#itm-input").val();
    var temp = jQuery("#temp-input").val();
    var sis = jQuery("#sis-input").val();
    var dis = jQuery("#dis-input").val();
    var nas = jQuery("#nas-input").val();

    var x = document.getElementById("timel").firstChild.className;
    var html = '<li class="timeline-inverted"> <div class="timeline-badge success"><i class="glyphicon glyphicon-thumbs-up"></i></div> <div class="timeline-panel"> <div class="timeline-heading"> <h4 class="timeline-title">'+datum+'</h4> <p><small class="text-muted">' +dokt+'</small></p> </div> <div class="timeline-body"> <div class="row"> <div class="col-lg-5 col-md-5"> <p><b>Višina:</b>'+visina+'</p> <p><b>Teža:</b>'+teza+'</p> <p><b>Indeks tel. mase:</b>'+itm+'</p> </div> <div class="col-lg-7 col-md-7"> <p><b>Temperatura:</b>'+temp+'</p> <p><b>Sistolični krvni tlak:</b>'+sis+'</p> <p><b>Diastolični krvni tlak:</b>'+dis+'</p> <p><b>Nasičenost krvi s kisikom:</b>'+nas+'</p> </div> <span class="label label-success" style="margin-left: 20px">Vitalni znaki zadovoljivi.</span> </div> </div> </div> </li>';

    if(x == "timeline-inverted"){
        html = '<li> <div class="timeline-badge success"><i class="glyphicon glyphicon-thumbs-up"></i></div> <div class="timeline-panel"> <div class="timeline-heading"> <h4 class="timeline-title">'+datum+'</h4> <p><small class="text-muted">' +dokt+'</small></p> </div> <div class="timeline-body"> <div class="row"> <div class="col-lg-5 col-md-5"> <p><b>Višina:</b>'+visina+'</p> <p><b>Teža:</b>'+teza+'</p> <p><b>Indeks tel. mase:</b>'+itm+'</p> </div> <div class="col-lg-7 col-md-7"> <p><b>Temperatura:</b>'+temp+'</p> <p><b>Sistolični krvni tlak:</b>'+sis+'</p> <p><b>Diastolični krvni tlak:</b>'+dis+'</p> <p><b>Nasičenost krvi s kisikom:</b>'+nas+'</p> </div> <span class="label label-success" style="margin-left: 20px">Vitalni znaki zadovoljivi.</span> </div> </div> </div> </li>';

    }



    $("#timel").prepend(html);


}
