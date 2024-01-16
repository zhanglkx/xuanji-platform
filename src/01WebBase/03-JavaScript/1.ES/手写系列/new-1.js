function objectFactory() {
  const obj = new Object(), Constructor = [].shift.call(arguments);
  // 构造函数的数据/属性/方法分两部分，一部分是原型链上的，一部分是在它本身添加的
  // 这一步的作用是将原型链上的数据赋值给obj
  // --->将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
  obj.__proto__ = Constructor.prototype;
  // 这一步的作业是将函数本身添加的数据/属性/方法通过apply方法赋值给被构造的函数obj，
  // 注意：这里只传递了objectFactory方法传过来的参数，在函数构造时没有传过来的参数，在构造完成后，是undefined
  // 这里使用apply而不是bind，是因为构造函数在创建参数的时候需要执行一次
  // --->使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
  Constructor.apply(obj, arguments);
  return obj;
}

// 第二版的代码
function objectFactory1() {

  const obj = new Object(), Constructor = [].shift.call(arguments);

  obj.__proto__ = Constructor.prototype;

  const ret = Constructor.apply(obj, arguments);

  return typeof ret === "object" ? ret : obj;

}

// V3 优雅
function _new(fn, ...arg) {
  //以一个现有对象作为原型，创建一个新对象,继承fn原型链上的属性
  const obj = Object.create(fn.prototype);
  // 使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
  const ret = fn.apply(obj, arg);
  // 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用会自动返回这个新的对象。
  return ret instanceof Object ? ret : obj;
}

/**
 * 模拟实现 new 操作符--V4
 * @return {Object|Function|Regex|Date|Error}      [返回结果]
 * @param ctor
 */
function newOperator(ctor) {
  if (typeof ctor !== "function") {
    throw "newOperator function the first param must be a function";
  }
  // ES6 new.target 是指向构造函数
  newOperator.target = ctor;
  // 1.创建一个全新的对象，
  // 2.并且执行[[Prototype]]链接
  // 4.通过`new`创建的每个对象将最终被`[[Prototype]]`链接到这个函数的`prototype`对象上。
  const newObj = Object.create(ctor.prototype);
  // ES5 arguments转成数组 当然也可以用ES6 [...arguments], Aarry.from(arguments);
  // 除去ctor构造函数的其余参数
  const argsArr = [].slice.call(arguments, 1);
  // 3.生成的新对象会绑定到函数调用的`this`。
  // 获取到ctor函数返回结果
  const ctorReturnResult = ctor.apply(newObj, argsArr);
  // 小结4 中这些类型中合并起来只有Object和Function两种类型 typeof null 也是'object'所以要不等于null，排除null
  const isObject = typeof ctorReturnResult === "object" && ctorReturnResult !== null;
  const isFunction = typeof ctorReturnResult === "function";
  if (isObject || isFunction) {
    return ctorReturnResult;
  }
  // 5.如果函数没有返回对象类型`Object`(包含`Functoin`, `Array`, `Date`, `RegExg`, `Error`)，那么`new`表达式中的函数调用会自动返回这个新的对象。
  return newObj;
}


module.exports = {
  objectFactory: objectFactory,
  objectFactory1: objectFactory1,
  _new: _new,
  newOperator: newOperator
};
