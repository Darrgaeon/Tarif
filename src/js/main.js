// prevent babel from losing this
// this should be window object
function init() {
    this.$ = require("jquery/dist/jquery");
    this.jQuery = this.$;

    require("svg4everybody/dist/svg4everybody")();

    $(document).ready(function () {
        // Globals
        require("ddslick/dist/jquery.ddslick.min");


        require("./components/select")();
    });
}

init.bind(window)();
