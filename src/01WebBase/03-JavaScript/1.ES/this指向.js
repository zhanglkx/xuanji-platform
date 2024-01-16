// 一、被对象调用的时候
// function sayHi() {
//   console.log("Hello,", this.name);
// }
//
// let person2 = {
//   name: "小万",
//   sayHi: sayHi
// };
//
// let person1 = {
//   name: "张三",
//   sayHi: sayHi,
// friend: person2
// };
//
// person1.sayHi();
// person2.sayHi();
// person1.friend.sayHi() // Hello, 小万  链式调用，指向最后一个调用他的方法
/** ********************************************************************************************************************** **/

// window.name = "window";
//
// function sayHi() {
//   console.log("Hello,", this.name, this === window);
// }

// var name = "1999";
// var obj = {
//   name: "are you ok",
//   show : function() {
//     return function(){
//       console.log(name,this.name,this===window);
//     }
//   }
// };
// var foo1 = obj.show();
// foo1();

// var name = 'China';
// var obj = {
//   name : 'America',
//   show : function() {
//     return function(){
//       console.log(this.name);
//     }
//   }
// }
// var a = obj.show();
// a(); // China

/** ********************************************************************************************************************** **/
// 作为构造函数
// function Person() {
//   this.name = "张三";
//   return {
//     name: "李四"
//   };
// }
// //这里new出来的是对象{name: "李四"}，所以this指向这个对象person.name等价于this.name，也即李四
// let person = new Person();
// console.log(person.name);//李四

/** ********************************************************************************************************************** **/
// 箭头函数
// var age = 20;
// var obj = {
//   age: 18,
//   fn: () => {
//     console.log(this.age,this);//20
//     debugger
//   }
// };
// obj.fn();


/** ********************************************************************************************************************** **/

window.name = "这是window_name";

let f1 = function () {
  return this.name;
};
let f2 = () => this.name;

let obj = { name: "这是obj_name" };

console.log(f1.call(obj));  //这是obj_name
console.log(f2.call(obj));  // 这是window_name
console.log(f1.apply(obj)); // 这是obj_name
console.log(f2.apply(obj)); // 这是window_name
console.log(f1.bind(obj)());  // 这是obj_name
console.log(f2.bind(obj)());  // 这是window_name


/** ********************************************************************************************************************** **/
// person1.friend.sayHi() // Hello, 小万
//
// //call bind
// function getThisType() {
//     console.log('this指向内容', this, typeof this)
// }
//
// getThisType.call(1) // this指向内容 Number {1} object
// getThisType.apply('小万') // this指向内容 String {'小万'} object
// getThisType.call(true) // this指向内容 Boolean {true} object

/** ********************************************************************************************************************** **/
// eslint-disable-next-line no-unused-vars
// let name = '123';
//
// let obj = {
//     name: '456',
//     print: function() {
//         function a() {
//             console.log(this.name);
//             console.log(1);
//         }
//         a();
//     }
// }
/** ********************************************************************************************************************** **/
// obj.print() // 123
// eslint-disable-next-line no-unused-vars
// var name = '小万'
// var person = {
//     name: '张三',
//     sayHi: sayHi
// }
//
// function sayHi() {
//     console.log(this) // { name: 张三, sayHi: Fn }
//     setTimeout(() => {
//         console.log('Hello,', this.name) // Hello, 张三
//     })
// }
//
// person.sayHi()
/** ********************************************************************************************************************** **/
// function Foo(){
//     Foo.a = function(){
//         console.log(1);
//     }
//     this.a = function(){
//         console.log(2)
//     }
// }
//
// Foo.prototype.a = function(){
//     console.log(3);
// }
//
// Foo.a = function(){
//     console.log(4);
// }
//
// Foo.a() // 4
// let obj = new Foo() //这里相当于在原来的函数上构造了一个新的函数，Foo.a = function(){。。。这是给F00函数的a函数重新赋值；不影响构造函数
// obj.a() // 2
// Foo.a() // 1
/** ********************************************************************************************************************** **/

// function funParent() {
//     let memo = []
//     function funTwo(i) {
//         memo.push(i)
//         console.log(memo.join(','))
//     }
//     return funTwo
// }
//
// const fn = funParent()
//
// fn(1) // 1,
// fn(2) // 1,2
// fn(3) // 1,2,3
// fn(4) // 1,2,3,4
/** ********************************************************************************************************************** **/

// var funOne = (function() {
//     let num = 0;  //因为下面的console.log调用的是funOne全局变量，而且这个匿名函数返回的是一个函数在返回一个结果，，let num = 0; 只有在函数初始化的时候执行一次，保存到上下文中
//     return function  () {
//         num++
//         return num
//     }
// })()
//
// console.log(funOne()) // 1
// console.log(funOne()) // 2
// console.log(funOne()) // 3
/** ********************************************************************************************************************** **/

// function fn1(x) {
//     return x + 1;
// }
//
// function fn2(x) {
//     return x + 2;
// }
//
// function fn3(x) {
//     return x + 3;
// }
//
// function fn4(x) {
//     return x + 4;
// }
//
// function compose() {
//     let newArr = Array.prototype.slice.call(arguments)
//     return (defaultNum) => {
//         return newArr.reduce((pre, cur) => cur(pre), defaultNum)
//     }
// }
//
// const a = compose(fn1, fn2, fn3, fn4);
// console.log(a(7)); // 1+4+3+2+7=17
/** ********************************************************************************************************************** **/

// var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bob', 'Bob'];
// console.log(names);
// var countedNames = names.reduce(function (allNames, name) {
//     console.log('====', allNames, name);
//     if (name in allNames) {
//         allNames[name]++;
//     } else {
//         allNames[name] = 1;
//     }
//     return allNames;
// }, {});
// console.log(countedNames);
/** ********************************************************************************************************************** **/
//
// var a = 10
// function fn() {
//     var b = 20
//     function bar() {
//         console.log(a + b)
//     }
//     return bar
// }
// var x = fn(), b = 200
// x()
/** ********************************************************************************************************************** **/

// var b = 10;
// (function b () {
//     b = 20 //复制无效
//     // 内部作用域：会先去查找是否有已有变量b的声明，有就直接赋值20，确实有了呀。发现具名函数function b() {}, 拿此b做赋值；
//     // IIFE的函数无法进行赋值（内部机制，类似const定义的常量），所以无效
//     console.log(b) // [Function: b]
//     console.log(window.b) // 10
// })()
/** ********************************************************************************************************************** **/
// console.log(name);// undefined
// var name = "神奇的程序员";
// function getName() {
//     console.log(name); // undefined
//     // var name = "大白";
//     return name;
// }
// getName();
/** ********************************************************************************************************************** **/

// const name = "神奇的程序员";
// const obj = {};
// obj.name = "神奇的程序员";
// name = "大白";
// obj = { name: "大白" };
/** ********************************************************************************************************************** **/

// function unknownSum() {
//   // 存储每次函数调用时的参数
//   let arr = [];
//   const add = (...params) => {
//     // 拼接新参数
//     arr = arr.concat(params);
//     return add;
//   };
//
//   // 对参数进行求和
//   add.toString = function () {
//     let result = 0;
//     // 对arr中的元素进行求和
//     for (let i = 0; i < arr.length; i++) {
//       result += arr[i];
//     }
//     return result + "";
//   };
//
//   return add;
// }
//
// const result1 = unknownSum()(1, 6, 7, 8)(2)(3)(4);
// console.log("result1 =", result1.toString());
