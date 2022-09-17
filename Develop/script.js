// Assignment Code
var generateBtn = document.querySelector("#generate");
var confirmOp = document.querySelector("confirm");

function generatePassword() {
  console.log('you clicked the button!');

  //prompt user for password criteria

  let passwordLength = window.prompt("Please select a the length of your password, must be more than 8 but less then 128?");

  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = window.prompt("Invalid, please try next time!");
    if (passwordLength = closed);
    return;
  }
  console.log(passwordLength);

  let uppercaseSelect = false;
  let lowercaseSelect = false;
  let numberSelect = false;
  let symbolSelect = false;

  let userResult = [];

  let userUpper = window.confirm("Would you like to add uppercase letters in your password?")
  let userLower = window.confirm("Would you like to add lowercase letters in your password?")
  let userNum = window.confirm("Would you like to add numbers letters in your password?")
  let userSymbol = window.confirm("Would you like to add symbols letters in your password?")

  let upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  let lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  let numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let symbolList = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

  while (userResult < passwordLength.length) {
    if (userUpper == true) {
      userResult.push(upperList);
      for (let i = 0; i < passwordLength; i++) {
        userUpper[i];
      }
      userResult[uppercaseSelect] = userResult[Math.floor(Math.random() * userUpper.length)];
    }

    if (userLower == true) {
      userResult.push(lowerList);
      for (let i = 0; i < passwordLength; i++) {
        userLower[i];
      }
      userResult[lowercaseSelect] = userLower[Math.floor(Math.random() * userLower.length)];
    }

    if (userNum == true) {
      userResult.push(numList);
      for (let i = 0; i < passwordLength; i++) {
        userNum[i];
      }
      userResult[numberSelect] = numList[Math.floor(Math.random() * userNum.length)];
    }

    if (userSymbol == true) {
      userResult.push(symbolList);
      for (let i = 0; i < passwordLength; i++) {
        userSymbol[i];
      }
      userResult[symbolSelect] = symbolList[Math.floor(Math.random() * userSymbol.length)];
    }
  }


  password = (userResult);

  password.sort(function () { return 0.5 - Math.random() });

  console.log(password);

  password = password.join('');

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn);
