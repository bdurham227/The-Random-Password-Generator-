// Define the variables
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// creating the arrays for the variables
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [ "!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~" ];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordArray = [];

function generatePassword () {

    var confirmLength = prompt("password must be 8 to 128");
    
    
    
    while 
    (confirmLength <= 7 || confirmLength >= 129) {
        alert("password length mustt be this long")
        
    }
    if (confirmLength >= 8 && confirmLength <= 128) {
    var confirmUpper = confirm("ya want uppers");
    var confirmLower = confirm("ya want lowers");
    var confirmNumbers = confirm("how bout some numbas");
    var confirmSpecial = confirm("are you special?");
    }
    
    if (!confirmUpper && !confirmLower && !confirmNumbers && !confirmSpecial) {
        alert("please choose at least one for your password"); 
        return confirmLength;
    }
    
    
    
    
    if (confirmUpper == true) {
        passwordArray += passwordArray.concat(upperCase);
    }
    
    if (confirmLower == true) {
        passwordArray += passwordArray.concat(lowerCase);
    }
    
    if (confirmNumbers == true) {
    passwordArray += passwordArray.concat(numbers);
    }
    
    if (confirmSpecial == true) {
    passwordArray += passwordArray.concat(special);
    }
    
    
    var result = "";
    
    for (var i = 0; i < confirmLength; i++) {
    result = result + passwordArray[Math.floor(Math.random() * passwordArray.length)];
    }
    return result;
    
}    