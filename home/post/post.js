function returnPost(obj ){

    var post = '<div class="card post-container" id="post_container' + obj.id_post + '">' +
    
    '<div class="post_header">' + 
    // image profile
    '<img src ="./images/'  + obj.image_user_post  + '"  class="post-profile-thumbnail"' + 
         'alt = "' + obj.firstname_post + '" />' + 
    
         '<div class="post-profile-name">' + 
    // first Name && last Name

    '<h5>' + obj.firstname_post.toUpperCase() + ' ' + obj.lastname_post.toUpperCase() +'</h5>' + 
   
    
    '</div>' ;
   if(user.isadmin  === 'yes'){
       post +=  //dropdown post
       '<div class="post-dropdown dropleft">' + 
   
       '<button  type="button" id="drop' + obj.id_post + '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + 
       '... </button>'+
   
       ' <div class="dropdown-menu" aria-labelledby="drop'+ obj.id_post + '">' ;
       if(obj.id_user_post !== user.id){
           
        post += ' <a class="dropdown-item" onclick="suprimerUser('+ obj.id_user_post + ')" href="#">Bloquer Utilisateur</a>' ;
       }
       

    post +=' <a class="dropdown-item" href="#" onclick="suprimerPost(event,'+ obj.id_post + ')">Suprimer Post</a>' +
   
       // fin dropdown-menu
       '</div>' +    
       
       // fin drop down
       '</div>' ;
   }
   
    
    // fin header
   post+= '</div>' ;
   
   if(obj.type_post === "text"){

    
    
       const content =  JSON.parse(obj.content_post);
       
        // content_post of the post
    post += '<div class="post-inner">' +
    
     quillGetHTML(content)  ;
}else if(obj.type_post ==="image"){
 /// post image
 const content =  JSON.parse(obj.content_post);
 post += '<div class="post-inner">' +
    
 quillGetHTML(content)  + 
 
 '<img class="card-img-top" src="./images/' + obj.file_name_post  + '" alt="' + obj.file_name_upload_post + '">';

}
else if(obj.type_post === "file"){
  //post file
  const content =  JSON.parse(obj.content_post);
  post += '<div class="post-inner">' +
    
  quillGetHTML(content)  + 
 
 '<a target="_blank" class="file_link"  href="./files/' + obj.file_name_post  + '" >' + obj.file_name_upload_post + '</a><br>';

}
  

    // date_post of the post
  post +=    '<div><span class="inner-post-date">' +  obj.date_post  + '</span> </div>' +

     
    

    // fin inner post
    '</div>' + 
    '<hr>' +
// post footer
    '<div class="post-footer">' + 


    //add comment
    '<div style="display:flex">' + 
   
    '<img src="./images/'+user.image+'" class="rounded-circle" width="45" height="45" >' + 
    '<input onkeyup="addComment(event,'+obj.id_post+')" placeholder="Add comment" class="form-control" />' + 


    //fin add comment
    '</div>' + 


    //fin footer -post
    '</div>' + 

   '<hr>' + 

   '<div>' + 
   '<button id="show_comments_btn_' + obj.id_post + 
    '" onclick="showComments('+ obj.id_post +  ');this.style.display=\'none\' ;" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="comments_' + obj.id_post +  '"' +
   'data-target="#comments_' + obj.id_post +  '"'+
   '>show comments</button>'+

   '</div>' + 
   
   // Comments section
    '<div class="collapse hide comments-container" id="comments_'+ obj.id_post  + '" >' + 

'<center><progress class="pure-material-progress-circular"/></center>'   +

 //fin comments section
    '</div>' +

     //fin post
     '</div>' +

    //fin card
    '</div>'
    ;
    return post;



}


function showComments(postId){
    $.get("./php/controller/getComments.php",{id_post  : postId} ,
    function(data){
        let comments = "";
        const obj = JSON.parse(data);
        
        if(obj){
            obj.forEach(comment => {
                let textAlign = '';
                let display = '';
                let borderRaduis ="";
                
                let flexDirection ='style ="flex-direction: row;"';
                let float = '';
                console.log(comment.id_user_comment);
                if(comment.id_user_comment === user.id){
                    display ='style ="opacity: 0;"';
                    flexDirection ='style ="flex-direction: row-reverse;"';
                    textAlign = 'style="text-align:right"';
                    float = 'floatRight';
                    borderRaduis = 'style  ="border-radius: 10px 0 10px 10px;" ';

                }
                comments += ''  +
    
    
                //First Comment
                   '<div class="comment" ' + flexDirection +'>' +
            
            
                   //image profile of comment
                   '<div class="comment-image-profile-container">' + 
            
            
                   ' <img src="./images/'+comment.image+'" class="rounded-circle" width="30" height="30" />' + 
            
            
                   //fin image profile of comment
                    '</div>' + 
            
                    //name and comment container
                    '<div class="comment-name-and-comment-container">' +
            
                    '<div class="comment-name-conatiner"'+ display + '><h6 '+textAlign+'><small>'+ comment.firstname.toUpperCase()+ " " + comment.lastname.toUpperCase()+'</small></h6></div>' +
            
                    //Comment container
            
                    '<div class="comment-container ' + float + '"  ' +borderRaduis+ '>' + 
            
                    '<span>'+ comment.content_comment + '</span>' +
            
            
                    '</div>' +
            
            
                    //fin name and comment container
                    '</div>' + 
            
                   //fin First comment
                   '</div>' ;
                
            
            
            });
            $("#comments_" + postId).html(comments);
            
            
        }else{
            $("#comments_" + postId).html("<p>No comments</p>");
        }
        
      

    });
   
   
}

