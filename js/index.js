$(document).ready(function () {

    if ($(window).width() > 1300) {
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
    }

    if ($(window).width() < 1301) {
        $('.menu__item_with-submenu').on('click', function () {
            $(this).toggleClass('active');
        });

        $('.header__burger').on('click', function () {
            $('.header__nav').addClass('active');
            $('.wrapper').addClass('blur');
        });

        $('.burger-close').on('click', function () {
            $('.header__nav').removeClass('active');
            $('.wrapper').removeClass('blur');
        });

        $($('.header__menu li').not('.menu__item_with-submenu')).on('click', function () {
            $('.header__nav').removeClass('active');
            $('.wrapper').removeClass('blur');
            $('.menu__item_with-submenu').removeClass('active');
        });
    }

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }
    });

});