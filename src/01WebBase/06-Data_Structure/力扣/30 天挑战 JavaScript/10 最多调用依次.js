/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function(fn) {
  let once = true;
  return function(...args) {
    if (!once) return undefined;
    once = false;
    return fn(...args);
  };
};


let fn = (a, b, c) => (a + b + c);
let onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // returns undefined without calling fn
console.log(onceFn(1, 2, 3));
console.log(onceFn(1, 2, 3));
