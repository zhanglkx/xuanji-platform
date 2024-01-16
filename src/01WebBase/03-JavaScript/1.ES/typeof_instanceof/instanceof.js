/**
 * JS数据类型
 *
 */

// Number：用于表示数值，包括整数和浮点数。
// String：用于表示文本数据。
// Boolean：有两个值，true和false，用于进行逻辑操作。
// Null：有一个值null，表示一个空值。
// Undefined：表示变量未定义。
// Symbol：表示独一无二的值，通常用于对象属性的键。
// BigInt：用于存储大于2^53-1的整数。
// 对象（Object）类型


/* instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上**/


// 定义构造函数
function C() {}
function D() {}

var o = new C();

o instanceof C; // true，因为 Object.getPrototypeOf(o) === C.prototype

o instanceof D; // false，因为 D.prototype 不在 o 的原型链上

o instanceof Object; // true，因为 Object.prototype.isPrototypeOf(o) 返回 true
C.prototype instanceof Object; // true，同上

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

o instanceof C; // false，C.prototype 指向了一个空对象，这个空对象不在 o 的原型链上。

D.prototype = new C(); // 继承
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true 因为 C.prototype 现在在 o3 的原型链上



// Object.prototype.toString.call()
Object.prototype.toString.call({}); // "[object Object]"
Object.prototype.toString.call([]); // "[object Array]"
Object.prototype.toString.call(666); // "[object Number]"
Object.prototype.toString.call('xxx'); // "[object String]"
// 该方法返回的是一个格式为"[object Object]"的字符串。


// 为了更方便的使用，我们可以将这个方法进行封装：
function getType(value) {
    let type = typeof value;
    if (type !== 'object') { // 如果是原始数据类型，直接返回
        return type;
    }
    // 如果是引用数据类型，再进一步判断，正则返回结果
    return Object.prototype.toString.call(value).replace(/^\[object (\S+)\]$/, '$1');
}

getType(123); // number
getType('xxx'); // string
getType(() => {}); // function
getType([]); // Array
getType({}); // Object
getType(null); // Null
