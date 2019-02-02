module.exports = function () {

    // $('form').validate({
    //     showErrors: function(errorMap, errorList) {
    //
    //     },
        // onfocusout: false,
        // onkeyup: false,
        // rules: {
        //     email: {
        //         required: true
        //     }
        // },
        // messages: {
        //     email: {
        //         required: 'The email is required'
        //     }
        // }
    // });

    const $сall_back_container = $(".call-back");

    if ($сall_back_container.length) {

        const $call_back_form = $(".call-back__me form");

        $call_back_form.find("input[name='phone']").mask("05 99999999");

        $call_back_form.validate({
            errorPlacement: function(error, element) {},

            rules: {
                phone: {
                    required: true,
                    phoneCheck: true,
                    minlength: 7
                },
                name: {
                    required: true,
                    minlength: 4,
                    textCheck: true
                },
                email: {
                    required: true,
                    email: true,
                    minlength: 2
                },
                message: {
                    // required: true
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
