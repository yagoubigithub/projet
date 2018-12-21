<?php
require_once('../model/postAPI.php');

session_start();
if(isset($_FILES['upload_file']) && isset($_SESSION['id']) && isset($_POST['textarea-make-file-post'])){
    $file  = $_FILES['upload_file'];
   
    $file_name =$file['name'];
    $file_tmp = $file['tmp_name'];
    $file_size = $file['size'];
    $file_error = $file['error'];
   
    $text = $_POST['textarea-make-file-post'];

    //Work out the file extension

    $file_ext = explode('.',$file_name);

    $file_ext = strtolower(end($file_ext));
    $allowed = array('doc','pdf','txt');

    if(in_array($file_ext,$allowed)){
        if($file_error === 0){
            if($file_size <= 20097152){
                $uniqueId = uniqid('',true);
                $file_name_new = $uniqueId . '.' . $file_ext;
                if(move_uploaded_file($file_tmp , '../../files/' . $file_name_new)){
                    //insert post type file
                    $content = $text ;
                    $id_user = $_SESSION['id'];
                    $type = "file";
                    $date = date('Y-m-d H:i:s');
                    $is_post = postAPI_insert_Post($type, $content, $id_user,$date, $file_name_new,$file_name);
  
                    echo $is_post;
                   
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