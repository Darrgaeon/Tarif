module.exports = function () {

    const transition_duration = 200;
    const $nav_bar_switch_language = $(".nav-bar__switch-language");
    const $switch_language_sub_menu = $(".switch-language__sub-menu");
    let check_open_switch_language_menu = false;

    function stop_switch_language_menu() {
        if (check_open_switch_language_menu) {
            $switch_language_sub_menu.stop().slideUp();
        }
    }

    $nav_bar_switch_language.on("click", function() {
        $switch_language_sub_menu.fadeToggle(transition_duration);

        check_open_switch_language_menu = true;


        let timer_check_switch_language_menu = setInterval(function(){
            stop_switch_language_menu();
        }, 5000);

        $switch_language_sub_menu.hover(function () {
            check_open_switch_language_menu = false;
            clearInterval(timer_check_switch_language_menu);
        });
    });

    $switch_language_sub_menu.on("click", "li",function (){
        const getLanguage = $(this).data("short-name");
        $(".nav-bar__switch-language span").text(getLanguage);
    });

    $switch_language_sub_menu.mouseleave(function(){
        $(this).stop().slideUp();
    });
};
