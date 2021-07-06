let countOfTry = 0, randomNumber = 0;
for(countOfTry; true; countOfTry++) {
    randomNumber = Math.random();
    if (randomNumber >=0.9) {

        break;
    }

    console.log('Number of try:', countOfTry);
console.log('Number:', randomNumber);
}
