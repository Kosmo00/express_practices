


(($) => {
    //==== CAMBIAR NAVBAR 
    $(() => {
        $(document).on('scroll', () => {
            var $nav = $("#navbar");
            var $ws_name = $('span.ws-name');
            $nav.toggleClass('backg-dark shadow', $(this).scrollTop() > $nav.height());
            $ws_name.toggleClass('text-shadow', $(this).scrollTop() < $nav.height());

        });

        $("#menu-button").on('click', () => {
            var $nav = $("#navbar");
            $nav.addClass('backg-dark shadow');
        });

    });

    //==== DESAPARECER FLECHA UP

    $(window).on('scroll', () => {
        if ($(this).scrollTop() > 100) {
            $('.up').fadeIn('slow');
        } else {
            $('.up').fadeOut('slow');
        }
    });

    /* $(window).on('scroll', () => {
         var $registry = $('#nav-link-registry');
 
         $registry.on('hover', () => {
             $registry.addClass('active');
 
         });
     });*/

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

})(jQuery);






