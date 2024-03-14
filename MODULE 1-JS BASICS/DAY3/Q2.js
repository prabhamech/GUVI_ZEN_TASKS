console.log("To print the flags from restcountries api in the console")
//Use the rest countries "API URL" --> https://restcountries.com/v3.1/all and display all the countries flags in the console

//to load result in node js uncomment below require method & then run in nodejs.
// require the library xhr2
//let XMLHttpRequest = require('xhr2');

//to load result in browser excute without require method to aviod "Q3.js:3  Uncaught ReferenceError: require is not defined" on browsers

let xhr = new XMLHttpRequest();
console.log("all the countries flags");
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
let countries = JSON.parse(xhr.responseText)
for(let i = 0 ; i < countries.length ; i++){
    console.log(countries[i].flags.svg); 
}
};
xhr.send();