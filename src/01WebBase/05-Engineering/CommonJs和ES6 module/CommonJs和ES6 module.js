// 例一，在模块外为简单类型赋值：
// a.js
let val = 1;

const setVal = (newVal) => {
  val = newVal;
};

module.exports = {
  val,
  setVal,
};

// b.js
const { val, setVal } = require("./a.js");

console.log(val);

setVal(101);

console.log(val);
