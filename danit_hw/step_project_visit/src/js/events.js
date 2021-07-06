/***LOGIN***/

const interact = require('interactjs');

import {
    loginButton,
    signUpButton,
    addVisitButton
} from "./variables";

import {
    EntryLogIn,
    Doctor,
    Entry,
    EntrySignUp,
} from "./classes";


import {
    deleteCard,
    addResetFiltersButton,
    checkNoItems,
    checkStatus,
    clearInput,
    editCard,
    filterByStatus,
    getData,
    getEditCard,
    renderCard,
    showEditCard,
    findingDoctor,
    parseHBS,
    registerUser,
    loginUser,
    validateForm,
    dragMoveListener } from "./functions";

const toastr = require('toastr');
let modal;


// load HBS
parseHBS();
// TODO
const resetFilters = document.getElementById("resetFilters");
const filterText = document.querySelector(".filter-search");
const filterStatus = document.getElementById("status");
const filterImportance = document.getElementById("urgency");


//__Обоаботчик по HEADERу

    document.querySelector(".header-inner").addEventListener("click",  (e) => {
        const login = document.querySelector(".login");
        if (e.target.id === "logInButton") {
            if (login.textContent === "Log in") {
                modal = new EntryLogIn()
                modal.render()
            } else {
                toastr.success('Bye-bye, have a nice one!')
                sessionStorage.removeItem("token");
                setTimeout(() => {
                    window.location.reload();
                }, 1300)
            }
        } else if (e.target.id === "signUpButton") {
            modal = new EntrySignUp();
            modal.render()
            //___ADD MODAL WINDOW CHOSEN DOCTOR
        } else if (e.target.id === "addVisitButton") {
            modal = new Doctor();
            modal.render()
        }
    });



// Обработик события с модальными окнами логина и регистрации
document.getElementById("modalWindow").addEventListener("click", (e) => {
    e.preventDefault();
    const userLogin = document.getElementById("emailField");
    const userPass = document.getElementById("passwordField");
    
    //___LOGIN
    if (e.target.id === "loginButton" || e.target.id === "passwordField" ||e.target.id === "emailField") {
        if(e.target.textContent === "Log In") {
            // getLogin(userLogin.value, userPass.value);
            loginUser(userLogin.value, userPass.value)
            modal = new Entry();
            modal.delete()
            if (sessionStorage.getItem('token') !== undefined) {
                setTimeout(() => {
                    window.location.reload();
                }, 1500)
            }
        } else if (e.target.textContent === "Sign Up") {
            registerUser(userLogin.value, userPass.value).then(res => res.json()).then(body => {
                if (body.status === "fail" ) {
                    toastr.warning('Such user is already registered, please log in.');
                    modal.delete()
                } else if (body.status === "noemail" || body.status === "nopassword") {
                    toastr.warning('Please enter correct data.');
                } else {
                    toastr.success('User has been registered, please log in to your account.');
                    modal = new Entry();
                    modal.delete()
                }
            });

        } else {

        }
    //___CHOOSE A DOCTOR
    } else if (e.target.id === "doctorVisit" || e.target.id === "doctor" || e.target.id === "createCardButton") {
        if(e.target.id === "createCardButton") {
            findingDoctor();
        }
    //___RENDER CARD
    } else if (e.target.className === "input-modal" || e.target.id === "renderCardButton"){
        if (e.target.id === "renderCardButton") {
            // validateForm(document.querySelectorAll('.input-modal'))
            renderCard()
        }
        clearInput(".input-field");
    //___EDIT FORM
    } else if (e.target.id === "editCardButton"){
        let id = document.querySelector(".modal").id.slice(0, -2);
        // let cardId = parseInt(id, 10);
        let data = getData();
        let card = document.getElementById(id.toString());
        renderCard();
        card.remove();
        deleteCard(id);
    //___DELETE FORM
    }
        else if (e.target.className !== "modal" && e.target.className !== "modal-header" && e.target.className !== "inpit-modal" && e.target.className !== "input-modal cardiologist-card" && e.target.className !== "input-modal dentist-card"){
        modal = new Entry();
        modal.delete();
    }

})


/****ФИЛЬТРА****/

/**Сбрасываение фильров по клику на кнопку резет****/
// TODO
if (sessionStorage.getItem('token')) {
    resetFilters.addEventListener("click", () => {
        filterStatus.value = "open";
        filterImportance.value = "";
        filterText.value = "";
        filterByStatus(".info-block", "open");
        addResetFiltersButton("0", "");
    });




/***Фильтр по статусу****/

    filterText.oninput = function() {
        filterByStatus(".info-block", filterImportance.value, filterText.value, filterStatus.value)
    };
    //
    filterStatus.addEventListener("change", () => filterByStatus(".info-block", filterImportance.value, filterText.value, filterStatus.value));


/***Фильтр по важности приема****/
    filterImportance.addEventListener("change", () => filterByStatus(".info-block", filterImportance.value, filterText.value, filterStatus.value));
/***Фильтр по введенны данным ***/
    filterText.addEventListener("change", () => filterByStatus(".info-block", filterImportance.value, filterText.value, filterStatus.value));

}

/*****КАРТОЧКА****/

/****Редактирование, удаление и завершение карточки****/
document.querySelector(".visits-inner").addEventListener("click", (e) => {
	e.preventDefault();

	// drag&drop, works 90% for now

    interact('.visits-block')
        .draggable({
            inertia: true,
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true
                })
            ],
            autoScroll: true,
            listeners: {
                move: dragMoveListener,
            }
        })

    let greatParent = e.path[2];
    let id = greatParent.id;

    if (e.target.innerText === "Done") {
        greatParent.style.display = "none";
        getEditCard(id)
            .then(res => res.json())
            .then(data => {
                data.status = "done";
                checkStatus(data);
                editCard(data);
            });

    } else if (e.target.innerText === "Edit") {
        getEditCard(id)
            .then(res => res.json())
            .then(data => {
                findingDoctor(data.doctor); 
                getData(data);
                showEditCard(data);
            }); 
    } else if (e.target.innerText === "Delete") { 
        greatParent.remove();
        deleteCard(id);
        checkNoItems(document.querySelectorAll(".info-block"));
    }
})
