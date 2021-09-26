$(function () {
    $(document).scroll(function () {
        var $nav = $('#navb');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

