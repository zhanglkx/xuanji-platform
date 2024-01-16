<template>
<div class = "age_wrap">
  <div class = "age_rate">
    <div class = "title">年龄比例</div>
   <img src = "../../images/dataScreen-title.png" alt = "" />
  </div>
  <div class = "chart" ref = "chart"></div>
</div>
</template>
<script setup lang = "ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

let chart = ref();

onMounted(() => {
  let myChart = echarts.init(chart.value);
  myChart.setOption({
    tooltip: {
      trigger: "item"
    },
    legend: {
      right: 30,// 定位，和副标题一排，且在右边
      top: 40,
      orient: "vertical",
      textStyle: {
        color: "#ff1",
        fontSize: 14
      }
    },
    series: [{
      name: "Access Form",
      type: "pie",
      radius: ["50%", "80%"],
      avoidLabelOverLap: false, //控制是否允许标签重叠的
      itemStyle: {
        borderRadius: 15,
        borderColor: "#fff",
        borderWidth: 2
      },
      label: {
        show: true,
        position: "inside",
        color: "#fff"
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1026, name: "军事" },
        { value: 126, name: "军2事" },
        { value: 426, name: "军3事" },
        { value: 626, name: "军4事" },
        { value: 896, name: "军事4" }
      ]
    }],
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }
  });
});

</script>
<style scoped lang = "scss">

.age_wrap {
  background: url(../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;

  .age_rate {

    margin-left: 10px;
    margin-top: 6px;

    .title {
      color: white;
      font-size: 16px;
    }

  }

  .chart{
    margin-top: -20px;
    width: 100%;
    height: 100%;
  }

}

</style>
