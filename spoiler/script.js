


// 20% > $50
// 15% from 50 to 200
// 10% > 200

// const john = {

//     bills:[124, 48, 268, 180, 42],
//     tips:[],
//     calcTips: function calculate() {

//         let tip = 1;
//         for (let i = 0; i < this.bills.length; i++) {
        
//         if (this.bills[i] < 50) {
//                 tip = parseInt(this.bills[i] * 0.2);
//         } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
//                 tip = parseInt(this.bills[i] * 0.15);
//         } else if (this.bills[i] > 200) {
        
//             tip = parseInt(this.bills[i] * 0.10);
//         }
//         else {
//             console.log('not found');
//         }
//         this.tips.push(tip);
        
//         }
        
//     }

// };


// const mark = {

//     bills:[77, 375, 110, 45],
//     tips:[],

// };

// const john = {

//         bills:[124, 48, 268, 180, 42],
//         tips:[],
// };

// function calcPersonTips(obj) {

//  for (let i = 0; i < obj.bills.length; i++) {
//     obj.tips.push(calcTips(obj.bills[i]));
    
//  }
// }
    
// function calcTips(bill) {

//         if (bill < 50) {
//             return parseInt(bill * 0.2);
//         } else if (bill >= 50 && bill <= 200) {
//             return parseInt(bill * 0.15);
//         } else {
//            return parseInt(bill * 0.10);
//         }

// }

// calcPersonTips(mark);
// calcPersonTips(john);
// console.log(mark);
// console.log(john);

//  function NewPerson(name) {
//      this.name = name;
//     this.bills = [];
//     this.tips = [];
// }

// NewPerson.prototype.createNewBill = function() {
//     return this.bills.push(prompt('Enter', ''));
// }

// let oleg = new NewPerson('oleg');
// oleg.createNewBill();




// john.calcTips();
// mark.calcTips();
// console.log(john);
// console.log(mark);









// Написать функцию для подсчета n-го обобщенного числа Фибоначчи. 
// Аргументами на вход будут три числа - F0, F1, n, где F0, F1 - 
// первые два числа последовательности (могут быть любыми целыми числами), 
// n - порядковый номер числа Фибоначчи, которое надо найти. 
// Последовательнось будет строиться по следующему правилу 
// F2 = F0 + F1, F3 = F1 + F2 и так далее.
// Считать с помощью модального окна браузера число, 
// которое введет пользователь (n).
// С помощью функции посчитать n-е число в обощенной 
// последовательности Фибоначчи и вывести его на экран.
// Пользователь может ввести отрицательное число - 
// результат надо посчитать по такому же правилу (F-1 = F-3 + F-2).

// let num0 = 0,
//     num1 = 1,
// let n = +prompt('Enter n-value', '');

// function fibonachi(num0, num1, n) {
//     if (n == 1) {
//         return num0;
//     } else if (n == 2) {
//         return num1;
//     }
//     let result = 0;

//     for (let i = 2; i < n; i++) {
//         result = num0 + num1;
//         num0 = num1;
//         num1 = result;
//         // console.log('num0 =' + num0);
//         // console.log('num1 =' + num1);
//         // console.log('result =' + result);
//     }
//     return result;
// }
// console.log(fibonachi(num0, num1, n));







// let num0 = 0,
//     num1 = 1;
//     let n = +prompt('Enter n-value', '');

//     function fib(numNull, numOne, n) {

//         if (numNull == 1) {

//             return numNull;
//         } else if (numOne == 2) {
//             return numOne;
//         }

//         let result = 0;

//         for (let i = 3; i <= n; i++) {
//         result = numNull + numOne;
//                console.log('num0 =' + numNull);
//         console.log('num1 =' + numOne);
//         console.log('result =' + result);
//         numNull = numOne;
//         numOne = result;
//         }
//         return result;
//     }
//     console.log(fib(num0, num1, n));















// let numNull = 0,
//     numOne = 1;
//     let n = +prompt('Enter n-value', '');
//
//
//
//         let result = 0;
//
//         for (let i = 3; i <= n; i++) {
//         result = numNull + numOne;
//                console.log('num0 =' + numNull);
//         console.log('num1 =' + numOne);
//         console.log('result =' + result);
//         numNull = numOne;
//         numOne = result;
//         }
//
    
    // console.log(fib(num0, num1, n));







