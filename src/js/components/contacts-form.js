module.exports = function () {

    const $contacts_description_container = $(".content-description-contacts");

    if ($contacts_description_container.length) {

        const $contacts_form = $(".content-description-contacts form");
        const $contacts_check_validation_textarea = $(".content-description-contacts form textarea");
        const $comment_error = $(".comment-error");

        $contacts_form.validate({
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

        $contacts_check_validation_textarea.bind('input property change', function(e) {
            e.preventDefault();

            e.target.textLength > 2
                ? $contacts_check_validation_textarea.addClass("textarea-valid")
                : $contacts_check_validation_textarea.removeClass("textarea-valid");

            $contacts_check_validation_textarea.hasClass("textarea-valid")
                ? $comment_error.css("display", "block")
                : $comment_error.css("display", "none");
        });

    }
};
