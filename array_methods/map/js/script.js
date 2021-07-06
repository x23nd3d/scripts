let array = [10, 0, 1, 6, -100];
array[5] = 9;

function doubleNumber(theNumber) {
    return theNumber * 2;
}

function squareNumber(theNumber) {
    return theNumber * theNumber;
}



function checkPositive(theNumber) {
    if (theNumber > 0) {
        return 'positive';
    } else {
        return 'negative';
    }
}
let array1 = array.map(checkPositive);
console.log(array1);
let array2 = array.map(doubleNumber);
console.log(array2);
let array3 = array.map(squareNumber);
console.log(array3);
