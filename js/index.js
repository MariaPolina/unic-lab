$(document).ready(function () {

    if ($(window).width() > 1300) {
        // Line over header submenu and header hover
        $('.menu__items > .menu-item-has-children').on('mouseover', function () {
            $('.header-line').css('display', 'block');
            $('.wrapper').addClass('shadow');
            $('.header').addClass('hover');

        });

        $('.menu__items > .menu-item-has-children').on('mouseout', function () {
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
        $($(this).next('div')).toggleClass('active');
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

    // slider1

    const swiper1 = new Swiper('#slideshow1', {
        mode: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        autoplay: true,
        autoplay: {
            delay: 10000,
        },
        autoplayDisableOnInteraction: true,
        paginationClickable: true,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const elem = document.querySelector('.complex-section__container');

    document.addEventListener('DOMContentLoaded', function () {
        swiper1.autoplay.stop();
        document.addEventListener('scroll', onScroll);
    });

    function onScroll() {
        const posTop = elem.getBoundingClientRect().top;

        if (posTop + elem.clientHeight <= window.innerHeight && posTop >= 0) {
            swiper1.autoplay.start();
        };
    }

    // slider 2

    const swiper2 = new Swiper('#slideshow2', {
        mode: 'horizontal',
        slidesPerView: 2,
        spaceBetween: 16,
        speed: 1000,
        autoplay: true,
        autoplay: {
            delay: 500,
        },
        autoplayDisableOnInteraction: true,
        paginationClickable: true,
        loop: true,

        breakpoints: {
            1300: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

            500: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
        }
    });

    // slider3+4

    const swiper3 = new Swiper('#slideshow3', {
        mode: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: false,
        paginationClickable: true,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
    });

    const swiper4 = new Swiper('#slideshow4', {
        mode: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 16,
        autoplay: false,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
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

    // accept cookies

    $('.accept-cookies__btn').on('click', function () {
        $('.accept-cookies').remove();
    });

    // trigger click foc callback button

    $('.callback-btn').on('click', function () {
        $('#callback').trigger('click');
    });

    //hover on project card button
    $('.projects-section__btn').on('mouseover', function () {
        $($(this).parent()).children('.projects-section__item-image').addClass('active');
    });

    $('.projects-section__btn').on('mouseout', function () {
        $($(this).parent()).children('.projects-section__item-image').removeClass('active');
    });


    //hover effect on the sphere

    const sphereItems = document.querySelectorAll('.sphere__item');
    const sphereImage = document.querySelector('.sphere__image');
    const sphereImage2 = document.querySelector('.sphere.sphere7 .sphere__image');

    let currentPosition = 0;
    let targetPosition = 0;
    let rotationInterval;

    function rotateImage() {
        if (currentPosition === targetPosition) {
            clearInterval(rotationInterval);
            return;
        }
        if (currentPosition < targetPosition) {
            currentPosition += 1;
        } else {
            currentPosition -= 1;
        }

        if (!sphereImage || sphereImage === null) {
            return;
        } else {
            sphereImage.style.transform = `translate(-50%, -50%) rotate(${currentPosition * 25}deg)`;
        }

        if (!sphereImage2 || sphereImage2 === null) {
            return;
        } else {
            sphereImage2.style.transform = `translate(-50%, -50%) rotate(${currentPosition * 23}deg)`;
        }

    }

    sphereItems.forEach((sphereItem, index) => {
        sphereItem.addEventListener('mouseenter', function () {
            targetPosition = index;
            clearInterval(rotationInterval);
            rotationInterval = setInterval(rotateImage);
            sphereItems.forEach((sphereItem) => {
                sphereItem.classList.remove('active');
            })
            this.classList.add('active');
        });
    });

    if ($(window).width() < 1301) {
        $(window).scroll(function () {
            $('.sphere__item').each(function () {
                let itemTop = $(this).offset().top;
                let itemHeight = $(this).outerHeight();
                let prevItem = $(this).prev('.sphere__item');
                let prevItemHeight = prevItem.length > 0 ? prevItem.outerHeight() : 50;
                let screenTop = $(window).scrollTop();
                if (itemTop <= screenTop + itemHeight + prevItemHeight) {
                    $('.sphere__item').removeClass('active');
                    $(this).addClass('active');
                }
            });
        });
    }

    //hover effect on project description card

    const projectDescrItems = document.querySelectorAll('.project-descr-section__item');

    projectDescrItems.forEach((projectDescrItem) => {
        projectDescrItem.addEventListener('mouseenter', function () {
            projectDescrItems.forEach((projectDescrItem) => {
                projectDescrItem.classList.remove('active');
            })
            this.classList.add('active');
        });
    });

    //turn on video on scroll

    $(window).scroll(function () {
        $('.done-section__video').each(function () {
            console.log($($(this).closest('.video-section')));
            let videoSectionTop = $($(this).closest('.video-section')).offset().top;
            const screenTop = $(window).scrollTop();
            if (videoSectionTop <= screenTop) {
                $(this).trigger('play');
            }
        });
    });

});