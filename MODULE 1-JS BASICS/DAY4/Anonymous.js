console.log("ANONYMOUS FUNCTION");
//QUESTION : 1)Do the below programs in IIFE function
//a)Print odd numbers in an array
console.log("Odd numbers in an array");
let  a= [1,2,3,4,5,6,7,8,9,10,131]
let oddsFunc=function (){
    let odds = a.filter((Element) => Element % 2 === 1);
    console.log(odds);
}
oddsFunc();


// b)Convert all the strings to title caps in a string array
console.log("strings to title caps in a string array");
let arr=["hello world"];
titlecaps=function (){
let str_arr = arr.toString();
let res = str_arr.toUpperCase();
 console.log(res);
}
titlecaps();




//c)Sum of all numbers in an array
console.log("Sum of all numbers");
let b=[5,6,36,9,52];
function SumFunc() {
	let Sum=0;
    for (let i=0;i<b.length;i++){
    Sum+=b[i];}
    console.log(Sum);
}
SumFunc();

//d)Return all the prime numbers in an array
console.log("Prime numbers in an array");
let numbers = [1,2,66,3,4,41,5,6,7,25,41,77,17];
function PrimeFunc(){
    console.log(numbers.filter((num) => {
        for(let i = 2; i < num; i++)
            if(num % i === 0) return false;
        return num > 1;
    }));
}
PrimeFunc();



//e)Return all the palindromes in an array
console.log("Palindromes in an array");
function PalindromFunc() 
{
    var a=["MoM","NaN","java"]
    for(i=0;i<a.length;i++)
    {
        let b=a[i].split("").reverse().join("")
        if(a[i]==b)
        console.log(a[i])
    }
}
PalindromFunc() 

//f)Return median of two sorted arrays of the same size.
console.log("medians of two sorted arrays");
function MedianFunc() 
{
let a=[55,99,77,54,88];
let b=[16,32,88,46,91];

let median = (a, b) => {
    let c = [...a, ...b].sort((a,b) =>a-b);
    const half = c.length / 2 | 0;
    if (c.length % 2) return c[half];
    return (c[half] + c[half-1])/2;
}
    console.log(median(a,b));
}

MedianFunc();


//g)Remove duplicates from an array
console.log("Remove duplicates from an array");
function DupFunc(){
    let a=[1,10,25,38,77,25,66,78,36,1,88,77];
    let Duplicate = [...new Set(a)];
    console.log(Duplicate);
}
DupFunc();


//h)Rotate an array by k times
console.log("Rotate an array by k times");
function RotFunc()
{
let nums=[2,7,4,6,8,55,61,73,54,94,44];
  let k=[2];
let rotateArray1 =(nums,k)=>{
    for (let i=0;i<k;i++) {
        nums.unshift(nums.pop());
    }
    return nums;
  }
  console.log(rotateArray1(nums,k));
}
RotFunc();