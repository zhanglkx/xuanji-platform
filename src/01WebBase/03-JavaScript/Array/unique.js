// V1 双层for循环
function unique1(array) {
  // res用来存储结果
  const res = [];
  for (let i = 0, arrayLen = array.length; i < arrayLen; i++) {
    for (var j = 0, resLen = res.length; j < resLen; j++) {
      if (array[i] === res[j]) {
        break;
      }
    }
    // 如果array[i]是唯一的，那么执行完循环，j等于resLen
    if (j === resLen) {
      res.push(array[i]);
    }
  }
  return res;
}

/**
 * 使用indexOf
 * @param array
 * @returns {[]}
 */
function unique2(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (res.indexOf(array[i]) === -1) {
      res.push(array[i]);
    }
  }
  return res;
}

/**
 * 排序后去重
 */
function unique3(array) {
  const res = [];
  // array.concat()作用是创建array的副本
  const sortedArray = array.concat().sort();
  let seen;
  for (let i = 0, len = sortedArray.length; i < len; i++) {
    // 如果是第一个元素或者相邻的元素不相同
    // 如果i为假值（例如0，null，undefined，NaN，或者空字符串等），则!i会返回真
    if (!i || seen !== sortedArray[i]) {
      res.push(sortedArray[i]);
    }
    seen = sortedArray[i];
  }
  return res;
}

// 排序去重的方法：
function unique5(array) {
  return array.concat().sort().filter(function(item, index, array) {
    return !index || item !== array[index - 1];
  });
}

// es6
function unique4(array) {
  return array.filter(function(item, index, array) {
    return array.indexOf(item) === index;
  });
}

// set
// 最简化版本 --> var unique = (a) => [...new Set(a)]
function unique6(array) {
  return Array.from(new Set(array));
  // return [...new Set(array)];
}


// 如果用 Map 的话：
function unique(arr) {
  const seen = new Map();
  // 如果元素不存在（即!seen.has(a)为true），并且set方法成功添加元素到'seen' Map中（即seen.set(a, 1)返回true），则该元素被添加到新的数组中。最终，函数返回这个新的数组
  return arr.filter((a) => !seen.has(a) && seen.set(a, 1));
}


let array = [1, 3, 2, 2, 1, 2, "1", "1", "2"];


const sortedArray = array.concat().sort();
