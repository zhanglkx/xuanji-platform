//例一，在模块外为简单类型赋值： b.js
// const {val, setVal} = require('./a.js')
import { val, setVal } from "./a.js";

console.log(val);

setVal(101);

console.log(val);
/**===============================================================================================*/
//例2在模块外为引用类型赋值： b.js
// const {obj, setVal} = require('./a.js')
//
// console.log(obj);
//
// setVal(101);
//
// console.log(obj);
/**===============================================================================================*/
// 例三，在模块内导出后改变简单类型：
// b.js
// const {val} = require('./a.js')
//
// console.log(val);
//
// setTimeout(() => {
//     console.log(val);
// }, 200)
/**===============================================================================================*/
// 例四，在模块内导出后用 module.exports 再导出一次：

// const a = require('./a.js')
//
// console.log(a);
//
// setTimeout(() => {
//     console.log(a);
// }, 200)
/**===============================================================================================*/
// 例五，在模块内导出后用 exports 再导出一次：
// const a = require('./a.js')
//
// console.log(a);
//
// setTimeout(() => {
//     console.log(a);
// }, 200)
