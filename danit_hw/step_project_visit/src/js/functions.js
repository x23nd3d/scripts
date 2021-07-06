
import {
	resetFilters,
	token,
	noItems,
	addVisitButton,
	visitsInner,
	signUp,
	login,
	API } from "./variables";

import {
	VisitDentist,
	VisitTherapist,
	VisitCardiologist,
	modalTherapist,
	modalDentist,
	modalCardiologist,
	Modal } from "./classes";

const toastr = require('toastr');

let sessionStatus = "";
let modal = "";
/**LOGIN SIGN UP***/

export function registerUser(email, password) {

	return fetch(`${API}/auth/register`, {
		method: 'POST',
		body: JSON.stringify({email, password}),
		headers: {
			'Content-Type': 'application/json'
		}
	});
}


/****Запрос на сервер для проверки правильности ввода данных в логин****/

export function loginUser(email, password) {
	return fetch(`${API}/auth/login`, {
		method: 'POST',
		body: JSON.stringify({email, password}),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(response => {
		if (!response.ok) {
			toastr.error('Incorrect email or password, please try again.')
		} else {
			return response.json()
		}

	}).then(data => {
			sessionStorage.setItem("token", data.token)
			sessionStatus = data.status;
			validateUser()
		let user = data.userId.email.split('@')[0];
		user = user[0].toUpperCase() + user.slice(1);
		toastr.success(`Welcome on board, ${user}`)
		});
}


/****Валидация ввода логина****/
export function validateUser() {
	if (sessionStatus === "Success") {
		console.log('User authenticated');
	} else {
		alert("Incorrect data!");
		console.log("Incorrect data!");
	};
};

// show all the cards
if (sessionStorage.getItem('token')) {
		getCard()
			.then(res => res.json())
			.then(data => {
				if(data.length > 0){
					data.forEach(e => {
						findClass(e.visit);
						}
					)}
				filterByStatus(".info-block", "open");
				addResetFiltersButton("0", "");

			})

} else {
	console.log('No token available');
}

////////_____КАРТОЧКА_____///////

/***МОДАЛЬНОЕ ОКНО ДЛЯ ВВОДА ДАННЫХ ДЛЯ КАРТОЧКИ****/

/****Функция определения врача по данным из ячейки и последующего вывода Модального окна заполнения данных для карточки****/
export function findingDoctor(medic) {

	let doctor;

	if (medic) {
		doctor = medic;
		if(doctor === "dentist") {
			modal = new modalDentist();
			modal.render()
		} else if (doctor === "cardiologist") {
			modal = new modalCardiologist();
			modal.render()
		} else {
			modal = new modalTherapist();
			modal.render()
		}

	} else {
		doctor = document.getElementById("doctor").value;

		if(doctor === "dentist") {
			modal = new modalDentist();
			modal.delete()
			modal.render()
		} else if (doctor === "cardiologist") {
			modal = new modalCardiologist();
			modal.delete()
			modal.render()
		} else {
			modal = new modalTherapist();
			modal.delete()
			modal.render()
		}
	
	}

		

};

export function renderCard(obj) {
	if (obj) {
		let userInfo = getData(obj)
		primaryCreateCard(userInfo);
	} else {
		let userInfo = getData()
		primaryCreateCard(userInfo);
	}
}


/****Вывод модального окна ввода данных для карточки с данными из редактируемой карточки */
export function showEditCard(obj) {
	const{doctor} = obj;
	document.querySelector(".modal-header").innerHTML = `Edit a ${doctor} Card`;
	document.getElementById("renderCardButton").innerText = "Edit";
	document.getElementById("renderCardButton").id = "editCardButton";
	document.querySelector(".modal").id = `${obj.id}id`;
};


/****РАБОТА С КАРТОЧКОЙ****/


/****Получений значений из полей заполнения визита****/
export function getData(obj) {

	if (obj) {
			let doctor = obj.doctor;
			if (doctor === "dentist") {
				document.querySelector(".visit-status").value = obj.status;
				document.getElementById("modalName").value = obj.name;
				document.getElementById("modalSurname").value = obj.surname;
				document.getElementById("modalReason").value = obj.reason;
				document.getElementById("modalDescription").value = obj.description;
				document.getElementById("modalImportance").selected = obj.importance;
				document.getElementById("dateOfLastVisit").value = obj.dateOfLastVisit;
			} else if (doctor === "cardiologist") {
				document.querySelector(".visit-status").value = obj.status;
				document.getElementById("modalName").value = obj.name;
				document.getElementById("modalSurname").value = obj.surname;
				document.getElementById("modalReason").value = obj.reason;
				document.getElementById("modalDescription").value = obj.description;
				document.getElementById("modalImportance").selected = obj.importance;
				document.getElementById("age").value = obj.age;
				document.getElementById("normalPressure").value = obj.normalPressure;
				document.getElementById("bodyMassIndex").value = obj.bodyMassIndex;
				document.getElementById("cardioDisease").value = obj.cardioDisease;
			} else {
				document.querySelector(".visit-status").value = obj.status;
				document.getElementById("modalName").value = obj.name;
				document.getElementById("modalSurname").value = obj.surname;
				document.getElementById("modalReason").value = obj.reason;
				document.getElementById("modalDescription").value = obj.description;
				document.getElementById("modalImportance").selected = obj.importance;
				document.getElementById("age").value = obj.age;
				}
	} else {
		let doctor = document.querySelector(".modal").value;
		if(doctor === "dentist") {
			return {
				doctor: document.querySelector(".modal").value,
				status: "open",
				name: document.getElementById("modalName").value,
				surname: document.getElementById("modalSurname").value,
				reason:  document.getElementById("modalReason").value,
				description: document.getElementById("modalDescription").value,
				importance: document.getElementById("modalImportance").value,
				dateOfLastVisit: document.getElementById("dateOfLastVisit").value,
			}
		} else if (doctor === "cardiologist") {
			return {
				doctor: document.querySelector(".modal").value,
				status: "open",
				name: document.getElementById("modalName").value,
				surname: document.getElementById("modalSurname").value,
				reason:  document.getElementById("modalReason").value,
				description: document.getElementById("modalDescription").value,
				importance: document.getElementById("modalImportance").value,
				age: document.getElementById("age").value,
				normalPressure: document.getElementById("normalPressure").value,
				bodyMassIndex: document.getElementById("bodyMassIndex").value,
				cardioDisease: document.getElementById("cardioDisease").value,
			}
		} else {
			return {
				doctor: document.querySelector(".modal").value,
				status: "open",
				name: document.getElementById("modalName").value,
				surname: document.getElementById("modalSurname").value,
				reason:  document.getElementById("modalReason").value,
				description: document.getElementById("modalDescription").value,
				importance: document.getElementById("modalImportance").value,
				age: document.getElementById("age").value,
			}
		}
	};

};


/****Проверка статуса карточки****/
export function checkStatus(obj) {

	if (obj.status === "open") {
		document.getElementById(obj.id).firstChild.firstChild.innerText = "open";
		document.getElementById(obj.id).firstChild.firstChild.style.color = "red";
	} else if (obj.status === "done") {
		document.getElementById(obj.id).firstChild.firstChild.innerText = "done";
		document.getElementById(obj.id).firstChild.firstChild.style.color = "green";
		document.getElementById(obj.id).lastChild.firstChild.style.display = "none";
		document.getElementById(obj.id).lastChild.lastChild.style.display = "none";
	} else {
		alert("Your card doesn't have a status!");
	}	
};

/***Функция для первичного вывода карточки на страницу */
export function primaryCreateCard(userInfo) {
	// TODO
	const filterStatus = document.getElementById("status");
	const filterImportance = document.getElementById("urgency");
	const filterText = document.querySelector(".filter-search");
	createCard(userInfo)
		.then(res => res.json())
		.then(data => {
			findClass(data[data.length - 1].visit)
		})
	modal = new Modal();
	modal.delete()
	filterByStatus(".info-block", "open");
	filterStatus.value = "open";
	filterImportance.value = "";
	filterText.value = "";
};

/***Определяем какой класс мы должны использовать****/
export function findClass(obj) {
	const {id, doctor, name, surname, reason, description, importance, age, dateOfLastVisit, normalPressure, bodyMassIndex, cardioDisease} = obj;

	let card;
	if(doctor === "dentist") {
		card = new VisitDentist(id, doctor, name, surname, reason, description, importance, dateOfLastVisit);
		card.render()
		checkStatus(obj)
	} else if (doctor === "cardiologist") {
		card = new VisitCardiologist(id, doctor, name, surname, reason, description, importance, age, normalPressure, bodyMassIndex, cardioDisease);
		card.render()
		checkStatus(obj)

	} else if (doctor === "therapist"){
		card = new VisitTherapist (id, doctor, name, surname, reason, description, importance, age);
		card.render()
		checkStatus(obj)
	} else {
		alert("Unfortunatelly, we don't have such a doctor.")
	}
};





/***ФИЛЬТРА****/

/***Функция проверки наличия открытых карточек по фильтрам ***/
export function checkNoItems(arr) {
    let displayItems = [];
    let style;
    arr.forEach(e => {
        style = getComputedStyle(e.parentNode)
        if(style.display === "flex") {
            displayItems.push(e);
        } else if (style.display === "block") {
            displayItems.push(e);
        }
    });
    
    if (displayItems.length === 0) {
            noItems.style.display = "block";
            visitsInner.style.display = "block";
        }
};

/***функця обработки фильтров */
export function filterByStatus(selector, value1, value2, value3) {
    addResetFiltersButton("1", "pointer");
    hiddenNoItems(); 

    let nodeList = document.querySelectorAll(selector);
    let valueArr = [value1, value2, value3];
    let arr = [];
    valueArr.forEach(e => {
        if(e !== "" && e !== undefined) {
            arr.push(e);
        } 
    })

    if (arr.length === 1) {
            checkValue(nodeList, arr[0])
    } else if (arr.length === 2) {
            checkValue(nodeList, arr[0], arr[1])
    } else if (arr.length === 3) {
            checkValue(nodeList, arr[0], arr[1], arr[2])
    } else {
    };

    checkNoItems(nodeList);
};

/****Првоерка КОЛЛИЧЕТСВА ФИЛЬТРОВ И наличия заданных параметров в карточках****/
export function checkValue(nl, value1, value2, value3) {

    if (value1 && value2 && value3) {
        for (let i = 0; i < nl.length; i++) {
            if (nl[i].innerText.includes(value1) && nl[i].innerText.includes(value2) && nl[i].innerText.includes(value3)) {
                nl[i].parentNode.style.display = "flex"
            } else {
                nl[i].parentNode.style.display = "none"
            }
        }
    } else if (value1 && value2) {
        for (let i = 0; i < nl.length; i++) {
            if (nl[i].innerText.includes(value1) && nl[i].innerText.includes(value2)) {
                nl[i].parentNode.style.display = "flex"
            } else {
                nl[i].parentNode.style.display = "none"
            }
        }
    } else {
        for (let i = 0; i < nl.length; i++) {
            if (nl[i].innerText.includes(value1)) {
                nl[i].parentNode.style.display = "flex"
            } else {
                nl[i].parentNode.style.display = "none"
            }
        }
    }
};

/****функция появления и исчезновения кнопки Резет в фильтрах****/
export function addResetFiltersButton(style, cursor) {
	const resetFilters = document.getElementById("resetFilters");
    resetFilters.style.opacity = style;
    resetFilters.style.cursor = cursor;
};



/****ШАЛОННЫЕ ФУНКЦИИ****/

/***Очистка Инпутов****/
export function clearInput(elem) {
	let arr = document.querySelectorAll(elem);
	arr.forEach(e => {
		e.value = "";
	})
};


/*Исчезновение блока "Нет карточек"*/
export const hiddenNoItems = () => {
    noItems.style.display = "none"
    visitsInner.style.display = "grid";
};


/////////_____СЕРВЕР______/////

/****ЗАПРОС И ПОЛУЧЕНИЕ ДАННЫХ С СЕРВЕРА****/

export function createCard(card) {
	const data = {
		token: sessionStorage.getItem("token"),
		card
	}


	return fetch(`${API}/cards/add`, {
        method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
        body: JSON.stringify(data)
    })
}

export function getCard() {
	return fetch(`${API}/cards/show`, {
            method: "GET",
			headers: {
				"Authorization": `${sessionStorage.getItem('token')}`
			}
        })
}

export function deleteCard(id) {
    return fetch(`${API}/cards/remove/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `${sessionStorage.getItem('token')}`
        }
    })
}

export function getEditCard(id) {
    return fetch(`${API}/cards/show/${id}`, {
        method: "GET",
		headers: {
			"Authorization": `${sessionStorage.getItem('token')}`
		}
    })
    
}

export function editCard(newCard) {
	return fetch(`${API}/cards/edit/${newCard.id}`, {
      method: "PUT",
		headers: {
			"Authorization": `${sessionStorage.getItem('token')}`,
			'Content-Type': 'application/json'
		},
      body: JSON.stringify(newCard)
    })
}

export function parseHBS() {

	const navbar = require("../views/partials/navbar.hbs");
	const head = require('../views/partials/header.hbs');


	let token = sessionStorage.getItem('token');
	token = !!token;

	if (!token) {
		/// FILTERS

		const h2 = document.createElement('h2');
		h2.className = "info-text";
		const info = `Please login`;
		h2.innerHTML = navbar({
			info,
		});
		document.body.appendChild(h2);
		/// HEADER
		const header = document.createElement('header');
		header.className = "header";
		header.innerHTML = `
        <div class="container">
            <div class="header-inner">
                <a href="#" class="logo"><span>la</span> Hospital</a>
                <button class="add-visit" id="addVisitButton">Add a visit</button>
                <button class="sign-up" id="signUpButton">Sign Up</button>
                <button class="login" id="logInButton">Log in</button>
            </div>
        </div>`


		document.querySelector('.info-text').textContent = "You are not logged in."

		document.body.prepend(header);


	} else {
		/// FILTERS
		const div = document.createElement('section');
		div.className = "filters"
		div.innerHTML = navbar({
			userToken: token
		});

		document.querySelector('.visits').prepend(div);

		/// HEADER

		const headDiv = document.createElement('header');
		headDiv.className = "header"
		headDiv.innerHTML = head({
			userToken: token
		});

		document.body.prepend(headDiv);
	}
}

export function validateForm(input) {
	input.forEach(i => {
		if (!i.value) {
			if (i.placeholder == "Short description" || i.placeholder == "Purpose of the visit") {
				return
			}
			i.dataset.required = "required";
			toastr.error('Please fill in all inputs!');
		} else {
			i.dataset.required = "";
		}
	});


}


export function dragMoveListener (event) {
	var target = event.target
	// keep the dragged position in the data-x/data-y attributes
	var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
	var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

	// translate the element
	target.style.webkitTransform =
		target.style.transform =
			'translate(' + x + 'px, ' + y + 'px)'

	// update the posiion attributes
	target.setAttribute('data-x', x)
	target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener
