let value;

//get input form HTML
let form = document.querySelector('.form');

// on focus
form.onfocus = function() { 
	// add HTML class
	form.classList.add('focused');
	// text color black
	form.style.color = 'black';
	// sets value to 0;
	form.value = '';
	// removes error message
	document.querySelector('.error').classList.add('hidden');
}

form.onblur = function() { 
	// add HTML class
	form.classList.remove('focused');
	// assign value to the var
	value = form.value;
	// add text to span
	document.querySelector('.result span').innerText = 'Текущая цена: ' + value;
	// change color if > 0 & < 0
	if (value >= 0) {
		form.style.color = 'green';
		document.querySelector('.result').classList.remove('hidden');
	} else {
		form.style.color = 'red';
		document.querySelector('.error').classList.remove('hidden');
	}
	// removes class hidden to show result bar

}


document.querySelector('.removeData').addEventListener('click', function(){
			// removes value inside the input
			form.value = '';
			// sets value to '' in the value var
			value = '';
			// sets black font
			form.style.color = 'black';
			//removes inner text in span
			document.querySelector('.result span').innerText = '';
			// hides result bar
			document.querySelector('.result').classList.add('hidden');
		
});
