// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/index'
import App from './App'
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false

Vue.use(Vant);
Vue.use(Lazyload);

new Vue({
  el: '#app',
  router,
  components:{ App },
  template:'<App/>'
})
