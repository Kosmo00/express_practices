


(($) => {

    const $nav = $("#navbar") // =============== NAVBAR
    const $menu_button = $("#menu-button")//==== MENU BUTTON ON NAVBAR
    const $ws_name = $('span.ws-name') // ====== WEBSITE NAME

    const $back_to_top = $('.up')  //=========== ARROW --> BACK TO TOP

    const $form = $('#form__registry') // ====== FORM of REGISTY FORM
    const $allStars = $('.star') //============= ALL STARS on FORM
    const $rate = $('#rate')//================== RATE OF STRARS on FORM

    $(() => { /* ===== CAMBIAR NAVBAR ===== */
        $(document).on('scroll', () => {
            $nav.toggleClass('backg-dark shadow', $(this).scrollTop() > $nav.height())
            $ws_name.toggleClass('text-shadow', $(this).scrollTop() < $nav.height()) //=== WEBSITE NAME WITH(OUT) SHADOWS
        })

        $menu_button.on('click', () => {
            $nav.addClass('backg-dark shadow')
        })

    })

    /*==== DESAPARECER FLECHA UP ====*/

    $(window).on('scroll', () => {
        if ($(this).scrollTop() > 100) {
            $back_to_top.fadeIn('slow')
        } else {
            $back_to_top.fadeOut('slow')
        }
    })

    //==== habilitando tooltips ====//
    $(() => {
        $('[data-toggle="tooltip"]').tooltip()
    })

    //=== SUBMIT ON FORM OF REGISTRY FORM ====//
    $(() => {

        let $name = $('#name')
        let $phone = $('#phone')
        let $email = $('#email')
        let $message = $('#message')

        $form.on('submit', (ev) => {

            ev.preventDefault()

            let texto = 'Name: ' + $name.val() + '   Phone number: ' + $phone.val() + '   Email: ' + $email.val() + '   Message: ' + $message.val() + '  Rate: ' + $rate.text()

            alert(texto)

            $name.val('')
            $phone.val('')
            $email.val('')
            $message.val('')

            $allStars.addClass('fa-star-o').removeClass('fa-star')
            $rate.text("")
        })
    })
    //==== Stars ==== //
    $(() => {

        let $star_list = $('#star-list') //== lista con estrellas
        let n = 0 //=== numero d estrella donde se hace click
        let n2 = 0 //=== numero d estrella donde se hizo el click anterior 
        text_rate = ""


        $star_list.on('click', (e) => {

            n = e.target.getAttribute('data-star-number')

            console.log(n)

            let $star = $('#star-list li:lt(' + (n) + ') .star') //=== todas las estrellas marcadas

            if (n != null) {//esto es porque si se hace un click dentro de la lista pero fuera d la estrella n =null y todas las estrellas pasan a blanco

                if ($star.hasClass('fa-star') && n2 === n) {
                    $star.addClass('fa-star-o').removeClass('fa-star')
                    text_rate = ""
                } else {
                    $allStars.addClass('fa-star-o')
                    $star.removeClass('fa-star-o').addClass('fa-star')
                    text_rate = $allStars.eq(n - 1).attr('data-star-value')
                }
                $rate.text(text_rate)
            }
            n2 = n

        })

    })


})(jQuery);






