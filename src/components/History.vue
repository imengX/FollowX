<template>
  <div>
    <toolbar></toolbar>
    <div class="container-fluid">
      <ul id="history-list">
       <li class="list-unstyled">
         <div class="row">
           <div class="row-top">
             <div class="col-xs-3">
               <img class="img-responsive poster" src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2369036157.jpg">
             </div>
             <div class="col-xs-6">
               <div>
                <h2 class="movie-name1"><b>大洋之间的灯光</b>
                 <br />
                 <small class="movie-name2">每周四更新</small>
               </h2>  
             </div>
             <div class="button1">
               <button type="button" class=" btn button-visited">10</button>
               <button type="button" class=" btn button-visited">12</button>
             </div>
             <div class="history">上次观看至第10集 12:12:12</div>
           </div>
         </div>
         <div class="col-xs-3 watch">
          <img class="img-responsive" src="img/mine-history-btn-watch-nor@3x.png">
        </div>
        <hr/>
      </div>
    </li>
  </ul>
</div>
</div>
</template>

<script type="text/javascript">
  import toolbar from './HistoryToolbar.vue'

  export default {
    name: 'history',
    components:{
      toolbar,
    }
  }
</script>

<style type="text/css">
  .button-visited{
    background-color: #ececec;
    border-radius: 0px;
    color: #000000;
/*    width: 36px; 
    padding-left:7px;
    */    text-align:center;
  }

  .button-update{
    background-color: #29c8a8;
    border-radius: 0px;
    color: #ffffff;
  }

  .poster{
    margin-left: 13px;
    /*width:86px;*/
    /*height:117px;*/
  }

  .row-top{
    margin-top: 17px;
  }

  .movie-name1{
    font-size: 14px;
    margin-top: 6px;
  }

  .movie-name2{
    color:#ae9340;
    position: relative;
    top: 6px;
  }

  .history{
    font-size: 12px;
    padding-top: 5px;
  }

  .watch{
    /*position: relative;*/
    /*top: -12px*/
  }

</style>
