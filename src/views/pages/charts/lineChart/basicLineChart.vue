<template>
  <div class="echarts-box">
    <div id="myEcharts" :style="{ width: '900px', height: '300px' }"></div>
    <div id="myEcharts" :style="{ width: '900px', height: '300px' }"></div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";

import { onMounted } from "vue";

onMounted(() => {
  let chart = echarts.init(document.getElementById("myEcharts"), "dark");
// 把配置和数据放这里
  chart.setOption(
    {
      // 全局调色盘。
      color: [
        '#c23531',
        '#2f4554',
        '#61a0a8',
        '#d48265',
        '#91c7ae',
        '#749f83',
        '#ca8622',
        '#bda29a',
        '#6e7074',
        '#546570',
        '#c4ccd3'
      ],
      xAxis: {
        type: "category",
        // 此系列自己的调色盘。
        color: [
          '#37A2DA',
          '#32C5E9',
          '#67E0E3',
          '#9FE6B8',
          '#FFDB5C',
          '#ff9f7f',
          '#fb7293',
          '#E062AE',
          '#E690D1',
          '#e7bcf3',
          '#9d96f5',
          '#8378EA',
          '#96BFFF'
        ],
        data: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ]
      },
      tooltip: {
        trigger: "axis"
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [
            820,
            932,
            901,
            934,
            1290,
            1330,
            1320,
            801,
            102,
            230,
            4321,
            4129
          ],
          type: "line",
          smooth: true
        }
      ]
    });


  window.onresize = function() {
    //自适应大小
    chart.resize();
  };
});


</script>


<style scoped>

</style>
