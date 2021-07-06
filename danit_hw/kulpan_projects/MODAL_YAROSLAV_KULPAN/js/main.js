let modal = document.getElementById("modal-example");
let myBtn = document.getElementById("btnModal");
let btnClose = document.getElementsByClassName("btn-close")[0];

myBtn.onclick = function () {
    modal.style.display = "block";
};

btnClose.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};