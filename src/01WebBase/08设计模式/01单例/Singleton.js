/**
 * 方式一
 * var Singleton = function (name) {
 *     this.name = name;
 *     this.instance = null;
 * }
 * Singleton.prototype.getName = function () {
 *     return this.name;
 * }
 * Singleton.getInstance = function (name) {
 *     if (!this.instance) {
 *         this.instance = new Singleton(name);
 *     }
 *     return this.instance;
 * }
 */
const Singleton = function(name) {
  this.name = name;
};
Singleton.prototype.getName = function () {
  return this.name;
}
Singleton.getInstance = (function () {
  let instance = null;
  return function (name) {
    if (!instance) {
      instance = new Singleton (name);
    }
    return instance;
  }
})();

// 测试
const s1 = Singleton.getInstance("this is a singleton");
const s2 = Singleton.getInstance("this is another singleton");
console.log(s1 === s2); // true
console.log(s1.getName()); // this is a singleton
console.log(s2.getName()); // this is another singleton

