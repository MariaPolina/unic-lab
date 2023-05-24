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

        // Language select in header
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
        const dataAttr = $(this).attr('data-code');
        const vanilaInput = $(this).parent().next('input')[0]
        if (vanilaInput) {

            if (vanilaInput.classList.contains('phone-code-js')) {
                vanilaInput.dataset.code = dataAttr;
            }
            vanilaInput.dispatchEvent(new Event('change'))
        }


        $($($(this).parent()).prev("div")).text($(this).text()).trigger('click');
        $('.my-select').removeClass('border');

    });

    //close select on click OUT of select
    $(document).mouseup(function (e) {
        var div = $('.my-select>div:nth-child(2)');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.removeClass('active');
            $('.my-select').removeClass('border');
        }
    });

    //modal windows
    $('.button-modal').on('click', function (e) {

        var modalButtonId = $(this).attr("id");
        var modalButtonData = $('#' + modalButtonId).data("modal");

        $('#' + modalButtonData).show(false, e).css('display', 'flex');

        $('body,html').css('overflow-y', 'hidden');

    });
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



    //preloader for submit button
    // $('.contact-form__send').on('click', function () {
    //     $(this).addClass('loading');
    // });

    // slider1 main page complex section
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

    // slider7 services page big slider    
    const swiper7 = new Swiper('#slideshow7', {
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

    // IoT page slider
    const swiper5 = new Swiper('#slideshow5', {
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
        loop: true,
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

    //start autoplay when sliders are visible
    swiper1.autoplay.stop();
    swiper7.autoplay.stop();
    swiper5.autoplay.stop();

    function isElementInViewport(el) {
        const elementView = el[0].getBoundingClientRect();

        return (
            elementView.top >= 0 &&
            elementView.top <= $(window).height()
        );
    }

    $(window).scroll(() => {
        const slider1 = $('#slideshow1');
        const slider5 = $('#slideshow5');
        const slider7 = $('#slideshow7');

        if (slider1.length && isElementInViewport(slider1)) {
            swiper1.autoplay.start();
        }

        if (slider5.length && isElementInViewport(slider5)) {
            swiper5.autoplay.start();
        }

        if (slider7.length && isElementInViewport(slider7)) {
            swiper7.autoplay.start();
        }
    });

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

    //slider 3
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

    //slider 8
    const swiper8 = new Swiper('#slideshow8', {
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

    // slider6+4
    const swiper6 = new Swiper('#slideshow6', {
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

        swiper6.on('slideNextTransitionEnd', function () {
            swiper4.enable();
            $('#slideshow4 .swiper-button-next').trigger('click');
            swiper4.disable();
        });

        swiper6.on('slidePrevTransitionEnd', function () {
            swiper4.enable();
            $('#slideshow4 .swiper-button-prev').trigger('click');
            swiper4.disable();
        });

    }

    // accept cookies
    $('.accept-cookies__btn').on('click', function () {
        $('.accept-cookies').remove();
    });


    // trigger click for callback button
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

    //change content for tabs
    $('.tabs>div').on('click', function () {
        $('.tabs>div').removeClass('active');
        let tabNumber = $(this).attr('class');
        $('.tabs-data__item').css('display', 'none');
        $('#' + tabNumber).css('display', 'block');
        $(this).addClass('active');
    });

    $('.nav-btn-arrow').on('click', function () {
        let tabNumber = $(this).closest('.tabs-data__item').attr('id');
        $('.' + tabNumber).next('div').trigger('click')
    });

    $('.nav-btn-arrow.reverse').on('click', function () {
        let tabNumber = $(this).closest('.tabs-data__item').attr('id');
        $('.' + tabNumber).prev('div').trigger('click')
    });

    //block checkboxes when complex dev selected
    $('#complexdev').on('click', function () {
        if ($('#complexdev').is(':checked')) {
            $($('#complexdev').parent()).nextAll('div').children('input').prop('disabled', true).prop('checked', false)
        } else {
            $($('#complexdev').parent()).nextAll('div').children('input').prop('disabled', false)
        }
    });

    //activate pins on scroll for process page
    $(window).on('scroll', function () {
        let scrollTop = $(this).scrollTop();
        let activeIndex = -1;

        $('.title-pin').each(function (index, element) {
            let $element = $(element);
            let offsetTop = $element.offset().top;
            let elementHeight = $element.outerHeight();
            let isTitlePinAdd = $element.hasClass('title-pin_add');

            if ($(window).width() > 1330 && isTitlePinAdd) {
                return true;
            }

            if (scrollTop > offsetTop + elementHeight) {
                return true;
            }

            if (scrollTop >= offsetTop && scrollTop <= offsetTop + elementHeight) {
                activeIndex = index;
                return false;
            }

            activeIndex = index;
            return false;
        });

        if (activeIndex >= 0) {
            $('.title-pin').removeClass('active');
            $('.title-pin').eq(activeIndex).addClass('active');
        }
    });
    // scroll to tob button
    $(window).on('scroll', function () {
        if ($('.top-btn').length && $(this).scrollTop() > 1080) {
            $('.top-btn').addClass('active');
        } else {
            $('.top-btn').removeClass('active');
        }
    });
});