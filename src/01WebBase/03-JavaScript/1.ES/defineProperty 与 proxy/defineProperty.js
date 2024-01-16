let obj = {}, value = null;


// Object.defineProperty(obj, "num", {
//     value : 1,
//     writable : true,
//     enumerable : true,
//     configurable : true
// });

// console.log('1',obj);

//  基本的get 、set方法设置
Object.defineProperty(obj, "num", {
  get: function() {
    console.log("执行了 get 操作");
    return value;
  },
  set: function(newValue) {
    console.log("执行了 set 操作");
    value = newValue;
  }
});

obj.num = 1;
console.log(obj.num);

console.log("=-=-=-=-=-=-=-=-=-=-=-=-");

