$(document).ready(function () {
    $('.navbar-toggler').on('click', function (e) {
        e.preventDefault();
        $('.navbar-toggler').toggleClass("change");
        $('.navbar-nav').slideToggle();
    })
});