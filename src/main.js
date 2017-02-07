import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Mine from './components/Mine.vue'
import History from './components/mine/History.vue';

import Discover from './components/Discover.vue'

Vue.use(VueRouter)

const Home = { template: '<div>This is Home</div>' }
const Search = { template: 'abc'}
// const Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/mine', name: 'mine', component: Mine , alias: '',
      children: [
        {
          path: '',
          component: History
        },
        {
          // 当 /mine/history 匹配成功，
          // history 会被渲染在 mine 的 <router-view> 中
          path: 'history',
          component: History,
        },
        {
          path: 'collection',
          component: History,
        },
        {
          path: 'cache',
          component: History,
        }
      ]
    },
    { path: '/discover', name: 'discover', component: Discover },
    { path: '/search', name: 'search', component: History },
    // { path: '/bar/:id', name: 'bar', component: History }
  ]
})

new Vue({
  el: '#app',
  data: {
    appTitle: 'Hello Vue!'
  },
  router,
  render: h => h(App)
})
