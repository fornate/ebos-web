import Vue from 'vue'
import Router from 'vue-router'
import Rule from '@/components/Rule'
import Login from '../components/Login'
import Register from '../components/Register'
import Device from '../components/Device'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Rule',
      name: 'Rule',
      component: Rule
    },
    {
      path: '/Device',
      name: 'Device',
      component: Device
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})
