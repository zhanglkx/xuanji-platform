import router from './router'
// @ts-expect-error
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
import useUserStore from '@/store/modules/user.ts'
import pinia from '@/store'
import {RouteLocationNormalized, RouteLocationNormalizedLoaded} from "vue-router";

const userStore = useUserStore(pinia)

// @ts-expect-error
router.beforeEach(async (to, from, next) => {
  // document.title = `${setting.title} - ${to.meta.title}`
  document.title = `${to.meta.title}`

  nprogress.start()

  // 获取用户名字
  const username = userStore.username

  const token = userStore.token
// debugger
  if (token) {
    if (to.path == '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        next()
      } else {
        //如果没有用户信息,在守卫这里发请求获取到了用户信息再放行
        try {
          await userStore.userInfo()
          next()
        } catch (error) {
          //token过期:获取不到用户信息了
          //用户手动修改本地存储token
          //退出登录->用户相关的数据清空
          await userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})

router.afterEach((to, from) => {
  // console.log(to)
  // console.log(from)
  nprogress.done()
})

router.onError((error: any, to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded)=>{
  console.log(error)
  // console.log(to)
  // console.log(from)
})

//第一个问题:任意路由切换实现进度条业务 ---nprogress
//第二个问题:路由鉴权(路由组件访问权限的设置)
//全部路由组件:登录|404|任意路由|首页|数据大屏|权限管理(三个子路由)|商品管理(四个子路由)

//用户未登录:可以访问login,其余六个路由不能访问(指向login)
//用户登录成功:不可以访问login[指向首页],其余的路由可以访问
