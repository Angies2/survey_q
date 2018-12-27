import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import getallstudents from '@/components/getallstudents/getallstudents'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login,
    },
    {
      path: '/admin',
      component: getallstudents,
    }
  ]
})

