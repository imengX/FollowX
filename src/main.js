import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import History from './components/History.vue';
import Discover from './components/Discover.vue'

Vue.use(VueRouter)

const Home = { template: '<div>This is Home</div>' }
const Search = { template: 'abc'}
// const Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'history', component: History },
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
