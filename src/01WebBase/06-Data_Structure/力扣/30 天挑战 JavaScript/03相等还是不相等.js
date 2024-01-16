/**
 * @param {string} val
 * @return {Object}
 */
const expect = function(val) {
  return {
    toBe: function(a) {
      if (val === a) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },

    notToBe: function(b) {
      if (val !== b) {
        return true;
      } else {
        throw new Error("Equal");
      }
    }
  };
};
//一下方法执行速度赶快
const expec1t = function(val) {
  return {
    toBe:function(a){
      if(val===a)  return true
      throw new  Error ("Not Equal")
    },
    notToBe:function(b){
      if(val!==b){
        return true
      }else{
        throw new Error("Equal")
      }
    }
  };
};
//
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
; // true
console.log(expect(5).toBe(51));
