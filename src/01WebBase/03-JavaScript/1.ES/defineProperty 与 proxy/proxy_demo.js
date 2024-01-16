const target = {
    foo: 'bar'
}

const handler = new Proxy(target, {
    set: function (target, key, newValue) {
        console.log(`监听set: 监听${key}的设置值: `, newValue)
        target[key] = newValue
        console.log(arguments);
    },
    get: function (target, key, receiver) {
        console.log(`监听get: 监听${key}的获取`)
        console.log(arguments);
        return target[key]
    }
})

const proxy = new Proxy(target, handler);
proxy.foo = 1;
console.log(proxy.foo);


