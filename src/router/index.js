import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册路由插件
Vue.use(VueRouter)

const routes = [
  // 路由重定向
  {
    path: '/',
    name: 'home',
  },
  // 只有用户访问到, 才会被加载渲染(惰性加载)
  {
    path: '/error',
    name: 'error',
    component: () => import('@/components/Error')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/my_user_web/MyLogin')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/components/my_user_web/MyRegister')
  }
]

const router = new VueRouter({
  // 此模式下, 不会有 # 在 URL 中
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
// 路由前置守卫
router.beforeEach((to, from, next) => {
  // 通过
  next()
})
// 将路由对象暴露出去
export default router
