/**
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
 *
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 *
 * 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 *
 * 示例 1：
 *
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 *
 * 示例 2：
 *
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 *
 * 示例 3：
 *
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 *
 * 提示：
 *     0 <= nums.length <= 105
 *     -109 <= nums[i] <= 109
 *     nums 是一个非递减数组
 *     -109 <= target <= 109
 */

/**
 *  在排序数组中查找元素的第一个和最后一个位置，使用二分查找，先找左边界，再找右边界，时间¡O(log n)
 * @param nums
 * @param target
 * @returns {number[]}
 */
const searchRange1 = function (nums, target) {
    //查找左边界
    const getLeftBorder = (nums, target) => {
        let left = 0, right = nums.length - 1;
        let leftBorder = -2;// 记录一下leftBorder没有被赋值的情况
        while (left <= right) {
            let middle = left + ((right - left) >> 1);
            if (nums[middle] >= target) { // 寻找左边界，nums[middle] == target的时候更新right ⚠️注意这里是大于等于
                right = middle - 1;
                leftBorder = right;
            } else {
                left = middle + 1;
            }
        }
        return leftBorder;
    }
    //查找右边界
    const getRightBorder = (nums, target) => {
        let left = 0, right = nums.length - 1;
        let rightBorder = -2; // 记录一下rightBorder没有被赋值的情况
        while (left <= right) {
            let middle = left + ((right - left) >> 1);
            if (nums[middle] > target) {        //⚠️注意这里是大于等于
                right = middle - 1;
            } else { // 寻找右边界，nums[middle] == target的时候更新left
                left = middle + 1;
                rightBorder = left;
            }
        }
        return rightBorder;
    }

    let leftBorder = getLeftBorder(nums, target);
    let rightBorder = getRightBorder(nums, target);
    // 情况一
    if (leftBorder === -2 || rightBorder === -2) return [-1, -1];
    // 情况三
    if (rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1];
    // 情况二
    return [-1, -1];
};

/**
 * 二分查找，时间复杂度O(log n)
 * @param nums 数组
 * @param target 目标
 */
const searchRange = (nums, target) => {

    const searchLeft = (nums, target) => {
        let left = 0, right = nums.length - 1;
        let leftBorder = -2;
        while (left <= right) {
            let middle = Math.floor((left + right) / 2)
            if (nums[middle] >= target) {
                right = middle - 1;
                leftBorder = middle;
            } else {
                left = middle + 1;
            }
            console.log('左', left, right, leftBorder, middle)
        }

        return leftBorder;
    }

    const searchRight = (nums, target) => {
        let left = 0, right = nums.length - 1;
        let rightBorder = -2;
        while (left <= right) {
            let middle = Math.floor((left + right) / 2)
            if (nums[middle] > target) {
                right = middle - 1;
            } else {
                left = middle + 1;
                rightBorder = middle;
            }
            console.log('右', left, right, rightBorder, middle)
        }
        return rightBorder;
    }

    let leftBorder = searchLeft(nums, target);
    let rightBorder = searchRight(nums, target);
    // 情况一
    if (leftBorder === -2 || rightBorder === -2) return [-1, -1];
    // 情况三 target 在数组范围中，且数组中存在target，例如数组{3,6,7},target为6，此时应该返回{1, 1}
    if (rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1];
    // 情况二
    return [-1, -1];

}

const searchRange2 = function (nums, target) {
    let left = 0;                   //左指针
    let right = nums.length - 1;    //右指针
    let first = -1;                 //第一个元素
    let last = -1;                  //最后一个元素

    // 找第一个等于 target 的位置
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) {
            first = middle;
            right = middle - 1; // 重点
        } else if (nums[middle] > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    // 最后一个等于 target 的位置
    left = 0;
    right = nums.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) {
            last = middle;
            left = middle + 1; // 重点
        } else if (nums[middle] > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return [first, last];
};


console.log(searchRange2([5, 7, 7, 8, 8, 10], 9))
// searchRange([5, 7, 7, 8, 8, 10], 8)
