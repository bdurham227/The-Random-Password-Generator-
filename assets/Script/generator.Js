// function that writes password
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    
  };
  //variable set to generatebtn so when a user clicks it'll initiate the script
  var generateBtn = document.querySelector("#generate");
  //evenlistener waiting for user click to initiate script
  generateBtn.addEventListener("click", writePassword);



// creating and defining my variables to hold my data
//function that generates password all data and variables are stored inside
function generatePassword () {


var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordArray = [];
var result = [];

//created variables to use for confirm() later on
var passLength = "";
var typeNumbers;
var typeUpper;
var typeLower;
var typeSpecial;


// prompts users
    var passLength = prompt("What length would you like your password to be?(Choose between 8 and 128 characters");
    
    // while loop that eliminates script error if someone types in non-numeric characters
    //loop alerts users if they choose a value of less than 7 or greater than 128
    while (isNaN(passLength) || passLength < 8 || passLength > 128) {
        alert("We are still learning the powers to create passwords from nothing, in the mean time please select at least one: ");
        passLength = prompt("What length would you like your password to be?(Choose between 8 and 128 characters");
        if (passLength === null) {
            break;
        }
    }

    //if statement if all confirms are false
    if (!typeUpper && !typeLower && !typeNumbers && !typeSpecial) {
        typeUpper = confirm("ya want uppers");
        typeLower = confirm("ya want lowers");
        typeNumbers = confirm("how bout some numbas");
        typeSpecial = confirm("are you special?");
        
    }
    // series of if statements evaluating whether a confirm statement was true by the user
    //if it is true it will concantenate onto the empty array caleld passwordArray
    if (typeUpper == true) {
        passwordArray = passwordArray.concat(uppercase);
    }
    
    if (typeLower == true) {
        passwordArray = passwordArray.concat(lowercase);
    }
    
    if (typeNumbers == true) {
    passwordArray = passwordArray.concat(numbers);
    }
    
    if (typeSpecial == true) {
    passwordArray = passwordArray.concat(special);
    }
    



// for loop that randomly selects from user choices and sets the value to the empty array result
for (var i = 0; i <= passLength; i++) {
result = result + passwordArray[Math.floor(Math.random() * passwordArray.length)];
}
return result;

}   


//function created called copyPass to give the user the option to copy and paste their password
function copyPass(){

    document.querySelector("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}

  