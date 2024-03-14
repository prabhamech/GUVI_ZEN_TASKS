//QUESTION 1: Create a `person` class to hold all the objects
class Person {
  constructor(personName,age,email,mobileNo) {
    this.personName = personName;
    this.age = age;
    this.email = email;
    this.mobileNo = mobileNo;
  }
  displayPersonalInfo() {
    console.log(
      ` PERSONAL DETAILS
      Name => ${this.personName},
      Age => ${this.age},
      email => ${this.email},
      Mobile Number => ${this.mobileNo}.`
    );
  }
}

const person1 = new Person("Mani","24","mani@gmail.com","9865471234");
const person2 = new Person("Anbu","24","anbu@gmail.com","9845628234");

console.log(person1);
console.log(person2);




//QUESTION 2 : write a class to calculate the uber price
class UberPrice {
    constructor(distance, duration, baseFare, costPerMile, costPerMinute) {
        this.distance = distance;
        this.duration = duration;
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
      }        
totalPrice() {
      return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
    }
  }

let result = new UberPrice(26, 5, 75, 8, 2);
console.log("New calculated Uber Price");
console.log(result.totalPrice());






