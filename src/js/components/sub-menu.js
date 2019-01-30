module.exports = function () {

    const $sub_menu = $(".sub-menu");

    $("nav ul li a:not(:only-child)").click(function(e) {
        $(this).siblings($sub_menu).toggle();

        $sub_menu.not($(this).siblings()).hide();
        e.stopPropagation();
    });
};
