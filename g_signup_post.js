
    // SUBMIT FORM
    $("#signup_post").submit(function(event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost() {

        // PREPARE FORM DATA
        var formData = {
            user : $("select").val(),
            id : $("#G_id").val(),
            name : $("#G_name").val(),
            email : $("#G_email").val(),
            password : $("#G_pass").val(),
            repass : $("#G_repass").val()
        }

        // DO POST
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : "SignUp",
            data : JSON.stringify(formData),
            dataType : 'json',
            error : function(e) {
                alert("Error!")
                console.log("ERROR: ", e);
            }
        });

    }