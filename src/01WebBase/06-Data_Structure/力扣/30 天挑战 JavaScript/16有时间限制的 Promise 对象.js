/*
* 解题思路：使用 Promise.race，来让两个 promise 元素竞赛，返回最先执行完的元素
* */

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const timeLimit = function(fn, t) {

  return async function(...args) {
    let timer;
    let timerPromise = new Promise((res, rej) => {
      timer = setTimeout(() => rej("Time Limit Exceeded"),t);
    });

    return Promise.race([fn(...args), timerPromise]).then(res => {
      clearTimeout(timer);
      return res;
    });

  };
};


const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(50).catch(console.log); // "Time Limit Exceeded" at t=100ms



