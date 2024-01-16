import { createApp } from 'vue'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 项目中引入svg需要的代码/配置项
import 'virtual:svg-icons-register'

// 引入自定义插件对象 注册整个项目全局组件
import globalComponent from '@/components'

// 引入全局样式
import '@/styles/index.scss'

// 注册路由
import router from './router'
// pinia
import pinia from './store/index'

//引入路由鉴权文件
import './permisstion.ts'
// 引入tailwindcss
import './tailwind.css'


// 获取应用示例对象
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
// 安装自定义插件
app.use(globalComponent).use(router).use(pinia)
app.mount('#app')
