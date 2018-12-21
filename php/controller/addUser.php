<?php

require_once('../model/userAPI.php');

   
    
    if(!empty($_POST['password'])  && !empty($_POST['first_name']) && !empty($_POST['last_name'])
    && !empty($_POST['email'])){
        $password =  $_POST['password'];
        $firstname =  $_POST['first_name'];
        $lastname =  $_POST['last_name'];
        $email =  $_POST['email'];
    
    $file_name_new = 'user-male-image.jpg';
    

if($_FILES['image']['error'] === 0){
    $image  = $_FILES['image'];
    
    $file_name =$image['name'];
    $file_tmp = $image['tmp_name'];
    $file_size = $image['size'];
    $file_error = $image['error'];
    

     //Work out the file extension

     $file_ext = explode('.',$file_name);

     $file_ext = strtolower(end($file_ext));
     $allowed = array('jpg','png','jpeg');

     if(in_array($file_ext,$allowed)){
        if($file_error === 0){
            if($file_size <= 3097152){
                $uniqueId = uniqid('',true);
                $file_name_new = $uniqueId . '.' . $file_ext;
                if(move_uploaded_file($file_tmp , '../../images/' . $file_name_new)){
                    echo 'image upload';

                }else{
                    echo 'error';
                }
            }else{

                echo 'big size';
            }
        }else{
            echo 'error ' . $file_error;
        }
     }else{
         echo 'is not image';
     }


    //

}
$is_user  = add_user($firstname,$lastname,$email,$password,$file_name_new);
//
if($is_user){
    //confirmer email
    $subject = "Confirmer Email";
    $random = rand(9999,99999)
  
    $txt = "<h1>code de confirmation :br><mark>"  .$random  . "</mark>";
    mail($email,$subject,$txt);
    echo $is_user;
}else{
    echo 'null';
}


    }else{
        echo 'null';
    }
?>