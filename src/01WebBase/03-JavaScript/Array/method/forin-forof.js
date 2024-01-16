// let arr = [1, 2, 3, 4, 5];
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};

// console.log('forin 遍历数组');
// for (let i in arr) {
//     console.log(i);
// }

// console.log('forin 遍历对象');
// for (let i in obj) {
//     console.log(i);
// }
// console.log('forof 遍历数组');
// for (const iterator of arr) {
//     console.log(iterator);
// }

// console.log('forof 遍历对象');
// for (const iterator of obj) {
//     console.log(iterator);
// }


// 遍历类数组
// let obj = {
//     0: 'one',
//     1: 'two',
//     length: 2
// };
// obj = Array.from(obj);
// console.log(obj);
// for (let k of obj) {
//     console.log(k)
// }

// 遍历 
//方法一：
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

/**
 * 
 *  在 JavaScript 的 for...of 循环中，它需要遍历的对象必须是可迭代的。可迭代对象是指实现了 Symbol.iterator 方法的对象。
 * 在第一段代码中，obj 对象并没有实现 Symbol.iterator 方法，因此无法进行 for...of 遍历，会导致报错。--注释：第一段代码是没添加obj[Symbol.iterator]的 obj对象
 * 在第二段代码中，通过给 obj 对象添加了 Symbol.iterator 方法，使其成为可迭代对象。该方法返回一个迭代器对象，迭代器对象包含 next 方法，用于依次返回对象的属性值。
 * 因此，第二段代码就可以正常进行 for...of 遍历而不报错。
 */
obj[Symbol.iterator] = function () {
    let keys = Object.keys(this);
    let count = 0;
    return {
        next() {
            if (count < keys.length) {
                return { value: obj[keys[count++]], done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    }
};
console.log(obj);//{ a: 1, b: 2, c: 3, [Symbol(Symbol.iterator)]: [Function (anonymous)] }
// console.log(typeof obj); //object
for (let k of obj) {
    console.log(k);
}