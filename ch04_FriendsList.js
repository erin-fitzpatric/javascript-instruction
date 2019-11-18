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
// prompt for Favorite Things
// Favorite
//  id: int
//  thing: String (play trumpet)
//  why: String (it's fun)
let addFavorites = "y";
let favoriteThings = [];
let favoriteId = 1;
while (addFavorites == ("y")) {
    let newFavorite = {
        id: favoriteId,
        thing: readline.question("\nWhat is one of your favorite things: "),
        why: readline.question("Why is that one of your favorite things? ")
    };
    favoriteId ++;
    // add Favorite Thing to a list until done (while loop)
    favoriteThings.push(newFavorite);
    addFavorites = readline.question("\nAdd more favorite things? (y/n): ");
}
// print all favorite things

for (let f of favoriteThings) {
    for (let k of Object.keys(f)) {
        console.log("Property: "+k+", Value: "+f[k]);
    }
}

console.log("\nGood Bye!");