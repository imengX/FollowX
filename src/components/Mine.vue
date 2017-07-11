<template>
	<div>
		<toolbar></toolbar>
	    <router-view></router-view>
    </div>
</template>

<script type="text/javascript">
  import toolbar from './mine/MineToolbar.vue'

  export default {
    name: 'mine',
    components:{
      toolbar
    }
  }
</script>
