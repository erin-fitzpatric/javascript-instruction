let readline = require('readLine-sync');

console.log("Readline demo app!");
console.log("Get some input from the cosole...");

let str = readline.question('Enter a string: ');
console.log("you entered: " + str); 
let n1 = readline.questionInt('Enter a whole #: ');
console.log("Your # squared: " + n1*n1);
let d1 = readline.questionFloat('Enter a decimal #: ');
console.log("dec / nbr = "+d1/n1);
