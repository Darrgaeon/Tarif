module.exports = function () {

    const $mobile_menu = $(".mobile-menu");
    const $mobile_menu_button_open = $(".nav-bar-button-open");
    const $mobile_menu_button_close = $(".nav-bar-button-close");

    $mobile_menu_button_open.on("click", function () {
        $mobile_menu.css("width", "250px");
    });

    $mobile_menu_button_close.on("click", function () {
        $mobile_menu.css("width", "0");
    });

};
