<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0">站位</el-col>
      <el-col :span="12" :xs="24">
        <!-- n表单元素 -->
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>Hello</h1>
          <h2>欢迎来到璇玑管理平台</h2>
          <!--u用户名-->
          <el-form-item prop="username">
            <el-input
              prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <!--密码-->
          <el-form-item prop="password">
            <el-input
              prefix-icon="Lock"
              type="password"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <!--  按钮-->
          <el-form-item>
            <el-button
              class="login_btn"
              type="primary"
              size="large"
              :loading="loading"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user.ts'
import { useRoute, useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getHourTime } from '@/utils/time.ts'
// 获取el-form组件
let loginForms = ref()

let loginForm = reactive({ username: 'admin', password: 'atguigu123' })
let loading = ref(false)
let useStore = useUserStore()
let router = useRouter()
let route = useRoute()
/**
 * 登录事件
 */
const login = async () => {
  // 保证全部的表单项校验通过才发请求
  await loginForms.value.validate()

  // 开始加载
  loading.value = true

  try {
    // 登录成功
    // 这里也可以使用.then语法
    await useStore.userLogin(loginForm)
    let redirect: any = route.query.redirect
    await router.push({ path: redirect || '/' })
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI,${getHourTime()}好`,
    })
    loading.value = false
  } catch (err) {
    ElNotification({ type: 'error', message: (err as Error).message })
    loading.value = false
  }
}
/**
 * 用户名校验规则
 * @param rule 即为校验规则对象
 * @param value 即为表单元素文本内容
 * @param callback 如果符合条件callBack放行通过,不符合，callBack方法注入错误提示信息
 */
const validatorUserName = (rule: any, value: any, callback: any) => {
  console.log(rule)
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
  console.log(rule)
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少六位'))
  }
}

// 定义表单校验对象
//规则对象属性:
//required,代表这个字段务必要校验的 bool
//min:文本长度至少多少位 number
//max:文本长度最多多少位
//message:错误的提示信息 string
//trigger:触发校验表单的时机 change->文本发生变化触发校验,blur:失去焦点的时候触发校验规则 string
const rules = {
  username: [{ validator: validatorUserName, trigger: 'change' }],
  password: [
    // {required: true, min: 6, max: 10, message: '密码长度至少6位', trigger: 'change'},
    { validator: validatorPassword, trigger: 'change' },
  ],
}
</script>

<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: #1a1a1a url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    padding: 40px;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;

    h1 {
      font-size: 40px;
      color: white;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
