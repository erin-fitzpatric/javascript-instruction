let readline = require('readLine-sync');
console.log("Welcome to the Tip Calculator app!");

let mealCost = readline.questionInt('\n Cost of meal: ');

// TODO fix rounding
console.log("\n15%");
let tipFifteen = (mealCost * .15);
console.log("Tip amount: "+ (tipFifteen));
console.log("Total amount: "+ (mealCost+ tipFifteen));