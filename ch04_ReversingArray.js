// write two functions: reverseArray and reverseArrayInPlace
function reverseAnArray(nbrs) {
    let output = [];
    for (let i = nbrs.length - 1; i >=0; i--) {
        output.push(nbrs[i]);
    }
    return output;
}
console.log(reverseAnArray([2,5,75,7,8]));











// // reverse anArray and return the same array
// function reverseArrayInPlace (anArray) {

// }