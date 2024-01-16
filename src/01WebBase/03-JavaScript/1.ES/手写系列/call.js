// 第一版
// Function.prototype.call2 = function(context) {
//     // 首先要获取调用call的函数，用this可以获取
//     context.fn = this;
//     context.fn();
//     delete context.fn;
// }
//
// // 测试一下
// let foo = {
//     value: 1
// };
//
// function bar() {
//     console.log(this.value);
// }
//
// bar.call2(foo); // 1
// 第二版
// Function.prototype.call2 = function (context) {//context=obj是因为仅接受了第一个参数
//     var context = context || window;
//     context.fn = this;
//
//     let arg = [...arguments].slice(1)
//     let result = context.fn(...arg)
//
//     delete context.fn
//     return result
// }
// 第三版
// Function.prototype.call2 = function (context) {
//     var context = context || window;
//     context.fn = this;
//
//     let arg = [...arguments].slice(1)
//     let result = context.fn(...arg)
//
//     delete context.fn
//     return result
// }
// es6版本
Function.prototype.call2 = function (context, ...args) {
  // 判断是否是undefined和null
  if (typeof context === "undefined" || context === null) {
    context = window;
  }
  let fnSymbol = Symbol();
  context[fnSymbol] = this;
  let fn = context[fnSymbol](...args);
  delete context[fnSymbol];
  return fn;
};

// 测试一下
let value = 2;
let obj = {
  value: 1
};

function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age,
  };
}

bar.call2(null); // 2

console.log(bar.call2(obj, "kevin", 18));
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }

// 测试一下
value = 2;

obj = {
  value: 1
};

function bar() {
  console.log(this.value);
}

bar.call2(null); // 2

console.log(bar.call2(obj, "kevin", 18));
