let sym = Symbol();
console.log(typeof sym);

// SECTION:全局注册表
// Symbol.for对所有字符串执行幂等操作
let fooGlobalSymbol = Symbol.for("foo");  //创建新符号
let otherGlobalSymbol = Symbol.for("foo"); //重用已有符号
// TODO: 1111
console.log(fooGlobalSymbol === otherGlobalSymbol);


let localSymbol = Symbol("foo");
console.log(localSymbol === fooGlobalSymbol);

// 查询
console.log(Symbol.keyFor(otherGlobalSymbol));

// 作为属性
let s1 = Symbol("foo");
let o = { [s1]: "foo eval" };
// o[s1] = "foo 11";  或者这样
console.log(o);
Object.defineProperty(o, s1, { value: "s1Val" });
console.log(o);
