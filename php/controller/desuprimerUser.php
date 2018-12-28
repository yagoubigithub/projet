<?php
session_start();
require_once('../db.php');
require_once('../model/userAPI.php');



    $id_user = $_SESSION['id'];
   
    $user=false;
    $user = desuprimer_user_by_id($id_user);
    if (!$user)
        echo false;
    else {
        echo true;
    }


?>