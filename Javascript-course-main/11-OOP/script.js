'use strict';
// const person = function (firstname, birthyear) {
//   this.firstname = firstname;
//   this.birthyear = birthyear;
// };
// const obj1 = new person('jonas,2000');
// console.log(obj1);
// console.log(obj1 instanceof person);

// //prototypes-------we can insert new object through this
// console.log(person.prototype);
// person.prototype.calcage = function () {
//   console.log(2040 - this.birthyear);
// };
// obj1.calcage();

// console.log(obj1.__proto__);
// console.log(obj1.__proto__ === person.prototype);
// console.log(person.prototype.isPrototypeOf(obj1));
// console.log(obj1.hasOwnProperty('firstName'));

// console.log(obj1.__proto__.__proto__);
// const arr=[3,6,4,5,7];
// console.log(arr.__proto__===Array.prototype);

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going to  ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going to  ${this.speed} km/h`);
//   }

//   get speed() {
//     return this.speed / 1.6;
//   }

//   set speed(speed) {
//     return this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('ford', 120);
// console.log(ford.speed);
// ford.accelerate();
// ford.speed = 40;
// console.log(ford.speed);
// ford.brake();

// const obj1 = new car('BMW', 200);
// const obj2 = new car('Alto', 120);
// obj1.accelerate();
// obj1.brake();
// obj1.accelerate();

// obj2.accelerate();

// class Person1{
//     constructor(firstname, birthyear){
//         this.firstname=firstname;
//         this.birthyear=birthyear;
//     }
//     calcage(){
//         console.log(2040-this.birthyear);
//     }
//     greet(){
//         console.log(`Hey ${this.firstname}`);
//     }
// }
// const jessica=new Person1('jessica',2020);
// console.log(jessica);
// jessica.calcage();

// console.log(jessica.__proto__===Person1.prototype);
// jessica.greet();

// const PersonProto = {
//   calcage() {
//     console.log(2040 - this.birthyear);
//   },
//   init(firstname, birthyear) {
//     this.firstname = firstname;
//     this.birthyear = birthyear;
//   }
// };
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthyear = 1992;
// steven.calcage();

// const sarah= Object.create(PersonProto);
// sarah.init('sarah',1990);
// sarah.calcage();
// const Person=function(firstname,birthyear){
//     this.firstname=firstname;
//     this.birthyear=birthyear;
// }

// Person.prototype.calcage = function(){
//     console.log(2040-this.birthyear);
// }

// const student=function(firstname,birthyear,course){
//     Person.call(this,firstname,birthyear);
//     this.course=course;
// }
//  student.prototype=Object.create(Person.prototype);
//  student.prototype.constructor=student;
// student.prototype.introduce = function(){
//     console.log(`My name: ${this.firstname} and i study ${this.course}`);
// }

// const mike= new student('Mike',2020,'computer');
// mike.introduce();
// mike.calcage();
// console.log(mike.__proto__);

//protected property----------------------------------------------------

//  _ used this line-space for that


//for private #
