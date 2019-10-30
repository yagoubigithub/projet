$(document).ready(function(){
    $.ajaxSetup({cache:false});
 
   $("#confirme_btn").click(function(){
      const codetext =  $('#confirmer_input').val();
      
      if(!/^[0-9]{4,}$/gm.test(codetext)){
          return;
      }else{
        $.get("../php/controller/TestCodeConfirmeEmail.php",{codetext : codetext},function(data){
           if(data){
               //desuprimerUser
               $.get("../php/controller/desuprimerUser.php",function(data){
                if(data){
                    
                    window.location="../.";
                }else{
                    alert("code pas correct");
                }
         
             });
              
           }else{
               alert("code pas correct");
           }
    
        });
      }

   });
    

});