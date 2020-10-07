// type of characters to include - special characters, uppercase, lowercase, numeric

var special = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  " -",
  "+",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

// combine the four arrays
// const combined  = special.concat(upperCase).concat(lowerCase).concat (numeric);
// This way worked but I found an impoved way to do it later on in the code.

// prompt is for string value. it will always give me a string value
// parseInt() to change string to numeric value

function generatePassword() {
  var length = parseInt(prompt("What is the password length?")); // always returns a string value //console log to check it works.

  // this statement is to work with the length of the code.  Making sure it is never too big or too small
  if (length < 8) {
    alert(" must be a minimum of 8 characters");
    return null;
  }

  if (length > 128) {
    alert(" must be no more then 128 characters");
    return null;
  }

  // NaN - non numeric values
  // return; null makes the code better b/c when a person puts in unacceptable value it will produce nothing rather then resulting in undefined

  if (isNaN(length) === true) {
    alert("you can only use numbers here");
    return null;
  }

  // the following variable generate the questions the user needs to answer to produce a password
  var confirmCharacters = confirm("Do you want special characters?");
  var confirmLettersUpper = confirm("Do you need uppercase letters?");
  var confirmLettersLower = confirm("Do you need lowercase letters? ");
  var confirmNumbers = confirm("Should the password have numeric values?");

  // in the case that the used gives us no password then false will be the results for all the variables and we will remind the used that with no category selected we cannot give them a password
  //  Uncaught SyntaxError: Illegal return statement, the thing ran a hour ago but suddenly I have a syntax error

  if (
    confirmCharacters === false &&
    confirmLettersUpper === false &&
    confirmLettersLower === false &&
    confirmNumbers === false
  ) {
    alert("must have atleast one character");
    return null;
  }

  var combined = [];

  // this if statement allows for the variables placed in the arrays above to be combined.
  if (confirmCharacters === true) {
    combined = combined.concat(special);
  }

  if (confirmLettersUpper === true) {
    combined = combined.concat(upperCase);
  }

  if (confirmLettersLower === true) {
    combined = combined.concat(lowerCase);
  }

  if (confirmNumbers === true) {
    combined = combined.concat(numeric);
  }

  var results = "";

  for (var i = 0; i < length; i++) {
    //for loop

    var num = Math.floor(Math.random() * combined.length);
    results += combined[num];
  }

  return results;
}
// Write password to the #password input

function writePassword() {
  // the document.querySelector when the generateBtn is pressed it generates a passwordText
  var password = generatePassword(); // returns a value back
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// The document.querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
//var generateBtn = document.querySelector("#password"); // the class or id in html
// generateBtn.addEventListener("click", "writePassword" ); // in () is the click, + function name

//Add event listener to generate button

// makes a generatepassword function // returns a password
var password = document.querySelector("#generate"); // the class or id in html
password.addEventListener("click", writePassword); // in () is the click, + function name

// series of yes/no confirms)
// var  yes = confirm ("I want the item asked for")
// var  no = confirm ("I don't want the item asked for")
