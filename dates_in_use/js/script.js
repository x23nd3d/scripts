let theDay = new Date(10000);
theDay.setFullYear(2025);
theDay.setMonth(4);
theDay.setDate(13);
    console.log(theDay);




let starik = new Date(10000);
starik.setFullYear(1993);
starik.setMonth(0);
starik.setDate(6);
console.log(starik);

let now = new Date();
let ageMillis = now - starik;



let years = ageMillis/(1000*3600*365*24);
console.log(years)