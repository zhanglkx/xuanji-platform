const echarts = {
  // echarts
  path: '/echarts',
  component: () => import('@/layout/index.vue'),
  name: 'echarts',
  redirect: '/echarts/echartsPage',
  meta: {
    title: 'echarts主页',
    hidden: false,
    icon: 'DataLine',
  },
  children: [
    {
      path: '/echarts/echartsPage',
      component: () => import('@/views/echarts/Echarts.vue'),
      name: 'echartsPage',
      meta: {
        title: 'echarts主页',
        hidden: false,
        icon: 'PieChart',
      },
    },
    {
      path: '/echarts/echartsComponent',
      component: () => import('@/views/echarts/EchartsComponents.vue'),
      name: 'echartsComponent',
      meta: {
        title: 'Echarts组件',
        hidden: false,
        icon: 'FolderRemove',
      },
    },
  ],
}

export default echarts
