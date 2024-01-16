/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  for (let index = 0; index < nums.length; index++) {
    for (let j = 0; j < index; j++) {
      if (nums[index] + nums[j] === target) {
        return [index, j];
      }
    }
  }
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum1 = (nums, target) => {
  const prevNums = {};                    // 存储出现过的数字，和对应的索引

  for (let i = 0; i < nums.length; i++) {       // 遍历元素
    const curNum = nums[i];                     // 当前元素
    const targetNum = target - curNum;          // 满足要求的目标元素
    const targetNumIndex = prevNums[targetNum]; // 在prevNums中获取目标元素的索引
    if (targetNumIndex !== undefined) {         // 如果存在，直接返回 [目标元素的索引,当前索引]
      return [targetNumIndex, i];
    } else {                                    // 如果不存在，说明之前没出现过目标元素
      prevNums[curNum] = i;                     // 存入当前的元素和对应的索引
    }
  }
};

const add = (nums, target) => {
  let prevNum = {};
  for (let i = 0; i < nums.length; i++) {
    const temp = nums[i];
    const targetNum = target - temp;
    const targetNumIndex = prevNum[targetNum];
    if (targetNumIndex !== undefined) {
      return [targetNumIndex, i];
    } else {
      prevNum[temp] = i;
    }
  }
};

console.log(add([3, 3], 6));
console.log(add([12, 15, 2, 7], 9));
console.log(add([3, 2, 4], 6));
