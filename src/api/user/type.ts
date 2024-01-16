// 接口请求的数据
export interface loginFromData {
  username: string
  password: string
}

// 接口返回数据类型的父接口
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

// 登录接口登录成功后返回数据类型
export interface loginResponseData extends ResponseData {
  data: string
}

// 定义获取用户信息接口类型
export interface userInfoResponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}

interface dataType {
  token?: string
  message?: string
}

interface userInfo {
  userId: number

  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface user {
  checkUser: userInfo
}

export interface userResponseData {
  code: number
  data: user
}
