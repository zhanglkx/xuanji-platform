function foo(b, c, d) {
    // console.log("实参的长度为：" + arguments.length)
}

// console.log("形参的长度为：" + foo.length)

// foo(1)

// 形参的长度为：3
// 实参的长度为：1


/**
 * callee属性
Arguments 对象的 callee 属性，通过它可以调用函数自身。

讲个闭包经典面试题使用 callee 的解决方法：
 */

var data = [];

for (var i = 0; i < 3; i++) {
    (data[i] = function () {
        console.log(arguments.callee.i)
    }).i = i;
}

// data[0]();
// data[1]();
// data[2]();

// 0
// 1
// 2


// 在 JavaScript 中，arguments.callee 是一个特殊的属性，它指向当前正在执行的函数。这意味着，如果你在一个函数内部访问 arguments.callee，你将得到这个函数的引用。
function exampleFunc(a, b) {
    console.log(arguments.callee === exampleFunc);  // 输出: true  
}

// exampleFunc(1, 2);

/*
 * arguments 和对应参数的绑定
 * 
 * @param {any} name  1
 * @param {any} age 1
 * @param {any} sex 1
 * @param {any} hobbit 1
* */
function foo(name, age, sex, hobbit) {

    console.log(name, arguments[0]); // name name

    // 改变形参
    name = 'new name';
    console.log(name, arguments[0]); // new name new name

    // 改变arguments
    arguments[1] = 'new age';
    console.log(age, arguments[1]); // new age new age

    // 测试未传入的是否会绑定
    console.log(sex); // undefined
    sex = 'new sex';
    console.log(sex, arguments[2]); // new sex undefined

    arguments[3] = 'new hobbit';
    console.log(hobbit, arguments[3]); // undefined new hobbit

    console.log(arguments)
}

foo('name', 'age')