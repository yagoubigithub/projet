<?php
require_once('../db.php');
require_once('../model/postAPI.php');



    $id_post = $_GET['id_post'];
   
    $post=false;
    $post = delete_post_by_id($id_post);
    if (!$post)
        echo false;
    else {
        echo true;
    }


?>