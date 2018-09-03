import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddListItems from '@/components/AddListItem'
import EditListItem from '@/components/EditListItem'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/add',
      name: 'AddListItems',
      component: AddListItems
    },
    {
      path: '/edit/:id',
      name: 'EditListItem',
      component: EditListItem
    }
  ]
})
