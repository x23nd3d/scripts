class Hamburger {
	constructor(size, stuffing) {
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
		this._toppings = [];
	}

	get toppings() {
		return this._toppings;
	}

	set toppings(topping) {
		try {
			if (!topping) throw new HamburgerException('no topping given');
			if (!(topping.type == 'topping')) throw new HamburgerException('invalid topping ' + topping.name);
			this.toppings.forEach((item) = {
				if (item.name == topping.name) throw new HamburgerException('duplicate topping ' + topping.name);
			});
			this._toppings.push(topping);
		} catch (err) {
			if (err instanceof HamburgerException) {
				console.log(err.message);
			} else {
				throw err;
			}
		}
	}

	addTopping(value) {
		this.toppings = value;
	}

	removeTopping(topping) {
		try {
			if (!topping) throw new HamburgerException('no topping given');
			if (!(topping.type == 'topping')) throw new HamburgerException('invalid topping ' + topping.name);
		} catch (err) {
			if (err instanceof HamburgerException) {
				console.log(err.message);
			} else {
				throw err;
			}
		}
		for (let i = 0; i < this.toppings.length; i++) {
			if (this.toppings[i] == topping) this.toppings.splice(i, 1);
		}
	}

	getToppings() {
		let topNames = '';
		this.toppings.forEach((item) => topNames += item.name + ' ')
		return topNames;
	}

	getSize() {
		return this.size.name;
	}

	getStuffing() {
		return this.stuffing.name;
	}

	calculatePrice() {
		let price = this.size.price + this.stuffing.price;
		this.toppings.forEach((item) => price += item.price);
		return price + ' гривен';
	}

	calculateCalories() {
		let calories = this.size.calories + this.stuffing.calories;
		this.toppings.forEach((item) => calories += item.calories);
		return calories + ' калорий';
	}
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

function HamburgerException(message) {
	Error.apply(this, arguments);
	this.message = message;
}
HamburgerException.prototype = Object.create(Error);

let hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_SALAD);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log(hamburger.calculateCalories());
console.log(hamburger.getToppings());
