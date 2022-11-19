$(document).ready(function() {
    $('#btn_hamburger').on('click', function() {
        $('body').toggleClass('is-menuopen');
        $(this).toggleClass('on');
        $('.nav-menu').slideToggle();
    });

    $('.btn-scroll-down').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});