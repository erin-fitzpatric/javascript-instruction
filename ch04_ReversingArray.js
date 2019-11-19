// write two functions: reverseArray and reverseArrayInPlace
let nbrArray = [2, 7, 9, 4, 6, 89, 3];

function reverseAnArray(nbrs) {
    let output = [];
    for (let i = nbrs.length - 1; i >= 0; i--) {
        output.push(nbrs[i]);
    }
    return output;
}
console.log("=======================================")
console.log("Original array: " + nbrArray);
console.log("New, reversed array: " + reverseAnArray(nbrArray));

// reverse anArray and return the same array
function reverseArrayInPlace(nbrs) {
    let origIndexLength = (nbrArray.length - 1);
    for (let i = 0; i <= origIndexLength; i++) {
        nbrArray.push(nbrArray[origIndexLength - i]);
    }
    console.log("Pushed Original Array Before slice: " + nbrArray);
    nbrArray = nbrArray.slice((origIndexLength + 1), (nbrArray.length));
    return nbrArray;
}

console.log("Same array reversed: " + reverseArrayInPlace(nbrArray));