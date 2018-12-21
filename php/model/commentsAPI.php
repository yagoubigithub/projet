<?php

function commentsAPI_select_comments_by_postId($id_post,$number_group_comment){
    try{
        global $handle;
        $n_id_post = (int)$id_post;
        $n_number_group_comment = (int)$number_group_comment;
       
        $query = sprintf("SELECT c.id id_comment,c.comment content_comment,c.date date_comment,u.firstname ,u.lastname, u.image 
        FROM `comments` c
        JOIN users u
        ON c.id_user = u.id AND c.id_post = %d
        ORDER BY 1 DESC", $n_id_post, $n_number_group_comment * 3) ;
        
        $query_result = mysqli_query($handle, $query);
    
        if (!$query_result)
            return null;
    
        $comments = array();
        
        if($query_result->num_rows > 0 ){
            while($row = $query_result->fetch_assoc()) {
                array_push($comments,$row);
            }
           
            mysqli_free_result($query_result);
            return $comments;
        }
    
    }catch(Exepetion $ex){
        error_log($ex->getMessage());
        return false;
    }
   
}

/******insert comment into comment table in database */
function commentsAPI_insert_comment($id_user,$id_post, $comment ,$date){
    try{
        global $handle;
        if (empty($comment) ) {
            error_log("comment is empty()");
            return 'false';
        }
        
        $n_comment = mysqli_real_escape_string($handle, strip_tags($comment));
        $n_date = mysqli_real_escape_string($handle, strip_tags($date));
       
       
        $n_id_user = (int)$id_user;
        $n_id_post = (int)$id_post;
    
    
        $query = sprintf(
            "INSERT INTO `comments` (`id_user`,`id_post`,`comment`,`date`)
      VALUES (%d,%d,'%s','%s')",
            $n_id_user,
            $n_id_post,
            $n_comment,
            $n_date
        );
    
        $query_result = mysqli_query($handle, $query);
        if (!$query_result)
            return 'false' . $query;

       
        return 'true';
    
    }catch(Exepetion $ex){
        error_log($ex->getMessage());
        return 'false';
    }
   

}



?>