function addComment(event,id_post){
    if (event.keyCode  === 13)
    {
        const comment = event.target.value;
        event.target.value = "";
        $.get("./php/controller/addComment.php",{comment : comment,id_post : id_post},function(data){
           
           $("#comments_"+id_post).addClass("show");
            showComments(id_post);
        });
        
      

    }    

}

function showNotification(compare_date){
    $.get("./php/controller/showNewPost.php",{compare_date : compare_date},function(data){
        const obj =  JSON.parse(data);
        if(obj !== null){
            if(obj.length !== 0){
                length_notification = obj.length;
                if(obj.length - number_notification !== 0)
                $("#badge_notification").html(obj.length - number_notification);
                document.getElementById("container_notification").innerHTML ="";
                obj.forEach(post => {
                    if(post.id_post !== user.id){
                         const item = '<div   onclick="showPostContent('+post.id_post+')"'
                    +' class="card dropdown-item" style=" cursor: pointer;display :flex;flex-direction :row;justify-content: center;">' + 
                    '<img class="rounded-circle"  width="40" height="40" src="../images/'+post.image+'">'+
                    '<h6>'  +post.firstname + '  ' + post.lastname +   ' posted at <small>'+post.date_post+'</small> </h6>' + 
                     ' </div>';
                    }
                   
                document.getElementById("container_notification").innerHTML += item;
                });
            }
        }
       
       

        
           
       
     });
}

function clearNotification(){
    number_notification = length_notification;
    $("#badge_notification").html("");
}

function showPostContent(id_post){
    $.get("./php/controller/Select_post_By_id.php",{id_post : id_post},function(data){
        const post = JSON.parse(data);
        if(post !== null){
            post.forEach(obj => { 
              post_model = returnPost(obj);
            });
        }
        $("#model_content").html(post_model);
        

    });


   
    $('#myModal').modal('show');
}

function suprimerUser(id_user){
    

    $.get("./php/controller/Select_users_information_by_id.php",{id_user : id_user},function(data){
       //show model confirmation of delete user
       const obj = JSON.parse(data);
       if(obj){
        model_confirme_delete_user = '<div class="modal-body" >' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLabel"> DELETE '+ obj.firstname.toUpperCase() + '</h5>' + 
        ' <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>'+
        '</button>' +
        '</div>' + 
        ' <div class="modal-body" >'+
       ' <p> You sure you want block this user  <mark>'+obj.firstname+' '+ obj.lastname + '</mark></p>' +
        
        '</div>' +
        
        '<div class="modal-footer">' +
        ' <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
        '<button type="button" onclick="deleteUser('+id_user+')" class="btn btn-danger" data-dismiss="modal">Delete</button>' +
        '</div>'
        ;
        $("#suprimerUser_model_content").html(model_confirme_delete_user);
        $("#suprimerUser_model").modal('show');
        
       }
      
    });

}


function deleteUser(id_user){
    $.get("./php/controller/delete_user.php",{id_user : id_user},function(data){
        if(data){
            alert("utilistateur blocker");
            if(is_list_students){
                showListStudents();
            }
        }else{
            alert("error");
        }

    });
}

function suprimerPost(event,id_post){
    event.preventDefault();
    $.get("./php/controller/suprimer_Post.php",{id_post : id_post},function(data){
        if(data){
           $("#post_container" + id_post).hide(500);
        }else{
            alert("error");
        }
        

    });
}

function showListStudents(){
    $.get("./php/controller/Select_All_Users.php",function(data){
        if(data){
            const obj = JSON.parse(data);
            if(obj.length !== 0){
                list_students = '';
                obj.forEach(user => {
                    list_students += returnStudentItem(user); 
                });
                $("#post_container").html(list_students);
                $("#more_comment_btn").css({"display" :"none"});
                $("#create-post").css({"display" :"none"});
                is_list_students = true;
            }
           
           
           
        }else{
            alert("error");
        }
        

    });
}

function deblockerUser(event ,id_user){
    event.preventDefault();
    $.get("./php/controller/deblockerUser.php",{id_user : id_user},function(data){
        if(data){
            showListStudents();
          
        }else{
            alert("error");
        }
        

    });
}