/*

Target:

1. Create a check of your age in order to have an access to the site.
2. If age is less than 18 = forbidden.
3. If age range from 18 to 22 = ask if the customer is absolutely sure he would like to join the site.
4. Here is the case: If the customer press "Ok" - welcome message appear. 
4.1 If he press "Cancel" - forbidden message.
5. If the age is more than 22 - welcome message.

Complicated task: 

1. Check if "age" isNaN. | Show error message and type correct age. 
(Also the previous typed message in the prompt window should appear as well)

2. Check if "name" is not empty. | Show corresponded message and try to type again (if empty)
(Also the previous typed message in the prompt window should appear as well)
*/



let name = prompt('Please enter your name', '');


while ((Number(name)) || (name.length === 0)) {
    name = prompt( `Please enter correct name.` );
}

let age = Number(prompt('Please enter your age.', ''));

while ((isNaN(age)) || (age === 0)) {
    age = Number(prompt('Please enter correct number.'));
}

if ((age >= 18) && (age <=22)) {
    if (confirm('Would you like to continue?')) {
        alert(`Welcome, ${name}`);
    } else {
        alert(`You are not allowed to visit this site!`);
    }
}
if (age < 18){
    alert(`You are not allowed to visit this site!`);


}

if (age > 22) {

    alert(`Welcome, ${name}`);
}
