
//==== CAMBIAR NAVBAR 

$(function () {
    $(document).scroll(function () {
        var $nav = $("#navbar");
        $nav.toggleClass('bg-dark shadow', $(this).scrollTop() > $nav.height());
    });

    $("#menu-button").on('click', function () {
        var $nav = $("#navbar");
        $nav.addClass('bg-dark shadow');
    });

});

//==== DESAPARECER FLECHA UP

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.up').fadeIn('slow');
    } else {
        $('.up').fadeOut('slow');
    }
});






