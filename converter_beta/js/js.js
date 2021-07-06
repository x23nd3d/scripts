// Create 3 calculations in order to convert the value from UAH to USD, RUB or GBR.
// Show the result using "alert" and ShowOnDisplay in order to substitute the value on the screen instead of "<p>" paragraph.




function convertValue() {

    

let askValue = Number(prompt('Please type your value to convert.'));


if ((isNaN(askValue)) || (askValue.length === 0)) {

    askValue = Number(prompt('Please type a correct value.'));
}
else {

alert('Number is correct.')
}

    askcurrencyFrom = prompt('Please select a proper currency 1: UAH, USD, RUB.');
    



    askcurrencyTo = prompt('Please select the proper currency 2: UAH, USD, RUB.'),

    UAH = ' UAH ',
    RUB = ' RUB ',
    USD = ' USD ',

    showResult = document.getElementsByTagName ('p')[0];



    if ((askcurrencyFrom.toUpperCase() === 'RUB') && (askcurrencyTo.toUpperCase() === 'UAH')) {
    
        calculateRUB = Math.round(askValue / 0.40);
        alert('From' + ' ' + askValue  + RUB + ' ' + 'result will be' + ' ' + calculateRUB + UAH);
        showResult.innerHTML = ('From' + ' ' + askValue  + RUB + 'result will be' + ' ' + calculateRUB + UAH);
    }

    else if ((askcurrencyFrom.toUpperCase() === 'UAH') && (askcurrencyTo.toUpperCase() === 'RUB')) {
    
        calculateUAH = Math.round(askValue * 0.40);
        alert('From' + ' ' + askValue  + UAH + ' ' + 'result will be' + ' ' + calculateUAH + RUB);
        showResult.innerHTML = ('From' + ' ' + askValue  + UAH + 'result will be' + ' ' + calculateUAH + RUB);
    }

    else if ((askcurrencyFrom.toUpperCase() === 'RUB') && (askcurrencyTo.toUpperCase() === 'USD')) {
    
        calculateUSDRUB = Math.round(askValue * 27.62);
        alert('From' + ' ' + askValue  + RUB + ' ' + 'result will be' + ' ' + calculateUSDRUB + USD);
        showResult.innerHTML = ('From' + ' ' + askValue  + RUB + 'result will be' + ' ' + calculateUSDRUB + USD);
    }

    else if ((askcurrencyFrom.toUpperCase() === 'USD') && (askcurrencyTo.toUpperCase() === 'RUB')) {
    
        calculateRUBUSD = Math.round(askValue * 27.62);
        alert('From' + ' ' + askValue  + USD + ' ' + 'result will be' + ' ' + calculateRUBUSD + RUB);
        showResult.innerHTML = ('From' + ' ' + askValue  + USD + 'result will be' + ' ' + calculateRUBUSD + RUB);
    }

    else if ((askcurrencyFrom.toUpperCase() === 'UAH') && (askcurrencyTo.toUpperCase() === 'USD')) {
    
        calculateUAHUSD = Math.round(askValue * 27.62);
        alert('From' + ' ' + askValue  + UAH + ' ' + 'result will be' + ' ' + calculateUAHUSD + USD);
        showResult.innerHTML = ('From' + ' ' + askValue  + UAH + 'result will be' + ' ' + calculateUAHUSD + USD);
    }

    else if ((askcurrencyFrom.toUpperCase() === 'USD') && (askcurrencyTo.toUpperCase() === 'UAH')) {
    
        calculateUSDUAH = Math.round(askValue * 27.62);
        alert('From' + ' ' + askValue  + USD + ' ' + 'result will be' + ' ' + calculateUSDUAH + UAH);
        showResult.innerHTML = ('From' + ' ' + askValue  + USD + 'result will be' + ' ' + calculateUSDUAH + UAH);
    }
    else {

        alert('Fuck you!');

    }
    

    if (confirm('Would you like to continue? Press Yes or No.')){
        alert(`Sure, let's do it again.`)
    return convertValue();
    
    }

    else {

        alert('Fuck you!');
    }

}