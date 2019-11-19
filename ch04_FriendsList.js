let readline = require('readLine-sync');
console.log("Welcome to the Friends List App!")

//prompt to add friend name until user enters 'exit' (while loop)
let addMore = "y";
let friends = [];
while (addMore == ("y") || addMore == ("Y")) {
    let nameInput = readline.question("Enter a friend name: ");
    friends.push(nameInput);
    addMore = readline.question("Continue? (y/n): ");
}

// once exit, print contents of friend list
console.log(friends);

console.log("\nGood Bye!");