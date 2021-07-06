const slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let myInterval = setInterval(nextSlide, 10000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

document.getElementById('stop').addEventListener('click', function () {
    clearInterval(myInterval);
});

document.getElementById('play').addEventListener('click', function () {
    myInterval = setInterval(nextSlide, 10000);

});
