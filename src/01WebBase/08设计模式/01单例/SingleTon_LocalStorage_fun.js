function storageBase() { }

storageBase.prototype.set = function (key, value) {
    localStorage.setItem(key, value);
};
storageBase.prototype.get = function (key) {
    return localStorage.getItem(key);
};

let storage = (function () {
    let instance = null;
    return function () {
        if (instance == null) {
            instance = new storageBase();
        }
        return instance;
    }
})()

let example1 = storage();
let example2 = storage();
console.log(example1 === example2);

// 这里其实不用 new Storage 的形式调用，直接 Storage() 也会有一样的效果 
let example3 = new storage();
let example4 = new storage();
console.log(example3 === example4);

let example5 = storage();
let example6 = new storage();
console.log(example5 === example6);
