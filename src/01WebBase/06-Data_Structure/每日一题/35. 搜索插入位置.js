/**
 * 35. 搜索插入位置
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 * 请必须使用时间复杂度为 O(log n) 的算法。
 *
 * 示例 1:
 *
 * 输入: nums = [1,3,5,6], target = 5
 * 输出: 2
 *
 * 示例 2:
 *
 * 输入: nums = [1,3,5,6], target = 2
 * 输出: 1
 *
 * 示例 3:
 *
 * 输入: nums = [1,3,5,6], target = 7
 * 输出: 4
 *
 * 提示:
 *
 *     1 <= nums.length <= 104
 *     -104 <= nums[i] <= 104
 *     nums 为 无重复元素 的 升序 排列数组
 *     -104 <= target <= 104
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert1 = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return left
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums.indexOf(target) !== -1) return nums.indexOf(target);
    // 如果目标值不存在于数组中，则使用for循环遍历数组，依次比较每个元素与目标值的大小关系。
    // 如果遍历到的元素大于目标值，则说明目标值应该插入到当前位置，函数返回该位置的索引。
    // 如果遍历完整个数组后仍未找到插入位置，则说明目标值应该插入到数组的末尾，函数返回数组的长度。
    for (let i = 0; i < nums.length; i++)
        if (nums[i] > target)
            return i;
    return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
searchInsert1([1, 3, 5, 6], 2)
