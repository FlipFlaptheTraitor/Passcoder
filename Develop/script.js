// Assignment code here
var pswdLength = pswdPeram;
var pswdPeram = function(){ var pswdLength = window.prompt("please enter a number between 8 and 128 to determine the length of password ");
      if (pswdLength >=  129 || pswdLength <= 7){
        pswdPeram(); //= window.prompt("please enter a number between 8 and 128 to determine the length of password ");
      }  
} 
console.log(pswdLength);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
pswdPeram();
