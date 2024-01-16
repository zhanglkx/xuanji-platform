<template>
  <div class="wrapper">
    <div class="container">
      <span id="target"></span>
      <h1>登录</h1>
      <el-form class="form">
        <el-input v-model="count" type="text" placeholder="账号" class="tbx"></el-input>
        <input v-model="password" type="password" placeholder="密码" class="tbx" />
        <el-input type="submit" placeholder="登录" class="sub" @click="login"></el-input>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";

let count = ref(0);
let password = ref(0);
let span = null as any;

// 定义两个函数开关（门）
let isIn = true;      // 鼠标进去的门，默认打开
let isOut = false;    // 鼠标出去的门，默认关闭
let myDiv = ref<HTMLDivElement | null>(null) as any;
onMounted(() => {
  myDiv = document.querySelector('.container');
  myDiv.addEventListener('mouseenter', handleMouseEnter);
  myDiv.addEventListener('mouseleave', handleMouseLeave);
});

// mouseenter 事件处理函数
const handleMouseEnter = (e: any) => {
  // 如果进去的门是打开的，就可以执行这个函数

  if (isIn) {
    // 获取进入的鼠标位置
    // 生成元素的位置=进入点距离窗口的距离-父盒子距离窗口的距离
    let inX = e.clientX - e.target.offsetLeft - 280;
    let inY = e.clientY - e.target.offsetTop - 70;
    console.log(inX, inY)
    // 创建一个span元素，并且给它对应的出生坐标
    //  span = document.querySelector('.container span');
    let el: any = document.querySelector('.container span');
    el.style.left = inX + 'px';
    el.style.top = inY + 'px';
    // 添加到con对应的父元素，即container
    myDiv.appendChild(el);

    // 返回一个匹配到的第一个元素，如果没有匹配到任何元素则返回null
    span = document.querySelector('#target');
    // 返回一个jQuery对象，该对象包含匹配到的所有元素。即使只有一个匹配项，也会返回一个包含该元素的jQuery对象。
    // let element = $('.container span');
    // console.log(el)
    el.classList.add('in'); // 添加CSS类名 - 移除出去的动画
    el.classList.remove('out');  // 添加进入的动画
    // console.log(el)
    isIn = false;     // 关闭进来的门（不能使用进入的方法）
    isOut = true;     // 打开出去的门（可以使用出去的方法）
  }
};
// mouseLeave  事件处理函数

const handleMouseLeave = (e: any) => {

  if (isOut) {
    // 获取出去的鼠标位置
    // 生成元素的位置=出去点距离窗口的距离-父盒子距离窗口的距离
    let outX = e.clientX - e.target.offsetLeft - 260;
    let outY = e.clientY - e.target.offsetTop - 50;

    // console.log(outX, outY);

    span = document.querySelector('#target');
    span.classList.add('out'); // 添加CSS类名 - 移除出去的动画
    span.classList.remove('in');  // 添加进入的动画

    // 添加出去的坐标
    span.style.left = outX + 'px';
    span.style.top = outY + 'px';


    isOut = false;    // 关闭出去的门
    // 当动画结束后再删除元素
    setTimeout(() => {
      // myDiv.removeChild(span);      // 删除元素
      isIn = true;                  // 打开进入的门
    }, 500);
  }
};


// 测试函数，为input添加V-model，否则输入框不能输入字符
function login() {
}
</script>

<style scoped lang="scss">
.wrapper {
  /* 设置body高度为100%窗口高度 */
  height: 90vh;
  /* 弹性盒子模型 */
  display: flex;
  /* 限免两个属性是让body里的子类居中 */
  justify-content: center;
  align-items: center;
  //background-color: #1d1928;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 500px;
  border-radius: 30px;
  background-color: #4471a3;
  /* 盒子阴影 */
  box-shadow: 15px 15px 10px rgba(33, 45, 58, 0.3);
  overflow: hidden;
  position: relative;
}

h1 {
  font-size: 28px;
}

.container .form {
  width: 350px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.container .form el-input {
  //background-color: rgba(0, 0, 0, 0);;
  //background-color: rgba(0, 0, 0, 0);;
  background-color: black;
  border-color: red;
}

.container .form .tbx {
  width: 250px;
  height: 40px;
  outline: none;
  border: none;
  border-bottom: 1px solid #fff;
  background: none;
  color: #fff;
  font-size: 15px;
}

/* 设置文本框提示文本的样式 */
.container .form .tbx::placeholder {
  color: #fff;
  font-size: 15px;
}

.container form .sub {
  width: 250px;
  height: 40px;
  outline: none;
  border: 1px solid #fff;
  border-radius: 20px;
  letter-spacing: 5px;
  color: #fff;
  background: none;
  cursor: pointer;
  margin-top: 20px;
}

.container h1 {
  color: #ecf0f1;
  font-size: 50px;
  letter-spacing: 5px;
  font-weight: 100;
  /* 文字阴影 */
  text-shadow: 5px 5px 5px rgba(33, 45, 58, 0.3);
  z-index: 1;
}

/* 设置鼠标进入的样式 */
.container .in {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: #cf455f;
  transform: translate(-50%, -50%);
  /* 使用in动画，持续0.5秒，缓出的时间函数，停留在最后一帧 */
  animation: in 0.5s ease-out forwards;
}

/* 设置鼠标离开的样式 */
.container .out {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 1200px;
  height: 1200px;
  border-radius: 50%;
  background: #cf455f;
  transform: translate(-50%, -50%);
  /* 使用out动画，持续0.5秒，缓出的时间函数，停留在最后一帧 */
  animation: out 0.5s ease-out forwards;
}

/* 动画 */
/* 设置鼠标进入时，元素的动画 */
@keyframes in {

  /* 初始关键帧 */
  0% {
    width: 0;
    height: 0;
  }

  /* 结束关键帧 */
  100% {
    width: 1200px;
    height: 1200px;
  }
}

/* 设置鼠标离开时，元素的动画 */
@keyframes out {

  /* 初始关键帧 */
  0% {
    width: 1200px;
    height: 1200px;
  }

  /* 结束关键帧 */
  100% {
    width: 0;
    height: 0;
  }
}
</style>

<style lang="scss">
.wrapper .el-input {
  --el-input-text-color: #fff;
  --el-input-placeholder-color: #fff;
}

.wrapper .el-input__wrapper {
  --el-input-bg-color: rgba(255, 255, 255, 0.001);
  --el-input-hover-border-color: rgba(255, 255, 255, 0.001);
  --el-input-focus-bg-color: rgba(255, 255, 255, 0.0001);
  box-shadow: none;
  padding: 0;
  border-radius: 20px
}

.wrapper .el-input__wrapper.is-focus {
  box-shadow: none;
}
</style>
