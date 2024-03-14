//QUESTION-2: Get all the countries with population of less than 2 lacs using Filter function

//to load result in node js uncomment below require method & then run in nodejs.
// require the library xhr2
//let XMLHttpRequest = require('xhr2');

//to load result in browser excute without require method to aviod "Q3.js:3  Uncaught ReferenceError: require is not defined" on browsers

let xhr = new XMLHttpRequest();
console.log("countries with population of less than 2 lacs using Filter function");
xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function (){
    let countries = JSON.parse(xhr.responseText)
    let populate=countries.filter((element)=>{
        return element.population<200000;
    })
    console.log(populate);
}
xhr.send();