const myTabs = document.getElementsByClassName('card-collapse');
for (let i = 0; i < myTabs.length; i++) {
    myTabs[i].addEventListener('click', switchTabs);
}

function switchTabs() {
    const tabs = this.parentElement;
    const tabsChildren = tabs.children;
    for (let i = 0; i < tabsChildren.length; i++) {
        tabsChildren[i].classList.remove('active');
    }
    this.classList.add('active');

    const showTabs = document.getElementById(this.dataset.target);
    const show = showTabs.parentElement;
    const showChildren = show.children;
    for (let i = 0; i < showChildren.length; i++) {
        showChildren[i].classList.remove('active');
    }
    showTabs.classList.add('active');
}

// const tabsCaption = document.querySelectorAll('.collapse-header .card-collapse');
// for (let i = 0; i < tabsCaption.length; i++) {
//     tabsCaption[i].addEventListener('click', switchTab);
// }
//
// function switchTab() {
//     const elemUl = this.parentElement;
//     const allListItems = elemUl.children;
//     const arrayListItems = Array.prototype.slice.call(allListItems);
//     arrayListItems.forEach(function (item) {
//         item.classList.remove('active');
//     });
//     this.classList.add('active');
//     const tabsContent = document.querySelectorAll('.card-container-body .card-collapse-body');
//     for (let i = 0; i < tabsContent.length; i++) {
//         tabsContent[i].classList.remove('active');
//     }
//
//     const position = (arrayListItems.indexOf(this));
//     tabsContent[position].classList.add('active');
// }