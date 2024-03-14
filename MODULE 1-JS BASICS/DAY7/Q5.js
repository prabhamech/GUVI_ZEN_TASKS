 
//QUESTION 5: Print the country which use US Dollars as currency.

//to load result in node js uncomment below require method & then run in nodejs.
// require the library xhr2
//let XMLHttpRequest = require('xhr2');

//to load result in browser excute without require method to aviod "Q3.js:3  Uncaught ReferenceError: require is not defined" on browsers

let xhr = new XMLHttpRequest();
console.log("Print the country which use US Dollars as currency")
xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function (){
    let countries = JSON.parse(xhr.responseText)
    console.log("total countries")
    let group = countries.filter((dummy) => (dummy.currencies !== undefined))
    console.log(group.length)
    let usdgroup = group.filter((countries) =>  {
    for (let key in countries.currencies) {
        if(countries.currencies[key].name === "United States dollar"){
      return countries
      }
    }
  })
    console.log("no.of countries uses USD")
    console.log(usdgroup)
    }
  

xhr.send();     