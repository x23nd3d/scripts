let name = prompt(`What is your name?`, ``);
while (!isNaN(+name) || (name.length === 0)) {

    name = prompt("What is your name?");
}
let age = Number(prompt(`How old are you?`, ``));
while (isNaN(age)) {

    age = prompt("How old are you?");
}
if (age < 18) {
    alert(`You are not allowed to visit this website`);
} else if (age > 22) {
    alert(`Welcome, ${name}`);
} else if ((age >= 18) && (age <= 22)) {
    if (confirm(`Are you sure you want to continue?`)) {
        alert(`Welcome, ${name}`);
    } else {
        alert(`You are not allowed to visit this site!`);
    }
}


