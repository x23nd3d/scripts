// function selectSort(arr) {
//
//     let arr_len = arr.length;
//     let newArr = [];
//
//     while (arr_len !== 0) {
//
//     let smallest = arr[0];
//     let smallestIndex = 0;
//         for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < smallest) {
//             smallest = arr[i];
//             smallestIndex = i
//         }
//     }
//         newArr.push(arr.splice(smallestIndex, 1)[0]);
//         arr_len--
//     }
//         return newArr;
//
//
// }
//
// console.log(selectSort([5, 3, 6, 2, 10]));



function selectSort(arr, finalArray, arr_length) {

    let smallest = arr[0];
    let smallestIndex = 0;



    for (let i = 0; i < arr_length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    finalArray.push(arr.splice(smallestIndex, 1)[0]);


    if (finalArray.length !== arr_length) {
        return selectSort(arr, finalArray, arr_length--)
    }

    return finalArray;
}

function binarySearch(arr, low, high, item = 6) {
    let step = Math.floor( (low + high) / 2);
    let guess = arr[step];

    if (guess === item) {
        return `Item found: ${guess} with index: ${step}`;
    } else if (guess < item) {
        return binarySearch(arr, step + 1, high, item);
    } else if (guess > item) {
        return binarySearch(arr, low, high - 1, item);
    } else {
        return null;
    }
}

const arr = [5, 3, 6, 2, 10];
let length = arr.length;
// let tempArray = [];
let sortedArray = selectSort(arr, [], length);
console.log('SORTED ARRAY - ', sortedArray);

let low = 0;
let high = sortedArray.length - 1;


console.log(binarySearch(sortedArray, low, high));