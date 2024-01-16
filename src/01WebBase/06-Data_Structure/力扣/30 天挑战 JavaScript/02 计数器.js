/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function(n) {

  return function() {
    return n++;
  };
};

/**
 *
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
