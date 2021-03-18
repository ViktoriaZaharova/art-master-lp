$('.main-slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true
});

$('.project-category-slider').slick({
    slidesToShow: 1,
    infinity: false,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="46" viewBox="0 0 21 46">\n' +
        '    <path d="M371.007,4840.99L359.638,4818l11.369-23h-9.644l-11.37,23,11.37,22.99h9.644Z"\n' +
        '          transform="translate(-350 -4795)"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="46" viewBox="0 0 21 46">\n' +
        '  <path d="M1088.99,4840.99l11.37-22.99-11.37-23h9.65l11.37,23-11.37,22.99h-9.65Z" transform="translate(-1089 -4795)"/>\n' +
        '</svg>\n</button>'
});

var categorySlider = $('.project-category-slider');

$('.project-category-slider-counter .default').text("/ " + categorySlider.slick("getSlick").slideCount);

categorySlider.on('afterChange', function (event, slick, currentSlide) {
    $(".project-category-slider-counter .cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('.project-slider').slick({
    slidesToShow: 1,
    infinity: false,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="46" viewBox="0 0 21 46">\n' +
        '    <path d="M371.007,4840.99L359.638,4818l11.369-23h-9.644l-11.37,23,11.37,22.99h9.644Z"\n' +
        '          transform="translate(-350 -4795)"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="46" viewBox="0 0 21 46">\n' +
        '  <path d="M1088.99,4840.99l11.37-22.99-11.37-23h9.65l11.37,23-11.37,22.99h-9.65Z" transform="translate(-1089 -4795)"/>\n' +
        '</svg>\n</button>'
});

var projectSlider = $('.project-slider');

$('.project-slider-counter .default').text("/ " + projectSlider.slick("getSlick").slideCount);

projectSlider.on('afterChange', function (event, slick, currentSlide) {
    $(".project-slider-counter .cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('.reviews-slider').slick({
    slidesToShow: 1,
    infinity: false,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="46" viewBox="0 0 21 46">\n' +
        '    <path d="M371.007,4840.99L359.638,4818l11.369-23h-9.644l-11.37,23,11.37,22.99h9.644Z"\n' +
        '          transform="translate(-350 -4795)"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="46" viewBox="0 0 21 46">\n' +
        '  <path d="M1088.99,4840.99l11.37-22.99-11.37-23h9.65l11.37,23-11.37,22.99h-9.65Z" transform="translate(-1089 -4795)"/>\n' +
        '</svg>\n</button>'
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 576) {
        $('.why-slider:not(.slick-initialized)').slick({
            infinite: false,
            slidesToShow: 2,
            prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="46" viewBox="0 0 21 46">\n' +
                '    <path d="M371.007,4840.99L359.638,4818l11.369-23h-9.644l-11.37,23,11.37,22.99h9.644Z"\n' +
                '          transform="translate(-350 -4795)"/>\n' +
                '</svg>\n</button>',
            nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="46" viewBox="0 0 21 46">\n' +
                '  <path d="M1088.99,4840.99l11.37-22.99-11.37-23h9.65l11.37,23-11.37,22.99h-9.65Z" transform="translate(-1089 -4795)"/>\n' +
                '</svg>\n</button>'
        });
    } else {
        $(".why-slider.slick-initialized").slick("unslick");
    }
});
// slick active

$('[name="phone"]').mask('+7 (999) 999-99-99');

//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});
//плавный скролл end

// mobile menu
$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});
