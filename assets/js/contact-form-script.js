/*==============================================================*/
// Contact Form JS
/*==============================================================*/
(function ($) {
    "use strict"; // Start of use strict
    $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });
    function submitForm(){
        // Initiate Variables With Form Content
        var name = $("#name").val();
        var email = $("#email").val();
        var msg_subject = $("#msg_subject").val();
        var phone_number = $("#phone_number").val();
        var message = $("#message").val();
        $.ajax({
            type: "POST",
            url: "https://formsubmit.co/ajax/jitender.work.mediax@gmail.com",
            dataType: 'json',
            accepts: 'application/json',
            data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&phone_number=" + phone_number + "&message=" + message,
            success: (data) => {
                window.location.href = 'index.html?success=true';
            },
            error: (err) => {
                console.error('Error submitting form:', err);
                alert('There was an error submitting the form.');
            }
        });
        // $.ajax({
        //     method: 'POST',
        //     url: 'https://formsubmit.co/ajax/yash@mediax.co.in',
        //     dataType: 'json',
        //     accepts: 'application/json',
        //     data: formData,
        //     success: (data) => {
        //         window.location.href = 'index.html?success=true';
        //     },
        //     error: (err) => {
        //         console.error('Error submitting form:', err);
        //         alert('There was an error submitting the form.');
        //     }
        // });
    }

    function formSuccess(){
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Submitted!")
    }

    function formError(){
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg){
        if(valid){
            var msgClasses = "h4 text-start tada animated text-success";
        } else {
            var msgClasses = "h4 text-start text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery)); // End of use strict