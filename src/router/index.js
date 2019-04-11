import Vue from 'vue';
import Router from 'vue-router';
import app from "@/App"
import home from '@/pages/home/index';
import find from '@/pages/find/index';
import profile from '@/pages/profile/index';
import goods_detail from '@/pages/goods_detail/index';
Vue.use(Router);

export default new Router({
	history: true,
    saveScrollPosition: true,
	routes: [
		{
			name: 'app',
			path: '/',
			component: app
		},
		{
			name: 'home',
			path: '/pages/home/index',
			component: home,
			meta: {title: '首页'}
		},
		{
			name: 'find',
			path: '/pages/find/index',
			component: find,
			meta: {title: '发现'}
		},
		{
			name: 'profile',
			path: '/pages/profile/index',
			component: profile,
			meta: {title: '个人'}
		},
		{
			name: 'goods_detail',
			path: '/pages/goods_detail/index',
			component: goods_detail,
			meta: {title: '商品详情'}
		}
	]
});
