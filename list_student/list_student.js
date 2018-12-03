function returnStudentItem (){
    var obj = {
        "id_Student" : 1,
        "imageURLStudent" : "https://picsum.photos/50",
        "first_name" : "Abdou",
        "last_name" : "Yagoubi",
        "email" :"yagoubi.aek.2@gmail.com",
        dropdown_btn_id : 2
    }

    const item = '<div class="card student-item-list">'  +


    //image profile container
    '<div class="list-item-image-profile-container">' + 

    //image profile
    ' <img class="rounded-circle" width="50" height="50" ' + 

    'src="'+obj.imageURLStudent+'" />' + 



    //fin image profile container

    '</div>'  + 


    //container of name and email
    ' <div class="list-item-name-and-email-container" style="flex-grow: 8">' + 

    '<h6>' + obj.first_name +' '+ obj.last_name+ '</h6>' + 
  '<p><small>' + obj.email + '</small></p>' +


    //fin container of name and email
    '</div>'  + 


    //dropdown container

    '<div>' +


    //dropdown
  ' <div class="dropdown">' + 


  //dropdown button
 '<button type="button" class="dropdown-btn" id="' + obj.id_Student  +'"' +
 
 'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
 ' <div class="bar"></div>' +
 ' <div class="bar"></div>' +
 ' <div class="bar"></div>' +

//fin dropdown button
 '</button>' +


 //dropdown menu
' <div class="dropdown-menu" aria-labelledby="' + obj.id_Student  + '">' +

//item 1 : blocker student  
'<button class="dropdown-item" >Blocker</button>' + 


//item 2 : send mail to student  
'<button class="dropdown-item" >Send mail</button>' + 


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