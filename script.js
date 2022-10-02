// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = prompt("How long would you like your password to be? Please choose a number between 8 to 128.");
var lowerCase = prompt("Input if you'd like lowercase, uppercase, numbers, and or special characters in your password.");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
