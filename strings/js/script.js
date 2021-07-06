let str1 = "hello'''''' world";
console.log(str1);
let str2 = 'hello\'\'\'\'\' world';
console.log(str2);
let str3 = "hello\"\"\"\"\n\t\world\u00A9";
console.log(str3);
let str5 = `Hello World`;
console.log(str5);

function show () {

par.innerText = str4;
    // par.innerText = str5;
}




let str = 'Life is beautiful sometimes';
str[0] = 'W';  // Strings are immutable
for (let i = 0; i < str.length; i++) {

    console.log(str.charAt(i));
    console.log(str[i]);
}

for (let theChar of str) { // length of the string

    console.log(theChar);
}

