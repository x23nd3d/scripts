let number = +prompt(`Please enter a your number?`, ``);
while (isNaN(number) || (number === 0)) {
    number = +prompt(`Please enter a number`, number)
}

function fibonacci(n) {
    return n < 1 ? 0
        : n <= 2 ? 1
            : fibonacci(n - 1) + fibonacci(n - 2);
}

alert(fibonacci(number));