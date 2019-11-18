let positiveNbr = 7;

function isEven(positiveNbr) {
    let output = true;
    if (positiveNbr%2 > 0) {
        output = false;
    }
    return output;
}

console.log(isEven(positiveNbr));