<?php
require_once('../db.php');
require_once('../model/postAPI.php');

if (isset($_POST['type']) && isset($_POST['content']) && isset($_POST['id_user'])) {

    $content = $_POST['content'];
    $id_user = $_POST['id_user'];
    $type = $_POST['type'];
    $date = date('Y-m-d H:i:s');

    $is_posts = postAPI_insert_Post($type, $content, $id_user,$date,"","");
  
   echo $is_posts;

}
?>