const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let final = '';

while (final.length !== alphabet.length) {

    if (final == alphabet[Math.floor(Math.random() * alphabet.length)]) {
        continue;
    } else {
        final += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
}

console.log(final)