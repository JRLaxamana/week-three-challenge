// Assignment Code
var generateBtn = document.querySelector("#generate");
//Ask for desired password length
var length = prompt("How long would you like your password to be? Please choose a number between 8 to 128.");
//Ask for desired special characters to include.

// var characterTypes = prompt("Input if you'd like lowercase, uppercase, numbers, and or special characters in your password.");

//changing prompt to collect more information from user input.
var charLower = confirm("Would you like lowercase letters in your password? Press cancel to decline.");
var charUpper = confirm("Would you like uppercase letters in your password? Press cancel to decline.");
var charNumber = confirm("Would you like numbers in your password? Press cancel to decline.");
var charSpecial = confirm("Would you like special characters in your password? Press cancel to decline.");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword() {
//defining lowercase, uppercase, numbers, and special character arrays
  var lowerCase = "abcdefghijklmnopqrstuvwvyz";
  var upperCase = "ABDCEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "="]

//starting with empty inputs

  let password = "";
  let userInput = "";

  if (charLower === true) {
    userInput = userInput + lowerCase;
  }
  if (charUpper === true) {
    userInput = userInput + upperCase;
  }
  if (charNumber === true) {
    userInput = userInput + numbers;
  }
  if (charSpecial === true) {
    userInput = userInput + special;
  }
//defining password min and max length
  if (length >= 8 && length <= 128) {
    for (var i = 0; i < length; i++) {
      let genPass = userInput[Math.floor(Math.random() * userInput.length)];
      password = password + genPass;
    }
  } 

  return password;

} 
//console.log(password); checking console

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
