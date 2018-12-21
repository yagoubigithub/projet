<?php
require_once('../db.php');
require_once('../model/postAPI.php');



    $number_of_groupe = $_GET['number_of_groupe'];
   
    $posts=false;
    $posts = postAPI_select_posts($number_of_groupe);
    if (!$posts)
        echo 'null';
    else {
        echo json_encode($posts);
    }


?>