<template>
  <div class="flex items-center justify-between w-full select-none relative h-[46px] px-[16px] shrink-0 bg-amber-400 ">
    <div class=" ">
      <el-button icon="ArrowLeft" text @click=""></el-button>
    </div>
    <div class="text-[16px] font-black overflow-hidden text-ellipsis whitespace-nowrap" :style="{ color: color }">
      {{ title }}
    </div>
    <div class=" ">
      <ElButton icon="More" text @click=""></ElButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {ElButton} from 'element-plus'

let title = ref('醉后不知天在水')
let color = ref('red')

</script>

<style scoped></style>
