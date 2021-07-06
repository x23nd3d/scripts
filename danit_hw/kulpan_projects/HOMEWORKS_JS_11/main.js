
const btn = document.getElementsByClassName('btn');
const btnArray = Array.prototype.slice.call(btn);
document.addEventListener('keypress', function (event) {
    const key = event.key;
    let foundKeyInList = btnArray.find(event => event.innerHTML.toUpperCase() === key.toUpperCase());
    if (foundKeyInList) {
        for (let i = 0; i < btnArray.length; i++) {
            btnArray[i].classList.remove('active');
        }
        foundKeyInList.classList.add('active');
    }
});
