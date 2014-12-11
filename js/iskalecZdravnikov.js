/**
 * Created by gasper on 12/11/14.
 */

function giveResult() {
    $('a').click(function (event) {
        var id = $(this).attr('id');

        $.ajax({
            type: "GET",
            url: id,
            dataType: "html",
            async: false,
            success: function (html) {
                $('#rez-med').html(html);
            }
        });
    });
}
