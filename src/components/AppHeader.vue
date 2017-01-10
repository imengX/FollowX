<template>
  <div class="navigationBar">
    <h2>{{ appTitle }}</h2>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      appTitle: 'FollowX'
    }
  }
}
</script>
<style>
.navigationBar{
  text-align: center;
  color: white;
	width: 100%;
	height: 64px;
	background-color: #27C7A8;
	position: fixed;
	z-index: 1000;
}
</style>
