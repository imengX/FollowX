<template>
  <ul class="toolbar">
    <li><a href="#home">历史</li></a>
    <li><a href="#news">收藏</li></a>
    <li><a href="#contact">缓存</li></a>
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

  .toolbar a:link,a:visited{
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
  }

  .toolbar a{
    display:block;
    padding: 0.5em 0em;
    width:100%;
  }
</style>