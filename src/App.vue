<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view class="view" style="padding-top:64px; padding-bottom:20px;"></router-view>
    <AppTabBar></AppTabBar>
    abcdefg
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppTabBar from './components/AppTabBar.vue'

export default {
  name: 'app',
  components:{
    AppHeader,
    AppTabBar
  },
  data () {
    return {
      appTitle: 'VVV'
    }
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
</style>
