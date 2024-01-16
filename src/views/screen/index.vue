<template>
  <div class="container">
    <div class="screen" ref="screen">

      <topContainer class="top_container"></topContainer>

      <div class="main_container">
        <div class="left">
          <TouristChart class="tourist"></TouristChart>
          <SexChart class="age"></SexChart>
          <AgeChart class="sex"></AgeChart>
        </div>

        <div class="middle">
          <div class="map"></div>
          <div class="line"></div>
        </div>

        <div class="right">
          <div class="rank"></div>
          <div class="year"></div>
          <div class="count"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import topContainer from "./components/TopContainer/topContainer.vue";
import TouristChart from "@/views/screen/components/TouristChart/TouristChart.vue";
import AgeChart from "@/views/screen/components/ageChart/AgeChart.vue";
import SexChart from "@/views/screen/components/sexChart/SexChart.vue";
import {onMounted, ref} from "vue";

let screen = ref()
onMounted(() => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
})

//定义大屏缩放比例
function getScale(w = 1920, h = 1080) {
  const ww = window.innerWidth / w
  const wh = window.innerHeight / h
  return ww < wh ? ww : wh
}

//监听视口变化
window.onresize = () => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
}
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: url(./images/bg.png) no-repeat;
  background-size: cover;

  .screen {
    position: fixed;
    width: 1920px;
    height: 1080px;
    left: 50%;
    top: 50%;
    transform-origin: left top;

    .top_container {
      width: 100%;
      height: 40px;
    }


    .main_container {
      bottom: 0;
      left: 20px;
      right: 20px;
      top: 40px;
      position: absolute;


      .left {
        width: 30%;
        display: flex;
        flex-direction: column;

        .tourist {
          height: calc((100vh - 40px) / 10 * 4 - 47px);
        }

        .sex {
          height: calc((100vh - 40px) / 10 * 3 - 27px);
        }

        .age {
          height: calc((100vh - 40px) / 3);
        }

      }
    }
  }
}
</style>
