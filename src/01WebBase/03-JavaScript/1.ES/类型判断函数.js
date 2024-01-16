/**
 * 类型判断函数
 */
const class2type = {};

// 生成class2type映射
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
"Boolean Number String Function Array Date RegExp Object Error Null Undefined".split(" ").map(function(item, index) {
  class2type["[object " + item + "]"] = item.toLowerCase();
});

console.log(class2type);

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
function type1(obj) {
  console.log(Object.prototype.toString.call(obj));
  return typeof obj === "object" || typeof obj === "function" ?
    class2type[Object.prototype.toString.call(obj)] || "object" :
    typeof obj;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
function type(obj) {
  // 一箭双雕
  if (obj == null) {
    return obj + "";
  }
  return typeof obj === "object" || typeof obj === "function" ?
    class2type[Object.prototype.toString.call(obj)] || "object" :
    typeof obj;
}
