<template>
  <nav>
    <div></div>
    <div>
      <h1>
        动态路由以及meta更改
      </h1>
      <h1>参数{{ para }}</h1>
    </div>
    <title>标题</title>
  </nav>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const para = route.params.postId;

</script>

<style lang="scss" scoped>

</style>
