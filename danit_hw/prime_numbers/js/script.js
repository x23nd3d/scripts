let n = Number(prompt('Enter the number 1', '')); 

while (!Number.isInteger(n) || n < 0 || !n) {
    n = Number(prompt('Enter correct number 1', ''))
}

let r = Number(prompt('Enter the number 2', '')); 

while (!r || !Number.isInteger(r) || r < 0 || r < n) {
    r = Number(prompt('Enter correct number 2', ''))
}

    for (let i = n; i <= r; i++) { 
  let y = 5;

    if (i % y === 0) {
 console.log('result=',i);

    }

    if (i % y >0) {
        console.log('Sorry, no more numbers');

    }
    
    }




