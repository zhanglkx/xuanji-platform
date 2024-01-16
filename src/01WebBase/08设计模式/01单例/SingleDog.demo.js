// //把这段判断逻辑写成一个静态方法(其实也可以直接写入构造函数的函数体里）：
// class SingleDogDemo1 {

//     show() {
//         console.log('我是一个单例对象')
//     }

//     /**
//      * 单例模式的静态方法
//      * @returns {SingleDogDemo1}
//      */
//     static getInstance() {
//         if (!SingleDogDemo1.instance) {
//             SingleDogDemo1.instance = new SingleDogDemo1()
//         }
//         return SingleDogDemo1.instance
//     }
// }

// let a = SingleDogDemo1.getInstance()
// let b = SingleDogDemo1.getInstance()
// console.log(a === b);

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}
const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // true
function deepClone(obj) {
    // 如果是 值类型 或 null，则直接return
    if(typeof obj !== 'object' || obj === null) {
        return obj
    }
    
    // 定义结果对象
    let copy = {}
    
    // 如果对象是数组，则定义结果数组
    if(obj.constructor === Array) {
        copy = []
    }
    
    // 遍历对象的key
    for(let key in obj) {
        // 如果key是对象的自有属性
        if(obj.hasOwnProperty(key)) {
            // 递归调用深拷贝方法
            copy[key] = deepClone(obj[key])
        }
    }
    
    return copy
} 

let obj = {
    name: 'tom',
    age: 18,
    arr: [1, 2, 3],
    obj: {
        name: 'jerry',
        age: 18
    }
}

let obj2 = deepClone(obj)
obj2.name = 'jerry'

console.log(obj2)
console.log(obj)