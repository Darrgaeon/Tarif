module.exports = function () {
    // Spoilers on ... page
    const $spoilers = $(".collapsible");
    const $spoilers_arrow = $(".collapsible-dropdown");

    $spoilers.on("click", function () {
        $(this).next().slideToggle();
        const index = $spoilers.index(this);
        $spoilers_arrow[index].classList.toggle("collapsible-dropdown-close");
    });
};
