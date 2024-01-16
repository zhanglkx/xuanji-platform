// worker.js（worker线程）
// esmodule模式
import add from './utils.js'; // 导入外部js

self.addEventListener('message', e => { 
    postMessage(e.data);
});

add(1, 2); // log 3

export default self; // 只需把顶级对象self暴露出去即可


// ======================== 常规引用
// worker.js（worker线程）
// 使用方法：importScripts(path1, path2, ...); 

importScripts('./utils.js');

console.log(add(1, 2)); // log 3
