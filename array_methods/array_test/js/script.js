let arr = [1, 2, 3, 4, 5, 11, 22];

function calc(items) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
    total+=items[i];



    }
return total;

}

for (let value of arr) {

    console.log(value);
}
let maximumValue = [0]
for (a = 1; a < arr.length; a++)
    if (arr[a] > maximumValue) {

        maximumValue = arr[a];
    }
console.log(maximumValue);
console.log(calc(arr));
