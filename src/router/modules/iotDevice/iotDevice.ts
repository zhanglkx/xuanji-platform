const control = {
    path: '/device',
    component: (): any => import('@/layout/index.vue'),
    name: 'device',
    redirect: '/device/control',
    meta: {
        title: ' 控制',
        hidden: false,
        icon: 'Odometer',
    },
    children: [
        {
            path: '/device/control',
            component: (): any => import('@/views/control/Control.vue'),
            name: 'control',
            meta: {
                title: 'IOT',
                hidden: false,
                icon: 'Odometer',
            },
        }
    ],
  }
  
  export default control
  