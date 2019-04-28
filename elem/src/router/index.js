import Vue from 'vue'
import Router from 'vue-router'
import Elem from '@/components/elem'
import Mange from '@/components/mange'
import Mang from '@/components/mang'
import UserList from '@/components/UserList'
import ShopList from '@/components/shopList'
import FoodList from '@/components/foodList'
import OrderList from '@/components/orderList'
import AdminList from '@/components/adminList'
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
          path:'/',
          name: 'Mang',
          component: Mang,
        },
        {
          path:'/UserList',
        name: 'UserList',
        component: UserList,
        },
        {
          path:'/shopList',
        name: 'ShopList',
        component: ShopList,
        },
        {
          path:'/foodList',
        name: 'FoodList',
        component: FoodList,
        },
        {
          path:'/orderList',
        name: 'OrderList',
        component: OrderList,
        },
        {
          path:'/adminList',
        name: 'AdminList',
        component: AdminList,
        }
      ]
    }
  ]
})
