import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/HelloWorld'
import AddListItem from './components/AddListItem'


import axios from 'axios'
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios

const routes = [
	{path: '/', component: Home},
	{path: '/add', component: AddListItem}
]
const router = new VueRouter({
	routes
})

Vue.config.productionTip = false

new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})


