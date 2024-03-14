console.log("IIFE FUNCTION");
//QUESTION : 1) Do the below programs in anonymous function

//a.Print odd numbers in an array
console.log("'Odd numbers in an array'");
(()=>{
    let f = [1,2,95,22,25,3,5,8,7,9,33,71,111,13];
    let odds = f.filter((num) => num % 2 === 1);
    console.log(odds); 
})()

//b)Convert all the strings to title caps in a string array
console.log("'strings to title caps in a string array'");
(()=>{
    let g = ["hello world , how are you?"]
    let str=g.toString();
    console.log(str.toUpperCase());
})()


//c)Sum of all numbers in an array
console.log("'Sum of all numbers'");
let ar=[5,6,36,9,52];
(()=>{
    let Sum=0;
        for (let i=0;i<ar.length;i++){
        Sum+=ar[i];}
        console.log(Sum);
})()


//d)Return all the prime numbers in an array
console.log("'Prime numbers in an array'");
let numberss = [1,2,3,5,7,9,11,1,4,6,41];
(()=>{
    console.log(numberss.filter((num) => {
        for(let i = 2; i < num; i++)
            if(num % i === 0) return false;
        return num > 1;
    }));
})()


//e)Return all the palindromes in an array
console.log("'Palindromes in an array'");
(()=>{
    var a=["MoM","NaN","java"]
    for(i=0;i<a.length;i++)
    {
        let b=a[i].split("").reverse().join("")
        if(a[i]==b)
        console.log(a[i])
    }})()


//f)Return median of two sorted arrays of the same size.
console.log("'Medians of two sorted arrays'");
let z=[55,89,77,54,88];
let y=[16,32,88,76,91];
(()=>{
let median = (z, y) => {
    let c = [...z, ...y].sort((z,y) =>z-y);
    const half = c.length / 2 | 0;
    if (c.length % 2) return c[half];
    return (c[half] + c[half-1])/2;
}
    console.log(median(z,y));
})()


//g)Remove duplicates from an array
console.log("'Remove duplicates from an array'");
(()=>{
    let a=[1,10,25,38,77,25,66,78,36,1,88,77];
    let Duplicate = [...new Set(a)];
    console.log(Duplicate);
})();

//h)Rotate an array by k times
console.log("'Rotate an array by k times'");
(()=>{
let nums=[2,7,4,6,8,55,61,73,54,94,44];
  let k=[2];
let rotateArray1 =(nums,k)=>{
    for (let i=0;i<k;i++) {
        nums.unshift(nums.pop());
    }
    return nums;
  }
  console.log(rotateArray1(nums,k));
})();
  