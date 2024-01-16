<template>
  <div class = "wrap">
    <div class = "main_page">
      <div class = "main_page_content" @click = "backHome">首页</div>
    </div>
    <div class = "main_title">
      <div class = "title">
        数据不可视化小屏
      </div>
    </div>
    <div class = "main_statistics">
      <div class = "statistics">统计报告</div>
      <div class = "time">当前时间是：{{ time }}</div>
    </div>
  </div>
</template>

<script setup lang = "ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
//@ts-ignore
import moment from "moment";

let router = useRouter();
let route = useRoute();

let time = ref(moment().format("YYYY年MM月DD日 hh:mm:ss"));
let timer = ref(0);

onMounted(() => {
  timer.value = setInterval(() => {
    time.value = moment().format("YYYY年MM月DD日 hh:mm:ss");
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timer.value);
});
/**
 * 返回首页
 */
const backHome = () => {
  router.push({ path: "/" });
};

</script>

<style scoped lang = "scss">
.wrap {
  display: flex;
  color: cyan;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;


  .main_page {
    flex: 1.5;
    background: url(../../images/dataScreen-header-left-bg.png) no-repeat;
    background-size: cover;

    .main_page_content {
      height: 120%;
      width: 140px;
      float: right;
      line-height: 40px;
      text-align: center;
      background: url(../../images/dataScreen-header-btn-bg-l.png) no-repeat;
      background-size: 100% 100%;
    }
  }

  .main_title {
    flex: 2;

    height: 67px;
    background: url(../../images/dataScreen-header-center-bg.png) no-repeat;
    background-size: 100% 100%;


    .title {
      text-align: center;
      line-height: 60px;
      font-size: 30px;
    }
  }

  .main_statistics {
    flex: 1.5;

    background: url(../../images/dataScreen-header-left-bg.png) no-repeat;
    background-size: cover;

    height: 30px;
    color: cyan;
    display: flex;
    justify-content: space-between;



    .statistics {
      height: 120%;
      width: 120px;
      text-align: center;
      line-height: 34px;
      background: url(../../images/dataScreen-header-btn-bg-r.png) no-repeat;
      background-size: cover;
    }

    .time {
      margin-right: 10px;
      line-height: 30px;
    }
  }


}
</style>
