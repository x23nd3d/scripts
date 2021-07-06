let number = +prompt(`Enter a your number`, ``);
while (isNaN(number) || (number === 0)) {
    number = +prompt(`Enter a your number`, number);
}
let numberToo = +prompt(`Enter a second number`, ``);
while (isNaN(numberToo)|| (numberToo === 0)) {
    numberToo = +prompt(`Enter a second number`, numberToo);
}

let act = prompt(`What do your want to do?`, ``);

function sum(value, valueToo, symbol) {
    if (symbol === "+") {
        return value + valueToo;
    }
    if (symbol === "-") {
        return value - valueToo;
    }
    if (symbol === "*") {
        return value * valueToo;
    }
    if (symbol === "/") {
        return value / valueToo;
    }
}

console.log(sum(number,numberToo,act));




























