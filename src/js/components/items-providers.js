module.exports = function () {

    const $array_providers = $( ".container-providers ul li" );
        $array_providers.on("click", function () {
            const index = $($array_providers).index(this);

            $.each($array_providers, function (item, value) {
                $(value).removeClass("item-provider-active");
            });

            $array_providers[index].classList.toggle("item-provider-active");
        });
};
