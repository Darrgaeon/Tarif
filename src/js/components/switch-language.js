module.exports = function () {

    const $nav_bar_switch_language = $(".nav-bar__switch-language span");
    const $switch_language_sub_menu = $(".switch-language__sub-menu");

    $nav_bar_switch_language.on("click", function() {
        $switch_language_sub_menu.toggle();
    });

    $switch_language_sub_menu.on("click", "li",function (){
        const getLanguage = $(this).data("short-name");
        $switch_language_sub_menu.toggle();
        $nav_bar_switch_language.text(getLanguage);
    });
};
