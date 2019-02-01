module.exports = function () {

    const transition_duration = 200;
    const $nav_bar_switch_language = $(".nav-bar__switch-language");
    const $switch_language_sub_menu = $(".switch-language__sub-menu");

    $nav_bar_switch_language.on("click", function() {
        $switch_language_sub_menu.fadeToggle(transition_duration);
    });

    $switch_language_sub_menu.on("click", "li",function (){
        const getLanguage = $(this).data("short-name");
        $(".nav-bar__switch-language span").text(getLanguage);
    });

    $switch_language_sub_menu.mouseleave(function(){
        $(this).stop().slideUp();
    });
};
