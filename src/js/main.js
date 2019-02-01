// prevent babel from losing this
// this should be window object
function init() {
    this.$ = require("jquery/dist/jquery");
    this.jQuery = this.$;

    require("svg4everybody/dist/svg4everybody")();

    $(document).ready(function () {
        // Globals
        require("slick-carousel/slick/slick.min");
        require("jquery-validation/dist/jquery.validate");

        // Modules
        require("./components/collapse")();
        require("./components/carousel")();
        require("./components/sub-menu")();
        require("./components/switch-language")();
        require("./components/items-providers")();
        require("./components/mobile-menu")();
        require("./components/forms-validate")();
        require("./components/call-back-form")();
        require("./components/contacts-form")();
    });
}

init.bind(window)();
