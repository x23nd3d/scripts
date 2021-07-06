const showPass = document.getElementsByClassName('icon-password');
for (let i = 0; i < showPass.length; i++) {
    showPass[i].addEventListener('click', showPassword);
}

function showPassword() {
    const show = document.getElementById(this.dataset.target);
    if (show.type === 'password') {
        show.setAttribute('type', 'text');
        this.setAttribute('class', 'fas fa-eye-slash icon-password');

    } else {
        show.setAttribute('type', 'password');
        this.setAttribute('class', 'fas fa-eye icon-password');
    }
}

const submit = document.getElementsByClassName('submit');
for (let i = 0; i < submit.length; i++) {
    submit[i].addEventListener('click', validate);
}

function validate() {
    const inputOne = document.getElementById('showPass');
    const inputToo = document.getElementById('showPassToo');
    if ((inputOne.value) === (inputToo.value)) {
        alert('You are welcome');
        TextP.innerHTML = '';
    } else {
        cont.appendChild(TextP);
        TextP.innerHTML = 'Нужно ввести одинаковые значения';
        TextP.style.color = 'red';
    }
}

const TextP = document.createElement('p');
const cont = document.getElementById('contLabel');

