function autoFillIn() {

const array = [
    "Afghanistan",
    "Albania",
    "Andorra",
    "Angola",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "Indonesia",
    "Ireland {Republic}",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea North",
    "Korea South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar, {Burma}",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "St Kitts & Nevis",
    "St Lucia",
    "Saint Vincent & the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome & Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];

const list = array.map(item => item + '' + `\r\n`)

function fillInInputFields(input, value) {

    const getInput = input;
    const doEvent = new Event('input', { bubbles: true })

    const previousValue = getInput.value


    getInput.value = value;
    setTimeout(function() {
        getInput._valueTracker.setValue(previousValue)
    }, 100)
    setTimeout(function() {
        getInput.dispatchEvent(doEvent)
    }, 500)

}





// THIS SHOULD BE COMPLETED ON OVERVIEW PAGE

setTimeout(function() {
    document.querySelectorAll('material-ripple')[22].click() // click NEW CAMPAIGN
}, 100)
setTimeout(function() {
    document.querySelectorAll('.card.card--secondary.goal-card')[5].click(); // select "App Promotion"
}, 900)
setTimeout(function() {
    document.querySelectorAll('.card-wrapper ')[7].click() // select "App" in the suggestion below
}, 1500)
setTimeout(function() {
    document.querySelectorAll('.icon-container')[0].click(); // select "Adnroid" in an application list
}, 2900)
setTimeout(function() {
    fillInInputFields(document.querySelectorAll('input')[1], 'Tunnel light'); // find Application name in the input search
}, 3600)
setTimeout(function() {
    document.querySelectorAll('.app-info')[0].click() // select on necessary application on the list
}, 5700)
setTimeout(function() {
    document.querySelectorAll('.btn.btn-yes')[0].click(); // click continue button
}, 6200)
setTimeout(function() {
    fillInInputFields(document.querySelectorAll('input.input')[1], 'Tunel_Android_Andrew_ww_0.02'); // fill in the Aplication name
}, 7700)
setTimeout(function() {
    fillInInputFields(document.querySelectorAll('input.input')[3], 1000); // select Budget price
}, 8600)
setTimeout(function() {
    document.querySelectorAll('.radio.themeable')[2].click(); // click on "Enter another location" in the countries list
}, 9000)
setTimeout(function() {
    document.querySelectorAll('.advanced.dialog-search-button')[0].click(); // click on "Advanced search" button
}, 9800)
setTimeout(function() {
    document.querySelectorAll('.bulk-locations-checkbox')[0].click() // click on "Add locations in bulk" checkbox
}, 10000)
setTimeout(function() {
    fillInInputFields(document.querySelectorAll('textarea')[0], list.join('')); // fill in the list of countries
}, 11000);
setTimeout(function() {
    document.querySelectorAll('.search-button')[0].click(); // click on "Search" buttob
}, 12000)
setTimeout(function() {
    document.querySelectorAll('.add-all')[0].click() // click on "Target all" button
}, 16000)
setTimeout(function() {
    document.querySelectorAll('.btn.btn-yes')[3].click() // click on "Save" button
}, 16800)


setTimeout(function() {

    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', {
        method: 'GET',
    }).then(res => res.json())
        .then( body => {

            const findRate =  body.filter(item => {
                return item.cc === 'USD'
            });
            const data = +findRate[0].rate.toFixed(2);

            const percentage = data / 100 * 0.02;
            const value = percentage.toPrecision(2) / 0.01;

            fillInInputFields(document.querySelectorAll('input.input')[5], value); // fill in biding price

        })


}, 17500)


}

autoFillIn();

















