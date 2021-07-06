let priceInput = document.getElementById('priceInput');
let containerPrice = document.getElementById('containerPrice');
let span = document.createElement('span');
span.setAttribute('class', 'result');
containerPrice.appendChild(span);

let close = document.createElement('a');
close.setAttribute('class', 'cross');
containerPrice.appendChild(close);

let warning = document.createElement('p');
document.body.appendChild(warning);
priceInput.onfocus = function () {
    priceInput.classList.add('active');
};
priceInput.onblur = function () {
    if (priceInput.value > 0) {
        this.classList.add('text-green');
        priceInput.classList.remove('active');
        priceInput.classList.remove('error');
        containerPrice.classList.add('active-container');
        warning.innerText = '';
        span.innerHTML = `this is price: ${priceInput.value}`;
        close.innerHTML = '&#10006;';

    } else if (priceInput.value < 0 || priceInput.value === '') {
        this.classList.remove('text-green');
        priceInput.classList.add('error');
        containerPrice.classList.remove('active-container');
        warning.innerText = 'Please enter correct price';
    }
};
close.onclick = function () {
    containerPrice.classList.remove('active-container');
    priceInput.value = '';
};
