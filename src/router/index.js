import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import saboresView from '../views/saboresView.vue'
import adornosView from '../views/adornosView.vue'
import ordenView from '../views/ordenView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/sabores',
    name: 'sabores',
    component: saboresView
  },
  {
    path: '/adornos',
    name: 'adornos',
    component: adornosView
  },
  {
    path: '/orden',
    name: 'orden',
    component: ordenView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
