module.exports = function () {
    const transition_duration = 200;
    const $nav_bar_container = $(".nav-bar-menu");

    if ($nav_bar_container.length) {
        $nav_bar_container.on("click", "ul > li", function () {
            $(this).children(".sub-menu").fadeToggle(transition_duration);
        });
    }
};
