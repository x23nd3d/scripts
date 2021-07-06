function createNewUser(firstName, lastName, birthday) {
    let newUser = {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        getLogin: (function () {
            let user = this.firstName[0] + this.lastName;
            return user.toLowerCase();
        }),
        getAge: (function () {
            let user = new Date(birthday);
            let now = new Date();
            let ageMillis = now - user;
            let age = ageMillis / (1000 * 3600 * 365 * 24);
            return Math.floor(age);
        }),
        getPassword: (function () {
            let password = this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthday.getFullYear();
            return password;
        })
    };
    return newUser;
}

let name = prompt(`Please enter your Name?`, ``);
let secondName = prompt(`Please enter your Second Name?`, ``);
let age = prompt(`Please enter a your year,  a format dd.mm.yyyy`,'dd.mm.yyyy').split('.');
let date = new Date(Number(age[2]), Number(age[1]) - 1, Number(age[0]));

//------------------------------------------------
let vasya = createNewUser(name, secondName, date);
console.log(vasya.getLogin());
console.log(vasya.getPassword());
console.log(vasya.getAge());