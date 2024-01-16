/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
const isEmpty = function(obj) {
  if (typeof obj === "object") {
    let res = Object.keys(obj);
    return res.length === 0;
  }
  return obj.length === 0;
};

// 方法二
var isEmpty2 = function(obj) {
  // 这里也可有可无，看心情
  // if (Array.isArray(obj)) return obj.length === 0;

  for (let key in obj) return false;
  return true;
};
