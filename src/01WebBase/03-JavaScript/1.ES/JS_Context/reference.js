var value = 1;

var foo = {
  value: 2,
  bar: function () {
    console.log(22222);
    return this.value;
  },
};

var val = 3;
var foo1 = {
  val: 4,
  bar: function () {
    return this.val;
  },
};

//示例3
// console.log((foo.bar =  foo1.bar)()); //执行的是后面的这个foo1.bar
//示例4
// console.log((false || foo.bar)()); //等价于foo.bar()
// //示例5
// console.log((foo.bar, foo1.bar)()); //执行的是后面的这个foo1.bar
// //示例3
// console.log((foo1.bar = foo.bar)());
// //示例4
// console.log((false || foo1.bar)());
// //示例5
// console.log((foo1.bar, foo.bar)());
