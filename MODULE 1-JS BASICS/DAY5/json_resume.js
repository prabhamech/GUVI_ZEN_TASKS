let resume = {
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

    // to see resume as object in window 
 console.log(resume)

    // to see resume as JSON data
let jsonn=(JSON.stringify(resume));
console.log(jsonn)
