function game(word, answerArray, remainingWords, attempts) {
    console.log('The word is: ', word);

        if (remainingWords === 0) {
            alert(answerArray.join(''));
            alert('Congratulations, found word: ' + answerArray.join(''));

        } else if (attempts === 0) {
            alert('Game over! Please try again.');
        } else {
            alert('The status of the word is: ' + answerArray.join(' '))
            let guess = prompt('Please enter the letter', '');
            if (guess == null) {
                alert('Thank you for the game. Bye!');
            } else if (guess.length !== 1 || Number(guess)) {
                alert('The only one letter allowed. Using numbers/symbols forbidden');
                game(word, answerArray, remainingWords, attempts)
            } else {
                guess = guess.toLowerCase();
                let idx = word.indexOf(guess)
                if (idx > -1 && answerArray[idx] !== guess ) {
                    remainingWords--;
                    answerArray[idx] = guess;
                    console.log(answerArray);
                    console.log('remaining words: ', remainingWords);
                    console.log('idx', idx);
                    game(word, answerArray, remainingWords, attempts)
                } else {
                    attempts--;
                    console.log('Attempts -- ', attempts);
                    alert('The letters do not match! Please, try again.');
                    game(word, answerArray, remainingWords, attempts)

                }
            }
    }
}

function createGame() {
    const words = [
        'laptop',
        'dog',
        'cat',
        'sun',
        'fish'
    ];

    let word = words[Math.floor(Math.random() * words.length)]
    let remainingWords = word.length;
    let answerArray = [];

    for (let i = 0; i < word.length; i++) {
        answerArray[i] = '_';
    }

    let attempts = 3;

    game(word, answerArray, remainingWords, attempts);
}

createGame()