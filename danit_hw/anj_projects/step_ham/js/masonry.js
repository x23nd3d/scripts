let container = document.querySelector('#masonry-container');

let msnry = new Masonry( container, {
    columnWidth: 370,
    itemSelector: '.masonry-item',
    gutter: 20
});

document.getElementById('masonry-load-more-button').addEventListener('click', function(e) {
   e.preventDefault();
}, false);

document.getElementById('masonry-load-more-button').addEventListener('click', function () {
    loadMasonry("section-5-menu-item");
});

loadMasonry();

function loadMasonry() {
    
    document.getElementById('masonry-load-more-button').style.display = 'none';
    let hiddenImages = document.querySelectorAll('.masonry-item:not(.active)');
    for (let i=0; i < 6 && hiddenImages[i]; i++) {
        hiddenImages[i].classList.add('active');
    }
    hiddenImages = document.querySelectorAll('.masonry-item:not(.active)');
    if (hiddenImages.length) {
        document.getElementById('masonry-load-more-button').style.display = 'inline-block';
    }
    let container = document.querySelector('#masonry-container');
    let mas = new Masonry( container, {
        columnWidth: 370,
        itemSelector: '.masonry-item',
        gutter: 20
    });
}