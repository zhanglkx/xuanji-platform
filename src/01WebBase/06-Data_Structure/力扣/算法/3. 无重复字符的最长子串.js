/**
 * 官方
 */
let lengthOfLongestSubstring1 = function(s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1, ans = 0;
  for (let i = 0; i < n; ++i) {
    if (i !== 0) {
      // 左指针向右移动一格，移除一个字符
      occ.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 不断地移动右指针
      occ.add(s.charAt(rk + 1));
      ++rk;
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};

/**
 * 题解1
 */
const lengthOfLongestSubstring = function(str) {
  console.log(str);
  if (str.length <= 1) {
    return str.length;
  }
  let left = 0;
  let right = 1;
  let max = 0;
  let temp;
  while (right < str.length) {
    temp = str.slice(left, right);

    let char = str.charAt(right);
    let index = temp.indexOf(char);
    if (index > -1) {
      left++;
      continue;
    } else {
      right++;
    }
    if (right - left > max) {
      max = right - left;
    }
  }
  return max;
};

/**
 * 仿写题解1,使用指针
 * 这里的逻辑做一下简单梳理，以免自己再忘了
 * 这里是双指针写法，左指针指向最长子串的左边，右指针指向右边，右指针依次向后移，当遇见子串已经包含的元素，移动左指针，
 * 目的是移除已经添加到子串内的重复元素，当子串中不包含重复元素的时候，继续移动右指针
 */

function findLongestStringWithPoint(str) {
  let left = 0; //左指针指向最长子串的左边
  let right = 1; //右指针指向最长子串的右边
  let max = 0; //最长子串的长度
  let tempStr;

  if (str.length <= 1) return str.length; //判空处理

  while (right < str.length) {
    //当右指针未越界超出父串长度的情况下
    tempStr = str.slice(left, right); //这里截取子串，然后进行判断是否包含子串最右边字符
    let strRightStr = str.charAt(right);
    if (tempStr.indexOf(strRightStr) > -1) {
      //> -1，也就是包含的情况下，向左侧移动,注意，这里只有left++;
      // 表明字符串会一直查询，知道不包含right位置的元素，注意⚠️做判断的时候，未执行 right++;字符串，
      // 也就是str.charAt(right)并未在字符串中
      left++;
    } else {
      right++;
    }

    if (right - left > max) {
      max = right - left;
    }
  }
  return max;
}

/**
 * 仿写题官方,使用指针+Set
 */

function findLongestStringWithSet(str) {
  let strSet = new Set();
  let rightPoint = 0;
  let leftPoint = 0;
  let maxLen = 0;
  console.log("abcabcbb");
  while (rightPoint < str.length) {
    if (strSet.has(str.charAt(rightPoint))) {
      strSet.delete(str.charAt(leftPoint));
      leftPoint++;
    } else {
      strSet.add(str.charAt(rightPoint));
      rightPoint++;
    }

    maxLen = rightPoint - leftPoint > maxLen ? rightPoint - leftPoint : maxLen;
  }
  return maxLen;
}

// console.log(findLongestStringWithSet("bbbbb"));
console.log(findLongestStringWithPoint("abcabcbb"));
findLongestStringWithPoint("abcabc1bb");
