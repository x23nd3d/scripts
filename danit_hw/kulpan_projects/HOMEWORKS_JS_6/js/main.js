function filterBy(array, data) {
    let array2 = array.filter(function (elem) {
        return typeof elem !== data;
    });
    return array2;
}

let arrays = ['Drakaris', 'world', 23, null];
let dataType = 'number';
console.log(filterBy(arrays, dataType));

