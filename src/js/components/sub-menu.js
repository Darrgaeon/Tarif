module.exports = function () {
    const transition_duration = 200;
    const $mobile_menu_container = $(".mobile-menu");
    const $nav_bar_container = $(".nav-bar-menu");
    let isDropdownOpened = false;
    let isDropdownMobileOpened = false;

    function closeDropdown() {
        if (isDropdownOpened) {
            $(".sub-menu").stop().slideUp();
        }
    }

    function closeDropdownMobile() {
        if (isDropdownMobileOpened) {
            $(".sub-menu-mobile").stop().slideUp();
        }
    }

    if ($nav_bar_container.length) {
        $nav_bar_container.on("click", "ul > li", function () {
            const $dropdown = $(this).children(".sub-menu");
            $dropdown.fadeToggle(transition_duration);
            isDropdownOpened = true;

            let selfCloseDropdownIntevalID = setInterval(function(){
                closeDropdown();
            }, 5000);

            $dropdown.hover(function () {
                clearInterval(selfCloseDropdownIntevalID);
            });

            $dropdown.mouseleave(function(){
                isDropdownOpened = false;
                $(this).stop().slideUp();
            });
        });
    }

    if ($mobile_menu_container.length) {
        $mobile_menu_container.on("click", "li", function () {
            let index = $(this).index();

            if (index === 2) {
                const $sub_menu_mobile = $(".sub-menu-mobile");
                $sub_menu_mobile.fadeToggle(transition_duration);
                isDropdownMobileOpened = true;

                let selfCloseDropdownMobileIntervalID = setInterval(function () {
                    closeDropdownMobile();
                }, 5000);

                $sub_menu_mobile.hover(function () {
                    isDropdownMobileOpened = false;
                    clearInterval(selfCloseDropdownMobileIntervalID);
                });

                $sub_menu_mobile.mouseleave(function () {
                    $(this).stop().slideUp();
                });
            }
        });
    }
};
