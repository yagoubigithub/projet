<?php 
session_start();
if(!isset($_SESSION['id'])){
    include_once("./front_page/front_page.html");
}else{
    include_once("./home/home.html");
}

?>