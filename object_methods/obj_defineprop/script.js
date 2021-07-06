let student = {
    name : 'Alex',
    id : 123,
    grade : 80,
    age : 51,
    secretAge : 0,
    reexam : function (newGrade) {
        this.grade =  newGrade;
    }

};


Object.defineProperty(student, 'id', {

    writable : false
});

// set - changing the value of the pole
// get = to get the value of the pole

Object.defineProperty(student, 'age', {

    set : function (theValue) {
if (theValue >= 0) {
    this.secretAge = theValue;
}
    },

    get : function () {
return this.secretAge;

    },

      set: function setFirstName() {
                this.firstName = 'Dima';
            }
});

student.id = 234;
console.log(student);

student.age= -10;
console.log(student.age);

student.age = 10;
console.log(student.age);