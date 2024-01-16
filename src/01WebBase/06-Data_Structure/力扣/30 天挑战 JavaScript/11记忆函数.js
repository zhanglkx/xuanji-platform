/**
 * @param {Function} fn
 */
function memoize(fn) {
  let maps = new Map();
  return function(...args) {
    if (!maps.has(args.toString())) {
      maps.set(args.toString(), fn(...args));
    }
    return maps.get(args.toString());
  };
}

// 此方法更好
function memoiz1e(fn) {
  const map = new Map()
  return function (...args) {
    const item = args.join(',')
    if (!map.has(item)) {
      map.set(item, fn(...args))
    }
    return map.get(item)
  }
}



let callCount = 0;


factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));

let memoizedFn = memoize(factorial);


// memoizedFn(2, 3); // 5
// memoizedFn(2, 3); // 5
console.log(memoizedFn(2));
console.log(memoizedFn(3));
console.log(memoizedFn(2));
console.log(memoizedFn(3));
console.log(callCount); // 1

