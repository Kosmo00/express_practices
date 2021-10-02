const typed_strings = ['a nuestra agencia', 'a sus vacaciones', 'a sus viajes de negocio', 'a su futuro...']
let navbar_visibility = false

const typed = new Typed('.text-slider', {
    strings: typed_strings,
    typeSpeed: 80,
    loop: true,
    backDelay: 1100,
    backSpeed: 30
})

$(window).on('scroll', function () {
    showNavbar()
})

///Boton desplegable
$('.navbar-toggler').on('click', function () {
    navbar_visibility = !navbar_visibility
    showNavbar()
})
function showNavbar() {
    if ($(window).scrollTop() > 100 || navbar_visibility) {
        $('.navbar').addClass('dark')
    } else {
        $('.navbar').removeClass('dark')
    }
}