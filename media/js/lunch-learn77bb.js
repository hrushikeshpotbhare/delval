$(function () {
    $("input#other-products").change(function () {
        if ($(this).is(":checked")) {
            $("#other-section-product").append('<div class="col-md-7" id="specify-product"><input class="form-control" required="required" placeholder="Please specify" name="LunchLearnForm[product_interest][]"  type="text" style="margin-bottom:20px;"></div>');
        } else {
            $("#specify-product").remove();
        }
    });
    
    $("input#other-industry").change(function () {
        if ($(this).is(":checked")) {
            $("#other-section-industry").append('<div class="col-md-7" id="specify-industry"><input class="form-control" required="required" placeholder="Please specify" name="LunchLearnForm[industry_interest][]"  type="text" style="margin-bottom:20px;"></div>');
        } else {
            $("#specify-industry").remove();
        }
    });
    
    
    $('#lunch-learn-form').submit(function (event) {
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
        $('#lunch-learn-form').submit();
    };
});