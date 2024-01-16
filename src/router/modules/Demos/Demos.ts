const echarts = {
    path: '/MyDemos',
    component: ():any => import('@/layout/index.vue'),
    name: 'MyDemos',
    redirect: '/MyDemos/LogIn',
    meta: {
        title: '例子🌰',
        hidden: false,
        icon: 'Notebook',
    },
    children: [
        {
            path: '/MyDemos/LogIn',
            component: ():any => import('@/views/Demos/01Login/LogIn.vue'),
            name: 'LoginDemos',
            meta: {
                title: '登录',
                hidden: false,
                icon: 'Promotion',
            },
        },
        {
            path: '/MyDemos/Likes',
            component: ():any => import('@/views/Demos/02likes/likes.vue'),
            name: 'Likes',
            meta: {
                title: '点赞👍',
                hidden: false,
                icon: 'Ticket',
            },
        },
        {
            path: '/MyDemos/VoiceWave',
            component: ():any => import('@/views/Demos/04NaviBar/NavBar.vue'),
            name: 'NavBar',
            meta: {
                title: '动态导航栏',
                hidden: false,
                icon: 'Expand',
            },
        },
        {
            path: '/MyDemos/VoiceWave',
            component: ():any => import('@/views/Demos/03VoiceWave/VoiceWave.vue'),
            name: 'VoiceWave',
            meta: {
                title: '音浪',
                hidden: false,
                icon: 'User',
            },
        },
        {
            path: '/MyDemos/Test',
            component: ():any => import('@/views/Demos/test/TestFile.vue'),
            name: 'TestFile',
            meta: {
                title: '测试文件',
                hidden: false,
                icon: 'Switch',
            },
        },
        {
            path: '/Pages/CompoContact',
            component: (): any => import('@/views/pages/componentContact/CompoContact.vue'),
            name: 'CompoContact',
            meta: {
                title: '父子通信 ',
                hidden: false,
                icon: 'Key',
                keepAlive: true //需要被缓存
            },
        },
    ],
}

export default echarts
