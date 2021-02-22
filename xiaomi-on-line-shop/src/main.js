import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//*引入全局样式
import Css from './assets/index.css';
import 'element-ui/lib/theme-chalk/display.css';

//* 引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//* 引入接口
Vue.use(Css)
import axios from 'axios';
Vue.prototype.http = axios
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
