<?php
session_start();
require_once('../db.php');
require_once('../model/userAPI.php');

if (isset($_GET['email']) && isset($_GET['password'])) {
$user = select_User_By_email_password($_GET['email'], $_GET['password']);

if($user !== null ){
    $_SESSION['id'] = $user['id'];
    $_SESSION['firstname'] = $user['firstname'];
    $_SESSION['lastname'] = $user['lastname'];
    $_SESSION['email'] = $user['email'];
    $_SESSION['image'] = $user['image'];
    $_SESSION['isadmin'] = $user['isadmin'];



   
}else{
    echo 'null';
}


}

?>