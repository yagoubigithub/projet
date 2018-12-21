function returnStudentItem (obj){
    let theme = '';
    let span_error = '';
    let blocked_btn = '<button class="dropdown-item"  onclick="suprimerUser(' + obj.id  + ')" >Blocker</button>' ;
    if(obj.blocked !== "no"){
      theme = 'bg-dark text-white';
      span_error = '<span style="color: red">Blocked</span>';
      blocked_btn = '<button class="dropdown-item" onclick="deblockerUser(event,' + obj.id  + ')" >DeBlocker</button>' ;

    }

    const item = '<div class="card student-item-list '  +

    theme + '">' + 


    //image profile container
    '<div class="list-item-image-profile-container">' + 

    //image profile
    ' <img class="rounded-circle" width="50" height="50" ' + 

    'src="../images/'+obj.image+'" />' + 



    //fin image profile container

    '</div>'  + 


    //container of name and email
    ' <div class="list-item-name-and-email-container" style="flex-grow: 8">' + 

    '<h6>' + obj.firstname +' '+ obj.lastname+ '</h6>' + 
  '<p><small>' + obj.email + '</small></p>' +

  span_error + 


    //fin container of name and email
    '</div>'  + 


    //dropdown container

    '<div>' +


    //dropdown
  ' <div class="dropdown">' + 


  //dropdown button
 '<button type="button" class="dropdown-btn" id="' + obj.id  +'"' +
 
 'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
 ' <div class="bar"></div>' +
 ' <div class="bar"></div>' +
 ' <div class="bar"></div>' +

//fin dropdown button
 '</button>' +


 //dropdown menu
' <div class="dropdown-menu" aria-labelledby="' + obj.id  + '">' +

//item 1 : blocker student  
blocked_btn + 


//item 2 : send mail to student  
'<button class="dropdown-item"   data-toggle="modal" data-target="#sendEmialModel" >Send mail</button>' + 


 //fin dropdown menu
 '</div>' + 

   //fin dropdown
    '</div>' + 

    // fin dropdown container
    '</div>'  + 



    // fin list item student
    '</div>'  ;
    return item;


}