let array = [10, 0, 50, 14, 5];
function nicePrint(theNumber) {
    return `Number is ${theNumber};`
}

let array2 = array.map(nicePrint);
console.log(array2);

let array3 = ['Kiev', 'Kharkov', 'Germany', 'Asia'];

function nicePrint(countries) {
    return `Places: ${countries};`
}

let array4 = array3.map(nicePrint);
console.log(array3);


let array5 = ['Ann', 18, true];

function nicePrint(theItem, theIndex) {
    return `Item at position ${theIndex} is ${theItem}`;
}



let arrayToStr = array5.map(nicePrint).join(' , ');
console.log(arrayToStr);

