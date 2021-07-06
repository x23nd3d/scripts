let mySquare = function (number1) {
        return number1*number1;

}
console.log(mySquare(10));



let mySquare2 = (number1) => number1*number1;

console.log(mySquare(10));


let max = function (x, y) {
    if(x > y) {
        return x;
    } else {
        return y;
    }

}

let max2 = (x, y) => {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
console.log(max2(10, 5));

let maxTern = (x, y) => (x > y) ? x : y;

console.log(maxTern(5, 3));