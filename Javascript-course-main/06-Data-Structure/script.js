'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// //mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //switching variables
// const temp = main;
// main = secondary;
// secondary = temp;

// // [main, secondary] = [secondary, main];
// console.log(main, secondary);
// const [starter,maincourse]=restaurant.order(2,0);
// console.log(starter,maincourse);

//spread operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2];
// const newarr = [1, 2, ...arr];
// console.log(newarr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //Iterables: arrays,Strings,map,sets.NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredients ?"),
//   prompt('Ingredients 2'),
//   prompt('Ingredients 3'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// //objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2-functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 2, 3, 5);
// add(4, 3, 5, 6, 7, 8, 9);

// const x = [23, 5, 7];
// add(...x);
// restaurant.orderPizza('mushrroms', 'onion', 'olives', 'spinach');

//use any data type,return any data type,short circuiting

// console.log(3 || 'Jonas');
// console.log(true || 0);

// console.log(7 && 'omkar');

// //nullish operator
// restaurant.numGuests = 0;
// const GC = restaurant.numGuests ?? 10;
// console.log(GC);

// //assignment operator
// const rest1 = {
//   name: 'chapri',
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'Elvish',
//   owner: 'Abhishek',
// };

// rest1.numGuests ||=10;
// rest2.numGuests ||=10;
// console.log(rest1);
// console.log(rest2);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     ['omi', 'tommy', 'siva', 'iva', 'jiva', 'triggered', 'insan'],
//     ['uma', 'geeta', 'devvi', 'shakti', 'sakshi', 'panu', 'arati'],
//   ],
//   score: '4:0',
//   scored: ['omy', 'tommy', 'jiva', 'shiva'],
//   date: 'Nov 9th,2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'jivan', 'mrituu', 'amar'];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// // printGoals('mulla','luka','lilla');
// // printGoals('nunu','allah');
// printGoals(...game.scored);
// team1 < team2 && console.log(`team 1 is more likely to win`);
// team1 > team2 && console.log(`team 2 is more likely to win`);

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open;
//   console.log(`On ${day},we open at ${open}`);
// }

// //methods
// console.log(restaurant.order?.(0,1)??'Method does not exist');
// console.log(restaurant.orderRisotto?.(0,1)??'Method does not exist');

// const users=[{name:'Jonas' ,email:'user@ho.on'}];
// console.log(users[0]?.name??'user array empty');
// if(users.length>0) console.log(users[0].name);
// else console.log('user array empty');

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// //names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `wr are open on ${properties.length} days :`;
// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// //property values
// const values = Object.values(openingHours);
// console.log(values);

// //entries
// const entries = Object.entries(openingHours);
// console.log(entries);

//challenge------------------
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// for(const [team,odd] of Object.entries(game.odds)){
//   console.log(team,odd);
// }

//sets

// const orderSet = new Set(['pasta', 'pizza', 'risotto', 'pasta', 'pizza']);
// console.log(orderSet);
// console.log(new Set('Jonas'));
// console.log(orderSet.size);
// orderSet.add('omkk');
// orderSet.add('jjiji');
// orderSet.delete('omkk');
// console.log(orderSet);
// for (const order of orderSet) console.log(order);

// const staff = ['waiter', 'chef', 'waiter', 'manager'];
// const staffm = [...new Set(staff)];
// console.log(staffm);

// //map

// const rest = new Map();
// rest.set('name', 'classico italono');
// rest.set(1, 'omi, dada');
// console.log(rest.set(2, 'Lisbon,portugul'));

// rest
//   .set('categories', ['Italin', 'pizzaria', 'vegei', 'orainc'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open :D')
//   .set(false, 'we are closed:');
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));

// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'c'],
//   [2, 'java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'try again !'],
// ]);
// console.log(question);

// //convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //quiz app
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}:${value}`);
// }
// const answer = Number(prompt(`Your answer`));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// //convert map to array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

//challenge---------------
// const gameEvents = new Map([
//   [17, 'Goal'],
//   [36, 'Substitution'],
//   [47, 'Goal'],
//   [61, 'Substituion'],
//   [64, 'Yellow Card'],
//   [69, 'Red card'],
//   [70, 'Substituion'],
//   [72, 'Substition'],
//   [76, 'Goal'],
//   [80, 'Goal'],
//   [92, 'Yellow Card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);

// console.log(
//   `An event happened,on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}:${event}`);
// }

//Strings--------------------------------------------------------------------------
// const airLine = 'Tap air';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B#@@'[0]);

// console.log(airLine.length);
// console.log('B%^*'.length);

// console.log(airLine.indexOf('r'));
// console.log(airLine.lastIndexOf('r'));
// console.log(airLine.indexOf('portugal'));
// console.log(airLine.slice(4));
// console.log(airLine.slice(1, 4));
// console.log(airLine.slice(0, airLine.indexOf(' ')));
// console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));
// console.log(airLine.slice(-2));
// console.log(airLine.slice(1, -1));

// const checkSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😁');
//   else {
//     console.log(`You got lucky 😀`);
//   }
// };
// checkSeat('11B');
// checkSeat('23C');
// checkSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

//strings part 2------------------------------------------------------------------
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing email
const email = 'hello@gmail.com';
const loginemail = '  Hello@gmail.com';

// const loweremail = loginemail.toLowerCase();
// const trimmedEmail = loweremail.trim();
// console.log(trimmedEmail);

// const normalemail = loginemail.toLocaleLowerCase().trim();
// console.log(normalemail);

// const priceGB = '244,54#';
// const priceUS = priceGB.replace('#', '$').replace(',', '.');
// console.log(priceUS);

// const ann = 'All passengers come to door and set the door';
// console.log(ann.replace('door', 'gate'));
// console.log(ann.replaceAll('door', 'gate'));

//split and join-------------------
console.log('omkar wak'.split(' '));
const [firstname, lastname] = 'omkar wakchaure'.split(' ');

const newName = ['Mr.', firstname, lastname.toUpperCase()].join(' ');
console.log(newName);

const capitalize = function (name) {
  const names = name.split(' ');
};
const maskCredit = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCredit(545455));
console.log(maskCredit(9988656));
console.log(maskCredit(677));

//repeat
const message2 = 'bad weather..... all depart';
console.log(message2.repeat(5));
