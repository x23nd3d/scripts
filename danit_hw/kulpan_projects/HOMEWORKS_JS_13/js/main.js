let head = document.head;
let link = document.createElement('link');
link.rel = 'stylesheet';

if (localStorage.getItem('Style') === 'newStyle') {
    link.href = 'css/new_style.css';
} else {
    link.href = 'css/style.css';
}

head.appendChild(link);

document.getElementById('switchTheme').addEventListener('click', function () {
    if (localStorage.getItem('Style') === 'oldStyle') {
        link.href = 'css/new_style.css';
        localStorage.setItem('Style', 'newStyle');
    } else {
        link.href = 'css/style.css';
        localStorage.setItem('Style', 'oldStyle');
    }
});