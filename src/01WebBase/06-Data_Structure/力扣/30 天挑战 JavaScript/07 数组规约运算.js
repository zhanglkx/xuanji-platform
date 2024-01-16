/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function(nums, fn, init) {
  if (nums.length === 0) return init;
  for (const num of nums) {
    init = fn(init,num);
  }
  return init;
};

function sum(accum, curr) {
  return accum + curr;
}

console.log(reduce([1, 2, 3, 4], sum,0));
