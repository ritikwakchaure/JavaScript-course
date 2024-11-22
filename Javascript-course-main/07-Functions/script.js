'use strict';
// const bookings = [];
// const createbooking = function (flightNum, numPassengers = 1, price = 177) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createbooking('LH123');
//cannot skip paramter when calling fun

// const flight = 'LH123';
// const omkar = {
//   name: 'omkar wak',
//   passport: 123456,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LG23';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 123456) {
//     alert('checked in');
//   } else {
//     alert('wrong passport');
//   }
// };
// checkIn(flight, omkar);
// console.log(flight);
// console.log(omkar);

// const flightNum = flight;
// const passenger = omkar;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000);
// };
// newPassport(omkar);
// checkIn(flight, omkar);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstword = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher-order-function

// const transformer = function (str, fn) {
//   console.log(`Original string : ${str}`);
//   console.log(`Transformed string : ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('Javascript is the best !', upperFirstword);
// transformer('Javascript is the best!', oneWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey');
// greeterHey('Jonas');

// const greetArr=greeting=>name=>console.log(`${greeting} ${name}`);
// greetArr('hi')('omkar');

// const India = {
//   airline: 'India',
//   atacode: 'IN',
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.atacode} ${flightNum}`
//     );
//   },
// };
// India.book(242, 'omi disusa');
// India.book(324, 'tommy disussa');

// const jiva = {
//   airline: 'in  jiva',
//   atacode: 'JW',
//   bookings: [],
// };

// const book = India.book;
// const swiss = {
//   airline: 'indo swiss',
//   atacode: 'SW',
//   bookings: [],
// };
// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// //apply method
// const flightdata = [683, 'omkar wak'];
// book.apply(swiss, flightdata);
// console.log(swiss);

// const bookE = book.bind(swiss);
// const bookEI = book.bind(India);
// const bookJ = book.bind(jiva);
// bookJ(23, 'tommy');

// const bookew = book.bind(jiva, 23);
// bookew('suer');
// bookew('duper');

// //event listeners

// India.planes = 300;
// India.buyplane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // India.buyplane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', India.buyplane.bind(India));

// //partial appl

// const addtax = (rate, value) => value + value * rate;
// console.log(addtax(0.1, 200));

// const addvat = addtax.bind(null, 0.343);
// console.log(addvat(100));
// console.log(addvat(23));

// const addtax1 = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addvta2 = addtax1(0.34);
// console.log(addvta2(100));

// const secureB = function () {
//   let passengerc = 0;
//   return function () {
//     passengerc++;
//     console.log(`${passengerc} passengers`);
//   };
// };

// const booker = secureB();

// booker();
// booker();
// booker();

// console.dir(booker);

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// const h = function () {
//   const b = 77;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f();
// console.dir(f);
// //------------------
// h();
// f();
// console.dir(f);

// //
// const boardp = function (n, wait) {
//   const pergroup = n / 3;
//   setTimeout(function () {
//     console.log(`we are boasrding ${n} passs`);
//     console.log(`ther adfdifhidff ${pergroup} rgrg`);
//   }, wait * 1000);

//   console.log(`will start boarding in ${wait} seconds`);
// };
// const pergroup = 100;
// boardp(170, 3);
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
