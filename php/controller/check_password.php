<?php
session_start();
require_once('../db.php');
require_once('../model/userAPI.php');

if ( isset($_GET['password'])) {
$user = select_User_By_id_password($_SESSION['id'], $_GET['password']);
if($user)
echo $user;



}

?>