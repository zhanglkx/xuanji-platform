const array1 = [5, 12, 8, 130, 44];

console.log(array1.at(1))
// 这里 5 是第 0 位，无论向前还是向后，都需要加一或者减一
console.log(array1.at(1))


// 范围超出后，显示 undefined
console.log(array1.at(-11))
console.log(array1.at(11))