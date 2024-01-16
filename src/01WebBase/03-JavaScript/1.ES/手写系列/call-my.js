/**手写call思路
 * 1. 将函数设为对象的属性；
 * 2. 执行该函数；
 * 3. 删除该函数；
 */

Function.prototype.call1 = function (context) {
  context.fn = this;
  context.fn();
  delete context.fn;
};

//v2增加了参数处理机制
Function.prototype.call2 = function (context) {
  context.fn = this;
  let arg = [...arguments].slice(1);
  context.fn(...arg);
  delete context.fn;
};

//v3
// 第三版 添加对象判空处理
Function.prototype.call2 = function (context) {
  context = context || window;
  let arg = [...arguments].slice(1);
  context.fn = this;
  let result = context.fn(...arg);
  delete context.fn;
  return result;
};
//最终版本
Function.prototype.call3 = function (context, ...args) {
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

/**
 * ============================================测试数据============================================
 */

// 测试一下
var foo = {
  value: 1,
};

function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age,
  };
}

bar.call3(null); // 2

console.log(bar.call3(foo, "kevin", 18));
