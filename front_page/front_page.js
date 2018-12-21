function connexion() {
  const email = document.getElementById("login_email_input").value;
  const password = document.getElementById("login_password_input").value;
  const url = `php/controller/login.php?email=${email}&password=${password}`;
  fetch(url)
    .then(response => response.json())
    .then(response => {
      // test login data
      if (response !== null) {
        login(response);

        //console.log(response);
      } else {
        document.getElementById("login_email_input").style.borderColor = "red";
        document.getElementById("login_password_input").style.borderColor =
          "red";
        alert("Email or passowrd is invalid");
        document.getElementById("login_email_input").value = "";
        document.getElementById("login_password_input").value = "";
      }
    })
    .catch(error => {
      //error
      console.log(error);
    });
}

//

function login(userData){
  console.log(userData);
    window.location = "home/home.html";
}

$(document).ready(function(){
  $.ajaxSetup({cache:false});
 
  $("#Inscription_form").on("submit", function(e) {
    e.preventDefault();
    if($("#co_password").val() !== $("#password").val() && !/^[a-zA-Z0-9]{4,}$/gi.test($("#password").val()) ){
      $("#password").addClass("is-invalid");
      $("#co_password").addClass("is-invalid");
      return;
    }
      if(!/^[a-zA-Z0-9]{4,}$/gi.test($("#first_name").val())){
        $("#first_name").addClass("is-invalid");
        return;

      }

      if(!/^[a-zA-Z0-9]{4,}$/gi.test($("#last_name").val())){
        $("#last_name").addClass("is-invalid");
        return;
      }
      if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi.test(String($("#email").val().toLowerCase()))){
        $("#email").addClass("is-invalid");
        return;

      }
    


    $.ajax({
      url: "php/controller/addUser.php",
      type: "POST",
      data: new FormData(this),
      contentType: false,
      cache: false,
      processData: false,
      beforeSend: function() {
        console.log("before send");
      },
      complete: function() {
        //complete
      },
      success: function(data) {
        if (data) {
            //go to confirm email
        }
      },
      error: function(error) {
        console.log( error);
      }
    }); 
  });

});
