<?php
session_start();
require_once('../db.php');
require_once('../model/commentsAPI.php');

if (isset($_GET['id_post']) && isset($_GET['comment']) && isset($_SESSION['id'])) {

    $comment = $_GET['comment'];
    $id_post = $_GET['id_post'];
    $id_user = $_SESSION['id'];
    $date = date('Y-m-d H:i:s');
   

    $is_comments = commentsAPI_insert_comment($id_user,$id_post, $comment ,$date);
  
   echo $is_comments;

}
?>