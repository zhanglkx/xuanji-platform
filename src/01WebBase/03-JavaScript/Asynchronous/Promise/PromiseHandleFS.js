var fs = require('fs');
var path = require('path');

// function findLargest1(dir, cb) {
//     // 读取目录下的所有文件
//     fs.readdir(dir, function(er, files) {
//         if (er) return cb(er);

//         var counter = files.length;
//         var errored = false;
//         var stats = [];

//         files.forEach(function(file, index) {
//             // 读取文件信息
//             fs.stat(path.join(dir, file), function(er, stat) {

//                 if (errored) return;

//                 if (er) {
//                     errored = true;
//                     return cb(er);
//                 }

//                 stats[index] = stat;

//                 // 事先算好有多少个文件，读完 1 个文件信息，计数减 1，当为 0 时，说明读取完毕，此时执行最终的比较操作
//                 if (--counter == 0) {

//                     var largest = stats
//                         .filter(function(stat) { return stat.isFile() })
//                         .reduce(function(prev, next) {
//                             if (prev.size > next.size) return prev
//                             return next
//                         })

//                     cb(null, files[stats.indexOf(largest)])
//                 }
//             })
//         })
//     })
// }

// 查找当前目录最大的文件
// findLargest('./', function(er, filename) {
//     if (er) return console.error(er)
//     console.log('largest file was:', filename)
// });
// findLargest('./')



/**
 * 使用async版本和await版本对比对比---文心一言
 */

async function findLargest(dir) {
    try {
        // 读取目录下的所有文件  
        const files = await fs.promises.readdir('./');
        console.log(files);

        const stats = await Promise.all(files.map((file) =>
            fs.stat(path.join(dir, file))
        ));

        // 过滤出文件，然后通过大小找出最大的文件  
        const largestFileIndex = stats.reduce((prev, curr, index) =>
            (curr.isFile() && prev.size < curr.size) ? index : largestFileIndex
        );

        return files[largestFileIndex];
    } catch (error) {
        // 处理错误  
        console.error(error);
        return null;
    }
}

/**
 * 使用async版本和await版本对比对比---GPT
 */
findLargest()
  .then((longestFileName) => {
    console.log(`最长的文件名是：${longestFileName}`);
  })
  .catch((err) => {
    console.error(err);
  });


async function readFiles() {
    const files = await fs.promises.readdir('./');
  const longestFileName = files.reduce((acc, curr) => {
    return curr.length > acc.length ? curr : acc;
  });
  return longestFileName;
}

readFiles()
  .then((longestFileName) => {
    console.log(`最长的文件名是：${longestFileName}`);
  })
  .catch((err) => {
    console.error(err);
  });
