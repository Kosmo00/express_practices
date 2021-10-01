const typed_strings = ['a nuestra agencia', 'a sus vacaciones', 'a sus viajes de negocio', 'a su futuro...']

const typed = new Typed('.text-slider', {
    strings: typed_strings,
    typeSpeed: 80,
    loop: true,
    backDelay: 1100,
    backSpeed: 30
})

$(window).scroll(function () {

    if ($(this).scrollTop() > 100) {
        $('.navbar').addClass("dark")
    } else {
        $(".navbar").removeClass("dark")
    }
})