<template>
  <ul class="toolbar">
    <li>
      <router-link :to="{ path: '/mine/history'}">历史</router-link>
    </li>
    <li>
      <router-link :to="{ path: '/mine/collection'}">收藏</router-link>
    </li>
    <li>
      <router-link :to="{ path: '/mine/cache'}">缓存</router-link>
    </li>
  </ul>
</template>

<style type="text/css">
  .toolbar{
    list-style-type:none;
    margin: 0px;
    padding: 6px 20px;
    width: 100%;
    height: 50px;
  }

  .toolbar li{
    width: 33.33%;
    float: left;
    text-align: center;
    list-style: none;
    position: relative;
  }

  .toolbar a.router-link-active {
    color: #ae9340;
  }

  .toolbar a {
    display:block;
    padding: 0.5em 0em;
    width:100%;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    text-align:center;
    text-decoration:none;
    background-color:#ffffff;
    color: #a1a1a1;
  }

/*  .toolbar a:link,a:visited{
    color:#a1a1a1;
    background-color:#ffffff;
    text-align:center;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    text-decoration:none;
  }

  .toolbar a:hover,a:active{
    color: #ae9340;
    border-bottom-color: #ae9340;
    text-decoration:none;
  }*/

</style>