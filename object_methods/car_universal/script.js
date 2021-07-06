function Car(theColor, theCompany, theModel) {

    this.color        = theColor;
    this.company      = theCompany;
    this.model        = theModel;
    this.xPosition    = 0;
    this.currentSpeed = 0;

    this.speedUp = function () {
        this.currentSpeed += 5;

    }
}

let SergeysCar = new Car ('Grey', 'Ford', 'Mondeo');

let AndreysCar = new Car ('Black', 'Citroen', 'C5');

console.log(SergeysCar);
console.log(AndreysCar);