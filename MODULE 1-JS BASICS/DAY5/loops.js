// // Question 1 : Create resume data in JSON format 
// JSON cannot contain functions like Javascript objects.
let resume2 = {
   "name":"Prabhakar",
   "firstName":"Prabhakar",
   "lastName":"Thangavelu",
   "age":26,
   "email":"sample@gmail.com",
   "phoneNumber":"+91 9********7",
   "address":{
      "door":"26B",
      "street":"Saibaba colony",
      "city":"Coimbatore",
      "state":"TamilNadu",
      "pincode":"641025"
   },
   "qualification":[
      {
         "Certification":"SSC",
         "yearPassed":"2012",
         "percentage":87,
         "board":"Matriculation",
         "institution":"Sri Krishna Matric HSS school"
      },
      
      {
         "Certification":"Diploma",
         "yearPassed":"2012",
         "percentage":87,
         "stream":"Diploma in Mechanical Engineering",
         "institution":"PSG POLYTECH"
      }
   ],
   "languagesKnown":[
      "Tamil",
      "English"
   ],
   "experienceDetails":{
      "experienceYears":8,
      "jobTitle":"Entrepreneur",
      "yearsWorked":"2016 to 2023",
      
      "roles & responsibility":[
       " Machine trading & servicing "
      ]
   },
   "Hobbies":[
      "learning new skills"
   ]
   }
  // Using a for loop
console.log("1. Using for loop");
   let studies = resume2.qualification;
   let json = JSON.stringify(studies)
    console.log(json);
     for(var i = 0; i < json.length; i++) {
       console.log(json[i]);
  } 

  // Using a for...in loop
console.log("2. Using for in loop");
  for (let key in resume2) {
    console.log(key);
  }

  // Using a for...of loop
console.log("3. Using for of loop");
  let data = Object.entries(resume2);
  for (let [key, value] of data) {
    console.log(value);
  }

  // Using Array.forEach() method
console.log("4. Using foreach loop");
  Object.entries(resume2).forEach(([key, value]) => {
    console.log(key + ": " + value);
  });
