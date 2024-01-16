<template>
  <RouterViews />
</template>

<script setup lang="ts">
// import { reqLogin } from './api/user'
// import {onMounted} from 'vue'

// onMounted(() => {
//   reqLogin({ username: 'admin', password: '111111' })
// })
import RouterViews from "@/layout/RouterViews.vue";
</script>

<style scoped lang="scss">
div {
  h1 {
    color: $color;
  }
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
