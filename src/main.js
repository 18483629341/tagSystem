// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./router.config"
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import store from './store/index'
import App from './App'
//import router from './router'
import './assets/font/iconfont'
import './assets/css/base.css'
Vue.use(VueRouter);//
const router=new VueRouter({
  mode:"hash",
  routes:routes
});
Vue.use(VueLazyload,{
  perLoad:1.3,
  error:require('./assets/images/err.png'),
  loading:require('./assets/images/loading.gif'),
  attempt:3,
  listenEvents:['scroll']
})

Vue.config.productionTip = false
axios.defaults.baseURL='http://localhost:3333/';//本电脑的IP地址
axios.defaults.headers['Content-Type']='application/x-www-form-urlencoded'
Vue.prototype.$http=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  //components: { App },
  //template: '<App/>',
  render:h=>h(App)  //2.0写法
})
