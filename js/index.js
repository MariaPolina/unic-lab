$(document).ready(function () {

    if ($(window).width() > 1300) {
        // Line over header submenu and header hover
        $('.menu-item-has-children').on('mouseover', function () {
            $('.header-line').css('display', 'block');
            $('.wrapper').addClass('shadow');
            $('.header').addClass('hover');

        });

        $('.menu-item-has-children').on('mouseout', function () {
            $('.header-line').css('display', 'none');
            $('.wrapper').removeClass('shadow');
            $('.header').removeClass('hover');
        });

        // Language select

        $('.lang__selected').on('click', function () {
            $('.lang__options').toggleClass('active');
        });

        $('.lang__option').on('click', function () {
            $('.lang__options').removeClass('active');
        });

        //close select on click OUT of select
        $(document).mouseup(function (e) {
            var div = $('.header__lang');
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                $('.lang__options').removeClass('active');
            }
        });
    }

    // menu burger

    if ($(window).width() < 1301) {
        $('.menu-item-has-children').on('click', function () {
            $(this).toggleClass('active');
        });

        $('.header__burger').on('click', function () {
            $('.header__nav').addClass('active');
            $('.header__nav').appendTo($("html"));
            $('.wrapper').addClass('blur');
            $('body').css('overflow-y', 'hidden');
        });

        $('.burger-close').on('click', function () {
            $('.header__nav').removeClass('active');
            $('.wrapper').removeClass('blur');
            $('body').css('overflow-y', 'auto');
            $('.header__nav').appendTo($(".header__container"));
        });

        $($('.header__menu li').not('.menu-item-has-children')).on('click', function () {
            $('.header__nav').removeClass('active');
            $('.header__nav').appendTo($(".header__container"));
            $('.wrapper').removeClass('blur');
            $('body').css('overflow-y', 'auto');
            $('.menu-item-has-children').removeClass('active');
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

    //faq section

    $('.faq-section__question').on('click', function () {
        $($(this).parent()).toggleClass('active');
    });

    // select

    $('.my-select>div:first-child').on('click', function () {
        $('.my-select>div:nth-child(2):not(#' + $($(this).parent('div')).attr('id') + '>div:nth-child(2))').css('display', 'none');
        $($(this).next('div')).slideToggle(0);
        $('.my-select').css('z-index', '2');
        $($(this).parent('div')).css('z-index', '3');
        $(this).toggleClass('active');
        $('.my-select').addClass('border');
    });

    $('.my-select >div:nth-child(2)> div').on('click', function () {
        $('.my-select div:nth-child(2)> div').removeClass('active');
        $(this).addClass('active');

        $($($(this).parent()).next('input')).val($(this).attr('data'));

        $($($(this).parent()).prev("div")).text($(this).text()).trigger('click');
        $('.my-select').removeClass('border');

    });

    //close select on click OUT of select
    $(document).mouseup(function (e) {
        var div = $('.my-select>div:nth-child(2)');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.hide();
            $('.my-select').removeClass('border');
        }
    });

    //----modal windows----//

    $('.button-modal').on('click', function (e) {

        var modalButtonId = $(this).attr("id");
        var modalButtonData = $('#' + modalButtonId).data("modal");

        $('#' + modalButtonData).show(false, e).css('display', 'flex');

        $('body,html').css('overflow-y', 'hidden');

        $('.modal__content .close').on('click', function () {
            $('.modal__wrapper').css('display', 'none');
            $('body,html').css('overflow-y', 'auto');
        });

        //close modal on click OUT of modal

        $(document).mouseup(function (e) {
            var div = $('.modal__content');
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                $('.modal__content .close').trigger('click');
            }
        });

    });

    //preloader for submit button

    $('.contact-form__send').on('click', function () {
        $(this).addClass('loading');
    });

    // mobile slider for projects cards

    if ($(window).width() < 1301) {

        swiper4.disable();

        swiper3.on('slideNextTransitionEnd', function () {
            swiper4.enable();
            $('#slideshow4 .swiper-button-next').trigger('click');
            swiper4.disable();
        });

        swiper3.on('slidePrevTransitionEnd', function () {
            swiper4.enable();
            $('#slideshow4 .swiper-button-prev').trigger('click');
            swiper4.disable();
        });

    }

});