function binary_search(array, item, low, high) {

    let step = Math.round((low + high) / 2);
    let guess = array[step];

    if (guess === item) {
        return step
    } else if (guess > item) {
        return binary_search(array, item, low, step - 1)
    } else if (guess < item) {
        return binary_search(array, item, step + 1, high)
    } else {
        return null
    }

}

let arr = [2, 4, 6, 8, 9, 12, 14, 15, 17, 19]
console.log(binary_search(arr, 19, 0, arr.length - 1));