function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    
  };

  var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", writePassword);


// add parseInt

// creating and defining my variables & lt to hold my data

function generatePassword () {


var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordArray = [];
var result = [];


var passLength = "";
var typeNumbers;
var typeUpper;
var typeLower;
var typeSpecial;



    var passLength = prompt("What length would you like your password to be?(Choose between 8 and 128 characters");
    
    
    while (isNaN(passLength) || passLength < 8 || passLength > 128) {
        alert("We are still learning the powers to create passwords from nothing, in the mean time please select at least one: ");
        passLength = prompt("What length would you like your password to be?(Choose between 8 and 128 characters");
        if (passLength === null) {
            break;
        }
    }






   // if (passLength <= 7 || passLength >= 129) {
       // alert("Please choose a length of at least 8 to 128 characters");
       // passLength = prompt("password must be 8 to 128");
       // typeUpper = confirm("ya want some uppers");
       // typeLower = confirm("ya want some lowers");
       // typeNumbers = confirm("how bout some numbas");
      //  typeSpecial = confirm("are you special?");
        
   // }
    //if (passLength >= 8 && passLength  <= 128) {
       // typeUpper = confirm("ya want uppers");
       // typeLower = confirm("ya want lowers");
       // typeNumbers = confirm("how bout some numbers");
      // typeSpecial = confirm("are you special?");
    //}

    


    
    if (!typeUpper && !typeLower && !typeNumbers && !typeSpecial) {
        typeUpper = confirm("ya want uppers");
        typeLower = confirm("ya want lowers");
        typeNumbers = confirm("how bout some numbas");
        typeSpecial = confirm("are you special?");
        
    }
    
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
    




for (var i = 0; i <= passLength; i++) {
result = result + passwordArray[Math.floor(Math.random() * passwordArray.length)];
}
return result;

}   



function copyPass(){

    document.querySelector("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}

  