/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function(init) {
  const temp = init;
  return {
    increment: function() {
      return ++init;
    },
    reset: function() {
      return init = temp;
    },
    decrement: function() {
      return --init
    }
  };
};

// 更好的写法
const createCounte1r = function(init) {
  return {
    initVal: init,
    increment: function() {
      return ++init;
    },
    reset: function() {
      return  (init = this.initVal);
    },
    decrement: function() {
      return --init
    }
  };
};


const counter = createCounter(5);
// counter.increment(); // 6
// counter.increment(); // 6
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

