function random(array) {
    let num = gen_date(0, 1) || gen_date(1, 1);
    let length = array.length - 1;
    let value = num > length ? length : num;
    let randomValue = Math.floor((value**2 / length ) * 3);
    let result = randomValue > length ? random(array) : randomValue;

    return array[result]
}

function gen_date(x, y) {
    return Number(new Date().getMilliseconds().toString().slice(x,y));
}


console.log(random(['cat', 'dog', 'fish', 'laptop', 'PC']));



function checkIfSame(arr, arr2) {
    if (arr.length !== arr2.length) {
        return 'The arrays length are not the same, so stop function'
    }   for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== arr2[i]) {
                return 'Arrays are not the same';
            }
        } return 'Arrays are the same';


}


console.log(checkIfSame([1, 2, 3], [1, 2, 3]));