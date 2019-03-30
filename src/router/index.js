import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import Home from '@/pages/home/index';
import Profile from '@/pages/profile/index'

Vue.use(Router);

export default new Router({
	routes: [
		{
			name: 'App',
			path: '/App',
			component: App
		},
		{
			name: 'home',
			path: '/pages/home/index',
			component: Home
		},
		{
			name: 'Profile',
			path: '/pages/profile/index',
			component: Profile
		}
	]
});
