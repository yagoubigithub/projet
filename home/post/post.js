function returnPost(){
var obj = {
    "imageURL" : "https://picsum.photos/50",
    "first_name" : "Abdou",
    "last_name" : "Yagoubi",
    "content"  : "I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.",
     "date" : "1:32 PM - 12 Jan 2018",
     "numberLikes" : 432,
     "id_dropdown" : "id_drop_down"

}
    var post = '<div class="card post-container">' +
    
    '<div class="post_header">' + 
    // image profile
    '<img src ="'  + obj.imageURL  + '"  class="post-profile-thumbnail"' + 
         'alt = "' + obj.first_name + '" />' + 
    
         '<div class="post-profile-name">' + 
    // first Name && last Name

    '<h3>' + obj.first_name + '</h3>' + 
    '<h4> ' + obj.last_name +'</h4>' +
    
    '</div>' +
    //dropdown post
    '<div class="post-dropdown">' + 

    '<div class="dropdown">' + 

    '<button  type="button" id="' + obj.id_dropdown + '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + 
    '... </button>'+

    ' <div class="dropdown-menu" aria-labelledby="'+ obj.id_dropdown + '">' + 

 ' <a class="dropdown-item" href="#">Action</a>' +
 ' <a class="dropdown-item" href="#">azsa</a>' +

    // fin dropdown-menu
    '</div>' + 


    //fin dropdwon
    '</div>' + 
    
    


    
    // fin drop down
    '</div>' +
    
    // fin header
    '</div>' + 


    // content of the post
    '<div class="post-inner">' +
    
    '<p>' + obj.content +   '</p>'  +

    // date of the post
    '<span>' +  obj.date  + '</span> ' +

     
    '<hr>' + 

    // fin inner post
    '</div>' + 

// post footer
    '<div class="post-footer">' + 


   



    //add comment
    '<div style="display:flex">' + 
   
    '<img src="../image/user-male-image.jpg" class="rounded-circle" width="45" height="45" >' + 
    '<input placeholder="Add comment" class="form-control" />' + 


    //fin add comment
    '</div>' + 


    //fin footer -post
    '</div>' + 

   '<hr>' + 

   
   // Comments section
    '<div class="comments-container">' + 

    '<p><small class="text-muted">(2) Comments</small></p>'  +


    //First Comment
       '<div class="comment">' +


       //image profile of comment
       '<div class="comment-image-profile-container">' + 


       ' <img src="../image/user-male-image.jpg" class="rounded-circle" width="30" height="30" />' + 


       //fin image profile of comment
        '</div>' + 

        //name and comment container
        '<div class="comment-name-and-comment-container">' +

        '<div class="comment-name-conatiner"><h5>راضية منال منصوري</h5></div>' +

        //Comment container

        '<div class="comment-container">' + 

        '<p>orem ipsum dolor sit amet consectetur adipisicing elit. Doloribus enim corporis distinctio, a voluptatem laudantium possimus quae, eveniet dolorum deserunt aspernatur adipisci earum nam cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi odit similique ea aliquam illum enim.</p>' +


        '</div>' +


        //fin name and comment container
        '</div>' + 

       //fin First comment
       '</div>' + 
    
 //Second Comment
 '<div class="comment">' +


 //image profile of comment
 '<div class="comment-image-profile-container">' + 


 ' <img src="../image/user-male-image.jpg" class="rounded-circle" width="30" height="30" />' + 


 //fin image profile of comment
  '</div>' + 

  //name and comment container
  '<div class="comment-name-and-comment-container">' +

  '<div class="comment-name-conatiner"><h5>راضية منال منصوري</h5></div>' +

  //Comment container

  '<div class="comment-container">' + 

  '<p>orem ipsum dolor sit amet consectetur adipisicing elit. Doloribus enim corporis distinctio, a voluptatem laudantium possimus quae, eveniet dolorum deserunt aspernatur adipisci earum nam cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi odit similique ea aliquam illum enim.</p>' +


  '</div>' +


  //fin name and comment container
  '</div>' + 

 //fin Second comment
 '</div>' + 


 //fin comments section
    '</div>' +


     //fin post
     '</div>' +

    //fin card
    '</div>'
    ;
    return post;



}