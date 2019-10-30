
<?php
require_once('../db.php');

// get users information by his email if email invalid or empty return NULL
function select_User_By_email_password($email , $password){
    global $handle;
    if (empty($email))
        return null;
    $n_email = mysqli_real_escape_string($handle, strip_tags($email));
    $n_password = mysqli_real_escape_string($handle, strip_tags($password));

    if (!filter_var($n_email, FILTER_VALIDATE_EMAIL))
        return null;
        $query = sprintf("SELECT `id`, `firstname`,`lastname`,`email`,`image`,`isadmin`, `blocked` ,`suprimed`
        FROM `users` u
        WHERE `email` = '%s' AND `password` = '%s'", $n_email,$n_password);


$query_result = mysqli_query($handle, $query);

    if (!$query_result)
        return null;

    $user = null;
    $user = mysqli_fetch_assoc($query_result);


    return $user;

    
}

// get users information by his id 
function select_User_By_id($id_user ){
   
   try {
    global $handle;
    $n_id_user = (int)$id_user;
   
   
    
        $query = sprintf("SELECT `id`, `firstname`,`lastname`,`email`,`image`,`isadmin`
        FROM `users` u
        WHERE id = %d", $n_id_user);


$query_result = mysqli_query($handle, $query);

    if (!$query_result)
        return null;

    $user = null;
    $user = mysqli_fetch_assoc($query_result);


    return $user;
   }catch(Exepetion $ex){
    error_log($ex->getMessage());
       return null;
   }

    
}
// delete user  by his id 
function delete_user_by_id($id_user ){
   
    try {
     global $handle;
     $n_id_user = (int)$id_user;
    
    
     
         $query = sprintf("UPDATE users SET blocked='yes' WHERE id=%d", $n_id_user);
 
 
 $query_result = mysqli_query($handle, $query);
 
     if (!$query_result)
         return null;
 
     $user = null;
     $user = mysqli_fetch_assoc($query_result);
 
 
     return $user;
    }catch(Exepetion $ex){
     error_log($ex->getMessage());
        return null;
    }
 
     
 }
 

// get users information 
function select_Users(){
    global $handle;
   
        $query = sprintf("SELECT * 
        FROM `users`");


$query_result = mysqli_query($handle, $query);

    if (!$query_result)
        return null;
   
        $users = array();
        if($query_result->num_rows > 0 ){
            while($row = $query_result->fetch_assoc()) {
                array_push($users,$row);
            }
            mysqli_free_result($query_result);
            return $users;
        }


    return $users;

    
}


// delete user  by his id 
function deblocker_user_by_id($id_user ){
   
    try {
     global $handle;
     $n_id_user = (int)$id_user;
    
    
     
         $query = sprintf("UPDATE users SET blocked='no' WHERE id=%d", $n_id_user);
 
 
 $query_result = mysqli_query($handle, $query);
 
     if (!$query_result)
         return false;
 
    
 
     return true;
    }catch(Exepetion $ex){
     error_log($ex->getMessage());
        return false;
    }
 
     
 }
 


 // update user  by his id 
function update_user_by_id($id_user ,$firstname,$lastname,$email,$password,$image){
   
    try {
     global $handle;
     if (empty($email) || empty($firstname) || empty($lastname))
     return false;
     $n_id_user = (int)$id_user;
     $n_firstname = mysqli_real_escape_string($handle, strip_tags($firstname));
     $n_lastname = mysqli_real_escape_string($handle, strip_tags($lastname));
     $n_email = mysqli_real_escape_string($handle, strip_tags($email));
     $n_password = mysqli_real_escape_string($handle, strip_tags($password));
     $n_image = mysqli_real_escape_string($handle, strip_tags($image));

    
 

 if (!filter_var($n_email, FILTER_VALIDATE_EMAIL))
     return false;

     $query = sprintf("UPDATE users SET `firstname`='%s',`lastname`='%s',`email`='%s',`password`='%s',
        `image`='%s' WHERE `id`=%d",$n_firstname,$n_lastname,$n_email,$n_password,$n_image, $n_id_user);

     if($password === null){
        $query = sprintf("UPDATE users SET `firstname`='%s',`lastname`='%s',`email`='%s',
        `image`='%s' WHERE `id`=%d",$n_firstname,$n_lastname,$n_email,$n_image, $n_id_user);

     }
     if($image === null){
        $query = sprintf("UPDATE users SET `firstname`='%s',`lastname`='%s',`email`='%s',`password`='%s'
         WHERE `id`=%d",$n_firstname,$n_lastname,$n_email,$n_password, $n_id_user);

     }
     if($image === null && $password === null){
        $query = sprintf("UPDATE users SET `firstname`='%s',`lastname`='%s',`email`='%s'
        WHERE `id`=%d",$n_firstname,$n_lastname,$n_email, $n_id_user);

     }
        
 
 $query_result = mysqli_query($handle, $query);

     if (!$query_result)
         return false;

     return true;    
  
 
     return $query_result;
    }catch(Exepetion $ex){
     error_log($ex->getMessage());
        return false;
    }
 
      
}

// get users information by his email if email invalid or empty return NULL
function select_User_By_id_password($id_user, $password){
   try {
    global $handle;
    $n_id_user = (int)$id_user;
    
    $n_password = mysqli_real_escape_string($handle, strip_tags($password));

        $query = sprintf("SELECT * 
        FROM `users` 
        WHERE `password` = '%s' AND id=%d",$n_password,$n_id_user);
        $query_result = mysqli_query($handle, $query);

    if (!$query_result)
        return false;

    $user = null;
    $user = mysqli_fetch_assoc($query_result);


    if($user)
    return true;
}catch(Exepetion $ex){
    error_log($ex->getMessage());
       return false;
   }
}


function add_user($firstname,$lastname,$email,$password,$image){
   
    try {
     global $handle;
     if (empty($email) || empty($firstname) || empty($lastname) || empty($password)
      || empty($image))
     return "emty";
    
     $n_firstname = mysqli_real_escape_string($handle, strip_tags($firstname));
     $n_lastname = mysqli_real_escape_string($handle, strip_tags($lastname));
     $n_email = mysqli_real_escape_string($handle, strip_tags($email));
     $n_password = mysqli_real_escape_string($handle, strip_tags($password));
     $n_image = mysqli_real_escape_string($handle, strip_tags($image));

    
 

 if (!filter_var($n_email, FILTER_VALIDATE_EMAIL))
     return null;

     $query = sprintf("INSERT INTO  `users` (`firstname`,`lastname`,`email`,
     `password`,`image`,`isadmin`,`blocked`,`suprimed`) 
     VALUES ('%s','%s','%s','%s','%s','no','yes','yes')
       ",$n_firstname,$n_lastname,$n_email,$n_password,$n_image);

    
        
 
 $query_result = mysqli_query($handle, $query);

     if (!$query_result)
         return $query;
  
 
     return $query_result;
    }catch(Exepetion $ex){
     error_log($ex->getMessage());
        return $ex->getMessage();
    }
 
      
}


function desuprimer_user_by_id($id_user ){
   
    try {
     global $handle;
     $n_id_user = (int)$id_user;
         $query = sprintf("UPDATE users SET suprimed='no' WHERE id=%d", $n_id_user);
 
 
         $query_result = mysqli_query($handle, $query);
        $debloced =  deblocker_user_by_id($n_id_user);
     if (!$query_result && !$debloced)
         return false;
 return true;
 
    }catch(Exepetion $ex){
     error_log($ex->getMessage());
        return false;
    }
 
     
 }
 

?>