/**
 * 常见的 Reflect 方法和它们的用法：

Reflect.get(target, propertyKey, receiver): 用于获取目标对象的属性值。
Reflect.set(target, propertyKey, value, receiver): 用于设置目标对象的属性值。
Reflect.has(target, propertyKey): 检查目标对象是否具有指定属性。
Reflect.deleteProperty(target, propertyKey): 用于删除目标对象的属性。
Reflect.construct(target, argumentsList, newTarget): 用于创建一个新的对象实例。
Reflect.apply(target, thisArg, argumentsList): 用于调用目标对象的方法。
 */

let person = { name: "xx", age: 20 };

const target = { name: "John" };
// 输出 age 的值
// console.log(Reflect.get(person, 'age', person));
// 修改 age 的值，返回 true
// console.log(Reflect.set(person, 'age', 23, person));

let personProxy = new Proxy(person, {
  get(target, key, receiver) {
    if (target.age < 18) {
      return Reflect.get(target, key, receiver);
    } else {
      return "xx 成年了";
    }
  },
});

const proxy = new Proxy(target, {
  get(target, prop) {
    console.log(`Getting ${prop} property`);
    return Reflect.get(target, prop);
  },
  set(target, prop, value) {
    console.log(`Setting ${prop} property to ${value}`);
    return Reflect.set(target, prop, value);
  },
});

// age:17 输出：17  age:20 输出：xx 成年了
console.log(personProxy.age);

proxy.name = "Alice"; // 输出: "Setting name property to Alice"
console.log(proxy.name); // 输出: "Getting name property"，然后输出 "Alice"
