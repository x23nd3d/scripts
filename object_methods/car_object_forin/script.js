let car = {
color: 'black',
company: 'Tesla',
model: 'X',
xPosition: 0,
currentSpeed: 0,

};

console.log(car.color);
car.xPosition+=10;
console.log(car.xPosition);
car.weight = 1500;
// console.log(car.weight);
// console.log(car['model']);

delete car.color;


for(let key in car) {

    console.log(`Member name is ${key}, member value is ${car[key]}`);
}


console.log(car);