// const john = {

//     name: 'John Smith',
//     restaraunt: 'Sishiya',
//     age: 25,
//     bills: [25, 58, 78, 258, 156],
//     tips: [],

// }

// const mark = {

//     name: 'Mark Doe',
//     restaraunt: 'Murakami',
//     age: 25,
//     bills: [88, 55, 28, 10, 356, 666],
//     tips: [],

// }

// function calcPersonBills(obj) {

//     for (let i = 0; i < obj.bills.length; i++) {
//     obj.tips.push(calcTips(obj.bills[i]));
        
//     }
// }

// function calcTips(bill) {

//     if (bill < 50) {
//         return parseInt(bill * 0.2);
//     } else if (bill >= 50 && bill <= 200) {
//         return parseInt(bill * 0.15);
//     } else  {
//         return parseInt(bill * 0.10);
//     }
// }

// calcPersonBills(john);
// calcPersonBills(mark);
// console.log(john);
// console.log(mark);




// let student = {
//
//     name: 'John',
//     id: 123,
//     grade: 10,
// };
//
// student.computerModel = 'Acer';
//
// // console.log(student);
// for (let key in student) {
//
//     console.log(`Member's ${key}, member value is ${student[key]}`);
//
// }

//
// function fibonacci(n) {
//     return n < 1 ? 0
//         : n <= 2 ? 1
//             : fibonacci(n - 1) + fibonacci(n - 2);
// }
//
// console.log(fibonacci(30));


//
// let fib = function (theNumber) {
//     if (n === 1 || theNumber === 3) {
//         return 1;
//     }
//     else {
//         return fib(theNumber - 1) + fib (theNumber - 2);
//     }
// }



// let m = 10;
// let s = '';
//
// function exitNum(n) {
//
//     if (n == 1) {
//         return n;
//     }
//     return n + ' ' + exitNum(n - 1);
// }
//
// console.log(exitNum(m));



// let m = 10;
// let s = '';
//
// function exitNum(str, n) {
//
//     if (n == 1) {
//         return str;
//     }
//  return str + ' ' + exitNum(str, n - 1);
// }
//
// console.log(exitNum(s, m));









// let array = [10, 0, 1, 6];
//
// function doubleNumber(theNumber) {
//     return theNumber * 2;
// }
//
// function squareNumber(theNumber) {
//     return theNumber * theNumber;
// }
//
//
// function checkPositive(theNumber) {
//     if (theNumber > 0) {
//         return 'positive';
//     } else {
//         return 'negative';
//     }
// }
// let array2 = array.map(doubleNumber);
//
// let array3 = array.map(squareNumber);
// console.log(array3);
//
// let array10 = [5, -6, 7, 7];
// // let array11 = ['positive', 'negative', 'positive', 'negative'];
// let array11 = array10.map(checkPositive);
// console.log(array11);




// let array = [10, 0, 1, 6];
//
// function nicePrint(theNumber) {
//     return `Number is ${theNumber};`
// }
//
// let array2 = array.map(nicePrint);
// console.log(array2);
//
// let array3 = ['Kiev', 'Kharkov', 'Germany', 'Asia'];
//
// function nicePrint(countries) {
//     return `Places: ${countries};`
// }
//
// let array4 = array3.map(nicePrint);
// console.log(array3);


// let array = ['Ann', 18, true];
//
// function nicePrint(theItem, theIndex) {
//     return `Item at position ${theIndex} is ${theItem}`;
// }
//
//
//
// let arrayToStr = array.map(nicePrint).join(' @ ');
// // console.log(array2);
// console.log(arrayToStr);
//
//

//ARROW

//
// let mySquare = function (number1) {
//         return number1*number1;
//
// }
// console.log(mySquare(10));
//
// let mySquare2 = (number1) => number1*number1;
//
// console.log(mySquare(10));
//
// let max = function (x, y) {
//     if(x > y) {
//         return x;
//     } else {
//         return y;
//     }
//
// }

// let max2 = (x, y) => {
//     if (x > y) {
//         return x;
//     } else {
//         return y;
//     }
// }
// console.log(max2(10, 5));

    // let maxTern = (x, y) => (x > y) ? x : y;
    //
    // console.log(maxTern(5, 3));






