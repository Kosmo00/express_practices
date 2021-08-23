


(($) => {

    const $nav = $("#navbar") // =============== NAVBAR
    const $menu_button = $("#menu-button")//==== MENU BUTTON ON NAVBAR
    const $ws_name = $('span.ws-name') // ====== WEBSITE NAME ON NAVBAR

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

    //=== SUBMIT AND RESET ON FORM OF REGISTRY FORM ====//
    $(() => {

        let $name = $('#name')
        let $phone = $('#phone')
        let $email = $('#email')
        let $message = $('#message')

        $form.on('submit', (ev) => {

            ev.preventDefault()

            const texto = `Name:  ${$name.val()}  Phone number:  ${$phone.val()}   Email: ${$email.val()}  Message:  ${$message.val()} Rate:  ${$rate.text()}`

            alert(texto)

            $name.val('')
            $phone.val('')
            $email.val('')
            $message.val('')

            fillStars(0)
        })
        $form.on('reset', () => {
            fillStars(0)
        })

    })
    //==== Stars ==== //
    $(() => {

        $allStars.on('click', (e) => {
            const id = e.currentTarget.id //=== id (y numero) d estrella donde se hace click
            fillStars(id)
        })
    })

    function fillStars(id) {
        let empty_star = true
        let text_rate = ""

        if (id === 0) {
            empty_star = false
        }

        for (let i = 0; i < 5; i++) {

            if (empty_star) {
                $(`#${$allStars[i].id}`).removeClass('fa-star-o').addClass('fa-star')
                text_rate = $(`#${$allStars[i].id}`).attr('data-star-value')
            } else {
                $(`#${$allStars[i].id}`).removeClass('fa-star').addClass('fa-star-o')
            }
            if ($allStars[i].id === id) {
                empty_star = false
            }
        }
        $rate.text(text_rate)
    }

})(jQuery);






