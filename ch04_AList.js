let readline = require('readLine-sync');

function arrayToList(array) {
    let list = [];
    for (let i = array.length - 1; i >= 0; i--) {
            list = {value: array[i], rest: list};
        }

    return list;
}

console.log(arrayToList([1, 2, 3]));

function listToArray (list) {
    let array = [];


    return array;
}

console.log(listToArray([]))