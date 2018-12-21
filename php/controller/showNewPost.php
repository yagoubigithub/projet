<?php
require_once('../db.php');
require_once('../model/postAPI.php');



    $compare_date = $_GET['compare_date'];
   
    $posts=false;
    $posts = postAPI_select_posts_by_compare_date($compare_date);
    if (!$posts)
        echo 'null';
    else {
        echo json_encode($posts);
    }


?>