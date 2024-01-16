<script setup>
import { ref } from 'vue'
import {ElButton} from "element-plus";

const count = ref(0)
</script>

<template>
  <p>Current component: C</p>
  <span>count: {{ count }}</span>
  <ElButton type="default" @click="count++">+</ElButton>
</template>
