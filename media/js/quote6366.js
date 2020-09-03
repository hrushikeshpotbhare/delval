$(function () {
    var tpl = '<div class="form-group" id="other-option-list"><input class="form-control" required="required" placeholder="Please Specify Product*" name="ContactForm[product_interested]" id="ContactForm_product_interested" type="text"></div>'
    var tplR = '<div class="form-group" id="other-reason-list"><input class="form-control" required="required" placeholder="Please Specify Reason*" name="ContactForm[reason_contact]" id="ContactForm_reason_contact" type="text"></div>'

    $("#ContactForm_reason_contact").change(function () {
        if ($(this).val() == 'Other (please specify)') {
            $("#reasons-list").append(tplR);
        } else {
            $("#other-reason-list").remove();
        }
    });
     $("#ContactForm_product_interested").change(function () {
        if ($(this).val() == 'Other (please specify)') {
            $("#other-product-list").append(tpl);
        } else {
            $("#other-option-list").remove();
        }
    });

    $('#contact-form').submit(function (event) {
        if (!grecaptcha.getResponse()) {
            console.log('captcha not yet completed.');
            event.preventDefault(); //prevent form submit
            grecaptcha.execute();
        } else {
            console.log('form really submitted.');
        }
    });

    onCompleted = function () {
        console.log('captcha completed.');
        $('#contact-form').submit();
    };

});