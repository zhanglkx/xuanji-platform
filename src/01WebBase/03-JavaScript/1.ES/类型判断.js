// typeof
/**
 * Number：用于表示整数和浮点数（例如：42、3.14159）。
 * BigInt：用于表示任意大小的整数（例如：9007199254740991n，注意'n'后缀）。
 * String：用于表示文本数据或字符序列（例如："Hello, World!"）。
 * Boolean：用于表示逻辑值，即真（true）或假（false）。
 * Symbol：表示唯一的、不可变的数据类型，通常用于对象属性的键（例如：Symbol('myKey')）。
 * Null：表示一个空值或"无"的值，通常用于表示一个对象变量没有指向任何对象。
 * Undefined：表示一个未定义的值，即该变量没有被赋值。
 * Object：用于表示复杂的数据结构，例如数组、函数、日期、正则表达式等。
 */

/**
 * 那我们都知道，在 ES6 前，JavaScript 共六种数据类型，分别是：
 *
 * Undefined、Null、Boolean、Number、String、Object
 *
 * 然而当我们使用 typeof 对这些数据类型的值进行操作的时候，返回的结果却不是一一对应，分别是：
 *
 * undefined、object、boolean、number、string、object
 */
function a() {
}

console.log(typeof a); // function
console.log(typeof 1);
console.log(typeof {});
console.log(typeof "1");
console.log(typeof ["1"]);

console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
console.log(Object.prototype.toString.call(null)); // [object Null]

// const date = new Date();
// console.log(Object.prototype.toString.call(date)); // [object Date]
console.log("我是一条分割线============================");
// 以下是11种：
const number = 1;          // [object Number]
const string = "123";      // [object String]
let boolean = true;      // [object Boolean]
let und = undefined;     // [object Undefined]
let nul = null;          // [object Null]
let obj = { a: 1 };         // [object Object]
const array = [1, 2, 3];   // [object Array]
let date = new Date();   // [object Date]
let error = new Error(); // [object Error]
let reg = /a/g;          // [object RegExp]
let func = function a() {
}; // [object Function]

function checkType() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(Object.prototype.toString.call(arguments[i]));
  }
}

console.log(Object.prototype.toString.call(Math)); // [object Math]
console.log(Object.prototype.toString.call(JSON)); // [object JSON]
function a1() {
  console.log(Object.prototype.toString.call(arguments)); // [object Arguments]
}

a1();
// 所以我们可以识别至少 14 种类型，当然我们也可以算出来，[[class]] 属性至少有 12 个。
checkType(number, string, boolean, und, nul, obj, array, date, error, reg, func);
