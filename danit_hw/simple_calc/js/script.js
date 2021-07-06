function plus(a, b) {
return (a+b);
}

function multiple(a, b) {
    return (a*b);
    }

function divide(a, b) {
        return (a/b);
        }

function minus(a, b) {
            return (a-b);
            }

function calculations() {
let a = Number(prompt('Please enter number 1'));

while (!Number(a) || a.length === 0) {
    a = Number(prompt('Please enter correct number 1'));
}

let operationValue = prompt('Please select the value + - * /', '');

while (operationValue.length === 0 || operationValue !== '+' && operationValue !== '-' && operationValue !== '/' && operationValue !== '*') {
    operationValue = prompt('Please select correct value + or - or * or /', '');
}

let b = Number(prompt('Please enter number 2'));

while (!Number(b) || b.length === 0) {
    b = Number(prompt('Please enter correct number 2'));
}

if (operationValue === '+') {
    alert(`The result will be: ${plus(a, b)}`);
}

if (operationValue === '*') {
    alert(`The result will be: ${multiple(a, b)}`);
}

if (operationValue === '/') {
    alert(`The result will be: ${divide(a, b)}`);
}

if (operationValue === '-') {
    alert(`The result will be: ${minus(a, b)}`);
}

if (confirm('Would you like to start again?')) {
    return calculations() 
}

else {
    alert('Bye!')
}

}



calculations()














