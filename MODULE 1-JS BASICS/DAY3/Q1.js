console.log("comparing 2 JSON object whether equal or not")
// Q1
//Javascript Object
let obj1={name:"Person1",age:5};
let obj2={age:5,name:"Person1"};

//comparing 2 JSON object whether equal or not
console.log(JSON.stringify(obj2)===JSON.stringify(obj2));