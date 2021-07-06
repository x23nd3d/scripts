function createNewUser(firstName, lastName) {
    let newUser = {
        firstName: firstName,
        lastName: lastName,
        getLogin: (function () {
            let user = this.firstName[0] + this.lastName;
            return user.toLowerCase();
        })
    };
    return newUser;
}

let name = prompt(`Please enter your Name?`, ``);
let secondName = prompt(`Please enter your Second Name?`, ``);

let vasya = createNewUser(name, secondName);
console.log(vasya.getLogin());

//
// function NewUser(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
//
// function createNewUser() {
//     let name = prompt(`Please enter First Name?`, ``);
//     let secondName = prompt(`Please enter Last Name`, ``);
//     return new NewUser(name, secondName);
// }
//
// let username = createNewUser();
//
// Object.defineProperty(username, "getLogin", {
//     get: function () {
//         return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
//     }
// });
//
// console.log(username.getLogin);
//
