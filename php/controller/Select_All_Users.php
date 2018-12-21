<?php
require_once('../db.php');
require_once('../model/userAPI.php');



   
   
    $users=false;
    $users = select_Users();
    if (!$users)
        echo 'null';
    else {
        echo json_encode($users);
    }


?>