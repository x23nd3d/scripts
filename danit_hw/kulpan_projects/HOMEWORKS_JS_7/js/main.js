let array = ['The Winter is Coming', 'In Winterfell, there must always be a stark', 'King of the night',
    'died at the hands of Arya', 'died at the hands of Arya', 'died at the hands of Arya'];

function createList(arr) {
    let ul = document.createElement('ul');
    ul.setAttribute('class', 'under-list');
    document.getElementById('renderArray').appendChild(ul);
    arr.map(function (item) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = li.innerHTML + `THIS IS THE LAST SPOILER: ${item}`;
    })
}

createList(array);

let timer = document.getElementById('timer');
let counter = 10;
let id;

id = setInterval(function () {
    counter--;
    if (counter < 0) {
        document.body.innerHTML = null;
    } else {
        timer.innerHTML = counter.toString() + " seconds";
    }
}, 1000);