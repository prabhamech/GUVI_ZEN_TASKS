//QUESTION 3 : Print the following details name, capital, flag using forEach function.

//to load result in node js uncomment below require method & then run in nodejs.
// require the library xhr2
//let XMLHttpRequest = require('xhr2');

//to load result in browser excute without require method to aviod "Q3.js:3  Uncaught ReferenceError: require is not defined" on browsers

let xhr = new XMLHttpRequest();
console.log("Printing name, capital, flag using forEach function");
xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function (){
    let countries = JSON.parse(xhr.responseText)
    countries.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })
}
xhr.send(); 