


const john = {

    name: 'John Smith',
    restaraunt: 'Sishiya',
    age: 25,
    bills: [25, 58, 78, 258, 156],
    tips: [],

}

const mark = {

    name: 'Mark Doe',
    restaraunt: 'Murakami',
    age: 25,
    bills: [88, 55, 28, 10, 356, 666],
    tips: [],

}

function calcPersonBills(obj) {

    for (let i = 0; i < obj.bills.length; i++) {
    obj.tips.push(calcTips(obj.bills[i]));

    }
}

function calcTips(bill) {

    if (bill < 50) {
        return parseInt(bill * 0.2);
    } else if (bill >= 50 && bill <= 200) {
        return parseInt(bill * 0.15);
    } else  {
        return parseInt(bill * 0.10);
    }
}

calcPersonBills(john);
calcPersonBills(mark);
console.log(john);
console.log(mark);