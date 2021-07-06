/****Общий класс визита****/


import {modal, loginButton } from "./variables";
import { hiddenNoItems } from "./functions";


export class Visit {
	constructor(id, doctor, name, surname, reason, description, importance) {
        this.container = document.querySelector(".visit-inner");
		this.doctorField = document.createElement("h3");
		this.status = document.createElement("h2")
		this.cardBlock = document.createElement("ul")
        this.nameField = document.createElement("li");
        this.surnameField = document.createElement("li");
        this.reasonField = document.createElement("li");
        this.descriptionField = document.createElement("li");
        this.importantField = document.createElement("li");
        this.buttonBlock = document.createElement("div");
		this.closedButton = document.createElement("button");
		this.deleteButton = document.createElement("button");
		this.editButton = document.createElement("button");

		this.status.className = "visit-status";
		this.buttonBlock.className = "button-block";
		this.closedButton.className = "btn btn-success close-button";
		this.deleteButton.className = "btn btn-danger delete-button";
		this.editButton.className = "btn btn-primary edit-button";

		this.closedButton.innerHTML = "Done";
		this.deleteButton.innerHTML = "Delete";
		this.editButton.innerHTML = "Edit";


		this.elements = {
			id: id,
			doctor: doctor,
			name: name,
			surname: surname,
			reason: reason,
			description: description,
			importance: importance
		}
	}

	render() {
		const {id, doctor, name, surname, reason, description, importance} = this.elements;
		hiddenNoItems();

		this.parent = document.querySelector(".visits-inner");
		this.block = document.createElement("div");
		this.block.className = "visits-block";
		this.block.id = id;
		this.block.dataset.drag = "drop";
		this.block.status = "open";
		this.status.innerHTML = this.block.status;

		this.status.style.textAlign = "center";
		this.status.style.color = "red";


		this.infoBlock = document.createElement("div");
		this.infoBlock.className = "info-block";

        this.doctorField.textContent = `Visit to ${doctor}`;
        this.nameField.textContent = `Name - ${name}`;
        this.surnameField.textContent = `Surname - ${surname}`;
        this.reasonField.textContent = `Reason - ${reason}`;
        this.descriptionField.textContent = `Description - ${description}`;
		this.importantField.textContent = `Importance - ${importance}`;
        
        this.buttonBlock.append(this.editButton, this.deleteButton, this.closedButton)
        this.infoBlock.append(this.status, this.doctorField, this.cardBlock)
		this.cardBlock.append(this.nameField, this.surnameField, this.reasonField, this.descriptionField, this.importantField)
		this.block.append(this.infoBlock, this.buttonBlock);
		this.parent.append(this.block);
    }
    
    alreadyDone() {
        this.closedButton.style.display = "none";
        this.massage = document.createElement("span");
        this.massage.textContent = "Already Done";

        this.buttonBlock.append(this.massage);

    }
};


/****Класс визита к Кардологу****/
export  class VisitCardiologist extends Visit {
	constructor(id, doctor, name, surname, reason, description, importance, age, normalPressure, bodyMassIndex, cardioDisease) {
		super(id, doctor, name, surname, reason, description, importance);
		
		this.ageField = document.createElement("li");
		this.normalPressureField = document.createElement("li");
        this.bodyMassIndexField = document.createElement("li");
        this.cardioDiseaseField = document.createElement("li");

		this.elements.age = age;
		this.elements.normalPressure = normalPressure;
		this.elements.bodyMassIndex = bodyMassIndex;
        this.elements.cardioDisease = cardioDisease;
	}

	render() {
		super.render();
		const {age, normalPressure, bodyMassIndex, cardioDisease} = this.elements;
		this.ageField.textContent = `Age - ${age}`;
		this.normalPressureField.textContent = `Normal pressure - ${normalPressure}`;
        this.bodyMassIndexField.textContent = `Body Mass Index - ${bodyMassIndex}`;
        this.cardioDiseaseField.textContent = `Cardio Disease - ${cardioDisease}`;

		this.cardBlock.append(this.ageField, this.normalPressureField, this.bodyMassIndexField, this.cardioDiseaseField)
	}


}

/****Класс визита к Дантисту****/
export  class VisitDentist extends Visit {
	constructor(id, doctor, name, surname, reason, description, importance, dateOfLastVisit) {
		super(id, doctor, name, surname, reason, description, importance);

		this.dateOfLastVisitField = document.createElement("li");

		this.elements.dateOfLastVisit = dateOfLastVisit;
	}

	render() {
		super.render();
		const {dateOfLastVisit} = this.elements;
        this.dateOfLastVisitField.textContent = `Last visit at ${dateOfLastVisit}`;
		this.cardBlock.append(this.dateOfLastVisitField)
	}

}

