function checkEmail()
{
      //check textboxes to make sure they are not empty
      //check to see if the text in both boxes is the same

      var email = document.getElementById("email").value;
      var confirm = document.getElementById("confirm").value;

      if(email == "")  ///conditional expression, when is true then the code in the block will be executed
      {
          document.getElementById("email-error").innerHTML = "Please fill in this field";
      }
      else 
      {
        document.getElementById("email-error").innerHTML = "";
      }

      //check to see if confirm textbox is empty
      if(email == "")  ///conditional expression, when is true then the code in the block will be executed
      {
          document.getElementById("confirm-error").innerHTML = "Please fill in this field";
      }
      else 
      {
        document.getElementById("confirm-error").innerHTML = "";
      }

      //check if both text boxes have the same value
      if( email != confirm) // if the two strings are NOT the same
      {
          //print error
          document.getElementById("email-error").innerHTML = "both emails must be the same";
          document.getElementById("confirm-error").innerHTML = "both emails must be the same";
      }
   
}