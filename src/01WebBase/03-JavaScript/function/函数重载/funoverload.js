/**
 * 给对象添加方法
 * @param {Object} object - 要添加方法的对象
 * @param {string} name - 方法名
 * @param {function} fn - 新方法函数
 */
function addMethod(object, name, fn) {
    // 获取原有方法
    const old = object[name];

    // 重写方法
    object[name] = function (...args) {
        // 如果参数个数与新方法参数个数相同，调用新方法
        if (args.length === fn.length) {
            return fn.apply(this, args);
        }
        // 否则，调用原有方法
        else if (typeof old === 'function') {
            return old.apply(this, args);
        }
    };
}

const search = {}
addMethod(search, 'find', ()=>{
    console.log('find');
});
addMethod(search, 'find', (name)=>{
    console.log('find'+name);
});

addMethod(search,'find',(firstName,secondName)=>{
    console.log('find'+firstName+secondName);
})

search.find(); // 输出: find
search.find('1'); // 输出: find1
search.find('1','2'); // 输出: find12