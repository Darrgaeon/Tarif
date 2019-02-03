module.exports = function () {

    const $mobile_menu = $(".mobile-menu");
    const $mobile_menu_button_open = $(".nav-bar-button-open");
    const $mobile_menu_button_close = $(".nav-bar-button-close");

    //open mobile-menu
    $mobile_menu_button_open.on("click", function () {
        $mobile_menu.css("left", "0");
    });

    // function windowSize() {
    //     if ($(window).width() >= "560") {
    //         $mobile_menu_button_open.on("click", function () {
    //             $mobile_menu.css("left", "250px");
    //         });
    //     } else {
    //         $mobile_menu_button_open.on("click", function () {
    //             $mobile_menu.css("width", "156px");
    //         });
    //     }
    // }
    //
    // $(window).on('load resize', windowSize);

    //close mobile-menu
    $mobile_menu_button_close.on("click", function () {
        $mobile_menu.css("left", "-250px");
    });

    //close mobile-menu
    $(function($){
        $(document).mouseup(function (e){ // событие клика по веб-документу
            if (!$mobile_menu.is(e.target) // если клик был не по нашему блоку
                && $mobile_menu.has(e.target).length === 0) { // и не по его дочерним элементам
                $mobile_menu.css("left", "-250px");
            }
        });
    });

};
