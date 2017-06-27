'use strict';

$(function () {
    $('button').click(function () {
        $('#kwadrat').animate({
            'height': '100px',
            'width': '100px',
            'margin-left': '100px'
        }, 3000).animate({
            backgroundColor: "blue"
        }, 5000);

        function koniec() {
            $('#kwadrat').css("overflow", "hidden");
            $('#kwadrat').append("<h2>Animacja zakończona</h2>").children().css("font-size", "19px");
        }
        setTimeout(koniec, 7000);
    });
});