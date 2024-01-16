// 读取用户屏幕第一行放了多少张图
// 操作下一张图，找到上一行最矮的高度，将图片排放到其下方
// 参数：parent - 包含图片的容器的ID，content - 图片元素的类名
function imgLocation(parent, content) {
    // 获取父容器和所有图片元素
    let cparent = document.getElementById(parent);
    let ccontent = getChildElement(cparent, content);
    // 计算每张图片的宽度，以及每行可容纳的图片数量
    let imgWidth = ccontent[0].offsetWidth;
    // 每行可容纳的图片数量 
    // document.documentElement.clientWidth - 窗口中文档的可见部分的宽度，不包括滚动条、边框和外边距
    let num = Math.floor(document.documentElement.clientWidth / imgWidth);
    // 设置父容器的宽度，以适应图片布局
    // cssText 是 DOM 中用于设置或获取元素内联样式文本的属性
    cparent.style.cssText = `width: ${imgWidth * num}px`;

    // 用于存储每列的高度
    let BoxHeightArr = [];
    for (let i = 0; i < ccontent.length; i++) {
        if (i < num) {
            // 第一行图片的高度
            BoxHeightArr[i] = ccontent[i].offsetHeight;

            // 如果不添加这三行代码，会导致窗口增大过程中，元素原来的列数不会改变，进而导致竖直方向高度叠加，图片定位不正确，
            let currentElement = ccontent[i];
            currentElement.style.position = 'absolute';
            currentElement.style.top = '0px';
            currentElement.style.left = i * imgWidth + 'px';

        } else {
            // 找到BoxHeightArr中最小的高度值
            let minHeight = Math.min.apply(null, BoxHeightArr);
            // 找到最矮列的索引
            let minIndex = BoxHeightArr.indexOf(minHeight);

            let currentElement = ccontent[i];

            // 设置图片位置为绝对定位，放置在最矮列的下方
            currentElement.style.position = 'absolute';
            currentElement.style.top = minHeight + 'px';
            currentElement.style.left = ccontent[minIndex].offsetLeft + 'px';
            // 更新最矮列的高度
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight;
        }
    }
    console.log('每行图片数量:' + num);
}

// 获取指定父容器中指定类名的所有子元素
// 参数：parent - 父容器元素，content - 子元素的类名
function getChildElement(parent, content) {
    let contentArr = [];
    let allContent = parent.getElementsByTagName('*');
    for (let i = 0; i < allContent.length; i++) {
        if (allContent[i].className == content) {
            // 如果子元素的类名与指定类名匹配，将其加入数组
            contentArr.push(allContent[i]);
        }
    }
    return contentArr;
}

// 调用图片布局函数，传入父容器ID和图片元素类名，实现瀑布流布局
imgLocation('container', 'box');
// console.log(imgLocation);

function throttle(func, delay) {
    let lastCallTime = 0;
  
    return function (...args) {
      const now = Date.now();
  
      if (now - lastCallTime >= delay) {
        func.apply(this, args);
        lastCallTime = now;
      }
    };
  }


const throttledFn = throttle(function() {
    imgLocation('container', 'box')
  }, 100);

// 在事件处理中使用
window.addEventListener('resize', throttledFn);
