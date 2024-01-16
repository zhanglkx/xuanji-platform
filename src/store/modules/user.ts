import { defineStore } from 'pinia'

import type {
  loginFromData,
  loginResponseData,
  userInfoResponseData,
} from '@/api/user/type.ts'
// 引入接口
import { reqLogin, reqUserInfo, reqLogout } from '@/api/user'
// 引入·用户token返回类型
import type { UserState } from './types/type.ts'
// token存储
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token.ts'
// 引入路由/常量路由
// import { constantRouter } from '@/router/router.ts'
import {routerList} from "@/router";

//创建用户小仓库
const useUserStore = defineStore('user', {
  // 小仓库存储数据的地方
  state: (): UserState => {
    return {
      // token: localStorage.getItem('TOKEN'),//用户唯一标识token
      token: GET_TOKEN(), //用户唯一标识token
      menuRoutes: routerList, // 仓库存储菜单需要的数组
      username: '',
      avatar: '',
    }
  },
  // 处理异步逻辑的地方
  actions: {
    // 登录
    async userLogin(data: loginFromData) {
      this.token = 'Admin Token'
      SET_TOKEN(this.token as string)
      return 'ok'
      // 以上是假数据，接口崩了，保证项目运行

      // eslint-disable-next-line no-unreachable
      const result: loginResponseData = await reqLogin(data)
      console.log(result)
      if (result.code === 200) {
        // 登录成功后，存储一下token
        this.token = result.data as string
        // 本地化存储
        SET_TOKEN(result.data as string)
        // localStorage.setItem('TOKEN', result.data.token as string)
        // 保证当前返回的是一个成功的promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data))
      }
    },
    // 获取用户信息方法
    async userInfo() {
      this.username = 'system'
      this.avatar =
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
      return 'ok'
      // 以上是假数据，接口崩了，保证项目运行
      //    获取用户信息 存储到仓库中
      const result: userInfoResponseData = await reqUserInfo()
      if (result.code == 200) {
        this.username = result.data.name
        this.avatar = result.data.avatar
        console.log(this.username, this.avatar)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    //退出登录
    async userLogout() {
      //退出登录请求
      const result: any = await reqLogout()
      if (result.code == 200) {
        //目前没有mock接口:退出登录接口(通知服务器本地用户唯一标识失效)
        this.token = ''
        this.username = ''
        this.avatar = ''
        REMOVE_TOKEN()
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
  },
  getters: {},
})
export default useUserStore
