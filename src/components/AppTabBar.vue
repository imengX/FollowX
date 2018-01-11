<template>
	<ul class="TabBar">
		<li>
			<div class="tab-item" id="mine">
				<!-- <router-link :to="{ name: 'mine' }"> -->
<!--&lt;!&ndash; 				<router-link to="/mine">-->
					<span class="tab-icon glyphicon glyphicon-th-list"></span><br/>
					<span class="tab-text">我的</span>
				<!--</router> &ndash;&gt;-->
			
</div>
		</li>
		<li>
			<div class="tab-item" id="discover">
<!--&lt;!&ndash; 				<router-link to="/discover">-->
					<span class="tab-icon glyphicon glyphicon-asterisk"></span><br/>
					<span class="tab-text">发现</span>
				<!--</router> &ndash;&gt;-->
			</div>
		</li>
		<li>
			<div class="tab-item" id="search">
<!--&lt;!&ndash; 				<router-link to="/search">-->
					<span class="tab-icon glyphicon glyphicon-search"></span><br/>
					<span class="tab-text">搜索</span>
				<!--</router-link> &ndash;&gt;-->
			</div>
		</li>
	</ul>
</template>

<style>
	.TabBar{
		height: 50px;
		width: 100%;
		background-color: #EBEBEB;
		position: fixed;
		left: 0;
		bottom: 0;
		margin-bottom: 0px;
		z-index: 1000;
	}
	.TabBar li {
		width: 33.33%;
		/*height: 100%;*/
		float: left;
		text-align: center;
		list-style: none;
		position: relative;
	}

	.tab-item {
		text-align: center;
		bottom: 0;
		height: 100%;
		width: 100%;
		color: #cccccc;
	}
	
	.tab-item span {
		width: 100%;
	}

	.tab-item a {
		width: 100%;
		text-decoration: none;
		color:#cccccc;
	}

	.tab-item a.router-link-active {
		color:#29c8a8;
	}

	/*.tab-item a:link,a:visited{
		color:#29c8a8;
		text-align:center;
		text-decoration:none;
	}*/

	.tab-item a:hover,a:active{
		color: #29c8a8;
		text-decoration:none;
	}

	.tab-icon {
		font-size: 28px;
	}

	.tab-text {
		margin-bottom: 0;
		font-size: 12px;
	}

</style>