/****Класс визита к Терапевту****/
export  class VisitTherapist extends Visit {
	constructor(id, doctor, name, surname, reason, description, importance, age) {
		super(id, doctor, name, surname, reason, description, importance);

		this.ageField = document.createElement("li");

		this.elements.age = age;
	}

	render() {
		super.render();
		const {age} = this.elements;
        this.ageField.textContent = `Age - ${age}`;
		this.cardBlock.append(this.ageField)
	}


}




export  class Modal {
    constructor() {
        this.container = document.getElementById("modalWindow");
        this.header = document.createElement("h3");
        this.form = document.createElement("form");       
        this.nameField = document.createElement("input");
        this.surnameField = document.createElement("input");
        this.reasonField = document.createElement("input");
        this.descriptionField = document.createElement("input");
        this.importanceParagraph = document.createElement("p");
        this.importanceSelect = document.createElement("select");
        this.importanceOptionHigh = document.createElement("option");
        this.importanceOptionNormal = document.createElement("option");
        this.importanceOptionLow = document.createElement("option");
        this.button = document.createElement("button");

        this.header.className = "modal-header";

        //__FORM
        this.form.className = "modal";
        this.form.action = "#";
        this.form.method = "post";
        this.form.style.textAlign = "center";



        //__NAME
        this.nameField.className = "input-modal";
        this.nameField.type = "text";
        this.nameField.name = "name";
        this.nameField.id = "modalName";
        this.nameField.placeholder = "Client's name*";
        //__SURNAME
        this.surnameField.className = "input-modal";
        this.surnameField.type = "text";
        this.surnameField.name = "surname";
        this.surnameField.id = "modalSurname";
        this.surnameField.placeholder = "Client's surname*";
        //__REASON
        this.reasonField.className = "input-modal";
        this.reasonField.type = "text";
        this.reasonField.name = "reason";
        this.reasonField.id = "modalReason";
        this.reasonField.placeholder = "Purpose of the visit";
        //__DESCRIPTION
        this.descriptionField.className = "input-modal";
        this.descriptionField.type = "text";
        this.descriptionField.name = "description";
        this.descriptionField.id = "modalDescription";
        this.descriptionField.placeholder = "Short description";
        //__IMPORTANCE
        this.importanceParagraph.className = "inpit-modal";
        this.importanceParagraph.textContent = "The importance of the visit"; 
        this.importanceSelect.className = "inpit-modal";
        this.importanceSelect.name = "importance";
        this.importanceSelect.id = "modalImportance";
        this.importanceOptionHigh.value = "high";
        this.importanceOptionNormal.value = "normal";
        this.importanceOptionLow.value = "low";
        this.importanceOptionHigh.textContent = "High";
        this.importanceOptionNormal.textContent = "Normal";
        this.importanceOptionLow.textContent = "Low";
        this.importanceOptionNormal.selected = true;
        //__BUTTON
        this.button.className = "submit";
        this.button.id = "renderCardButton";
        this.button.textContent = "Create Card";
    }

    render() {
        this.container.style.display = "flex";
        this.container.style.alignItems = "center";
        this.container.style.justifyContent = "center";

        this.importanceSelect.append(this.importanceOptionHigh, this.importanceOptionNormal, this.importanceOptionLow);

        this.form.append(this.header, this.nameField, this.surnameField);

        this.container.append(this.form);
    }
    
    delete() {
        document.querySelector("form").remove();
        this.container.style.display = "none";
    }
}

export  class modalDentist extends Modal{
    constructor() {
        super();
        this.dateOfLastVisitField = document.createElement("input");

        //__DATEOFLASTVISIT
        this.dateOfLastVisitField.className = ("input-modal dentist-card")
        this.dateOfLastVisitField.type = "date";
        this.dateOfLastVisitField.name = "date";
        this.dateOfLastVisitField.id = "dateOfLastVisit";
        this.form.value = "dentist";

    }

    render() {
        super.render();
        this.header.textContent = "Create a Dentist Card";
        this.form.append(this.reasonField, this.descriptionField, this.importanceParagraph, this.importanceSelect, this.dateOfLastVisitField, this.button);

    }

}

export  class modalCardiologist extends Modal{
    constructor() {
        super();
        this.ageField = document.createElement("input");
        this.pressureField = document.createElement("input");
        this.bmiField = document.createElement("input");
        this.cardioField = document.createElement("input");
        this.form.value = "cardiologist";


        //__AGE
        this.ageField.className = ("input-modal cardiologist-card");
        this.ageField.type = "text";
        this.ageField.name = "age";
        this.ageField.id = "age";
        this.ageField.placeholder = "Client's age*";
        //__PRESSURE
        this.pressureField.className =("input-modal cardiologist-card");
        this.pressureField.type = "text";
        this.pressureField.name = "pressure";
        this.pressureField.id = "normalPressure";
        this.pressureField.placeholder = "Normal pressure*";
        //__BMI
        this.bmiField.className =("input-modal cardiologist-card");
        this.bmiField.type = "text";
        this.bmiField.name = "bmi";
        this.bmiField.id = "bodyMassIndex";
        this.bmiField.placeholder = "Body mass index*";
        //__CARDIO
        this.cardioField.className =("input-modal cardiologist-card");
        this.cardioField.type = "text";
        this.cardioField.name = "desease";
        this.cardioField.id = "cardioDisease";
        this.cardioField.placeholder = "Cardiovascular diseases*";
    }

