function sleep(ms) {
    ms += new Date().getTime()
    while (new Date() < ms){}
}

function check(word) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let final = [];

    for (let i = 0; i < word.length; i++) {
        final[i] = '_';
    }

    while (final.join('') !== word) {
        let guess = alphabet[Math.floor(Math.random() * alphabet.length)];

        for (let j = 0; j < word.length; j++) {
            if (guess === word[j]) {
                final[j] = guess;
                sleep(150);
                console.log('\n'.repeat('100'));
                console.log(final,`...latest guess: [${guess}]`);
            }
        }
    }
     return true;
}

console.log(check('andrew'));



