<script setup>
import {useRoute, useRouter} from "vue-router";
import {ElButton} from 'element-plus'
import PageOne from "@/views/pages/KeepAlive/PageOne.vue";
import RouterViews from '@/layout/RouterViews.vue'

const route = useRoute()
const router = useRouter()

const routerAHandle = () => {
  router.replace('/Pages/CompA')
  console.log(route.meta.keepAlive)
}

const routerBHandle = () => {
  router.replace('/Pages/CompB')
  console.log(route.meta.keepAlive)
}

const routerCHandle = () => {
  router.replace('/Pages/CompC')
  console.log(route.meta.keepAlive)
}

</script>

<template>
  <div class="demo">
    <ElButton type="default" @click=routerAHandle>PageOne</ElButton>
    <ElButton type="default" @click=routerBHandle>PageTwo</ElButton>
    <ElButton type="default" @click=routerCHandle>PageThree</ElButton>


    <RouterViews/>
  </div>
</template>
