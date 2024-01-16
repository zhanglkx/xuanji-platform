const { objectFactory,objectFactory1 } = require("./new-1.js");


function Otaku (name, age) {
  this.strength = 60;
  this.age = age;

  return {
    name: name,
    habit: 'Games'
  }
}

// 构造函数返回了一个对象，在实例 person 中只能访问返回的对象中的属性。
const person = new Otaku("Kevin", "18");

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // undefined
console.log(person.age) // undefined
