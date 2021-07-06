document.getElementById('nav-btn').addEventListener('click', openNavMenu);

function openNavMenu() {
    if (document.getElementById('nav-btn').classList.contains('nav__btn_open')) {
        document.getElementById('nav-btn').classList.add('nav__btn_close');
        document.getElementById('nav-menu').classList.add('nav-menu_active');
        document.getElementById('nav-btn').classList.remove('nav__btn_open');
    } else {
        document.getElementById('nav-btn').classList.remove('nav__btn_close');
        document.getElementById('nav-menu').classList.remove('nav-menu_active');
        document.getElementById('nav-btn').classList.add('nav__btn_open');
    }
}