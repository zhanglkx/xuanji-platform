<script setup lang="ts">
import ZButton from "@/views/component/button/ZButton.vue";

import { ref, reactive } from "vue"
const msg2 = ref("这是传给子组件的信息2")
// 或者复杂类型
// const msg2 = reactive(["这是传级子组件的信息2"])
// let msg2 = 1;

</script>

<template>
  <ZButton :msg2="msg2">按钮</ZButton>
</template>

<style scoped lang="scss">

</style>
