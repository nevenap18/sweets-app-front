import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/user/Home.vue'
import SweetInfo from '../views/user/SweetInfo.vue'
import Cart from '../views/user/Cart.vue'
import Login from '../views/user/Login.vue'
import AdminWrapper from '../wrappers/AdminWrapper.vue'
import EditSweet from '../views/admin/EditSweet.vue'
import AddSweet from '../views/admin/AddSweet.vue'
import AdminOrders from '../views/admin/AdminOrders.vue'
import AdminHome from '../views/admin/AdminHome.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  
      // {
      //   path: '/admin',
      //   name: 'AdminWrapper',
      //   component: AdminWrapper,
      //   children: [
      //     {
      //       path: '/',
      //       name: 'AdminHome',
      //       component: AdminHome
      //     },
      //     {
      //       path: '/edit-sweet/:id',
      //       name: 'EditSweet',
      //       component: EditSweet,
      //       props: true
      //     },
      //     {
      //       path: '/add-sweet',
      //       name: 'AddSweet',
      //       component: AddSweet
      //     },
      //     {
      //       path: '/orders',
      //       name: 'AdminOrders',
      //       component: AdminOrders
      //     }
      //   ]
      // },
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/sweet-info/:id',
        name: 'SweetInfo',
        component: SweetInfo,
        props: true
      },
      {
        path: '/cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
