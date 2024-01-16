<template>
  <div>
    <h2>watch</h2>
    <div>
      <button @click="setCount">+{{ count }}</button>
      <button @click="setName">{{ name }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const count = ref(10);
const name = ref('join');

const setCount = () => {
  count.value++
}

const setName = () => {
  name.value = 'hello'
}
/**
 * 在watch的第二个参数中，函数的参数可以是一个，也可以是两个，两个的话就是新旧值，一个的话就是新值
 * 注意 watch观察的值只能是相应式的对象 也即是ref和reactive包裹起来的
 */
watch(count, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})

</script>

<style scoped>
button {
  margin: 20px;
  width: 100px;
  height: 50px;
  font-size: large;
}
</style>
