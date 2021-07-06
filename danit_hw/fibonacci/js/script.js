let num0 = 0,
    num1 = 1;
let n = +prompt('Please enter n-value', '');

if (n > 0) {

function fibonachi(num0, num1, n) {

   if (n == 1) {
       return num0;
   } else if (n == 2) {
       return num1;
   }

   let result = 0;

   for (let i = 3; i <= n; i++) {
       result = num0 + num1;
       num0 = num1;
       num1 = result;

   }
   return result;
        }

    console.log(`The result is: ${fibonachi(num0, num1, n)}`);

            }

			
			// For -values
   if (n <= 0) {

    let numNull = 0,
    numMinus = -1;

    function fibonachiMin(numNull, numMinus, n) {

        if (n == -1) {
            return numNull;
        } else if (n == -2) {
            return numMinus;
        }

        let result = 0;
     
        for (let i = -2; i >= n; i--) {
            result = numNull + numMinus;
            numNull = numMinus;
            numMinus = result;
        }
        return result;
        }
     console.log(`The result is: ${fibonachiMin(numNull, numMinus, n)}`);
            }
    


 
 
