<?php
require_once('../model/postAPI.php');

session_start();
if(isset($_FILES['upload_image']) && isset($_SESSION['id']) && isset($_POST['textarea-make-image-post'])){
    $image  = $_FILES['upload_image'];
   
    $file_name =$image['name'];
    $file_tmp = $image['tmp_name'];
    $file_size = $image['size'];
    $file_error = $image['error'];
   
    $text = $_POST['textarea-make-image-post'];

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
                    //insert post type image
                    $content = $text ;
                    $id_user = $_SESSION['id'];
                    $type = "image";
                    $date = date('Y-m-d H:i:s');
                    $is_messages = postAPI_insert_Post($type, $content, $id_user,$date, $file_name_new,$file_name);
  
                    echo $is_messages;
                   
                }else{
                    echo "move_uploaded_file";
                }

            }else{
                echo "big size";
            }

        }else{
            echo $file_error;
        }
    }else{
        echo 'not jpg or png';
    }
   
}else{
    echo 'not  id';
}
?>