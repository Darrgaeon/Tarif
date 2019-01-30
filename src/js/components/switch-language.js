module.exports = function () {

    const $switch_language = $(".nav-bar__switch-language button");
    const $switch_language_sub_menu = $(".switch-language__sub-menu");

    $switch_language.click(function() {
        $switch_language_sub_menu.toggle();
    });

    $switch_language_sub_menu.on('click','li',function (){
        const getLanguage = $(this).text();
        $switch_language_sub_menu.toggle();
        const get_first_three_characters = getLanguage.substring(0, 3);
        $switch_language.text(get_first_three_characters);
    });
};
