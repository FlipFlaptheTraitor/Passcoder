// Assignment code here
var generateButton = document.getElementById('generate');
// Get references to the #generate element
generateButton.addEventListener('click', function() {
    generateNewPassword();
});
//function that creates password generator
function generateNewPassword() {
    var length = Number(prompt("How many characters would you like your password to be?"));
   // while confirms length of character length input
    while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
    var uppers = confirm("Would you like to use uppercase letters?");
    var lowers = confirm("Would you like to use lowercase letters?");
    var numbers = confirm("Would you like to use numbers?");
    var symbols = confirm("Would you like to use special characters?");
    //checking to make sure that at least one choice of numbers letters and special characters are chosen
    while (!uppers && !lowers && !numbers && !symbols) {
    alert("You must select at least one character type!");
    uppers = confirm("Would you like to use uppercase letters?");
    lowers = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use special characters?");
    }
    // empty varibles for loop
    var password = "";
    var allowed = {};
    // establishes parameters for loop 
    if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
    if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
    if (numbers) password += rando(allowed.numbers = "1234567890");
    if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");
    // for loop that uses rando and perameters to generate a passcode  
    for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);
    document.getElementById("password").value = randoSequence(password).join("");
}

