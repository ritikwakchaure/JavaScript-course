// 'use strict';

// let DriverLicense= false;
// const passTest =true;

// if(passTest)  DriverLicense=true;
// if(DriverLicense) console.log("I can Drive");

//functions

// function fruitP(apples,oranges){
//     console.log(apples,oranges);
//     const juice=`Juice with ${apples} apples 
//     and ${oranges} oranges.`;
//     return juice;
// }
// const Result=fruitP(5,6);
// console.log(Result);
// // arrow function

// const yearUntilR = (birthy,firstn)=>{
//     const age=2040-birthy;
//     const retirement=65-age;
//     return  `${firstn} retires in ${retirement} years.`;
// }
// console.log(yearUntilR(2000,'omkar'));
// //function calling other function
// function cutFruitsP(fruit){
//     return fruit*4;
// }
// function fruitProcess(apples,oranges){
//     const applep=cutFruitsP(apples);
//     const orangep=cutFruitsP(oranges);

//     const juice=`Juice with ${applep} piece of apple and 
//                  ${orangep} pieces of orange.`;
//     return juice;
// }
// console.log(fruitProcess(2,4));
//function expression
// const calcage2=function(birthy){
//     return 2038-birthy;
// }
// const age2=calcage2(1888);
// console.log(age2);
//challenge 1
// const calcAverage=(p1,p2,p3)=>((p1+p2+p3)/3);

// let avg1=calcAverage(44,23,71);
// let avg2=calcAverage(65,54,49);
// console.log(avg1);
// console.log(avg2);

// const scoreDolphins=avg1;
// const scoreKoalas=avg2;

// const checkWinner=function(avg1,avg2){
     
//     if(avg1 >= 2 * avg2){
//         console.log(`Dolphins win (${avg1} vs. ${avg2})`);
//     }
//     else if(avg2 >= 2 * avg1){
//         console.log(`Koalas win (${avg2} vs. ${avg1}) `);
//     }
//     else{
//         console.log(`No team wins...`);
//     }
// }
// checkWinner(avg1,avg2);

//ARRAYS______________________
// const f1='omkar';
// const f2='prakash';
// const f3='jivan';
// const f=['omkar','prakash','jivan'];
// console.log(f);
// console.log(f[0]);
// console.log(f.length);
// const firstname='pratik';
// const j1=[firstname,'akash',2020-1999,'student',f];
// console.log(j1);

// const friends=['omi','tommy','sommy'];
// friends.push('jiv');
// console.log(friends);
// friends.pop();
// console.log(friends);
// friends.unshift('pri');
// console.log(friends);
// friends.shift();
// console.log(friends);

//challenge-------------------------------
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }
   
//   const bills = [125, 555, 44];
//   const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
   
//   console.log(bills, tips);
  
//   //const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

//OBJETS---------------------------------
// const omkar={
//     firstname: 'omkar',
//     lastname: 'patil',
//     by:2001,
//     age:23,
//     job:'Developer',
//     friends:['om','som','tom'],
//     hasdriversLicense:true,
//     // calage: function (){
//     //     console.log(this);
//     //     return 2024-this.by;
//     // }
//     calage: function(){
//         this.age=2024-this.by;
//         return this.age;
//     },
//     getSummary:function(){
//         return `${this.firstname} is a ${this.calage()}
//         -year old ${omkar.job}, and he has ${this.hasdriversLicense ? 'a': 'no'}
//         drivers license`;
//     }
// };
// console.log(omkar);
// console.log(omkar.firstname);
// const namekey='name';
// console.log(omkar['first'+namekey]);
// omkar.location='india';
// omkar['twitter']='@gjhfufifa';
// console.log(omkar);
// console.log(omkar.calage());
// console.log(omkar.calage());
// console.log(omkar.getSummary());
// console.log(`${omkar.firstname} has 
// ${omkar.friends.length}, and his best friend is called ${omkar.friends[0]}`);
//challenge 3
// const MarkMiller={
//     fullName:'Mark Miller',
//     mass:78,
//     height:1.69,
//     calcBMI: function(){
//         this.bmi=(this.mass/(this.height*this.height)); 
//         return this.bmi;
//     }  
// }
// const JohnSmiths={
//     fullName:'John Smith',
//     mass:92,
//     height:1.95,
//     calcBMI: function(){
//         this.bmi=(this.mass/(this.height*this.height)); 
//         return this.bmi;
//     }
// }
// MarkMiller.calcBMI();
// JohnSmiths.calcBMI();
// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
//   } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);}

//LOOPS_-----------------------------
for(let i=1;i<=10;i++){
    console.log(`Hello world repetition ${i} 😀`);
}
const omkar=[
        'omkar',
        'patil',
        2001,
        23,
        'Developer',
        ['om','som','tom']
];
const types=[];
for(let i=0;i<6;i++){
    //reading array
    console.log(omkar[i]);
    //filling array
    types[i]=typeof omkar[i];
    types.push(typeof omkar[i]);
}
let i=0;
while(i<=6){
    console.log(`Hello ${i}`);
    i++;
}

// console.log(types);

// const years=[2000,2002,2004];
// const ages=[];
// for(let i=0;i<years.length;i++){
//     ages.push(2024-years[i]);
// }
// console.log(ages);
// for(let i=0;i<omkar.length;i++){
//     if(typeof omkar[i] === 'number') break;
//     console.log(omkar[i],typeof omkar[i]);
// }
// challenge----------------
// const bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips=[];
// const totals=[];
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }
// for(let i=0;i<bills.length;i++){
//     const tip=calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip+bills[i]);
// }
// console.log(bills,tips,totals);
// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       // sum = sum + arr[i];
//       sum += arr[i];
//     }
//     return sum / arr.length;
//   }
   
//   console.log(calcAverage([2, 3, 7]));
//   console.log(calcAverage(totals));
//   console.log(calcAverage(tips));
