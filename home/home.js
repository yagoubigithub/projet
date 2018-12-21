/*
SELECT tab2.id,tab2.type,tab2.content,tab2.id_user,tab2.date,u.firstname,u.lastname,u.image FROM(SELECT * FROM
        (SELECT * FROM `posts` p
        ORDER BY p.id DESC
        LIMIT 6 ) tab1 
        ORDER BY tab1.id 
        LIMIT 3) tab2 
        JOIN users u
        ON u.id = tab2.id_user
        ORDER BY tab2.id DESC
*/

let userId = null;
let NumberPost= 0;
let number_of_groupe = 1;
let isAdmin ='no';
let compare_date = null;
let number_notification = 0;
let length_notification = 0;
let post_model = '';
let model_confirme_delete_user ='';
let user  = null;
let list_students  = '';
let is_list_students = false;
$(document).ready(function(){
    $.ajaxSetup({cache:false});
   
    $.get("../php/controller/getUserInformationSession.php",function(userSession){
        //intilal work
        user = JSON.parse(userSession);
        userId  = user.id;
        isAdmin =user.isadmin;
        
        $("#profile_card_image").attr("src","../images/"+user.image);
        $("#profile_card_firstname_lastname").html(user.firstname.toUpperCase() + " " + user.lastname .toUpperCase());
        $("#profile_card_email").html(user.email );
        $("#user_id").val(user.id);
/*************************************************************************** */


      
        /************************SELECT POSTS******************************* */

 $.get("../php/controller/SelectPosts.php",{number_of_groupe: number_of_groupe},
 function(posts){
     //show posts
     const obj = JSON.parse(posts);
     if(number_of_groupe === 1){
         compare_date  = obj[0].date_post;
        setInterval(function(){
            showNotification(compare_date);
        },5000)
       
    

    }
   obj.forEach(post => {
    document.getElementById('post_container').innerHTML +=returnPost(post,user);
     
   });


 });



 $("#more_comment_btn").click(function(){
     number_of_groupe++;
    $.get("../php/controller/SelectPosts.php",{number_of_groupe: number_of_groupe},
    function(posts){
        //show posts
        const obj = JSON.parse(posts);
        
        if(obj[0].id_post === "5"){
            
            $("#more_comment_btn").css("display" ,"none");
            obj.forEach(post => {
                if(post.id_post !== "5" )
                document.getElementById('post_container').innerHTML +=returnPost(post);
               });
        }else{
            obj.forEach(post => {

                document.getElementById('post_container').innerHTML +=returnPost(post);
               });
        }
      
   
   
    });
 })


        /*********************************************************************** */


        //*************** */ ADD POST  type :Text*******************************

        $("#add_text_post_btn").click(function(){
           if( $("#textarea-make-post").val() !== ""){
               const post_text  = $("#textarea-make-post").val();
               const d = new Date();
               $.post("../php/controller/addPost.php",{
                   type :  "text",
                   content :  post_text,
                   id_user : user.id,
                   date :d

               },function(data){
                   //confirme post added
               
                   
                   location.reload();
               });
           }
        })
        /******************************************************************* */
        /*********************************ADD POST TYPE IMAGE */
       
        $("#upload_image_form").on('submit',(function(e){
            e.preventDefault();
            $.ajax({
            url: "../php/controller/upload_post_image.php",
            type: "POST",
            data:  new FormData(this),
            contentType: false,
            cache: false,
            processData:false,
            beforeSend: function() {
                console.log("before send");
              },complete: function() {
                  //complete
                  $("#upload_image_form").trigger("reset");
                  
              },
            success: function(data){
                if(data){
                    location.reload();
                }
            },
            error: function(error){
                console.log("error :" + error);

            } 	        
            });
            }));
   /********************************************************************************** */     
     /*********************************ADD POST TYPE FILE */
       
     $("#upload_file_form").on('submit',(function(e){
        e.preventDefault();
        $.ajax({
        url: "../php/controller/upload_post_file.php",
        type: "POST",
        data:  new FormData(this),
        contentType: false,
        cache: false,
        processData:false,
        beforeSend: function() {
            console.log("before send");
          },complete: function() {
              //complete
              $("#upload_file_form").trigger("reset");
              
          },
        success: function(data){
            if(data){
                location.reload();
            }
        },
        error: function(error){
            console.log("error :" + error);

        } 	        
        });
        }));
/**************************Change data profile******************************************************** */     


/********************************************************************************** */  


    });
});