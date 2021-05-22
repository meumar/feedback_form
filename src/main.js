import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store';
import routes from '@/router';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuex);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
