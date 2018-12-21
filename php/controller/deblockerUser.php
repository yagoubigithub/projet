<?php
require_once('../db.php');
require_once('../model/userAPI.php');



    $id_user = $_GET['id_user'];
   
    $user=false;
    $user = deblocker_user_by_id($id_user);
    if (!$user)
        echo false;
    else {
        echo true;
    }


?>