
// creating and defining my variables- let & const to hold my data

let passLength = 0;
let typeNumber = "false";
let typeUpper = "false";
let typeLower = "false";
let typeSpecial = "false";
let newPassword = [];
let generateBtn = document.querySelector("#generate");
let displayPasswordEl = document.querySelector("#placeholder");


//write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  };



  //Add event listener to generate button
 generateBtn.addEventListener("click", function() {
     getInput();
     generateOptions();
     generatePassword();
     optionsArray = [];
 });

 

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '"', '<', '>', '?', '/', '"'];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const passwordArray = [];

// function called getInput. Inside I just created similiar looking local variables to iniate a prompt statement to the user followed by four confirm statements
 function getInput() {

    passLength = prompt("Please choose a length between 8 and 128 characters for your password: ");

    while (passLength <= 7 || passLength >= 129) {
        alert("To ensure a secure password please input a length between 8 and 128 characters");
        passLength = prompt("Please choose a length between 8 and 128 characters for your password: ");
    }

    if (passLength >= 8 && passLength <= 128) {
     typeUpper = confirm("Would you like Uppercase letters in your password today?");
     typeLower = confirm("Would you like Lowercase letters in your password today?");
     typeNumber = confirm("Would you like numbers in your password today?");
     typeSpecial = confirm("Would you like special characters in your password today?");

    }
 };

 let optionsArray = [];

 function generateOptions() {
     if (typeUpper == true)
     optionsArray = optionsArray.concat(uppercase);

     if (typeLower == true)
     optionsArray = optionsArray.concat(lowercase);

     if (typeNumber == true)
     optionsArray = optionsArray.concat(numbers);

     if (typeSpecial == true)
     optionsArray = optionsArray.concat(special);
 };

function generatePassword() {
    for (var i = 0; i < passLength; i++) {
        newPassword += optionsArray[Math.floor(Math.random() * (optionsArray.length - 1))];
    }
    displayPasswordEl.textContent = newPassword;
};
newPassword = [];
 

 