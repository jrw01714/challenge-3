// Assignment Code

var passwordLength = prompt("How long do you want the password to be?");
var incUpper = confirm("Include uppercase?")
var incSpecial = confirm("Include special characters?")
var incNumber = confirm("Include numbers?")
var generateBtn = document.querySelector("#generate");

function passwordGen(length) {
  var result = "";
  if(incUpper && incSpecial && incNumber) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%^&*()_+=-"
  } else if(incUpper && incSpecial) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?@#$%^&*()_+=-"
  } else if(incSpecial && incNumber) {
    var characters = "abcdefghijklmnopqrstuvwxyz0123456789!?@#$%^&*()_+=-"
  } else if(incUpper && incNumber) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  } else if(incUpper) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  } else if(incSpecial) {
    var characters = "abcdefghijklmnopqrstuvwxyz!?@#$%^&*()_+=-"
  } else if(incNumber) {
    var characters = "abcdefghijklmnopqrstuvwxyz0123456789"
  } else {
    var characters = "abcdefghijklmnopqrstuvwxyz"
  }
    
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


// Write password to the #password input
function writePassword() {
  var password = passwordGen(passwordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
