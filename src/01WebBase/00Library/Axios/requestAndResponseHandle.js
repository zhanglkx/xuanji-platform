import Axios from 'axios'
import { Loading,Message  } from 'element-ui';

const request = Axios.create({
    baseURL: "https://api.mtnhao.com/"
})

//请求拦截
request.interceptors.request.use(requestStart,handleError)

//相应拦截
request.interceptors.response.use(responseSend, handleError)

let loading;
//主要是为了把统一时刻的请求合并
let startCount = 0;
let AUTH_TOKEN = localStorage.getItem('token')
//请求拦截
function requestStart(config) {
    // console.log(config);
    //统一添加请求头 ,只要有请求就会携带token
    config.headers = {
        Authorization: AUTH_TOKEN
    }
    //添加统一的loading,Loading.service 会创建一个 loading 实例 ,可通过调用该实例的 close 方法来关闭
   //在第一次请求 和 loading 还没有创建过之前 创建loading
    if (startCount === 0 && !loading) {
        loading = Loading.service({
            target: "body",
            text: '数据加载中',
            background: 'rgba(255,255,255,0.4)',
        });
    }
    startCount++
    return config;
}
//相应拦截
function responseSend(response) {
    // console.log(response);
  //只要返回无效token,就跳转到login页面重新登录
    if(response.data.meta.status === 400 && response.data.meta.msg === '无效token'){
        router.push('/login')
    }

    //取消loading,startcount === 0 说明相应全部回来之后再关闭loading
    startCount--;
    if (startCount === 0) {
        loading.close();
        loading = null;
    }
    return response;
}
//错误处理
function handleError(e) {
    Message.error({message:e.message})
    throw e
}

export default request;
