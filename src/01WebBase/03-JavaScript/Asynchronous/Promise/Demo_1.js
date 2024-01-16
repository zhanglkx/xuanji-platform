function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

/**
 * 
 * @param {时间} timmer 是啊今时
 * @param {函数} cb  1111
 * @returns 都回我好多
 */
let light = function (timmer, cb) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            cb();
            resolve();
        }, timmer);
    });
};

/**
 * step
 */
let step = function () {
    Promise.resolve().then(function () {
        return light(3000, red);
    }).then(function () {
        return light(2000, green);
    }).then(function () {
        return light(1000, yellow);
    }).then(function () {
        step();
    });
}

step();