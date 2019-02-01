module.exports = function () {

    const $сallbackContainer = $(".call-back");

    if ($сallbackContainer.length) {

        const $callbackForm = $(".call-back__me form");

        $callbackForm.validate({
            rules: {
                phone: {
                    required: true,
                    phoneCheck: true,
                    minlength: 7
                },
                name: {
                    required: true,
                    minlength: 4,
                    nameCheck: true
                },
                email: {
                    required: true,
                    email: true,
                    minlength: 2
                },
                message: {
                    required: true
                }
            }
        });

        // $(".privacy-policy").click(function(event){
        //     console.log(222);
        //     event.preventDefault();
        //     $('.call-back .button-send').attr('disabled',false);
        // });

    }
};
