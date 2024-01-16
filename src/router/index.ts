import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRouter } from './router'


// import.meta.glob() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.glob('./modules/**/*.ts', { eager: true });
const routeModuleList = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = (modules)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export let routerList =  constantRouter.concat(routeModuleList);


const router = createRouter({
  history: createWebHashHistory(),
  routes: routerList ,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
    }
  },
})


export default router
