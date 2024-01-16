<template xmlns="">
  <el-button
    size="small"
    icon="Refresh"
    circle
    @click="updateRefresh"
  ></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
  <el-button size="small" icon="Setting" circle @click=""></el-button>
  <img
    :src="userStore.avatar"
    alt="头像"
    style="height: 24px; width: 24px; margin: 0 10px; border-radius: 50%"
  />

  <!--  下拉菜单-->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登陆</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useLayOutSettingStore from '@/store/modules/setting.ts'
import useUserStore from '@/store/modules/user.ts'
import { useRoute, useRouter } from 'vue-router'

let router = useRouter()
let route = useRoute()
let LayOutSettingStore = useLayOutSettingStore()
const updateRefresh = () => {
  LayOutSettingStore.refresh = !LayOutSettingStore.refresh
}
const fullScreen = () => {
  // DOM属性 用于判断是否全屏
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    //退出全屏
    document.exitFullscreen()
  }
}

// 获取pinia中的用户信息
let userStore = useUserStore()

const logout = async () => {
  // 第一件事 需要向服务器发送请求 退出登陆

  // 二 仓库中用户相关数据清空
  // 三 调转登录界面
  await userStore.userLogout()

  router.push({ path: '/login', query: { redirect: route.path } })
}
</script>
<script lang="ts">
export default {
  name: 'Setting',
}
</script>

<style scoped lang="scss"></style>
