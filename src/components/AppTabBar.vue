<template>
	<ul class="TabBar">
		<li>
			<div class="tab-item" id="history">
			<router-link :to="{ name: 'history' }">
				<span class="tab-icon glyphicon glyphicon-th-list"></span><br/>
				<span class="tab-text">我的</span>
			</router>
			</div>
		</li>
		<li>
			<div class="tab-item" id="discover">
			<router-link :to="{ name: 'discover' }">
				<span class="tab-icon glyphicon glyphicon-asterisk"></span><br/>
				<span class="tab-text">发现</span>
			</router>
			</div>
		</li>
		<li>
			<div class="tab-item" id="search">
				<router-link :to="{ name: 'search' }">
				<span class="tab-icon glyphicon glyphicon-search"></span>
				<br/>
				<span class="tab-text" v-model="appTitle">搜索</span>
			</router-link>
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
	float: left;
	text-align: center;
	list-style: none;
	position: relative;
}

.tab-item {
	text-align: center;
	bottom: 0;
	height: 100%;
	color: #cccccc;
}

.tab-item a {
	text-decoration: none;
}

.tab-icon {
	font-size: 28px;
}

.tab-text {
	margin-bottom: 0;
	font-size: 12px;
}
</style>
