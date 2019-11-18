// write method for Math.min console.log(Math.min(2,4)); 
let a = 2;
let b = 4;
function smallestNbr(a, b) {
    let smallest = "";
    if (a < b) {
        smallest = (a + " is smallest.");
    }
    else {
        smallest = (b + " is smallest");
    }
    return smallest;
}

console.log(smallestNbr(a, b));