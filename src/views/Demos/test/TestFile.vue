<template>
  <div class="wrapper">
    <div id="coordinates"></div>
    <div id="coordinates11"></div>
    <div id="box">
      <button>哈哈哈哈哈哈哈哈哈哈哈哈</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';


let handleMouseEnter = (e: any) => {
  console.log(e);
}

onMounted(() => {
  let myDiv: any = document.querySelector('.wrapper');
  myDiv.addEventListener('mouseenter', handleMouseEnter);

  document.addEventListener('mousemove', function (event: any) {
    document.getElementById("coordinates").innerHTML = "坐标：" + event.clientX + "," + event.clientY;
    document.getElementById("coordinates11").innerHTML = "坐标：" + event.target.offsetLeft + "," + event.target.offsetTop;
  });


})




</script>
<style scoped lang="scss">
.in {
  position: absolute;
  top: 50%;
  left: 50%;
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
.out {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 200px;
  height: 200px;
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



.wrapper {
  width: 400px;
  height: 400px;
  top: 0;
  left: 0;
  background-color: #49ffcb;
}

button {
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 50px;
  background-color: #bd1717;
  border-radius: 5px;
  ;
}
</style>
