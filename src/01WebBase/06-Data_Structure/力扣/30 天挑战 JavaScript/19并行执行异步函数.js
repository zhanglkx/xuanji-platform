/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */


const promiseAll = async function(functions) {
  return new Promise((resolve, reject) => {
    const resArr = [];

    let resCount = 0;
    functions.forEach((fn, i) => {
      fn().then(res => {
        resArr[i] = res;
        console.log(resCount);
        // :TODO 重点！！！这里为什么不用 i== functions.length-1，因为要使用resCount的值来让保证数组中全部的promise都执行完成
        // 否则，如果令 i== functions.length-1，假如第三个promise函是执行最快的，最先走到.then方法，那么此时i就等于3，判断结果为true，直接就resolve了
        // 但是此时前两个函数还没有执行完毕，这就会出错，使用resCount来计算所有执行完毕的函数累加，才不会导致这样的问题
        if (++resCount === functions.length) {
          resolve(resArr);
        }
      }).catch(reject);
    });
  });
};


const promise = promiseAll([() => new Promise(resolve => setTimeout(() => resolve(4), 50)), () => new Promise(resolve => setTimeout(() => resolve(10), 1500)), () => new Promise(resolve => setTimeout(() => resolve(16), 100))]);
promise.then(console.log); // [42]

