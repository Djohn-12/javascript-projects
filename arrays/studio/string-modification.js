const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
console.log(newStr = str.slice(3,10) + str.slice(0,3));
//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`This is one way you convert ${str} to ${newStr}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
userInput = input.question("How many characters should be replaced?: ");

result = userInput;
userAnswer = str.slice(result, 10) + str.slice(0, result);
console.log(userAnswer);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userInput > newStr.length){
    console.log('Error, moved 3 characters instead.' );
    userInput = 3;
}