function showProfile() {
  const profile =
    '<form class="card" id="change_profile_form" enctype="multipart/form-data"> <div >' +
    ' <div class="form-group col-md " >' +
    ' <label for="first_name_input"><h4>First Name</h4></label>' +
    '<input type="text" class="form-control" id="first_name_input" name="first_name_input" value="' +
    user.firstname +
    '">' +
    //fin form group
    "</div>" +
    ' <div class="form-group col-md">' +
    ' <label for="last_name_input"><h4>Last Name</h4></label>' +
    '<input type="text" class="form-control" name="last_name_input" id="last_name_input" value="' +
    user.lastname +
    '">' +
    //fin form group
    "</div>" +
    ' <div class="form-group col-md">' +
    ' <label for="email_input"><h4>Email</h4></label>' +
    '<input type="text" class="form-control" id="email_input" name="email_input" value="' +
    user.email +
    '">' +
    //fin form group
    "</div>" +
    ' <div class="form-group col-md">' +
    ' <label for="password_input"><h4>Change Password</h4></label>' +
    '<input type="password" class="form-control" name="password_input" id="password_input" placeholder="nouveau mot de passe">' +
    //fin form group
    "</div>" +
    ' <div class="form-group col-md">' +
    ' <label for="change_profile_image_input"><h4>Change Image profile</h4></label>' +
    '<input type="file" class="form-control" id="change_profile_image_input" name="change_profile_image_input" >' +
    //fin form group
    "</div>" +
    ' <div class="form-group col-md">' +
    '<button type="button" id="save_the_change_change_profile" data-target="password_model" class="btn btn-success">Save the change</button>' +
    //fin form group
    "</div>" +
    //fin form
    "</div></form>";

  $("#post_container").html(profile);
  $("#more_comment_btn").css({ display: "none" });
  $("#create-post").css({ display: "none" });
  is_list_students = false;
  $("#save_the_change_change_profile").click(function() {
    $("#password_model").modal("show");
  });

  $("#change_profile_form").on("submit", function(e) {
    e.preventDefault();
    $.ajax({
      url: "./php/controller/change_profile.php",
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
          //update new user
          $.get("./php/controller/getUserInformationSession.php", function(
            userSession
          ) {
            console.log(user);
            //intilal work
            user = JSON.parse(userSession);
            userId = user.id;
            isAdmin = user.isadmin;

            $("#profile_card_image").attr("src", "../images/" + user.image);
            $("#profile_card_firstname_lastname").html(
              user.firstname.toUpperCase() + " " + user.lastname.toUpperCase()
            );
            $("#profile_card_email").html(user.email);
            $("#user_id").val(user.id);
          });
          console.log(data);
        }
      },
      error: function(error) {
        console.log(error);
      }
    });
  });
}

/********************************************************************************************* */

function SubmitTheChange() {
  const password = $("#inputPassword").val();
  $.get(
    "./php/controller/check_password.php",
    { password: password },
    function(data) {
      if (data) {
        $("#password_model").modal("hide");
        $("#change_profile_form").submit();
      }
    }
  );
}
