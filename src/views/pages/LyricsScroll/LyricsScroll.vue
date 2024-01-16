<template>
  <div>
    <!--音视频标签-->
    <hr>
    <!--<div>网络视频</div>-->
    <!--<video-->
    <!--  src="https://aux-saas.oss-cn-hangzhou.aliyuncs.com/adwelcome/%E5%A5%A5%E5%85%8B%E6%96%AF%E6%8B%86%E8%A7%A3%E8%A7%86%E9%A2%91.mp4"-->
    <!--  style="width: 300px;height: 150px;" controls autoplay loop="false" poster="src/assets/image/img.png">-->
    <!--</video>-->
    <hr>
    <div>加载本地</div>
    <video controls style="width: 300px;height: 150px;">
      <source src="../../../assets/video/奥克斯拆解视频.mp4" type="video/mp4">
    </video>

    <div>加载本地告白气球</div>
    <audio src="../../../assets/audio/告白气球.mp3" controls autoplay loop="true">

    </audio>
    <br>
    <!--<audio src="https://dict.youdao.com/dictvoice?audio=poster: The specified video is not fully downloaded, or the user has not clicked on the cover that is displayed before playing. By default, the first shot of the current video file is displayed. You c&le=en-->
    <!--" controls autoplay loop="true">-->

    <!--</audio>-->
    <!--<br>-->
    <div class="container">
      <ul class="lrc-list"></ul>
    </div>
  </div>
</template>

<script setup>

import { lrc } from "./lrcStr.js";

function parseTime(timeStr) {
  const parts = timeStr.split(":");
  return +parts[0] * 60 + +parts[1]; // +一元运算符转数字
}

function parseLrc() {
  const lines = lrc.split("\n");
  const result = []; // 歌词对象数组

  for (let i = 0; i < lines.length; i++) {
    const str = lines[i];
    const parts = str.split("]");
    const timeStr = parts[0].substring(1);
    const obj = {
      time: parseTime(timeStr),
      words: parts[1]
    };
    result.push(obj);
  }

  return result;
}

// 获取需要的dom
const doms = {
  audio: document.querySelector("audio"),
  ul: document.querySelector(".lrc-list"),
  container: document.querySelector(".container")
};

function findIndex() {
  const curTime = doms.audio.currentTime;
  for (let i = 0; i < lrcData.length; i++) {
    if (curTime < lrcData[i].time) {
      return lrcData[i - 1].words ? i - 1 : i - 2;
    }
  }
  // 找遍了没有找到（说明播放到歌词的最后一句）
  return lrcData.length - 1;
}

function createElements() {
  const frag = document.createDocumentFragment(); // 文档片段
  for (let i = 0; i < lrcData.length; i++) {
    const li = document.createElement("li");
    li.textContent = lrcData[i].words;
    frag.appendChild(li);
  }
  doms.ul.appendChild(frag);
}

// 容器高度
const containerHight = doms.container.clientHeight;
// li的高度
const liHight = doms.ul.children[0].clientHeight;
// 偏移最大值
const maxOffset = doms.ul.clientHeight - containerHight;

/**
 * 设置ul元素的便宜量
 */
function setOffset() {
  const index = findIndex();
  let offset = liHight * index + liHight / 2 - containerHight / 2;
  if (offset < 0) {
    offset = 0;
  }
  if (offset > maxOffset) {
    offset = maxOffset;
  }
  // 设置偏移量给ul
  doms.ul.style.transform = `translateY(-${offset}px)`;
  // 去掉之前的样式
  let li = doms.ul.querySelector(".active");
  if (li) {
    li.classList.remove("active");
  }
  // 高亮
  li = doms.ul.children[index];
  if (li) {
    li.classList.add("active");
  }
}

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

body {
    background-color: #000;
    color: #666;
    text-align: center;
}

audio {
    width: 450px;
    margin: 30px 0;
}

.container {
    height: 420px;
    overflow: hidden;
}

.container ul {
    transition: 0.2s;
}

.container li {
    height: 30px;
    line-height: 30px;
    transition: 0.6s;
}

.container li.active {
    color: #fff;
    transform: scale(1.2); /* 放大，不影响集合属性，没有reflow */
}
</style>
