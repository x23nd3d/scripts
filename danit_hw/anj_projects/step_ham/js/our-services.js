const serviceTabsLink = document.getElementsByClassName('our-services-menu-item');

for(let i = 0; i < serviceTabsLink.length; i++) {
    serviceTabsLink[i].addEventListener("click", function() {
        switchTab(this, "our-services-menu-item", "our-services-content");
    });
};

function switchTab(elem, elemClass, tabClass) {
    const tabs = Array.prototype.slice.call(document.getElementsByClassName(elemClass));
    for(let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    };
    elem.classList.add('active');
    const elemIndex = tabs.indexOf(elem);
    const tabsContent = document.getElementsByClassName(tabClass);
    for(let i = 0; i < tabsContent.length; i++) {
        tabsContent[i].classList.remove('active');
    };
    tabsContent[elemIndex].classList.add('active');
}