// /Array of special characters to be included in password


var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let options = {
  upper: upperCasedCharacters,
  lower: lowerCasedCharacters,
  numbers: numericCharacters,
  specialCh: specialCharacters

}

// Function to prompt user for password options
function getPasswordOptions() {
  alert("Please pick at least one of the following options");
  if (confirm("Do you want lower case characters?")) options.lower = true;
  if (confirm("Do you want upper case characters?")) options.upper = true;
  if (confirm("Do you want numbers?")) options.numbers = true;
  if (confirm("Do you want special characters?")) options.specialCh = true;

  // If my options object has no keys at this point then the user has not selected to include any character sets. 
  // Alert the user and cancel the operation.
  if (Object.keys(options).length === 0) { 
    alert("You must pick at least one option. Try again")
    return ;
  }
  /* 


    The main purpose of this method is to gather user input to determine
    what will be included in the generated password.

    Questions to ask users:
    - How many characters would you like in the password? (Prompt or Confirm?)
    - Are Uppercase letters allowed? (Prompt or Confirm?)
    - Are Lowercase letters allowed? (Prompt or Confirm?)
    - Are Numeric characters allowed? (Prompt or Confirm?)
    - Are special characters allowed? (Prompt or Confirm?)

    Other Requirements:
    - code should validate for each input: 
        - Many times users will try to input incorrect input to try and break the app. What if a user inserts 
          a letter instead of a number when we ask for password length? How can we check to see that the correct 
          data type (a number) was inserted? 
      - What can we use to display a message to the user in the browser if they input incorrect content ? 
  */

  //  where should this function be called within the file?
}

// Function for getting a random element from an array
function getRandom(arr) { 
for (var i = 0; i < lowerCasedCharacters.length; i++) {
  return lowerCasedCharacters(Math.floor(Math.random()) * lowerCasedCharacters.length);
  console.log(getRandom);
  
  // accepts an array as input
  // how can we generate random numbers and use them to grab content from the arrays ?
  //  where should this function be called within the file?
    
  }
}


// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // nothing needs to be changed inside of here
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click',getPasswordOptions ); // possible to switch out the function passed in - to test the functionality of the functions declared above
writePassword





console.log(`Total Months : ${finances.length}`);
console.log(`Total: $${total}`);
console.log(`Average Change: $${(changeTotal / finances.length)}`);
console.log(`Greatest increase in Profits: ${largestIncrease[0]} ($${largestIncrease[1]})`);
console.log(`Greatest decrease in Profits: ${largestDecrease[0]} ($${largestDecrease[1]})`);