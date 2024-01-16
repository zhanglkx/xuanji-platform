// basic usage
/**
 * async声明该函数是异步的，且该函数会返回一个promise。
 * await必须放在async函数中使用
 */


/**
 *
 * --await+Promise
 * 这是最常见的场景，await 会等待Promise的状态改为fullfilled，如果成功，那么会将async函数剩余任务推入到微任务队列，如果失败，那么剩余任务不会被推入微任务队列执行，它会返回Promise.reject(err)
 *
 */



/*
 * --await + 普通的值
 * **即使await右边非函数,只是一个普通的数值，但它本质上是将其转化为 Promise.resolve(2),所以会返回一个成功的promise **
 * 因此，当await等待到了成功的结果后，它会将async函数剩余内容推入到微任务队列中等待执行。
 *
* */

// async function run() {
//     console.log('start-1');
//     const res = await 2;
//     const res = Promise.resolve(2) 直接执行，不会和await一样等待
//     console.log(res);
//     console.log('end');
// }

// run()
// console.log(3);


/**
 * --await+函数
 * 如果await 右边是一个函数，它会立刻执行这个函数，而且只有当这个函数执行结束后(即函数完成)！才会将async剩余任务推入微任务队列
 * 就是异步里面搞一个同步
 */

async function fn() {
    console.log('fn start')
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('fn end')
            resolve(); //必须添加这段代码 因为Promise被返回了但是没有执行--函数返回了一个 Promise，
            // 但没有调用 resolve() 或 reject() 来明确解决或拒绝这个 Promise。这意味着 await fn() 将一直等待，因为 Promise 没有完成。
        }, 2000);
    });
}

// function fn() {
//     console.log('fn start')
//     console.log('fn end')
//     return Promise.reject(1);
// }

async function run(params) {
    console.log('start');
    const res = await fn(); //await方法会阻塞后续方法的执行，但是不会阻塞自己的执行
    console.log('end');
}

run()
console.log(3);
