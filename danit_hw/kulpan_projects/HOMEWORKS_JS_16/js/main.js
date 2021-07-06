let number = +prompt(`Please enter a number?`, ``);
while (isNaN(number) || (number === 0)) {
    number = +prompt(`Please enter your number`, number);
}

function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1
}

alert(factorial(number));