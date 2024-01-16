class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// 使用类创建对象
let person1 = new Person("John", 28);
person1.greet();  // 输出: Hello, my name is John ,and I am 28 years old.

let person2 = new Person("Mary", 30);
person2.greet();  // 输出: Hello, my name is Mary ,and I am 30 years old.

console.log(person1.valueOf());
console.log(person1.toString());
console.log(person1.toLocaleString());

const myObject = new Object({
  name: "John",
  age: 30
});

console.log(myObject);
console.log(myObject.valueOf());
console.log(myObject.toString());
console.log(myObject.toLocaleString());

let s1='01'
let s3='z'
console.log(s1 = +s1);
console.log(s3 = +s3);

