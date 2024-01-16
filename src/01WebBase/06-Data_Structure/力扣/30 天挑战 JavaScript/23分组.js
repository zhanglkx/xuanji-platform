/**
 * @param {Function} fn
 * @return {Array}
 */

Array.prototype.groupBy = function(fn) {
  let res = {};
  for (const element of this) {
    let item = fn(element);
    if (!res.hasOwnProperty(item)) res[item] = [];
    res[item].push(element);
  }
  return res;
};


let arr = [{ "id": "1" }, { "id": "1" }, { "id": "2" }];
let fn = function(item) {
  return item.id;
};

console.log(arr.groupBy(fn));
