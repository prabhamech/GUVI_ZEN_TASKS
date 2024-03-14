//QUESTION 4. Print the total population of countries using reduce function

//to load result in node js uncomment below require method & then run in nodejs.
// require the library xhr2
//let XMLHttpRequest = require('xhr2');

//to load result in browser excute without require method to aviod "Q3.js:3  Uncaught ReferenceError: require is not defined" on browsers

let xhr = new XMLHttpRequest();
console.log("total population of countries using reduce function");
xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function (){
    let countries = JSON.parse(xhr.responseText)
    console.log(countries.reduce((total, country) => total + country.population, 0));
    }
    

xhr.send();   