import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Index',
      name: 'Index',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/login.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./components/cart.vue')
    },
    {
      path: '/',
      redirect: '/Index'
    }
  ]
})
