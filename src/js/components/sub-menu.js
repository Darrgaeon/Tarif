module.exports = function () {
    const transition_duration = 200;
    const $top_menu = $(".nav-bar .nav-bar-menu");
    // const $nav_bar_container = $(".nav-bar-menu");

    if ($top_menu.length) {
        $top_menu.on("click", "ul > li", function () {
            const $sub_menu = $(this).children(".sub-menu");
            $sub_menu.fadeToggle(transition_duration);

            $sub_menu.mouseleave(function(){
                $(this).stop().slideUp();
            });
        });
    }
};
