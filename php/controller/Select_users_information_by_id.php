<?php
require_once('../db.php');
require_once('../model/userAPI.php');



    $id_user = $_GET['id_user'];
   
    $user=false;
    $user = select_User_By_id($id_user);
    if (!$user)
        echo 'null';
    else {
        echo json_encode($user);
    }


?>