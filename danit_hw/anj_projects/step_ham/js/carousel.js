const personsList = document.getElementsByClassName('person-item');

for (let i = 0; i < personsList.length; i++) {
    personsList[i].addEventListener("click", function() {
        switchPerson(this);
    });
};

switchPerson(personsList[0]);

document.getElementById('left-carousel-btn').addEventListener('click', function(e) {
   e.preventDefault();
}, false);

document.getElementById('right-carousel-btn').addEventListener('click', function(e) {
   e.preventDefault();
}, false);

document.getElementById('left-carousel-btn').addEventListener('click', function() {
    switchLeft(personsList);
});

document.getElementById('right-carousel-btn').addEventListener('click', function() {
    switchRight(personsList);
});

function switchLeft(list) {
    const persArr = Array.prototype.slice.call(document.getElementsByClassName('person-item'));
    let index = persArr.indexOf(document.querySelector('.person-item.active'));
    (index > 0) ? index -= 1 : index = 3;
    switchPerson(list[index]);
}

function switchRight(list) {
    const persArr = Array.prototype.slice.call(document.getElementsByClassName('person-item'));
    let index = persArr.indexOf(document.querySelector('.person-item.active'));
    (index < 3) ? index += 1 : index = 0;
    switchPerson(list[index]);
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 39) {
        document.getElementById('right-carousel-btn').click();
    } else if (event.keyCode == 37) {
        document.getElementById('left-carousel-btn').click();
    }
});

function switchPerson(elem) {
    let siblings = elem.parentElement.children;
    for (let i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove('active');
    }
    elem.classList.add('active');
    const persArr = Array.prototype.slice.call(document.getElementsByClassName('person-item'));
    let index = persArr.indexOf(elem);
    switchInfo(index);
}

function switchInfo(num) {
    const personsInfo = document.getElementsByClassName('carousel-main-person-container');
    for (let i = 0; i < personsInfo.length; i++) {
        personsInfo[i].classList.remove('active');
    }
    personsInfo[num].classList.add('active');
}