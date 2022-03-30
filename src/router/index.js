import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import saboresView from '../views/saboresView.vue'
import adornosView from '../views/adornosView.vue'
import ordenView from '../views/ordenView.vue'
import AdminView from '../views/AdminView.vue'
import sAdminView from '../views/sAdminView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/saboresAdmin',
    name: 'saboresAdmin',
    component: sAdminView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
