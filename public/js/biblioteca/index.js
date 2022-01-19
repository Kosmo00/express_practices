$(() => {
    const { log } = console;

    let $navbar = $('.navbar');
    $(window).on('scroll', () => {
        $navbar.css('background-color', $(window).scrollTop() > 200 ? 'black' : 'transparent');
    });

    $('.navbar-toggler').on('click', () => {
        $navbar.toggleClass('small');
    });

    let $h3 = $('.welcome-text h3');
    let str = ['z', 'x', 'c', 'v', 'b', 'n'];
    let arr = [1, 1, 1, 1, 1, -5];
    let s = $h3.text(), s2;
    let i = 0;
    setInterval(() => {
        if (!i)
            s2 = s;
        s2 += str[i];
        i += arr[i];
        $h3.text(s2);
    }, 500);

    let $stars = $('#rate-us li button');
    let rate = 0;
    //$stars.addClass('yellow-star !important');
    $('#rate-us li button').on('click', (e) => {
        $stars.removeClass('blue-star');
        rate = $stars.index(e.currentTarget) + 1;
        $stars.length = rate;
        $stars.toggleClass('blue-star');
        $stars.length = 5;
    });
        

});