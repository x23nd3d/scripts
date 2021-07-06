$(document).ready(function () {
    $('.collapse-header a').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
            .closest('div.collapse').find('div.card-collapse-body').removeClass('active')
            .eq($(this).index()).addClass('active');

    })
});
