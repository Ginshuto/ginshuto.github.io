$(document).ready(function () {
    $(".sub-menu ul").hide();
    $(".sub-menu img").click(function () {
        $(this).parent(".sub-menu").children("ul").slideToggle("100");
    });
})