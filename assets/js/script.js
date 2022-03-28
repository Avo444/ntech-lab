new WOW().init();

$(document).ready(function() {
    let burger = $('.burger');
    let close = $('.close');

    burger.click(function() {
        $('.menu').addClass('active');
        $('body').addClass('no_scroll');
        $('.close').css('display', 'block');
        $(this).css('display', 'none');
    });
    close.click(function() {
        $('.menu').removeClass('active');
        $('body').removeClass('no_scroll');
        burger.css('display', 'block');
        $(this).css('display', 'none');
    });
});

console.log('Web-Developer: AvoPro');