console.log("ARROW FUNCTION");
//2)Do the below programs in arrow functions.
//a)Print odd numbers in an array
console.log("'Odd numbers in an array'");
let x=[1,2,3,4,5,6,7,12,21,36,81]
let odd=(x)=>{
  let odds = x.filter((num) => num % 2 === 1);
  return (odds);;
}
console.log(odd(x));


//b)Convert all the strings to title caps in a string array
console.log("'strings to title caps in a string array'")
    let arr3=["hello world", "are you there?", "How old are you?"];
    let str_arr = arr3.toString();
    let res= (str_arr)=>{
        return str_arr.toUpperCase()
    }
    console.log(res(str_arr));

//c)Sum of all numbers in an array
console.log("'Sum of all numbers in an array'");
let c=[1,2,3,4,5,6,7,8,9,63];
let sum=0;
let result=(c)=>{
   for(let i=0; i<c.length; i++)   {
     sum+=c[i];
   }
   return sum;
}
console.log(result(c));


//d)Return all the prime numbers in an array
console.log("'Prime numbers in an array'");
let arra = [1,2,3,5,7,9,11,1,4,6,41];
let prime = arra.filter((num) => {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
});
console.log(prime);

//e)Return all the palindromes in an array
console.log("'Palindromes in an array'");
let arr2 = ["hello", "level", "world", "racecar"];
let palindromes = arr2.filter(str => {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
});
console.log(palindromes);