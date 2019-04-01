import Vue from 'vue';
import Router from 'vue-router';
import App from "@/App"
import Home from '@/pages/home/index';
import Find from '@/pages/find/index';
import Profile from '@/pages/profile/index';

Vue.use(Router);

export default new Router({
	routes: [
		{
			name: 'app',
			path: '/',
			component: App
		},
		{
			name: 'home',
			path: '/pages/home/index',
			component: Home,
			meta: {title: '首页'}
		},
		{
			name: 'Find',
			path: '/pages/find/index',
			component: Find,
			meta: {title: '发现'}
		},
		{
			name: 'Profile',
			path: '/pages/profile/index',
			component: Profile,
			meta: {title: '个人'}
		}
	]
});
