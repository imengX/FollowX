<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="container-fluid"  style="padding-top:64px; padding-bottom:20px;">
      <router-view class="view"></router-view>
      <!-- <ul id="history-list" style="padding-top:64px; padding-bottom:50px;"></ul> -->
    </div>
    <AppTabBar></AppTabBar>
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
