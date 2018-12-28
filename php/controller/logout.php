<?php
session_start();
if($_SESSION['id']){
    $is_des = session_destroy();
    echo $is_des;
}else{
    echo false;
}
 
?>