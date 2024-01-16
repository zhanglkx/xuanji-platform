const array = [5, 12, 8, 130, 44];

array.push(1) // 1
array.push('a') // 2
array.push(true, {}) // 4
let length = array.push(1);

// console.log(array, "==", length)

const arr = [5, 12, 8, 130, 44];

// 这里写不写参数都是一样的，因为pop不接受参数
let item = arr.pop();
let item1 = arr.pop(12);
console.log(item,arr)