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

    // menu burger

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

    // fix header on scroll

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }
    });

    //trigger click for main slider buttons

    if ($('.swiper-button-next').hasClass('swiper-button-disabled')) {
        $('#swiperNext').addClass('swiper-button-disabled');
    } else {
        $('#swiperNext').removeClass('swiper-button-disabled');
    }

    if ($('.swiper-button-prev').hasClass('swiper-button-disabled')) {
        $('#swiperPrev').addClass('swiper-button-disabled');
    } else {
        $('#swiperPrev').removeClass('swiper-button-disabled');
    }


    $('#swiperPrev').on('click', function () {
        $('.main-slider .swiper-button-prev').trigger('click');

        if ($('.swiper-button-next').hasClass('swiper-button-disabled')) {
            $('#swiperNext').addClass('swiper-button-disabled');
        } else {
            $('#swiperNext').removeClass('swiper-button-disabled');
        }

        if ($('.swiper-button-prev').hasClass('swiper-button-disabled')) {
            $('#swiperPrev').addClass('swiper-button-disabled');
        } else {
            $('#swiperPrev').removeClass('swiper-button-disabled');
        }

    });

    $('#swiperNext').on('click', function () {
        $('.main-slider .swiper-button-next').trigger('click');

        if ($('.swiper-button-next').hasClass('swiper-button-disabled')) {
            $('#swiperNext').addClass('swiper-button-disabled');
        } else {
            $('#swiperNext').removeClass('swiper-button-disabled');
        }

        if ($('.swiper-button-prev').hasClass('swiper-button-disabled')) {
            $('#swiperPrev').addClass('swiper-button-disabled');
        } else {
            $('#swiperPrev').removeClass('swiper-button-disabled');
        }

    });

    // mobile slider for projects cards

    if ($(window).width() < 1301) {

        $(".project-section__items").on("click", ".project-section__item_small", function () {
            $('.project-section__wrapper_big>div').removeClass('project-section__item_big').addClass('project-section__item_small').appendTo($(".project-section__wrapper_small"));
            $(this).appendTo($(".project-section__wrapper_big")).addClass('project-section__item_big').removeClass('project-section__item_small');
        });
    }

    //faq section


    $('.faq-section__question').on('click', function () {
        $($(this).parent()).toggleClass('active');
    });

    // select

    $('.my-select>div:first-child').on('click', function (event) {
        $('.my-select>div:nth-child(2):not(#' + $($(this).parent('div')).attr('id') + '>div:nth-child(2))').css('display', 'none');
        $($(this).next('div')).slideToggle(0);
        $('.my-select').css('z-index', '2');
        $($(this).parent('div')).css('z-index', '3');
        $(this).toggleClass('active');

    });

    $('.my-select >div:nth-child(2)> div').on('click', function (event) {
        $('.my-select div:nth-child(2)> div').removeClass('active');
        $(this).addClass('active');

        $($($(this).parent()).next('input')).val($(this).attr('data'));

        $($($(this).parent()).prev("div")).text($(this).text()).trigger('click');

    });

    //close select on click OUT of select
    $(document).mouseup(function (e) {
        var div = $('.my-select>div:nth-child(2)');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.hide();
        }
    });

});