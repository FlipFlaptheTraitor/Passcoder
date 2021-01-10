// Assignment code here
let specialCharacters = "&'()*+,-./:;<=>?@][\^_`{|}~";
let character = "abcdefghijklmnopqrstuvwxyz";
let upperCharacter = character.upperCases;
let numberCount = "1234567890"
// Get references to the #generate element
var generateButton = document.getElementById('generate')
generateButton.addEventListener('click', writePassword)
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  
var passwordText = document.querySelector("#password");
 passwordText.value = password;

// Prompts that come up after you click generate password
function generatePassword() {
var passwordLength = window.prompt("please enter a number between 8 and 128 to determine the length of password ");
      if (passwordLength >=  129 || passwordLength <= 7|| isNaN(passwordLength) ) {
        alert("please select a number between 8-128");
        return generatePassword();
        //= window.prompt("please enter a number between 8 and 128 to determine the length of password ");
      } 
  var numbers = confirm("Would you like numbers in your password?");
  var lowerCases = confirm("Would you like lowercases in your password?");
  var upperCases = confirm("Would you like uppercases in your password?");
  var special = confirm("Would you like special characters in your password?");
  if ( numbers==false && lowerCases==false && upperCases==false && special==false ) {
    alert("please select at least one case type");
    return generatePassword();
  }
  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minCount = 0;
  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters
  var minNum = "";
  var minCases = "";
  var minUpperCases = "";
  var minSpecialCharacters = "";
  // Generator functions**
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * numberCount.length + 48));
    },
    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * character.length + 97));
    },
    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * character.length + 65));
    },
    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
};
  // Checks to make sure user selected ok for all and uses empty minimums from above
  if (numbers === true) {
    minNum = functionArray.getNumbers();
    minCount++;
  }
  if (lowerCases === true) {
    minCases = functionArray.getLowerCases();
    minCount++;
  }
  if (upperCases === true) {
    minUpperCases = functionArray.getUpperCases();
    minCount++;
  }
  if (special === true) {
    minSpecialCharacters = functionArray.getSpecialCharacters();
    minCount++;
  }
  // empty string variable for the for loop below
  var randomPasswordGenerated = "";
  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
    randomPasswordGenerated += randomNumberPicked;
  }
  // to make sure characters are added to the password
  randomPasswordGenerated += minNum;
  randomPasswordGenerated += minCases;
  randomPasswordGenerated += minUpperCases;
  randomPasswordGenerated += minSpecialCharacters;
  return randomPasswordGenerated;
}
}
