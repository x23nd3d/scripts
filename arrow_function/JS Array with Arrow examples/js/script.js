let array = ['Ann', 18, true];

function nicePrint(theItem, theIndex) {
    return `Item at position ${theIndex} is ${theItem}`;
}

console.log(nicePrint(array));

let array2str = array.map(function(theItem, theIndex) {
    return `Item at position ${theIndex} is ${theItem} `;
}).join(" @ ");

console.log(array2str);

let nicePrintArrow = (theItem2, theIndex2) => `Item at position ${theIndex2} is ${theItem2}`;

let arrayToStr = array.map( (theItem2, theIndex2) => `Item at position ${theIndex2} is ${theItem2}`).join(' @ ');
console.log(arrayToStr);
