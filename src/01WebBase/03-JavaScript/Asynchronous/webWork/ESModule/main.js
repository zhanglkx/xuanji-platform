// main.js（主线程）
const worker = new Worker('/worker.js', {
    type: 'module'  // 指定 worker.js 的类型
});
