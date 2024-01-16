<template>
<div class = "left_wrap">
  <div class = "top">
    <p class = "title">实时游客统计</p>
    <p class = "bg"></p>
    <p class = "right">可预约总量<span>99999</span>人</p>
  </div>
  <div class = "number">
      <span v-for = "(item, index) in people" :key = "index">{{ item }}</span>
  </div>
  <!-- 盒子将来echarts展示图形图标的节点 -->
  <div class = "chart" ref = "charts">123</div>
</div>
</template>
<script setup lang = "ts">
import { onMounted, ref } from "vue";

import "echarts-liquidfill";
import * as echarts from "echarts";

let people = ref("215908人");
let charts = ref();
onMounted(() => {
  //获取echarts类的实例
  let myCharts = echarts.init(charts.value);
  //设置实例的配置项
  myCharts.setOption({
    //标题组件
    title: {
      text: "水球图"
    },
    //x|y轴组件
    xAxis: {},
    yAxis: {},
    //系列:决定你展示什么样的图形图标
    series: {
      type: "liquidFill",//系列
      data: [0.6, 0.4, 0.2],//展示的数据
      waveAnimation: true,//动画
      animationDuration: 3,
      animationDurationUpdate: 0,
      radius: "100%",//半径
      outline: {//外层边框颜色设置
        show: true,
        borderDistance: 8,
        itemStyle: {
          color: "skyblue",
          borderColor: "#294D99",
          borderWidth: 8,
          shadowBlur: 20,
          shadowColor: "rgba(0, 0, 0, 0.25)"
        }
      }
    },
    //布局组件
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }

  });
});



</script>
<style scoped lang = "scss">
.left_wrap {
  background: url(../../images/dataScreen-main-lb.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 10px;
  color: white;

  .top {
    .title {
      color: white;
      font-size: 15px;
    }

    .bg {
      width: 68px;
      height: 7px;
      background: url(../../images/dataScreen-title.png) no-repeat;
      background-size: 100% 100%;
      margin-top: 10px;
    }

    .right {
      top: 0;
      float: right;
      font-size: 17px;
      color: aqua;

      span {
        color: yellowgreen;
      }
    }
  }

  .number {
    display: flex;
    margin-top: 18px;

    span {
      flex: 1;
      height: 25px;
      text-align: center;
      line-height: 25px;
      background: url(../../images/total.png) no-repeat;
      background-size: 100% 100%;
      color: #29fcff;
    }

  }

  .chart {
    width: 66%;
    height: 66%;
  }

}
</style>
