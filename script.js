
// creating and defining my variables- let & const to hold my data

let passLength = 0;
let typeNumber = "false";
let typeUpper = "false";
let typeLower = "false";
let typeSpecial = "false";
let newPassword = [];
var generateBtn = document.querySelector("#generate");

//write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  };

 

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '"', '<', '>', '?', '/', '"'];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const passwordArray = [];

 function getInput() {
     passLength = prompt("Please choose a length bettwe 8 and 128 characters for your password: ");
     typeUpper = confirm("Would you like Uppercase letters in your password today?");
     typeLower = confirm("Would you like Lowercase letters in your password today?");
     typeNumber = confirm("Would you like numbers in your password today?");
     typeSpecial = confirm("Would you like special characters in your password today?");
 };

 let optionsArray = [];

 function generateOptions() {
     if (typeUpper == true)
     optionsArray = optionsArray.concat(uppercase);

     if (typeLower == true)
     optionsArray = optionsArray.concat(lowerrcase);

     if (typeNumber == true)
     optionsArray = optionsArray.concat(number);
     
     if (typeSpecial == true)
     optionsArray = optionsArray.concat(special);











 }












    