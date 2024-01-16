// 在JavaScript中，对象比较是引用比较，而不是值比较。{}创建的是一个新的空对象，所以即使两个对象看起来是相同的，但它们在内存中的地址是不同的，所以它们不相等。
console.log({} == {});
console.log({} === {});

// NaN 是一个特殊的值，代表“不是一个数字”（Not a Number）。NaN 有一个特殊的性质，就是它与任何值（包括自己）都不相等。所以 NaN === NaN 的结果是 false。
// eslint-disable-next-line use-isnan
console.log(NaN === NaN) //fals
