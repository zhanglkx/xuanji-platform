const urls = ["url1", "url2", 'url3', "url4", "url5", "url6", "url7", "url8", "url9" , "url100"];
const maxConcurrentNum = 10; // 最大并发数 
// 数组分块，chunk表示每批次数量，返回数组二维数组 
function chunk(arr, chunk) {
    let result = [];
    for (let i = 0, len = arr.length; i < len; i += chunk) {
        result.push(arr.slice(i, i + chunk));
    }
    return result;
}

// 异步请求方法 
function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
}

// 对url数组进行分块处理
const chunkedUrls = chunk(urls, maxConcurrentNum);

(async function () {
    try {
        for (let urls of chunkedUrls) {
            const promises = urls.map(url => fetchUrl(url));
            // 等待所有promises完成执行，并将结果存入results数组中
            const results = await Promise.all(promises);
            console.log('results:', results);
        }
    } catch (err) {
        console.error(err);
    }
})();
