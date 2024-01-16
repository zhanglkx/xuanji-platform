//自己的，没做出来
function arrayModP(arr, p) {
  let total = sum(arr); //数组和
  // console.log(total)
  let x = mod(total, p),
    index = -1; //total mod p 后的值 ;倍数 ；数组最大下标

  if (x === 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      let fji = sum(arr.slice(j, i + 1));

      let jmp = mod(fji, p);

      if (jmp === 0) {
        if (index < j) {
          index = j;
        }
      }
    }
  }
  return index;

  function mod(number, p) {
    if (number <= 0) return 0;
    if (number <= p) return p - number;
    let remainder = Math.floor(number / p);

    return number - remainder * p;
  }

  function sum(array) {
    let total = 0;
    for (let j = 0; j < array.length; j++) {
      total += array[j];
    }
    return total;
  }
}

/**
 * ==========================
 */
let minSubarray = function(nums, p) {
  let x = 0;
  for (const num of nums) {
    x = (x + num) % p;
  }
  if (x === 0) {
    return 0;
  }
  const index = new Map();
  let y = 0,
    res = nums.length;
  for (let i = 0; i < nums.length; i++) {
    index.set(y, i); // f[i] mod p = y，因此哈希表记录 y 对应的下标为 i
    y = (y + nums[i]) % p;
    if (index.has((y - x + p) % p)) {
      res = Math.min(res, i - index.get((y - x + p) % p) + 1);
    }
  }
  return res === nums.length ? -1 : res;
};

console.log(minSubarray([3, 1, 4, 2], 6));
console.log(minSubarray([6, 3, 5, 2], 9));
console.log(minSubarray([1, 2, 3], 3));
console.log(minSubarray([1, 2, 3], 7));
console.log(minSubarray([1000000000, 1000000000, 1000000000], 6));
