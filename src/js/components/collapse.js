module.exports = function () {

    // const coll = document.getElementsByClassName("collapsible");
    // const coll_dropdown = document.getElementsByClassName("collapsible-dropdown");

    const coll = $(".collapsible");
    const coll_dropdown = $(".collapsible-dropdown");

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            $(this).next().slideToggle();
            coll_dropdown[i].classList.toggle("collapsible-dropdown-close");

            // this.classList.toggle("active");
            // this.classList.toggle("collapse-margin");
            // let content = this.nextElementSibling;
            // coll_dropdown[i].classList.toggle("collapsible-dropdown-close");
            // if (content.style.display === "block") {
            //     content.style.display = "none";
            // } else {
            //     content.style.display = "block";
            // }
        });
    }
};