//
//
// let array = ['Ann', 18, true];
//
// // function nicePrint(theItem, theIndex) {
// //     return `Item at position ${theIndex} is ${theItem}`;
// // }
// //
//
// // let array2str = array.map(function(theItem, theIndex) {
// //     return `Item at position ${theIndex} is ${theItem} `;
// // }).join(" @ ");
//
// let nicePrintArrow = (theItem, theIndex) => 'Item at position ${theIndex} is ${theItem}`;
//
// let arrayToStr = array.map( (theItem, theIndex) => `Item at position ${theIndex} is ${theItem}`).join(' @ ');
// console.log(arrayToStr);
//
//
//

// document.body.style.backgroundColor = 'red';
// document.getElementById('theP').style.color = 'yellow';
//
//
//
// for (let i = 0; i < document.body.childNodes.length; i++) {
//     console.log(document.body.childNodes[i]);
// }


// for (let i = 0; i < document.body.children.length; i++) {
//     console.log(document.body.children[i]);
// }


    // for (let i = 0;
    //      i < document.getElementById('theDiv').children.length;
    //      i++) {
    //     console.log(document.getElementById('theDiv').children[i]);
    //
    // }

// document.body.children[1]function CreateNewUser() {































    // function CreateNewUser() {

    //     this.firstName = prompt('Please enter your first name.', '');

    //     Object.defineProperty(this, 'firstName', {
    //         writable: false
       
    //       });
    //    this._firstName = '';

    //     this.setFirstName = function (newName) {
       
    //       Object.defineProperty(this, 'firstName', {
    //         writable: true,
    //         configurable: true
       
    //       });
       
       
    //    this.firstName = newName;

    //    Object.defineProperty(this, 'firstName', {
    //     writable: false,
    //     configurable: false
       
    //    });
    //    return newName;
    //     };
      
    //     this.lastName = prompt('Please enter your last name.', '');


    //     this.setLastName = function (newName) {
       
    //         Object.defineProperty(this, 'lastName', {
    //           writable: true,
    //           configurable: true
         
    //         });
         
         
    //      this.lastName = newName;
  
    //      Object.defineProperty(this, 'lastName', {
    //       writable: false,
    //       configurable: false
         
    //      });
    //      return newName;
    //       };

    //     this.getLogin = function () {
    //         return (this.firstName[0] + this.lastName).toLowerCase();
    //     };

        
      
        
    
    //     let askBirthday = prompt('Please enter your birthday in the format of: dd.mm.yyyy.', 'dd.mm.yyyy').split('.');
    //     this.birthday = new Date(+askBirthday[2], +askBirthday[1] - 1, +askBirthday[0]);

    //     this.getAge = function () {
    //         let now = new Date();
    //         let userAge = (now.getFullYear() - this.birthday.getFullYear());
    //         if (now.getMonth() < this.birthday.getMonth() || (now.getMonth() === this.birthday.getMonth() && now.getDate() < this.birthday.getDate())) {
    //             --userAge;
    //         }
    //         return userAge;
    //     };















        











    //     // this.getPassword = function () {
    //     //     return (this.firstName[0].toUpperCase() + this.lastName.toLowerCase());
            
    //     // };

   


    //   }
      
      
      
      
    //   let newUser = new CreateNewUser();
      
    //   console.log(`Your name is: ${newUser.firstName}\nYour surname is: ${newUser.lastName}`);
    //   console.log(`Your age is: ${newUser.getAge()}`);
    // //   console.log(`Your password is: ${newUser.getPassword()}`);
    //   console.log(`\nSystem notification:\nWelcome back, ${newUser.getLogin()}`);
      


            //    const arr = [1, 3, 4, 6, 4];
            //    let position1 = arr.indexOf(4);
            //    console.log(position1);
            //    let position2 = arr.indexOf(10);
            //    console.log(position2);





        // const breackfest = ["Яичница", "колбаса", "Шампанское"];
        // const shampane = breackfest.indexOf("Шампанское");
        // if (shampane != -1) {
        //     console.log("Месье алкоголик!");
        // }
        // if (breackfest.includes("Шампанское")) {
        //     console.log("Месье алкоголик!");
        // }

// console.log(document);
//
// function showModal() {
//     const modal = document.getElementById('modal-slogan');
//     modal.style.display = 'block';
//     console.log(modal);

}