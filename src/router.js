// import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import Mine from './components/Mine.vue'
import History from './components/mine/History.vue';
import Discover from './components/Discover.vue'

export default new Router({
  // mode: 'abstract',
  routes: [
  {
  	path: '/mine', 
  	component: App, children:[
  	{
  		name: 'history',
  		component: History
  	},
  	{
  		name: 'collection',
  		component: History,
  	}]
  },
  { 
  	path: '/discover', 
  	component: Discover 
  },
  { 
  	path: '/', 
  	redirect: '/history' 
  }
  ]
})
