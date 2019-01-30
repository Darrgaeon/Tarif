module.exports = function () {
    $(document).ready(function() {
        $(".gallery-slides").slick({
            dots: true,
            dotsClass: "slick-dots",
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });
    });
};
