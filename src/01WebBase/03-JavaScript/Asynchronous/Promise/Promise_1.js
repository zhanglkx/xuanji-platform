/* eslint-disable no-unused-vars */
// let promise = new Promise(function(resolve, reject) {
//   console.log("Promise");
//   // resolve(1);
//   reject(1);
// });
// /**
//  * 这里成功的话就一致then执行下去，执行n多个then函数，因为我们只会在考虑成功的情况，使用catch函数统一捕捉错误
//  */
// promise.then(data => {
//   console.log(data, "222");
// }).catch(function(data) {
//   console.log("error", data);
// });
//
// console.log("Hi!");

// 状态不会改变，但是resolve，resolve后面的代码还是会执行 故console.log(2);还是会打印2
// 无论Promise执行链上有多少返回正确的then方法，只有出现reject(error等),直接到最后面的catch
// eslint-disable-next-line @typescript-eslint/no-unused-vars
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
  throw new Error(1);
  // eslint-disable-next-line no-unreachable
  return 1;
}).then(data => {
  console.log(data, "111");

}).then(function(comments) {
  console.log("resolved: ", comments);
}).catch(data => {
  console.log("error", data, "error");
});


//Promise.prototype.catch()
// Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。
/**
 * p.then((val) => console.log('fulfilled:', val))
 *   .catch((err) => console.log('rejected', err));
 *
 * // 等同于
 * p.then((val) => console.log('fulfilled:', val))
 *   .then(null, (err) => console.log("rejected:", err));
 */
// 如果 Promise 状态已经变成resolved，再抛出错误是无效的。
