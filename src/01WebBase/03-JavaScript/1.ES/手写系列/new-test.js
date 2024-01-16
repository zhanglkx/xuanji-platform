// import {objectFactory} from "@/03-JavaScript/1.ES/call、bind、apply/new-1";
const { objectFactory, objectFactory1, _new, newOperator } = require("./new-1.js");

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//
//   return 1;
// }

class Person {
  constructor(name, age, habit) {
    this.name = name;
    this.age = 15;
    this.habit = habit;
  }

  logInfo() {
    console.log("我是日志！");
  }
}

// Person.prototype.habit = "Games";
// Person.prototype.sayHi = function() {
//   console.log("Hi " + this.name);
// };

let person = _new(Person, "后俊生", 18);
console.log(person.name);   //后俊生
console.log(person.age);    //18


