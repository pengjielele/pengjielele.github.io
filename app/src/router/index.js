import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import UIIndex from '@/views/ui/Index.vue'
import UIButton from '@/views/ui/Button.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/ui',
    name: 'UIIndex',
    component: UIIndex,
    children: [
      {
        path: 'button',
        name: 'button',
        component: UIButton
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
