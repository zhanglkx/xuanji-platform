<script setup>
import {useRoute} from "vue-router";

const route = useRoute()

</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive v-if="route.meta.keepAlive">
      <component :is="Component"/>
    </keep-alive>
    <component :is="Component" v-else/>
  </router-view>
</template>
