new WOW().init();

$(document).ready(function() {
    let burger = $('.burger');
    let close = $('.close');

    burger.click(function() {
        $('.menu').addClass('active');
        $('body').addClass('no_scroll');
        close.css('display', 'block');
        $(this).css('display', 'none');
    });
    close.click(function() {
        $('.menu').removeClass('active');
        $('body').removeClass('no_scroll');
        burger.css('display', 'block');
        $(this).css('display', 'none');
    });
});

window.addEventListener("scroll", function() {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active', window.scrollY > 50);
});
console.log('Web-Developer: AvoPro');