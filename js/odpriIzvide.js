/** * Created by gasper on 12/11/14. */

var text;
$('#vsiIzvidi').click(function(event) {
    text = $(event.target).text();
  //  var html = '<div class="row"> <div class="box col-md-12 col-lg-12 col-sm-12"> <div class="box-inner" id="'+text+'"> <div class="box-header well" data-original-title=""> <h2><i class="glyphicon glyphicon-list"></i>'+text+'</h2> <div class="box-icon"> </div> </div> <div class="col-md-3 col-lg-3 col-sm-3"> <br> <ul class="thumbnails gallery"> <li id="image-1" class="thumbnail"> <a style="background:url(https://raw.githubusercontent.com/usmanhalalit/charisma/1.x/img/gallery/thumbs/1.jpg)" title="Sample Image 1" href="https://raw.githubusercontent.com/usmanhalalit/charisma/1.x/img/gallery/1.jpg"><img src="https://raw.githubusercontent.com/usmanhalalit/charisma/1.x/img/gallery/thumbs/1.jpg" alt="Sample Image 1"></a> <div class="caption"> <h3>14.5.2014</h3> <p>Dodaj nekaj o sliki nek opomin alisdsddssdds kaj takega</p> </div> </li> </ul> </div> <div class="col-md-3 col-lg-3 col-sm-3"> <br> <ul class="thumbnails gallery"> <li id="image-2" class="thumbnail"> <a style="background:url(https://raw.githubusercontent.com/usmanhalalit/charisma/1.x/img/gallery/thumbs/1.jpg)" title="Sample Image 1" href="https://raw.githubusercontent.com/usmanhalalit/charisma/1.x/img/gallery/1.jpg"><img src="https://raw.githubusercontent.com/usmanhalalit/charisma/1.x/img/gallery/thumbs/1.jpg" alt="Sample Image 1"></a> <div class="caption"> <h3>14.5.2014</h3> <p>Dodaj nekaj o sliki nek opomin alisdsddssdds kaj takega</p> </div> </li> </ul> </div> <div class="col-md-3 col-lg-3 col-sm-3"> <br> <ul class="thumbnails gallery"> <li id="image-3" class="thumbnail"> <a style="background:url(https://raw.githubusercontent.com/usmanhalalit/charisma/1.x/img/gallery/thumbs/1.jpg); margin: 0" title="Sample Image 1" href="https://raw.githubusercontent.com/usmanhalalit/charisma/1.x/img/gallery/1.jpg"><img src="https://raw.githubusercontent.com/usmanhalalit/charisma/1.x/img/gallery/thumbs/1.jpg" alt="Sample Image 1"></a> <div class="caption"> <h3>14.5.2014</h3> <p>Dodaj nekaj o sliki nek opomin alisdsddssdds kaj takega</p> </div> </li> </ul> </div> <div class="col-md-3 col-lg-3 col-sm-3"> <br> <ul class="thumbnails gallery"> <li id="image-4" class="thumbnail"> <a style="background:url(https://raw.githubusercontent.com/usmanhalalit/charisma/1.x/img/gallery/thumbs/1.jpg)" title="Sample Image 1" href="https://raw.githubusercontent.com/usmanhalalit/charisma/1.x/img/gallery/1.jpg"><img src="https://raw.githubusercontent.com/usmanhalalit/charisma/1.x/img/gallery/thumbs/1.jpg" alt="Sample Image 1"></a> <div class="caption"> <h3>14.5.2014</h3> <p>Dodaj nekaj o sliki nek opomin alisdsddssdds kaj takega</p> </div> </li> </ul> </div> </div> <!--/span--> </div><!--/row--> </div>'
    var html = '<div class="row"> <div class="box col-md-12 col-lg-12 col-sm-12"> <div class="box-inner" id="'+text+'"> <div class="box-header well" data-original-title=""> <h2><i class="glyphicon glyphicon-list"></i>'+text+'</h2> <div class="box-icon"> <a href="javascript:void(0)" class="btn btn-setting btn-round btn-default" id="dodaj"><i class="glyphicon glyphicon-plus" style="color: green"></i></a></div> </div> </div> </div><!--/row--> </div>';
    $("#detail").html("");
    $("#detail").append(html);
    $("#izvidiFolders").slideUp();
    $("#kkk").removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
    nastaviIzvideIzvidi();

});
$(".btn-add").click(function(){
    var x = $("#ime-mape").val();
    var html = '<div class="box col-md-4 col-lg-4 col-sm-4"> <a href="javascript:void(0)" class="folder-image">'+x+'</a> </div>'
    $("#vsiIzvidi").append(html);
});


$("#detail").on('click', '#dodaj', function() {
    var ht = '<table>'+
    '<tr>'+
    '<td><i style="color: grey; font-size: smaller">Dodaj izvid:</i></td>'+
    '<td><input class="form-control" id="spec" placeholder="Specialist" value="'+$(this).parent().parent().parent().attr('id')+'" disabled></td>'+
    '<td><input class="form-control" id="dat" placeholder="Datum" value="'+new Date().toISOString()+'"></td>'+
    '<td><input class="form-control" id="slika" placeholder="URL Slike"></td>'+
    '<td><input class="form-control" id="comment" placeholder="Komentar"></td>'+
    '<td><a href="javascript:void(0)" onclick="dodajIzvide()" class="btn btn-setting btn-round btn-default"><i class="glyphicon glyphicon-plus" style="color: green"></i></a></td>'+
    '</tr>'+
    '</table>'
    $($(this).parent()).append(ht);
    $("#dodaj").hide();
});
