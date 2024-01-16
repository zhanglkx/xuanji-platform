const Enumerable_first = function() {
  this.first = function() {
    return this[0];
  };
};

const list = ["foo", "bar", "baz"];
Enumerable_first.call(list); // explicit delegation
// list.first(); // "foo"
console.log(list.first());
