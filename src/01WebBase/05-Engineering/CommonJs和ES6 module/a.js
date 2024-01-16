// 例一，在模块外为简单类型赋值：
export let val = 1;

export const setVal = (newVal) => {
  val = newVal;
};

// module.exports = {
//     val,
//     setVal
// }
/**===============================================================================================*/
//例二，在模块外为引用类型赋值
// let obj = {
//     val: 1
// };
//
// const setVal = (newVal) => {
//     obj.val = newVal
// }
//
// module.exports = {
//     obj,
//     setVal
// }
/**===============================================================================================*/
// 例三，在模块内导出后改变简单类型：
// a.js
// let val = 1;
//
// setTimeout(() => {
//     val = 101;
// }, 100)
//
// module.exports = {
//     val
// }

/**===============================================================================================*/
// 例四，在模块内导出后用 module.exports 再导出一次：
// a.js
// setTimeout(() => {
//     module.exports = {
//         val: 101
//     }
// }, 100)
//
// module.exports = {
//     val: 1
// }

/**===============================================================================================*/
// 例五，在模块内导出后用 exports 再导出一次：
// setTimeout(() => {
//     module.exports.val = 101;
// }, 100)
//
// module.exports.val = 1

/**===============================================================================================*/
//合并
/**===============================================================================================*/
// const myModule = {
//     exports: {}
// }
//
// let val = 1;
//
// const setVal = (newVal) => {
//     val = newVal
// }
//
// myModule.exports = {
//     val,
//     setVal
// }
//
// const { val: useVal, setVal: useSetVal } = myModule.exports
//
// console.log(useVal);
//
// useSetVal(101)
//
// console.log(useVal);
/**===============================================================================================*/
// const myModule = {
//     exports: {}
// }
//
// let obj = {
//     val: 1
// };
//
// const setVal = (newVal) => {
//     obj.val = newVal
// }
//
// myModule.exports = {
//     obj,
//     setVal
// }
//
// const {obj: useObj, setVal: useSetVal} = myModule.exports
//
// console.log(useObj);
//
// useSetVal(101)
//
// console.log(useObj);
/**===============================================================================================*/
// const myModule = {
//     exports: {}
// }
//
// let val = 1;
//
// setTimeout(() => {
//     val = 101;
//     myModule.exports = {
//         val
//     }
// }, 100)
//
// myModule.exports = {
//     val
// }
//
// const {val: useVal} = myModule.exports
//
// console.log(useVal);
//
// setTimeout(() => {
//     const {val: tt} = myModule.exports
//     console.log(tt);
// }, 200)

/**===============================================================================================*/

// const myModule = {
//     exports: {}
// }
//
// setTimeout(() => {
//     myModule.exports = {
//         val: 101
//     }
// }, 100)
//
//
// myModule.exports = {
//     val: 1
// }
//
// const useA = myModule.exports
//
// console.log(useA);
//
// setTimeout(() => {
//     const use1 = myModule.exports
//     console.log(use1);
// }, 200)

/**===============================================================================================*/

// const myModule = {
//     exports: {}
// }
//
// setTimeout(() => {
//     myModule.exports.val = 101;
// }, 100)
//
// myModule.exports.val = 1;
//
// const useA = myModule.exports
//
// console.log(useA);
//
// setTimeout(() => {
//     console.log(useA);
// }, 200)
