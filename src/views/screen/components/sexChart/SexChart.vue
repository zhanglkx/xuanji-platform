<template>
  <div class="sex_wrap">
    <div class="title">
      <div class="title_text">男女比例</div>
      <img src="../../images/dataScreen-title.png" alt=""/>
    </div>
    <div class="sex_img">
      <div class="man">
        <img src="../../images/man.png" alt="女士">
      </div>
      <div class="women">
        <img src="../../images/woman.png" alt="男士">
      </div>
    </div>
    <div class="percentage">
      <p>男士58%</p>
      <p>女士42%</p>
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
//获取图形图标的DOM节点
let charts = ref()
onMounted(() => {
  //初始化echarts实例
  let myCharts = echarts.init(charts.value)
  console.log(myCharts)
  //设置配置项
  myCharts.setOption({
    //组件标题
    title: {
      text: '男女比例', //主标题
      textStyle: {
        //主标题颜色
        color: 'skyblue',
      },
      left: '40%',
    },
    //x|y
    xAxis: {
      show: false,
      min: 0,
      max: 100,
    },
    yAxis: {
      show: false,
      type: 'category',
    },
    series: [
      {
        type: 'bar',
        data: [58],
        barWidth: 20,
        z: 100,
        itemStyle: {
          color: 'skyblue',
          borderRadius: 20,
        },
      },
      {
        type: 'bar',
        data: [100],
        barWidth: 20,
        //调整女士柱条位置
        barGap: '-100%',
        itemStyle: {
          color: 'pink',
          borderRadius: 20,
        },
      },
    ],
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
  })
})
</script>

<style scoped lang="scss">
.sex_wrap {
  background: url(../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  margin: 10px 0;

  .title {
    margin-left: 10px;
    margin-top: 10px;
    color: #ffffff;
    font-weight: 30;
    font-size: 16px;

    .title_text {
      font-size: 16px;
    }
  }

  .sex_img {
    display: flex;
    justify-content: center;

    .man {
      margin: 20px;
      width: 111px;
      height: 115px;
      background: url(../../images/man-bg.png) no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .women {
      margin: 20px;
      width: 111px;
      height: 115px;
      background: url(../../images/woman-bg.png) no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .percentage {
    margin-top: -30px;
    display: flex;
    justify-content: space-between;
    color: white;
  }

  .charts {
    height: 100px;
  }
}

</style>
