


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
            setTooltip($star_list, "Thank's", 'show')
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
            setTooltip($star_list, "Please, Rate Us", 'no')
        }
    }
    //================================FUNCIONES PARA VALIDAR EL FORMULARIO==================
    function BeforeSubmit() { //==========Antes de enviar

        $name.on('keyup', () => {
            let value = $name.val()
            if (!onlyWords(value) && !(value == '')) {
                setTooltip($name, 'ONLY WORDS', 'show')
            } else {
                setTooltip($name, 'Enter your name', 'show')
            }
        })
        $phone.on('keyup', () => {
            let value = $phone.val()
            if (!onlyDigits(value) && !(value == '')) {
                setTooltip($phone, 'ONLY DIGITS', 'show')
            } else {
                setTooltip($phone, 'Enter your phone number', 'show')
            }
        })
    }
    //=== FUNCION QUE VALIDA QUE LAS ESTRELLAS ESTEN RELLENAS
    function validateStars() {
        let starsValue = $rate.text()
        if (starsValue == '') {
            setTooltip($star_list, "ALL THE STARS ARE EMPTY", 'show')
            return false
        }
        else {
            return true
        }
    }

    //===== FUNCION QUE CAMBIA EL TOOLTIP SI ESTA MAL LO QUE ESCRIBE EL USUARIO
    function setTooltip(elem, newTitle, show) {
        if (show == 'show') {
            elem.attr('data-original-title', newTitle).tooltip('show')
        } else {
            elem.attr('data-original-title', newTitle)
        }
    }

    function onlyWords(texto) {//===comprobar que sean solo caracteres y epacios
        var regex = /^[a-zA-Z ]+$/
        return regex.test(texto)
    }
    function onlyDigits(texto) {//=== comprobar que sean solo numeros
        var regex = /^[0-9 ]+$/
        return regex.test(texto)
    }


})(jQuery);






