<?php  
$host='localhost';
$dbname='projet';
$username = 'root';
$password = '';

// Create connection
$handle = mysqli_connect($host, $username, $password,$dbname);

// Check connection
if (!$handle) {
    die("Connection failed: " . mysqli_connect_error());
}

//
mysqli_query($handle,"SET NAMES 'utf8'");

// close connection
function db_close(){
    global $handle;
    mysqli_close($handle);
}

?>
