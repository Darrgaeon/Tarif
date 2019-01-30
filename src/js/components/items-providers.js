module.exports = function () {

    const array = $( ".container-providers ul li" );
        $(array).click(function () {
            const index = $(array).index(this);

            $.each(array, function (item, value) {
                $(value).removeClass("item-provider-active");
            });

            array[index].classList.toggle("item-provider-active");
        });
};
