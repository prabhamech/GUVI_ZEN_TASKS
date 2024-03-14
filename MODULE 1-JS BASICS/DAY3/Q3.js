console.log("To print all countries names, regions, sub-region and populations from restcountries api in the console");
//Question 3 : Use the same rest countries and print all countries names, regions, sub-region and populations

//to load result in node js uncomment below require method & then run in nodejs
// require the library xhr2
//let XMLHttpRequest = require('xhr2');

//to load result in browser excute without require method to aviod "Q3.js:3  Uncaught ReferenceError: require is not defined" on browsers

//let xhr = new XMLHttpRequest();
console.log("all countries names, regions, sub-region and populations");
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function (){
    let countries = JSON.parse(xhr.responseText)
    
    for(let i = 0 ; i < countries.length ; i++){
       console.log(countries[i].name.common);   
       console.log(countries[i].region); 
       console.log(countries[i].subregion);  
       console.log(countries[i].population); 
}
}
xhr.send()