import Vue from 'vue'
import Router from 'vue-router'
import Elem from '@/components/elem'
import Mange from '@/components/mange'
import UserList from '@/components/UserList'
import ShopList from '@/components/shopList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Elem',
      component: Elem
    },
    {
      path: '/mange',
      name: 'Mange',
      component: Mange,
      children:[
        {
          path:'/UserList',
        name: 'UserList',
        component: UserList,
        },
        {
          path:'/shopList',
        name: 'ShopList',
        component: ShopList,
        }
      ]
    }
  ]
})
