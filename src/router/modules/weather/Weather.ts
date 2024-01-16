const echarts = {
    // echarts
    path: '/weather',
    component: () => import('@/layout/index.vue'),
    name: 'weather',
    redirect: '/weather/weatherInfo',
    meta: {
        title: 'weather',
        hidden: false,
        icon: 'PartlyCloudy',
    },
    children: [
        {
            path:'/weather/weatherInfo',
            component: () => import('@/views/weather/WeatherPage.vue'),
            name: 'weatherInfo',
            meta: {
                title: '天气主页',
                hidden: false,
                icon: 'Sunny',
            },
        },
        {
            path: '/weather/weatherSearch',
            component: () => import('@/views/weather/WeatherSearch.vue'),
            name: 'EchartsComponent',
            meta: {
                title: '天气信息',
                hidden: false,
                icon: 'Cloudy',
            },
        },
    ],
}

export default echarts
