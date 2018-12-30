
<?php
require_once('../db.php');


/******insert post into post table in database */
function postAPI_insert_Post($type,$content,$id_user,$date,$file_name,$file_name_upload){
    try{
        global $handle;
        if (empty($type) ||  empty($id_user) || empty($date)) {
            error_log("post  or id_user is empty()");
            return false;
        }
        
        $n_type = mysqli_real_escape_string($handle, strip_tags($type));
        $n_date = mysqli_real_escape_string($handle, strip_tags($date));
       
        $n_content = mysqli_real_escape_string($handle, strip_tags($content));
        $n_file_name = mysqli_real_escape_string($handle, strip_tags($file_name));
        $n_file_name_upload = mysqli_real_escape_string($handle, strip_tags($file_name_upload));
        $n_id_user = (int)$id_user;
    
    
        $query = sprintf(
            "INSERT INTO `posts` (`type`,`content`,`id_user`,`date`,`file_name`,`file_name_upload`)
      VALUES ('%s','%s',%d,'%s','%s','%s')",
            $n_type,
            $n_content,
            $n_id_user
            ,$n_date,
            $file_name,
            $file_name_upload
        );
    
        $query_result = mysqli_query($handle, $query);
        if (!$query_result)
            return 'false';

        //return the post content    
        return 'true';
    
    }catch(Exepetion $ex){
        error_log($ex->getMessage());
        return 'false';
    }
   

}

/*******************************SELECT POSTS FROM DATABASE******************* */

function postAPI_select_posts($number_of_groupe){
    try{
        global $handle;
        $n_number_of_groupe = (int)$number_of_groupe;
       
        $query = sprintf("SELECT tab2.id id_post,tab2.type  type_post,tab2.content content_post,
        tab2.id_user id_user_post,tab2.date date_post,u.firstname firstname_post,
        u.lastname lastname_post,u.image image_user_post,tab2.file_name file_name_post,
         file_name_upload file_name_upload_post,u.isadmin isadmin_post FROM(SELECT * FROM
        (SELECT * FROM `posts` p
        ORDER BY p.id DESC
        LIMIT %d ) tab1 
        ORDER BY tab1.id 
        LIMIT 5) tab2 
        JOIN users u
        ON u.id = tab2.id_user
        ORDER BY tab2.id DESC", $n_number_of_groupe * 5) ;
        
        $query_result = mysqli_query($handle, $query);
    
        if (!$query_result)
            return null;
    
        $posts = array();
        
        if($query_result->num_rows > 0 ){
            while($row = $query_result->fetch_assoc()) {
                array_push($posts,$row);
            }
           
            mysqli_free_result($query_result);
            return $posts;
        }
    
    }catch(Exepetion $ex){
        error_log($ex->getMessage());
        return $ex->getMessage();
    }
   
}



/*******************************SELECT POSTS FROM DATABASE by date******************* */

function postAPI_select_posts_by_compare_date($compare_date){
    
    try{
        global $handle;

        if(empty($compare_date)){
            return null;
        }
        $n_compare_date = mysqli_real_escape_string($handle, strip_tags($compare_date));
       //p.id,u.firstname,u.lastname,u.image
        $query = sprintf("SELECT p.id id_post,u.id id_user,u.firstname,u.lastname,u.image,p.date date_post  FROM posts p
        JOIN users u 
        ON u.id  = p.id_user
        WHERE p.date  > '%s'", $n_compare_date ) ;
        
        $query_result = mysqli_query($handle, $query);
    
        if (!$query_result)
            return null;
    
        $posts = array();
        
        if($query_result->num_rows > 0 ){
            while($row = $query_result->fetch_assoc()) {
                array_push($posts,$row);
            }
           
            mysqli_free_result($query_result);
            return $posts;
        }
    
    }catch(Exepetion $ex){
        error_log($ex->getMessage());
        return false;
    }
   
}




/*******************************SELECT POSTS FROM DATABASE by id post******************* */

function postAPI_select_posts_by_id_post($id_post){
    
    try{
        global $handle;
        $n_id_post = (int)$id_post;
       
        
       //p.id,u.firstname,u.lastname,u.image
        $query = sprintf("SELECT p.id id_post,
        p.type type_post ,p.content content_post,u.id id_user_post,
        u.firstname firstname_post,u.lastname lastname_post,
        u.image image_user_post,p.file_name file_name_post,p.file_name_upload file_name_upload_post,
        p.date date_post  FROM posts p
        JOIN users u 
        ON u.id  = p.id_user
        WHERE p.id = %d", $n_id_post ) ;
        
        $query_result = mysqli_query($handle, $query);
    
        if (!$query_result)
            return null;
    
        $posts = array();
        
        if($query_result->num_rows > 0 ){
            while($row = $query_result->fetch_assoc()) {
                array_push($posts,$row);
            }
           
            mysqli_free_result($query_result);
            return $posts;
        }
    
    }catch(Exepetion $ex){
        error_log($ex->getMessage());
        return false;
    }
   
}



/*******************************delete POSTS FROM DATABASE by id post******************* */

function delete_post_by_id($id_post){
    
    try{
        global $handle;
        $n_id_post = (int)$id_post;
       
        
       
        $query = sprintf("DELETE from `posts`
        WHERE id = %d",  $n_id_post) ;
        
        
        $query2 = sprintf("DELETE from `comments` WHERE id_post=%d", $n_id_post) ;
        
        $query_result = mysqli_query($handle, $query);
        $query_result2 = mysqli_query($handle, $query2);
    
        if (!$query_result && !$query_result2)
            return null;
    
        return true;
        
        
    
    }catch(Exepetion $ex){
        error_log($ex->getMessage());
        return false;
    }
   
}



?>