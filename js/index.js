// 定义工具方法
var Util = {
	/**
	 * 通过id获取模板内容
	 * @id 		script模板标签id
	 **/
	tpl: function (id) {
		// 通过id获取模板内容
		return document.getElementById(id).innerHTML;
	},
	/**
	 * 异步请求方法
	 * @url 	请求地址
	 * @fn 		请求成功回调函数
	 */
	ajax: function (url, fn) {
		// 创建xhr对象
		var xhr = new XMLHttpRequest();
		// 订阅事件
		xhr.onreadystatechange = function () {
			console.log(111)
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					// 将请求的数据传递给fn
					// 将返回的数据转化成json对象
					var data = JSON.parse(xhr.responseText)
					fn && fn(data)
				}
			}
		}
		// open方法
		xhr.open('GET', url, true)
		// send
		xhr.send(null);
	}
}
// 定义组件
var HomComponent = Vue.extend({
	template: Util.tpl('tpl_home')



})
// 列表
var FindComponent = Vue.extend({
	template: Util.tpl('tpl_find')
		// 获取父组件传递的search数据



})
var SechComponent = Vue.extend({
	template: Util.tpl('tpl_sech')

})
// 注册
Vue.component('home',HomComponent)
Vue.component('find',FindComponent)
Vue.component('sech',SechComponent)
// Vue实例化
var app = new Vue({
	el: '#app',
	data: {
		view: '',

	},

})
// 路由
function router () {
	// 处理hash业务逻辑
	// 获取hash，根据hash不同决定渲染哪个页面
	// 当hash是空时候，我们要设置默认值，'#home'
	var str = location.hash;
	// 处理到#
	str = str.slice(1);
	// 处理第一个/ 也就是 #/
	str = str.replace(/^\//, '')
	// 获取 / 前面的字符串
	if (str.indexOf('/') > -1) {
		str = str.slice(0, str.indexOf('/'))
	}
	// 映射列表
	var map = {
		home: true,
		find: true,
		sech: true
	}
	// 判断str是否在map中，如果在，我们渲染页面，不在渲染home页面
	if (map[str]) {
		// 想渲染哪个页面我们只需要将app.view设置成改字符串就可以
		app.view = str;
	} else {
		app.view = 'home'
	}
	console.log(str)
}

// 页面进入的时候，会触发load事件，我们要根据hash来决定进入那个页面
window.addEventListener('load', router)

// hash改变时候的事件交hashChange事件
window.addEventListener('hashchange', router)

/// @author XenonChau: 这段是我加的。。。
$(".document").ready(function(){
	// tabbar切换更新样式。
	$("#mine").css("color", "#27C7A8");//默认选中
	$(".tab-item").click(function(){
		var tabItemsArray = ["mine","find","search"];
		for (var idx in tabItemsArray) {
			var item = tabItemsArray[idx];
			if ($(this).attr("id") == item) {
				$(this).css("color", "#27C7A8");
			} else {
				var other = "#" + item;
				$(other).css("color", "#CCCCCC");
			}
		}
	});
});
