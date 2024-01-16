// concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['d', 'e11', 'f'];
const array4= ['d', 'e', 'f1'];


let arr1 = array1.concat(array2);

let arr3 = array1.concat(array2,array3,array4);



console.log(arr1)
console.log(arr3)