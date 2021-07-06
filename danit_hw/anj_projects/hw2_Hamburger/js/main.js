function Hamburger(size, stuffing) {
	try {
		if (!size) throw new HamburgerException('no size given');
		if (!stuffing) throw new HamburgerException('no stuffing given');
		if (!(size.type == 'size')) throw new HamburgerException('invalid size ' + size.name);
		if (!(stuffing.type == 'stuffing')) throw new HamburgerException('invalid stuffing ', stuffing.name);
		this.size = size;
		this.stuffing = stuffing;
	} catch (err) {
		if (err instanceof HamburgerException) {
			console.log(`${err.name}: ${err.message}`);
		} else {
			throw err;
		}
	}
	this.toppings = [];
}

Hamburger.SIZE_SMALL = {
	type: 'size',
	name: 'SIZE_SMALL',
	price: 50,
	calories: 20
}

Hamburger.SIZE_LARGE = {
	type: 'size',
	name: 'SIZE_LARGE',
	price: 100,
	calories: 40
}

Hamburger.STUFFING_CHEESE = {
	type: 'stuffing',
	name: 'STUFFING_CHEESE',
	price: 10,
	calories: 20
}

Hamburger.STUFFING_SALAD = {
	type: 'stuffing',
	name: 'STUFFING_SALAD',
	price: 20,
	calories: 5
}

Hamburger.STUFFING_POTATO = {
	type: 'stuffing',
	name: 'STUFFING_POTATO',
	price: 15,
	calories: 10
}

Hamburger.TOPPING_MAYO = {
	type: 'topping',
	name: 'TOPPING_MAYO',
	price: 20,
	calories: 5
}

Hamburger.TOPPING_SPICE = {
	type: 'topping',
	name: 'TOPPING_SPICE',
	price: 15,
	calories: 0
}

Hamburger.prototype.addTopping = function (topping) {
	try {
		if (!topping) throw new HamburgerException('no topping given');
		if (!(topping.type == 'topping')) throw new HamburgerException('invalid topping ' + topping.name);
		this.toppings.forEach(function(item) {
			if(item.name == topping.name) throw new HamburgerException('duplicate topping ' + topping.name);
		});
		this.toppings.push(topping);
	} catch (err) {
		if (err instanceof HamburgerException) {
			console.log(`${err.name}: ${err.message}`);
		} else {
			throw err;
		}
	}
}

Hamburger.prototype.removeTopping = function (topping) {
	try {
		if (!topping) throw new HamburgerException('no topping given');
		if (!(topping.type == 'topping')) throw new HamburgerException('invalid topping ' + topping.name);
	} catch (err) {
		if (err instanceof HamburgerException) {
			console.log(`${err.name}: ${err.message}`);
		} else {
			throw err;
		}
	}
	for (var i = 0; i < this.toppings.length; i++) {
		if (this.toppings[i] == topping) this.toppings.splice(i, 1);
	}
}

Hamburger.prototype.getToppings = function () {
	let topNames = '';
	this.toppings.forEach(function(item) { topNames += item.name + ' ' });
	return topNames;
}

Hamburger.prototype.getSize = function () {
	return this.size.name;
}

Hamburger.prototype.getStuffing = function () {
	return this.stuffing.name;
}

Hamburger.prototype.calculatePrice = function () {
	var price = this.size.price + this.stuffing.price;
	this.toppings.forEach(function(item) { price += item.price });
	return price + ' гривен';
}

Hamburger.prototype.calculateCalories = function () {
	var calories = this.size.calories + this.stuffing.calories;
	this.toppings.forEach(function(item) { calories += item.calories });
	return calories + ' калорий';
}

function HamburgerException(message) {
	Error.apply(this, arguments);
	this.name = 'HamburgerException';
	this.message = message;
}
HamburgerException.prototype = Object.create(Error);

var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);
