let from = Number(prompt('Please enter 1 number', '0')),
    to = Number(prompt('Please enter 2 number', '20'));

    while (from >= to) {

        from = Number(prompt('Please enter correct 1 number')),
            to = Number(prompt('Please enter correct 2 number'));

        }
    multiply = Number(prompt('Please enter your value', '2'));


for (from; to >= from; from++) {
if (from % multiply) {
console.log('Number:', from);
}
}