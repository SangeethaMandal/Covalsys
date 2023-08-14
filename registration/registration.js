function myFun(){
     /*for the Full Name*/
    var correct_way=/^[A-Za-z. ]{3,30}$/;
    var a=document.getElementById("fullname").value;
    var b=document.getElementById("username").value;
    

    if(a==""){
        document.getElementById("Message").innerHTML="**Please fill the FullName";
        return false;
    }
    if(a.length<3){
        document.getElementById("Message").innerHTML="**FullName must be more than 3 characters";
        return false;
    }
    if(a.length>20){
        document.getElementById("Message").innerHTML="**FullName cannot be more than 20 characters";
        return false;
    }
    if(a.match(correct_way))
        return true;
    if(a!=(correct_way)){
          document.getElementById("Message").innerHTML="**Only alphabets are allowed";
           return false;
    }

      /*for the User Name*/
      
  
    if(b==""){
          document.getElementById("Username_message").innerHTML="**Please fill the UserName";
          return false;
      }
    if(b.length<3){
          document.getElementById("Username_message").innerHTML="**Username must be more than 3 characters";
          return false;
      }
      if(b.length>20){
          document.getElementById("Username_message").innerHTML="**Username cannot be more than 20 characters";
          return false;
      }
      if(b.match(correct_way))
          true;
      else{
          document.getElementById("Username_message").innerHTML="**Only alphabets are allowed";
          return false;
      }
    
    
}