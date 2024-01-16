// 第二版
Function.prototype.call2 = function(context) {
  context.fn = this;  // 首先要获取调用call的函数，用this可以获取
  const args = [];    // 函数的存放参数
  for (let i = 1, len = arguments.length; i < len; i++) {
    args.push("arguments[" + i + "]");
  }
  eval("context.fn(" + args + ")");
  delete context.fn;
  console.log(arguments);
};

// 测试一下
const foo = {
  value: 1
};

function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}

// bar.call2(foo, "kevin", 18);
// kevin
// 18
// 1
Function.prototype.call = function(context) {
  context.fn = this;
  let arg = [...arguments].slice(1);
  let result = context.fn(...arg);
  delete context.fn;
  return result;
};

bar.call(foo, "kevin", 18);
