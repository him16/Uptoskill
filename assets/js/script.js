$(document).ready(function() {
    function setHeight() {
        var $window = $(window);
        windowHeight = $(window).innerHeight();
        if ($window.width() >= 320) {
            $('header').css('min-height', windowHeight) - 80;
        }
    };
    setHeight();

    $(window).resize(function() {
        setHeight();
    });

    $(".typing").typed({
        strings: ["v4.0 Released","Fast and Robust","Gredient Interface","Most Complete","Perfect suited"],
        typeSpeed: 50,
        loop: true,
        cursorChar: "___"
    });

    var ost = 0;
    $(window).scroll(function() {
        var cOst = $(this).scrollTop();
        if (cOst == 0) {

            $('.navbar').addClass('top-nav-collapse');
            $('.navbar').removeClass('scroll_menu');
        } else if (cOst > ost) {
            $('.navbar').addClass('top-nav-collapse').removeClass('default');
            $('.navbar').removeClass('scroll_menu');
        } else {
            $('.navbar').addClass('default').removeClass('top-nav-collapse');
            $('.navbar').addClass('scroll_menu').removeClass('top-nav-collapse');
        }
        ost = cOst;
    });
    $('body').scrollspy({ target: ".navbar", offset: 50 });

    $('#clients-comments').owlCarousel({
        loop: true,
        dots: true,
        autoplay: false,
        items: 1

    });
    //loader start
    $('.theme-loader').fadeOut(1000);
});
