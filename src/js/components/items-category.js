module.exports = function () {

    let array = $( ".container-category a" );

    array.hover(
        function() {
            $.each(array, function (item, value) {
                $(value).css({
                    "margin": "0 7px",
                });
            });

        }, function() {
            $.each(array, function (item, value) {
                $(value).css({
                    "margin": "0 12.5px",
                });

                if (item === 0) {
                    $(value).css({
                        "margin": "0 12.5px 0 0",
                    });
                }

                if (item === 3) {
                    $(value).css({
                        "margin": "0 0 0 12.5px",
                    });
                }
            });
        }
    );
};
