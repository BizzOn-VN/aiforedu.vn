var App = App || {};

//---MAIN----
jQuery(function () {
    App.Dev.contactFormValidate();
    App.Dev.subscribeFormValidate();
    App.Dev.getCurrentDate();
});

//--All site
App.Dev = function(){
    var flag = 1;

    var register = function(){
        if (jQuery('form#ggcontact').valid() && flag) {
            var data = jQuery('form#ggcontact').serialize();
            console.log(data);
            jQuery('#gg-submit').val('Sending...');
            
            flag = 0;

            jQuery.ajax({
                type : 'GET',
                url : 'https://script.google.com/macros/s/AKfycbxmly7514LLBxDKCCv_QEE_P7ToC6r3RaQi_ak4NfqEsnLikm__AymCNzrH7pfQngY/exec',
                dataType:'json',
                crossDomain : true,
                data : data,
                success : function(data)
                {
                    if(data == 'false')
                    {
                        alert('ERROR, Please try again later!');
                    }else{
                        flag = 1;
                        jQuery('#gg-submit').val('Send');
                        
                        // if(data.result == 'PHONE_EXIST')
                        //{
                        //    alert('Số điện thoại của bạn đã được đăng ký. \r\nChúng tôi sẽ liên hệ lại với bạn.');
                        //    return;
                        //}

                        if (data.result == "success") {
                            // dataLayer.push({'event': 'gtm_event_dangKyThanhCong'});
                            jQuery('form#ggcontact')[0].reset();
                            $.fancybox.close();
                            $("#md-tk").fancybox().trigger('click');
                        }
                    }
                }
            });
        }
    }

    var contactFormValidate = function(){

        var contactForm = jQuery('form#ggcontact');
        if (contactForm.length < 1) {
            return;
        }

        jQuery.validator.addMethod("validatePhone", function (value, element) {
            var flag = false;
            var phone = value;
            phone = phone.replace('(+84)', '0');
            phone = phone.replace('+84', '0');
            phone = phone.replace('0084', '0');
            phone = phone.replace(/ /g, '');
            if (phone != '') {
                var firstNumber = phone.substring(0, 3);
                var validNumber = ["099","095","092","086","088","096","097","098","032","033","034","035","036","037","038","039","089","090","093","070","079","077","076","078","091","094","083","084","085","081","082","092","056","058"];
                if ((jQuery.inArray(firstNumber,validNumber)!='-1') && phone.length == 10) {
                    if (phone.match(/^\d{10}/)) {
                        flag = true;
                    }
                }
            }
            return flag;
        }, "Invalid phone number format");

        contactForm.validate({
            ignore: "",
            rules: {
                'name': {
                    required: true,
                },
                'phone': {
                    required: true,
                    validatePhone:true,
                },
                'email': {
                    required: true,
                    email: true
                }
            },
            messages: {
                'name': {
                    required: "Please fill your name"
                },
                'phone': {
                    required:"Please fill phone",
                },
                'email': {
                    required: "Please fill email",
                    email: "Invalid email address"
                }
            },
            errorElement : 'p',
            errorClass: 'error',
            errorPlacement: function(error, element) {

                error.insertAfter(element);

            },
            highlight: function (element, errorClass) {
                jQuery(element).closest('.form-group').addClass('error');
            },
            unhighlight: function (element, errorClass) {
                jQuery(element).closest('.form-group').removeClass('error');
            },
        });
    }

    var subscribe = function(){
        if (jQuery('form#subscribe').valid() && flag) {
            var data = jQuery('form#subscribe').serialize();
            console.log(data);
            jQuery('#sub-submit').val('Sending...');
            
            flag = 0;

            jQuery.ajax({
                type : 'GET',
                url : 'https://script.google.com/macros/s/AKfycbxmly7514LLBxDKCCv_QEE_P7ToC6r3RaQi_ak4NfqEsnLikm__AymCNzrH7pfQngY/exec',
                dataType:'json',
                crossDomain : true,
                data : data,
                success : function(data)
                {
                    if(data == 'false')
                    {
                        alert('ERROR, Please try again later!');
                    }else{
                        flag = 1;
                        jQuery('#sub-submit').val('Contact us');

                        if (data.result == "success") {
                            // dataLayer.push({'event': 'gtm_event_dangKyThanhCong'});
                            jQuery('form#subscribe')[0].reset();
                            $.fancybox.close();
                            $("#md-tk").fancybox().trigger('click');
                        }
                    }
                }
            });
        }
    }

    var subscribeFormValidate = function(){

        var contactForm = jQuery('form#subscribe');
        if (contactForm.length < 1) {
            return;
        }

        contactForm.validate({
            ignore: "",
            rules: {
                'email': {
                    required: true,
                    email: true
                }
            },
            messages: {
                'email': {
                    required: "Please fill email",
                    email: "Invalid email address"
                }
            },
            errorElement : 'p',
            errorClass: 'error',
            errorPlacement: function(error, element) {

                error.insertAfter(element.parent());

            },
            highlight: function (element, errorClass) {
                jQuery(element).closest('.form-group').addClass('error');
            },
            unhighlight: function (element, errorClass) {
                jQuery(element).closest('.form-group').removeClass('error');
            },
        });
    }

    var getCurrentDate = function() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        
        $('.current-date').val(today);
    }

    var copyToClipboard = function(num) {
        var $temp = $("<input>");
        $("body").append($temp);
        if (num == 1) {
            $temp.val($("#bank-number").text()).select();
        }

        if (num == 2) {
            $temp.val($("#sms-phonenumber").text()).select();
        }
        
        document.execCommand("copy");
        $temp.remove();
    }

    var phoneChange = function() {
        var phone = $("#phone").val();
        phone = phone.replace('(+84)', '0');
        phone = phone.replace('+84', '0');
        phone = phone.replace('0084', '0');
        phone = phone.replace(/ /g, '');
        if (phone != '') {
            var firstNumber = phone.substring(0, 3);
            var validNumber = ["099","095","092","086","088","096","097","098","032","033","034","035","036","037","038","039","089","090","093","070","079","077","076","078","091","094","083","084","085","081","082","092","056","058"];
            if ((jQuery.inArray(firstNumber,validNumber)!='-1') && phone.length == 10) {
                if (phone.match(/^\d{10}/)) {
                    console.log(phone);
                }
            }
        }
    }

    return {
        register: register,
        contactFormValidate: contactFormValidate,
        subscribe: subscribe,
        subscribeFormValidate: subscribeFormValidate,
        getCurrentDate: getCurrentDate,
        copyToClipboard: copyToClipboard,
        phoneChange: phoneChange
    };

}();    
//--End All site