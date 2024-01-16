async function async1() {
    console.log(1)
    await async2()
    console.log(2)
}

const async2 = async () => {
    await (async () => {
        await (() => {     //遇到await会发生阻塞，导致await所在区块之后的代码无法执行，此处不会打印4
            console.log(3)
        })()
        console.log(4)
    })()
}

const async3 = async () => {
    Promise.resolve().then(() => {
        console.log(6)
    })
}

async1()

console.log(7)

async3()
