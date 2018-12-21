<?php
require_once('../db.php');
require_once('../model/postAPI.php');

    $id_post = $_GET['id_post'];
   
    $post=false;
    $post = postAPI_select_posts_by_id_post($id_post);
    if (!$post)
        echo 'null';
    else {
        echo json_encode($post);
    }


?>