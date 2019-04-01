import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/about',
      name: 'about',
      component: () => (import('../views/about'))
    },
    {
      path: '/home',
      name: 'home',
      component: () => (import('../views/home'))
    }
  ]
})
