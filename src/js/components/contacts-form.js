module.exports = function () {

    const $contacts_description_container = $(".content-description-contacts");

    if ($contacts_description_container.length) {

        const $contacts_form = $(".content-description-contacts form");

        $contacts_form.find("input[name='phone']").mask("05 99999999");

        $contacts_form.validate({
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
                comment: {
                    required: true,
                    minlength: 4,
                    textCheck: true
                },
                message: {
                    required: true
                }
            }
        });
    }
};
