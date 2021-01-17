
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
            name : $("#name").val(),
            reg_no : $("#regno").val(),
            email : $("#email").val(),
            addredd : $("#add").val(),
            password : $("#pass").val(),
            repass : $("repass").val()
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