let readline = require('readLine-sync');

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
    favoriteId++;
    // add Favorite Thing to a list until done (while loop)
    favoriteThings.push(newFavorite);
    addFavorites = readline.question("\nAdd more favorite things? (y/n): ");
}
// print all favorite things

for (let f of favoriteThings) {
    for (let k of Object.keys(f)) {
        console.log("Property: " + k + ", Value: " + f[k]);
    }
}

// 1) prompt user for id to retrieve
let idRetrieved = readline.questionInt("\nWhat ID would you like to retrieve?: ");
// 2) get that favorite (that matches the id entered) from the list and display
for (let f of favoriteThings) {
    if (f.id == idRetrieved) {
        displayFavorite(f);
    } 
}
// 3) create a function for the display - reduce redundancy
function displayFavorite(f) {
    console.log(`I like ${f.id} - ${f.thing} because ${f.why}.`);
    return;
}


console.log("\nGood Bye!");