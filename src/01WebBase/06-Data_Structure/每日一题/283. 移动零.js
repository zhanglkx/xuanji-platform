/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 *
 * 示例 1:
 *
 * 输入: nums = [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 示例 2:
 *
 * 输入: nums = [0]
 * 输出: [0]
 *
 * 提示:
 *
 * 1 <= nums.length <= 104
 * -231 <= nums[i] <= 231 - 1
 *
 * 进阶：你能尽量减少完成的操作次数吗？
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroesV0 = function (nums) {
    let slow = 0;
    let zeres = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] === 0) {
            nums[slow] = fast;
            zeres++;
        } else {
            nums[slow] = nums[fast];
            slow++;
        }

    }
    for (let i = 0; i < zeres; i++) {
        nums[nums.length - 1 - i] = 0;
    }
};

moveZeroesV0([0, 1, 0, 3, 12])

/**
 * 还不如上边这个
 * @param nums
 */
const moveZeroes = function (nums) {
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] === 0) {
            nums[slow] = fast;
        } else {
            nums[slow] = nums[fast];
            slow++;
        }

    }
    for (let i = 0; i < nums.length - slow; i++) {
        nums[nums.length - 1 - i] = 0;
    }
    console.log(nums)
};

moveZeroes([0, 1, 0, 3, 12])
moveZeroes([0])
moveZeroes([1, 0, 2, 3, 0, 4, 5, 0])
