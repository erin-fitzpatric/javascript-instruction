let readline = require('readLine-sync');
let start = readline.questionInt("Starting Number: ");
let end = readline.questionInt("Ending Number: ");

function findRange (start, end) {
    let sequence = [];
    for (let i = start; i <= end; i++) {
        sequence.push(i);
    }
    return sequence;
}

console.log(findRange(start, end));

let nbrArray = [4, 7, 8, 3, 5];

function findSum (nbrArray) {
    let sum = 0;
    for (let nbr of nbrArray) {
        sum+= nbr;
    }
    return sum;
}
console.log(findSum(nbrArray));
