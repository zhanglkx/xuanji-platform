async function async1() {
    console.log(1)
    await async2()
    console.log(2)
}

const async2 = async () => {
    await setTimeout((_) => {
        Promise.resolve().then((_) => {
            console.log(3)
        })
        console.log(4)
    }, 0)
}

const async3 = async () => {
    Promise.resolve().then(() => {
        console.log(6)
    })
}

async1()

console.log(7)

async3()

/**
 * 首先分析：
 * 同步任务>微任务>宏任务
 * 首先执行async1()，打印 --->1 
 * 然后执行async2() ，定时器是宏任务，调用后将函数放置到任务队列，等待回调完成
 *  ⚠️注意，此处并不会直接打印 2 ，因为async2的执行阻塞了async1内部的执行，在async2的结果没有返回之前，async2下面的代码是不会执行的
 * async1内部执行了异步事件，此时继续往下，打印--->7
 * 遇到async3， Promise的then方法是微任务，进入任务队列，在宏任务前执行 --->打印6
 * 当async2结果返回后，注意不是定时器执行， --->打印2
 * 开始执行定时器，定时器里面打印4为同步任务，执行  --->打印4
 * Promise的.then为微任务，进入任务队列，执行。 --->打印3
 * 
 */


/**
1
7
6
2
4
3
 */
