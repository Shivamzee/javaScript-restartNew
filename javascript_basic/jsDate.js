"use strict"

console.log('this is js DateFlie ');

let getTimeToDate = new Date()
//console.log(getTimeToDate);
//console.log(getTimeToDate.toString());
console.log(getTimeToDate.toDateString());
// console.log(getTimeToDate.toTimeString());
//console.log(getTimeToDate.toLocaleString());
// console.log(getTimeToDate.toLocaleTimeString());




// console.log(getTimeToDate.toISOString());
// console.log(getTimeToDate.toJSON());


// console.log(getTimeToDate);
// console.log(getTimeToDate);




// let getTodayName = new Date().toLocaleString()
// console.log(getTodayName);


// Q-Get specific day name.
// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// const gdate = new Date();
// let dayName = weekday[gdate.getDay()]
// console.log(dayName);

function getDayName(date = new Date(), locale = 'en-IN') {
    return date.toLocaleDateString(locale, {weekday: 'long'});
  }
  
  //  Get name of current day
  console.log(getDayName()); //  Tuesday
  
  //  Get day name for specific date
  console.log(getDayName(new Date('2022-01-29'))); //  Saturday
  
  