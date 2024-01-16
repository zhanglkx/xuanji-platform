// 深拷贝就是指完全的拷贝一个对象，即使嵌套了对象，两者也相互分离，修改一个对象的属性，也不会影响另一个。


// const arr = ["old", 1, true, ["old1", "old2"], { old: 1 }];
// v1  先将数组转化成字符串，再将字符串转化为数组
// 缺点是不能拷贝函数
// const new_arr = JSON.parse(JSON.stringify(arr));


const new_arr = JSON.parse(JSON.stringify(arr));

const deepCopy = function(obj) {
  if (typeof obj !== "object") return;
  const newObj = obj instanceof Array ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
};


// new_arr[4].old = 2;
console.log(arr);
console.log(new_arr);
