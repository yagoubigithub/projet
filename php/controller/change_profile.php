<?php

require_once('../model/userAPI.php');
session_start();
    $firstname =  $_POST['first_name_input'];
    $lastname =  $_POST['last_name_input'];
    $email =  $_POST['email_input'];
    $password  = null;
    if(!empty($_POST['password_input'])){
        $password =  $_POST['password_input'];
    }
    $file_name_new = null;
    

if($_FILES['change_profile_image_input']['error'] === 0){
    $image  = $_FILES['change_profile_image_input'];
    print_r($image);
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
                    

                    //update user

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

}else{
    //update user 
}

$id_user = $_SESSION['id'];
$is_update  = update_user_by_id($id_user,$firstname,$lastname,$email,$password,$file_name_new);

   
$user=false;
$user = select_User_By_id($id_user);
$_SESSION['id'] = $user['id'];
$_SESSION['firstname'] = $user['firstname'];
$_SESSION['lastname'] = $user['lastname'];
$_SESSION['email'] = $user['email'];
$_SESSION['image'] = $user['image'];
$_SESSION['isadmin'] = $user['isadmin'];
echo $is_update;


?>