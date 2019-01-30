module.exports = function () {
    // Spoilers on ... page
    const $spoilers = $(".collapsible");
    const $spoilers_arrow = $(".collapsible-dropdown");

    $.each($spoilers, function (item, value) {
       $(value).on("click", function () {
            $(this).next().slideToggle();
           $spoilers_arrow[item].classList.toggle("collapsible-dropdown-close");
        });
    });
};
