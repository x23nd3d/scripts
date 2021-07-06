// let str = 'Hello, our group is PE10, PE10, PE10';
// console.log(str.slice(0, 5));
// console.log(str.indexOf('PE10'));
// console.log(str.lastIndexOf('PE10'));
// console.log(str.indexOf('PE10', 21));
// console.log(str.indexOf('sergey'));
//
//
// // let money = "$123765373@";
// //
// //
// // console.log(money.slice(1, 4));
// // console.log(money.slice(-2, -1));
// // console.log(money.slice(money.indexOf('$') + 1, money.indexOf('@')));
//
//
// let position = str.toLowerCase().indexOf('pe10');
//
// while (position != - 1) {
//
//     console.log(`Position is ${position}`);
//     position = str.toLowerCase().indexOf('pe10', position + 1);
// }


// let position = str.toLowerCase().indexOf('PE10');
//
// while (position != - 1) {
//
//     console.log(`Position is ${position}`);
//     position = str.toLowerCase().indexOf('PE10', position + 1);
// }



//
// let arr = new Array('Israel', 'Costa Rica', 'Peru');
// for (let country of arr) {
//
//     console.log(country);
// }

// let arr = ['Israel', 'Costa Rica', 'Peru'];
// arr[2] = 'France';
// arr[9] = 'Santa Lucia';
// for (let country of arr) {
//
//     console.log(country);
// }
//
// let json = {
//
//     'employees':[
//
//         { 'firstName':'John', 'lastName':'Doe' },
//         { 'firstName':'Anna', 'lastName':'Smith' },
//         { 'firstName':'Peter', 'lastName':'Jones' }
//     ]};
// console.log(json.employees);



// let theQueue = [];
// theQueue.push('Andrey');
// theQueue.push('Nikolay');
// theQueue.push('Sergey');
//
// let client = theQueue.pop();
// console.log(client);
//
// client = theQueue.pop();
// console.log(client);
//
// client = theQueue.pop();
// console.log(client);
//
// console.log(theQueue);
//
// let cliene = theQueue.shift();
// for (let value of theQueue) {
//     console.log(value);
//
// }
// console.log(theQueue);


//
// let arr = Array(
//     'Israel',
//     'Costa Rica',
//     'Peru',
//     'Tonga',
//     'Gabon',
//     'Kiribati',
//     'Gonduras',
//     'Argentina'
//
//     );
// let result = arr.splice(2,3);
// console.log(result);
// arr.splice(1, 0, 'Chile', 'Uruguay');
// console.log(arr);
// arr.splice(2, 3, 'Brazil', 'Spain');

// console.log(result);
// console.log(arr);
//
// let str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur debitis dolorem eveniet numquam quidem repudiandae? Architecto earum, eligendi, est magnam maxime molestiae nihil placeat provident repellat repellendus sapiente suscipit voluptate?';
// console.log(str);
//
// let words = str.split(' ');
// console.log(words);
//
// let newStr = words.join(',');
// console.log(newStr);