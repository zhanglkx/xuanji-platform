// 如果数组元素是基本类型，就会拷贝一份，互不影响，而如果是对象或者数组，就会只拷贝对象和数组的引用，这样我们无论在新旧数组进行了修改，两者都会发生变化。

const arr = [{ old: "old" }, ["old"]];

const new_arr = arr.concat();
const new_arr2 = arr.slice();

const arr1 = [function() {
  console.log(a);
}, {
  b: function() {
    console.log(b);
  }
}];

// v2全能方法
const shallowCopy = function(obj) {
  // 只拷贝对象
  if (typeof obj !== "object") return;

  // 根据obj的类型判断是新建一个数组还是对象
  const newObj = obj instanceof Array ? [] : {};

  // 遍历obj，并且判断是obj的属性才拷贝 --忽略掉其原型链上的属性。
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) { //忽略掉其原型链上的属性。使用obj.hasOwnProperty(key)可以判断一个属性是否是对象自身的属性
      newObj[key] = obj[key];
    }
  }
  return newObj;
};


const shallowCopy1 = (obj) => {
  if (typeof obj !== "object") return;

  let newObj = obj instanceof Array ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

arr[0].old = "new";
arr[1][0] = "new";

// console.log(arr); // [{old: 'new'}, ['new']]
// console.log(new_arr2); // [{old: 'new'}, ['new']]

let tempArray = shallowCopy1(arr1);

console.log(tempArray);
