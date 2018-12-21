<?php
require_once('../db.php');
require_once('../model/commentsAPI.php');
if(isset($_GET['id_post'])){
    //get comments
    $id_post = $_GET['id_post'];
   
    $comments=false;
    $comments = commentsAPI_select_comments_by_postId($id_post,2);
    if (!$comments)
        echo 'null';
    else {
        echo json_encode($comments);
    }
}
?>