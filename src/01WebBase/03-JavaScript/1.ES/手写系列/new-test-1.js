const { objectFactory, objectFactory1 } = require("./new-1.js");

function Otaku (name, age) {
  this.strength = 60;
  this.age = age;

  return 'handsome boy';
}

const person = objectFactory1(Otaku, "Kevin", "18");

console.log(person.strength); // Kevin
console.log(person.age); // Games

