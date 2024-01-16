/**
 * 现给定一个对象或数组 obj，返回一个 精简对象 。
 * 精简对象 与原始对象相同，只是将包含 假 值的键移除。该操作适用于对象及其嵌套对象。
 * 数组被视为索引作为键的对象。当 Boolean(value) 返回 false 时，值被视为 假 值。
 * 你可以假设 obj 是 JSON.parse 的输出结果。换句话说，它是有效的 JSON。
 */

// 示例 1：

// 输入：obj = [null, 0, false, 1]
// 输出：[1]
// 解释：数组中的所有假值已被移除。
// 示例 2：

// 输入：obj = {"a": null, "b": [false, 1]}
// 输出：{"b": [1]}
// 解释：obj["a"] 和 obj["b"][0] 包含假值，因此被移除。
// 示例 3：

// 输入：obj = [null, 0, 5, [0], [false, 16]]
// 输出：[5, [], [16]]
// 解释：obj[0], obj[1], obj[3][0], 和 obj[4][0] 包含假值，因此被移除。

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
const compactObjectFail = function (obj) {

    if (!item) {
        delete item;
    }

    for (const item of obj) {
        console.log(item);
        if (typeof item === 'object') {
            compactObject(item)
        } else {
            if (!item) {
                delete item;
            }
        }
    }
    return obj
};
/**
 * 精简对象
 * @param {Object|Array} obj 
 * @return {Object|Array}
 */
const myCompactObject = (obj) => {
    if (obj instanceof Object) {
        let res = {};
        for (const [key, value] of Object.entries(obj)) {
            if (Boolean(value)) {
                res[key] = myCompactObject(value);
            }
        }
    }
    if (obj instanceof Array) {
        let res = obj.filter(Boolean).map(myCompactObject)
    }
}

/**
* @param {Object|Array} obj
* @return {Object|Array}
*/
var compactObject = function (obj) {
    if (obj instanceof Array) {
        return obj.filter(Boolean).map(compactObject);
    }
    if (obj instanceof Object) {
        const res = {};
        for (let [key, value] of Object.entries(obj)) {
            if (Boolean(value)) {
                res[key] = compactObject(value);
            }
        }
        return res;
    }
    return obj;
};


let arr1 = [null, 0, false, 1];
let obj = { "a": null, "b": [false, 1] }
let obj1 = [null, 0, 5, [0], [false, 16]]

let result = myCompactObject(obj);
console.log(result);
