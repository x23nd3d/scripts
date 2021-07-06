const imageFilters = document.getElementsByClassName('section-5-menu-item');

for (let i = 0; i < imageFilters.length; i++) {
    imageFilters[i].addEventListener("click", function () {
        switchImgTabs(this, 'portfolio-item');
    });
};

switchImgTabs(imageFilters[0], 'portfolio-item');

document.getElementById('portfolio-load-more-button').addEventListener('click', function(e) {
   e.preventDefault();
}, false);

document.getElementById('portfolio-load-more-button').addEventListener('click', function () {
    loadMore("section-5-menu-item");
});

function switchImgTabs(elem, tabClass) {
    let siblings = elem.parentElement.children;
    for (let i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove('active');
    }
    elem.classList.add('active');
    selectPortfolioCategory(tabClass, elem);
}

function selectPortfolioCategory(className, elemMenu) {
    const allElementsList = document.getElementsByClassName(className);
    const category = elemMenu.dataset.target;
    for (let i = 0, flag = 0; i < allElementsList.length; i++) {
        if (flag < 12 && allElementsList[i].classList.contains(category)) {
            allElementsList[i].classList.add('active');
            flag++;
        } else {
            allElementsList[i].classList.remove('active');
        }
    }
    categoryHiddenElements = document.querySelectorAll(`.${category}:not(.active)`);
    if (categoryHiddenElements.length) {
        document.getElementById('portfolio-load-more-button').style.display = 'inline-block';
    } else {
        document.getElementById('portfolio-load-more-button').style.display = 'none';
    }
}

function loadMore(menuClassName) {
    const selectMenuItem = document.querySelector(`.${menuClassName}.active`);
    const category = selectMenuItem.dataset.target;
    let categoryHiddenElements = document.querySelectorAll(`.${category}:not(.active)`);
    for (let i = 0; i < 12 && categoryHiddenElements[i]; i++) {
        categoryHiddenElements[i].classList.add("active");
    }
    categoryHiddenElements = document.querySelectorAll(`.${category}:not(.active)`);
    if (!categoryHiddenElements.length) {
        document.getElementById('portfolio-load-more-button').style.display = 'none';
    }
}

/*_____PORTFOLIO-HOVER_____*/

let portfolioItems = document.getElementsByClassName('portfolio-item');
for (let i = 0; i < portfolioItems.length; i++) {
    portfolioItems[i].addEventListener('mouseenter', function() {
        createPortfolioHover(this);
    });
    portfolioItems[i].addEventListener('mouseleave', function() {
        removePortfolioHover(this);
    });
}

function createPortfolioHover(item) {
    let textContent = item.dataset.info.split('; ');
    let portfolioHover = document.createElement('div');
    portfolioHover.className = 'portfolio-item-hover';
    portfolioHover.innerHTML = `<div class="portfolio-item-buttons-container"><a href="#" class="portfolio-item-hover-button"><i class="fas fa-link"></i></a><a href="#" class="portfolio-item-hover-button"><i class="fas fa-search"></i></a></div><h4 class="portfolio-item-title">${textContent[0]}</h4><p class="portfolio-item-description">${textContent[1]}</p>`;
    item.insertBefore(portfolioHover, item.firstChild);
}

function removePortfolioHover(item) {
    item.firstChild.remove();
}