    render() {
        super.render();
        this.header.textContent = "Create a Cardiologost Card";
        this.form.append(this.ageField, this.reasonField, this.descriptionField, this.importanceParagraph, this.importanceSelect, this.pressureField, this.bmiField, this.cardioField, this.button);
    }

}

export  class modalTherapist extends Modal{
    constructor() {
        super();
        this.ageField = document.createElement("input");
        this.form.value = "therapist";

        //__AGE
        this.ageField.className = ("input-modal cardiologist-card");
        this.ageField.type = "text";
        this.ageField.name = "age";
        this.ageField.id = "age";
        this.ageField.placeholder = "Client's age*";
    }

    render() {
        super.render();
        this.header.textContent = "Create a Therapist Card"
        this.form.append(this.ageField, this.reasonField, this.descriptionField, this.importanceParagraph, this.importanceSelect, this.button);
    }

}





export  class Entry {
    constructor() {
        this.container = document.getElementById("modalWindow");
        this.container.style.display = "block";
        this.form = document.createElement("form");       
        this.email = document.createElement("input");
        this.password = document.createElement("input");
        this.button = document.createElement("button");

        this.form.className = "modal";
        this.form.action = "#";
        this.form.method = "post";

        this.email.className = "input-field";
        this.email.type = "email";
        this.email.id = "emailField";
        this.email.placeholder = "Enter your email..*";

        this.password.className = "input-field";
        this.password.type = "password";
        this.password.id = "passwordField";
        this.password.placeholder = "Enter your password..*";
        
        this.button.className = "submit";
        this.button.id = "loginButton";
        
    }

    render() {
        this.container.style.display = "flex";
        this.container.style.alignItems = "center";
        this.container.style.justifyContent = "center";
        this.form.append(this.email, this.password, this.button);
        this.container.append(this.form);
    }

    delete() {
        document.querySelector("form").remove();
        this.container.style.display = "none";
    }

}

export  class EntryLogIn extends Entry {
    constructor() {
        super();
        this.button.textContent = "Log In"
    }

    render() {
        super.render()
    }
}

export  class EntrySignUp extends Entry {
    constructor() {
        super()
        this.button.textContent = "Sign Up"
    }

    render() {
        super.render()
    }
}

export class Doctor {
    constructor() {
        this.container = document.getElementById("modalWindow");
        this.form = document.createElement("form");
        this.doctorSelect = document.createElement("select");
        this.doctorOptionCardiologist = document.createElement("option");
        this.doctorOptionDentist = document.createElement("option");
        this.doctorOptionTherapist = document.createElement("option");
        this.button = document.createElement("button");

        this.form.className = "modal";
        this.form.action = "#";
        this.form. method = "post";
        this.button.className = "submit modal-button";
        this.button.type = "submit";
        this.button.id = "doctorVisit";

        this.doctorSelect.className = "modal-field";
        this.doctorSelect.name = "doctor";
        this.doctorSelect.id = "doctor";
        this.doctorOptionCardiologist.value = "cardiologist";
        this.doctorOptionDentist.value = "dentist";
        this.doctorOptionTherapist.value = "therapist";
        this.doctorOptionCardiologist.textContent = "Cardiologist";
        this.doctorOptionDentist.textContent = "Dentist";
        this.doctorOptionTherapist.textContent = "Therapist";
        this.doctorOptionDentist.selected = true;
        this.doctorOptionCardiologist.id = "doctorCardiologist";
        this.doctorOptionDentist.id = "doctorDentist";
        this.doctorOptionTherapist.id = "doctorTherapist";

        this.button.className = "submit";
        this.button.id = "createCardButton";
        this.button.textContent = "Create Card";
    }

    render() {
        this.container.style.display = "flex";
        this.container.style.alignItems = "center";
        this.container.style.justifyContent = "center";
        this.doctorSelect.append(this.doctorOptionDentist, this.doctorOptionCardiologist, this.doctorOptionTherapist);
        this.form.append(this.doctorSelect, this.button);
        this.container.append(this.form)
    }

    delete() {
        document.querySelector("form").remove();
        this.container.style.display = "none";
    }
}
