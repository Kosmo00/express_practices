


(($) => {

    //============== NAVBAR ==========================================
    const $nav = $("#navbar") // =============== NAVBAR
    const $menu_button = $("#menu-button")//==== MENU BUTTON ON NAVBAR
    const $ws_name = $('span.ws-name') // ====== WEBSITE NAME ON NAVBAR

    const $back_to_top = $('.up')  //=========== ARROW --> BACK TO TOP

    //============= FORMULARIO =======================================
    const $form = $('#form__registry') // ====== FORM of REGISTY FORM

    //============= CAMPOS DEL FORMULARIO ============================
    const $name = $('#name')//================== NAME
    const $phone = $('#phone')//================ PHONE NUMBER
    const $email = $('#email')//================ EMAIL
    const $message = $('#message')//============ MESSAGE
    const $star_list = $('#star-list')//======== STAR LIST
    const $allStars = $('.star') //============= ALL STARS
    const $rate = $('#rate')//================== RATE OF STRARS

    const $modal = $('#modal')//================ MODAL CON LA INFO INCERTADA EN EL FORM

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

        BeforeSubmit();

        $form.on('submit', (ev) => {

            ev.preventDefault();

            if (validateStars()) {
                const texto = `Name:  ${$name.val()}  Phone number:  ${$phone.val()}  Email: ${$email.val()}  Message:  ${$message.val()}  Rate:  ${$rate.text()}`

                $modal.find('#text_info').text(texto)
                $modal.modal("show")

                $name.val('')
                $phone.val('')
                $email.val('')
                $message.val('')

                fillStars(0)
            } else {
                setTooltip($star_list, "ALL THE STARS ARE EMPTY", 'show', 'danger')
            }
        })
        $form.on('reset', () => {
            fillStars(0)
        })

    })
    //============= Stars ============== //
    $(() => {

        $allStars.on('click', (e) => {
            const id = e.currentTarget.id //=== id (y numero) d estrella donde se hace click
            fillStars(id)
            setTooltip($star_list, "Thank's", 'show', 'no')
        })
    })
    //======== FUNCION QUE RELLENA ESTRELLAS
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
        if (text_rate == '') {
            setTooltip($star_list, "Please, Rate Us", 'no', 'no')
        }
    }
    //================================FUNCIONES PARA VALIDAR EL FORMULARIO==================
    function BeforeSubmit() { //==========Antes de enviar

        $name.on('input', () => {
            const regex = /^[a-zA-Z ]+$/
            let value = $name.val()
            let words = 'Only Words'
            let minlenght = 'Please lengthen this text to 2 charaters or more'
            if (!regex.test(value) && value.length != 0) {
                setTooltip($name, words, 'show', 'danger')
                $name.val(value.replace(/[^a-z ]+/ig, ''))
                setTimeout(() => {
                    setTooltip($name, 'Enter your name', 'show', 'no')
                }, 1000)
            } else if (value.length < 2 && value.length != 0) {
                setTooltip($name, minlenght, 'show', 'danger')
                $name.addClass('invalid')
            } else {
                setTooltip($name, 'Enter your name', 'show', 'no')
                $name.removeClass('invalid')
            }
        })

        $phone.on('input', () => {
            const regex = /^[0-9 ]+$/
            let value = $phone.val()
            let digits = 'Only Digits'
            let minlenght = 'Please lengthen this text to 6 charaters or more'
            if (!regex.test(value) && value.length != 0) {
                setTooltip($phone, digits, 'show', 'danger')
                $phone.val(value.replace(/[^0-9 ]+/g, ''))
                setTimeout(() => {
                    setTooltip($phone, 'Enter your phone number', 'show', 'no')
                }, 1000)
            } else if (value.length < 6 && value.length != 0) {
                setTooltip($phone, minlenght, 'show', 'danger')
                $phone.addClass('invalid')
            } else {
                setTooltip($phone, 'Enter your phone number', 'show', 'no')
                $phone.removeClass('invalid')
            }
        })

    }
    //=== FUNCION QUE VALIDA QUE LAS ESTRELLAS ESTEN RELLENAS
    function validateStars() {
        let starsValue = $rate.text()
        if (starsValue == '') {
            //setTooltip($star_list, "ALL THE STARS ARE EMPTY", 'show', 'danger') No se xq no se pintaba de rojo!!!
            return false
        }
        else {
            return true
        }
    }

    //===== FUNCION QUE CAMBIA EL TOOLTIP SI ESTA MAL LO QUE ESCRIBE EL USUARIO
    function setTooltip(elem, newTitle, show, danger) {
        if (danger == 'danger') {
            $('.tooltip-inner').css({ 'background-color': ' rgb(175, 2, 2)' })
            $('.tooltip.bs-tooltip-top .arrow').addClass('red')
        } else {
            $('.tooltip-inner').css({ 'background-color': ' #000' })
            $('.tooltip.bs-tooltip-top .arrow').removeClass('red')
        }
        if (show == 'show') {
            elem.attr('data-original-title', newTitle).tooltip('show')
        } else {
            elem.attr('data-original-title', newTitle)
        }
    }

})(jQuery);






