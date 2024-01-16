// 函数作为参数被传递
// function print(fb) {
//     const b = 200;
//     fb();
// }
//
// const b = 100;
//
// function fb() {
//     console.log(b);
// }
//
// print(fb); // 100
/**
 * 作用域链
 */
// var scope = "global scope";
//
// function checkscope() {
//     // var scope = "local scope";
//
//     function f() {
//         return scope;
//     }
//
//     return f;
// }
//
// console.log(checkscope()())
// checkscope()();
//
// var value = 1;
//
// var foo = {
//     value: 2,
//     bar: function () {
//         return this.value;
//     }
// }
//
// //示例1
// console.log(foo.bar());
// //示例2
// console.log((foo.bar)());
// //示例3
// console.log((foo.bar = foo.bar)());
// //示例4
// console.log((false || foo.bar)());
// //示例5
// console.log((foo.bar, foo.bar)());

//
// var data = [];
//
// for (var i = 0; i < 3; i++) {
//     data[i] = (function (i) {
//         console.log(i + '=');
//         return function () {
//             console.log(i);
//         }
//
//     })(i);
// }
//
// data[0]();
// data[1]();
// data[2]();
//
//
// let abc = 1;
// abc = 'ass';
//
// console.log(abc)
var data = [];

for (var i = 0; i < 3; i++) {
    (data[i] = function () {
        console.log(arguments.callee.i)
    }).i = i;
}

data[0]();
data[1]();
data[2]();

console.log(data[0].i)
