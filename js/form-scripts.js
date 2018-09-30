$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        formError();
        submitMSG(false, "Avez-vous bien rempli tous les champs du formulaire ?");
    } else {
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initialisation des variables récupérées dans le form
    var name = $("#name").val();
    var email = $("#email").val();
	var subject = $("#subject").val()
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Votre message a bien été envoyé.")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "text-center tada animated text-success";
    } else {
        var msgClasses = "text-center tada animated text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}