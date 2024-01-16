const components = {
    path: '/components',
    component: (): any => import('@/layout/index.vue'),
    name: 'Components',
    redirect: '/Components/Button',
    meta: {
        title: '组件',
        hidden: false,
        icon: 'Shop',
    },
    children: [
        {
            path: '/Components/Button',
            component: (): any => import('@/views/component/button/ZButtonPage.vue'),
            name: 'ZButton',
            meta: {
                title: '按钮',
                hidden: false,
                icon: 'SwitchButton',
            },
        },
        {
            path: '/Components/Form',
            component: (): any => import('@/views/component/form/ZFormPage.vue'),
            name: 'ZForm',
            meta: {
                title: '表单',
                hidden: false,
                icon: 'Tickets',
            },
        },
    ],
}

export default components
