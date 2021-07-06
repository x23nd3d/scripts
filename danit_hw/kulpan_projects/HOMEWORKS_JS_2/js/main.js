let num = +prompt(`Please enter a number?`, ``);

if (num < 5) {
    console.log(`Sorry, no numbers`);
}
for (let i = 1; i <= num; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

