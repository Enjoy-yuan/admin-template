import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '@/views/Error')
  },
  {
    path: '/layout',
    component: () => import(/* webpackChunkName: "Layout" */ '@/views/Layout'),
    meta: {
      requiresAuth: true
    },
    children: [
      { path: '/', redirect: '/Home' },
      {
        path: '/Home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '@/views/Home')
      },
      {
        path: '/stock/beijingchaojia',
        name: 'Beijingchaojia',
        component: () =>
          import(
            /* webpackChunkName: "Beijingchaojia" */ '@/views/Stock/Beijingchaojia'
          )
      },
      {
        path: '/echarts/bar',
        name: 'Bar',
        component: () =>
          import(/* webpackChunkName: "Bar" */ '@/views/Echarts/Bar')
      },
      {
        path: '/echarts/line',
        name: 'Line',
        component: () =>
          import(/* webpackChunkName: "Line" */ '@/views/Echarts/Line')
      },
      {
        path: '/echarts/pie',
        name: 'Pie',
        component: () =>
          import(/* webpackChunkName: "Pie" */ '@/views/Echarts/Pie')
      },
      {
        path: '/echarts/map',
        name: 'Map',
        component: () =>
          import(/* webpackChunkName: "Map" */ '@/views/Echarts/Map')
      },
      {
        path: '/example/table',
        name: 'Table',
        component: () =>
          import(/* webpackChunkName: "Table" */ '@/views/Example/Table')
      },
      {
        path: '/example/echart',
        name: 'Echart',
        component: () =>
          import(/* webpackChunkName: "Echart" */ '@/views/Example/Echart')
      },
      {
        path: '/example/clipboard',
        name: 'Clipboard',
        component: () =>
          import(
            /* webpackChunkName: "Clipboard" */ '@/views/Example/Clipboard'
          )
      },
      {
        path: '/example/moment',
        name: 'Moment',
        component: () =>
          import(/* webpackChunkName: "Moment" */ '@/views/Example/Moment')
      },
      {
        path: '/example/tinymce',
        name: 'Tinymce',
        component: () =>
          import(/* webpackChunkName: "Tinymce" */ '@/views/Example/Tinymce')
      },
      {
        path: '/example/backtop',
        name: 'Backtop',
        component: () =>
          import(/* webpackChunkName: "Backtop" */ '@/views/Example/Backtop')
      },
      {
        path: '/example/excel',
        name: 'Excel',
        component: () =>
          import(/* webpackChunkName: "Excel" */ '@/views/Example/Excel')
      },
      {
        path: '/three/music',
        name: 'music',
        component: () =>
          import(/* webpackChunkName: "music" */ '@/views/Three/Music')
      },
      {
        path: '/example/test',
        name: 'ExampleTest',
        component: () =>
          import(/* webpackChunkName: "Test" */ '@/views/Example/Test')
      },
      {
        path: '/menu1/menu3/menu4',
        name: 'Menu4',
        component: () =>
          import(
            /* webpackChunkName: "Menu4" */ '@/views/Menu/Menu1/Menu3/Menu4'
          )
      },
      {
        path: '/Menu2',
        name: 'Menu2',
        component: () =>
          import(/* webpackChunkName: "Menu2" */ '@/views/Menu/Menu2')
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
