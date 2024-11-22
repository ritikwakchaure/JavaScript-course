
//Variable declaration
// let js="amazing";
// if(js=== "amazing") alert(" Javascript is Fun!");
// console.log(30+14);
 
// let firstName1="omkar";
// console.log(firstName1);

// let PI=3.1415;
// console.log(PI);
/*
let country="india";
let continent="asia";
let population=140;

console.log(country);
console.log(continent);
console.log(population);

let isIsland= false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

// let Javascript=true;
// console.log(Javascript);
// console.log(typeof Javascript);
// console.log(typeof 23);
// console.log(typeof 'omkar');

// Javascript=23;
// console.log(typeof Javascript);
//Data types and operators
// let language="Marathi";
// const country="India";
// const continent="Asia";
// const population=140;
// const isIsland=false;
// isIsland=true;
// const now=2037;
// const age1=now-1991;
// const age2=now-2019;
// console.log(age1, age2);

// console.log(age1 +" "+age2);
// let x=10+5;
// x+=10;

// console.log(x);
// console.log(age1<age2);
// const idFullAge=age1>=50;
// let population1=120;
// let population2=120;
// population1++;
// console.log(population1);

// let Finland=599;
// console.log(population1>Finland);

// const desc=country +' is in '+continent+', and its '+
// population+' million people speak '+language;
// console.log(desc);
// let x,y;
// x=y=25-10-5;
// console.log(x,y);

// const averageAge=((age1+age2)/2);
// console.log(age1,age2,averageAge);

//Strings and template literals
// const firstName="omkar";
// const job="Developer";
// const birthYear=2002;
// const year=2024;
// const omkar="I'm "+firstName+", a "+(year-birthYear)+
//             " Years Old "+job+" !";
// console.log(omkar);
// const omkar1=`I am ${firstName}, a ${year - birthYear} 
//             year old ${job}`;
// console.log(omkar1);

//if/else statement, Type conversion and Type coercion

// const age=15;
// if(age>=18){
//     console.log(`You can drive a car 🚗`);
// }
// else{
//     const yearL=18-age;
//     console.log(`You are to young. wait another 
//                 ${yearL} years :)`);
// }

// const inputYear ="1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear)+18);
// console.log(Number("omkar")); //NaN

// console.log(`I am `+23+` years old`);
// console.log(`23`-`10`-3);  //10
// console.log(`24`/`2`);     //12  it convert automatically
// console.log(`21`+`2`);     //212 it not automatically
                           //  convert to number


// const birthYear=2012;
// let century;
// if(birthYear<=2000){
//     century=20;
// }
// else{
//     century=21;
// }
// console.log(century);

// let n='1'+1;
// n=n-1;
// console.log(n);
// const favourite= prompt("what's your fav number ?");
// const numn=prompt(`how many numn?`);

// const numn1=Number(prompt(`How many numn?`)) ;
// if(numn===1){
//     console.log(`only 1`);
// }
// else if(numn >1){
//     console.log(`more than 1 border`);
// }
// else{
//     console.log(`no borders`);
// }

//Switch statement and ternary operator

// const day="monday";
// switch(day){
//     case 'monday':
//         console.log(`its monday`);
//         break;
//     case 'tuesday':
//         console.log(`its tuesday`);
//         break;
//     case 'sunday':
//         console.log(`its sunday`);
//     default:
//         console.log(`Not a valid day`);
// }

// const age =23;
// age >= 18 ? `I like to drink 🍷`:       // for correct
//             `I like to drink milk 🍼`;   // for wrong

const bill=275;
const tip= bill >=50 && bill <= 300 ? bill* 0.15 :bill *0.2;
 
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);

