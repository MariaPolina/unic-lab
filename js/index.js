$(document).ready(function () {

    // Line over header submenu

    $('.menu__item_with-submenu').on('mouseover', function () {
        $('.header-line').css('display', 'block');
        $('.wrapper').addClass('shadow');
    });

    $('.menu__item_with-submenu').on('mouseout', function () {
        $('.header-line').css('display', 'none');
        $('.wrapper').removeClass('shadow');
    });

    // Language select

    $('.lang__selected').on('click', function () {
        $('.lang__option').slideToggle(200);
    });


});