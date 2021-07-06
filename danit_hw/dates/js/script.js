function CreateNewUser() {

  this.firstName = prompt('Please enter your first name.', '');

  Object.defineProperty(this, 'firstName', {
    writable: false
  });
 
 
//  Создаю новую функцию переприсывивания и сперва разрешаю свойству firstName быть перезаписанным.
  this.setFirstName = function (newName) {

    Object.defineProperty(this, 'firstName', {
      writable: true
    });
 
 
 this.firstName = newName;

 // Указываю, что больше менять имя объекта напрямую нельзя.
 Object.defineProperty(this, 'firstName', {
  writable: false
 });

 return newName;
  };


  this.lastName = prompt('Please enter your last name.', '');

  Object.defineProperty(this, 'lastName', {
    writable: false
  });
 
 
//  Создаю новую функцию переприсывивания и сперва разрешаю свойству firstName быть перезаписанным.
  this.setLastName = function (newName) {

    Object.defineProperty(this, 'lastName', {
      writable: true
    });
 
 
 this.lastName = newName;

 // Указываю, что больше менять имя объекта напрямую нельзя.
 Object.defineProperty(this, 'lastName', {
  writable: false
 });

 return newName;
  };

  this.getLogin = function () {
      return (this.firstName[0] + this.lastName).toLowerCase();
  };

  let askUserBirthdate = prompt('Please enter your birthday in the format of: dd.mm.yyyy.', 'dd.mm.yyyy').split('.');
  this.birthday = new Date(+askUserBirthdate[2], +askUserBirthdate[1] - 1, +askUserBirthdate[0]);

  this.getAge = function () {
      let now = new Date();
      let userAge = (now.getFullYear() - this.birthday.getFullYear());
      if (now.getMonth() < this.birthday.getMonth() || (now.getMonth() === this.birthday.getMonth() && now.getDate() < this.birthday.getDate())) {
          --userAge;
      }
      return userAge;
  };

  this.getPassword = function () {
      return (this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthday.getFullYear());  
  };



}




let newUser = new CreateNewUser();

console.log(`Your name is: ${newUser.firstName}\nYour surname is: ${newUser.lastName}`);
console.log(`In order to change your name, please use this command: newUser.setFirstName('new_name').\nThe same for the last name: newUser.setLastName('new_name').`);
console.log(`Your age is: ${newUser.getAge()}`);
console.log(`Your password is: ${newUser.getPassword()}`);
console.log(`\nSystem notification:\nWelcome back, ${newUser.getLogin()}`);
