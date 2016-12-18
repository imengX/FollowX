import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import History from './components/History.vue';

Vue.use(VueRouter)

const Home = { template: '<div>This is Home</div>' }
const Discover = { template: '<div>This is Foo</div>' }
const Search = { template: 'abc'}
// const Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'history', component: History },
    { path: '/history', name: 'history', component: History },
    { path: '/discover', name: 'discover', component: History },
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
