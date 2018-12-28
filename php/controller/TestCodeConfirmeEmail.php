<?php 
session_start();
require_once('../db.php');
require_once('../model/userAPI.php');


if(isset($_GET['codetext'])){
    $codetext = $_GET['codetext'];
    $random = $_SESSION['random'];
    if($codetext == $random){
        //deblocker
       $is_deblocked =  deblocker_user_by_id($_SESSION['id']);
       echo true;
    }else{
        echo false;
    }


}
?>