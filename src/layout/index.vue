<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
// 获取用户相关的小仓库
import useUserStore from '@/store/modules/user.ts'
// 封装的 右侧内容展示区域
import Main from './main/index.vue'
// 顶部的tabbar
import Tabbar from './tabbar/index.vue'
import { useRoute } from 'vue-router'
import useLayOutSettingStore from '@/store/modules/setting.ts'
// 获取路由对象
let route = useRoute()
// 获取路由对象
let userStore = useUserStore()

let layOutSettingStore = useLayOutSettingStore()
</script>
<script lang="ts">
export default {
  name: 'Layout',
}
</script>

<template>
  <div class="layout_container">
    <!--左侧菜单-->
    <div class="layout_slider">
      <Logo></Logo>
      <!--  展示菜单 不添加过渡动画 使导航栏压盖到他上面-->
      <el-scrollbar class="scrollbar">
        <el-menu
          :collapse="!!layOutSettingStore.fold"
          background-color="#001529"
          text-color="white"
          active-text-color="skyblue"
          :default-active="route.path"
        >
          <!--  根据路由动态生成菜单-->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!--顶部菜单-->
    <div class="layout_tabbar" :class="{ fold: !!layOutSettingStore.fold }">
      <Tabbar></Tabbar>
    </div>
    <!--内容展示区域-->
    <div class="layout_main" :class="{ fold: !!layOutSettingStore.fold }">
      <Main></Main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    color: white;
    transition: all 0.3s;

    .scrollbar {
      height: calc(100vh - $base-menu-logo-height);
      width: 100%;

      .el-menu {
        border-right: none;
      }
    }
  }

  .layout_tabbar {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    position: fixed;
    top: 0;
    left: $base-menu-width;
    transition: all 0.3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    //background: lightgoldenrodyellow;
    top: $base-tabbar-height;
    left: $base-menu-width;
    padding: 3px;
    overflow: auto;
    transition: all 0.3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
