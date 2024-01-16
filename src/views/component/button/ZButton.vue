<script setup lang="ts">
// 不需要引入 直接使用
// import { defineProps } from "vue"
const props = defineProps({
  // 写法一
  // msg2: String
  // 写法二
  msg2: {
    type: String,
    default: ""
  }
})
console.log(props) // { msg2:"这是传级子组件的信息2" }
</script>

<template>
  <h1>按钮</h1>
</template>

<style scoped lang="scss">

</style>
