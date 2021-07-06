// Create form to calculate the percent value of a number.

/* 
1. Create button in HTML.
2. Create paragraph in HTML.
3. Create 4 var values, 1 - for currency, 2 - for number, 3 - for percent, 4 - for result.
4. Show the result on display.
5. Change the paragraph => result.
*/


/* 
function calcValue() {

    var 
     
       numValue = prompt('Enter your number'), 
       numCurrency = ' UAH ', 
       numPercent = prompt('Enter your percent value'), 

       result = numValue * numPercent / 100;

       numValue += numCurrency, 
       numPercent += '%',

ShowOnDocument = document.getElementsByTagName ('p')[0];


ShowResultOnDisplay = 'From' + ' ' + numValue + ' ' + numPercent + ' ' + '=' + ' ' + result + ' ' + numCurrency;

ShowOnDocument.innerHTML = (ShowResultOnDisplay),


       alert(ShowResultOnDisplay); 
}
*/

// function calc(num, num2, choose) {


// var num = prompt('Enter your number'), 
//     value = prompt('Enter what you would like to do?' + ' ' + '+' + ' ' +'or' + ' ' + '-'),
//     num2 = prompt('Enter your number 2');


    

// switch (choose)  {
//     case '+':
//     return num + num2;
  


//    case '-':
//    return num - num2;




// }
// }
// console.log (num + num2);



//      if (valuePlus == '+') {

//      ShowResultOnDisplay = 'From' + ' ' + num + ' ' + '+' + num2 + ' ' + '=' + ' ' + result;

//         alert(ShowResultOnDisplay)
        
//     }

//     else if (valueMinus == '-') {

    

//      ShowResultOnDisplay = 'From' + ' ' + num + ' ' + '-' + num2 + ' ' + '=' + ' ' + result;
//         alert(ShowResultOnDisplay)
        
//     }
// }


// function calcNew() {

//     var 
        
//         numFirst = prompt('Enter your number'),
//         numCurrency = ' UAH ',
//         numPercent = prompt('Enter your percent value'),
//         result = numFirst * numPercent / 100;

//         numFirst += numCurrency; 
//         numPercent += '%';

        

//         showResult = 'From' + ' ' + numFirst + ' ' + numPercent + ' ' + ' = ' + result + ' ' + numCurrency;

//         showOnDisplay = document.getElementsByTagName('p')[0]; 

//         showOnDisplay.innerHTML = (showResult),

//         alert(showResult);
// }
















// function calcNew () {

//     var number = prompt('Enter your value'), 
//         currency = ' UAH ', 
//         percent = prompt('Enter the percent value'),

//         result = number * percent / 100;

//         number += currency, 
//         percent += '%';

//         display = 'From' + ' ' + number + ' ' + percent + ' ' + '=' + ' ' + result + ' ' + currency; 

//         showHTML = document.getElementsByTagName ('p')[0];
//         showHTML.innerHTML = (display)

//         alert(display);
// }


function value2 () {

    var stayQuestion = alert('Would you like to calculate the price staying in Kiev or Vinnytsia?'),
        stayCount = prompt ('Would you like to stay in Kiev or Vinnytsia?'),
        stayWhere = prompt ('Would you like to stay in hotel or apartments?'),
        stayDuration = prompt ('How many days would you like to stay there?');
 
        kaPrice = 900 * stayDuration;
        khPrice =  1100 * stayDuration;
        kfuelPrice = 600;
        afoodPrice = 500 * stayDuration;
        hfoodPrice = 900 * stayDuration;


        vaPrice = 600 * stayDuration;
        vhPrice =  620 * stayDuration;
        vfuelPrice = 2100;
        vafoodPrice = 400 * stayDuration;
        vhfoodPrice = 600 * stayDuration;

        currency = ' UAH ';
        br = '<br>';
 
        kaPrice += currency;
        khPrice += currency;
        kfuelPrice += currency;
        afoodPrice += currency;
        hfoodPrice += currency;
 
        showDoc = document.getElementsByTagName ('p')[0];
 


        if(stayCount == 'Kiev'){

      if(stayWhere == 'Hotel'){
            resultHotel = 'Your stay in Kiev hotel will cost you:'  + ' ' + khPrice;
            resultHotel1 = 'The fuel cost will be approximately:' + ' ' + kfuelPrice;
            resultHotel2 = 'Food will cost you:' + ' ' + hfoodPrice;
            alert(resultHotel);
            alert(resultHotel1);
            alert(resultHotel2);
            showDoc.innerHTML = (resultHotel + '<br>' + resultHotel1 + '<br>' + resultHotel2);
 
        }
 
 
 
        else if(stayWhere == 'Apartments'){
            resultApart = 'Your stay in Kiev apartments will cost you:'  + ' ' + kaPrice;
            resultApart1 = 'The fuel cost will be approximately:' + ' ' + kfuelPrice;
            resultApart2 = 'Food will cost you:' + ' ' + afoodPrice;
            alert(resultApart);
            alert(resultApart1);
            alert(resultApart2);
            showDoc.innerHTML = (resultApart + '<br>' + resultApart1 + '<br>' + resultApart2);
 
 
            }
            else {
                text = "Waaay off..";
            }
        }


        if(stayCount == 'Vinnytsia'){

            if(stayWhere == 'Hotel'){
                  resultHotel = 'Your stay in Vinnytsia hotel will cost you:'  + ' ' + vhPrice;
                  resultHotel1 = 'The fuel cost will be approximately:' + ' ' + vfuelPrice;
                  resultHotel2 = 'Food will cost you:' + ' ' + vhfoodPrice;
                  alert(resultHotel);
                  alert(resultHotel1);
                  alert(resultHotel2);
                  showDoc.innerHTML = (resultHotel + '<br>' + resultHotel1 + '<br>' + resultHotel2);
       
              }
       
       
       
              else if(stayWhere == 'Apartments'){
                  resultApart = 'Your stay in Vinnytsia apartments will cost you:'  + ' ' + vaPrice;
                  resultApart1 = 'The fuel cost will be approximately:' + ' ' + vfuelPrice;
                  resultApart2 = 'Food will cost you:' + ' ' + vafoodPrice;
                  alert(resultApart);
                  alert(resultApart1);
                  alert(resultApart2);
                  showDoc.innerHTML = (resultApart + '<br>' + resultApart1 + '<br>' + resultApart2);
       
       
                  }
                  else {
                      text = "Waaay off..";
                  }
              }
 
 
 
 
 
    }