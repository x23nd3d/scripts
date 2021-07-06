const colorLinks = [
    '../js16/css/red_theme.css',
    '../js16/css/green_theme.css',
//    '../js16/css/blue_theme.css' //  третья, для примера с добавлением-удалением новых тем
];

let currentTheme = localStorage.getItem('theme');
(currentTheme == null) ? changeThemeLink(0) : changeThemeLink(currentTheme);

function changeThemeLink(n) {
    let installedTheme = document.getElementById('theme-link');
    let newTheme = document.createElement('link');
    newTheme.rel = 'stylesheet';
    newTheme.href = colorLinks[n];
    newTheme.id = 'theme-link';
    document.head.replaceChild(newTheme, installedTheme);
}

let changeThemeButton = document.getElementById('change-theme-button');
changeThemeButton.addEventListener('click', setNewTheme);

function setNewTheme() {
    let curr = localStorage.getItem('theme');
    let next = ((+curr + 1) < colorLinks.length) ? (+curr + 1) : 0;
    changeThemeLink(next);
    localStorage.setItem('theme', next.toString());
}