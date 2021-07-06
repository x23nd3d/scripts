$(document).ready(function () {
    $('.navbar a').click(function () {
        $('body,html').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
});

$(document).ready(function () {
    $('#btnSlide').on('click', function () {
        $('.content-hidden').slideToggle(1000);
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});
