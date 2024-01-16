<template>
  <div class="wrapper">
    <ul class="list">
      <li class="list_li" v-for="(item, index) in routerConfig" :key="index">
        <a-button
          style="height: 100%; border-radius: 10px"
          block
          type="primary"
          @click="jump(item, index)"
        >
          {{ item.nickName }}
        </a-button>
      </li>
    </ul>
    <router-link to="/transmission/farther2Son"></router-link>
    <RouterViews/>
  </div>

</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import componentConfig, { routerConfig } from "../../router/componentConfig.js";
import RouterViews from "@/layout/RouterViews.vue";

const router = useRouter();


const jump = (item: any, index: number) => {

  const path = item.name;
  router.push({ name: path }); //编程导航方式

};
</script>

<style scoped>
.wrapper {
    width: 80%;
    margin: 0 auto;
}

.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;
    list-style: none;
}

.list .list_li {
    width: 200px;
    height: 90px;
    background: #4ba946;
    margin: 25px;
    border-radius: 20px;
}

.login-container {
    background-image: linear-gradient(to right, #4876ff, #4966ff);
    animation: hueRotate 10s infinite alternate;
}
</style>
