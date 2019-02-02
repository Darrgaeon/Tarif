module.exports = function () {

    const $mobile_menu = $(".mobile-menu");
    const $mobile_menu_button_open = $(".nav-bar-button-open");
    const $mobile_menu_button_close = $(".nav-bar-button-close");

    function windowSize() {
        if ($(window).width() >= "560") {
            $mobile_menu_button_open.on("click", function () {
                $mobile_menu.css("width", "250px");
            });
        } else {
            $mobile_menu_button_open.on("click", function () {
                $mobile_menu.css("width", "156px");
            });
        }
    }

    $(window).on('load resize', windowSize);

    $mobile_menu_button_close.on("click", function () {
        $mobile_menu.css("width", "0");
    });

};
