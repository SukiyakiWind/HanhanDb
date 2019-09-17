import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from'./routes'

Vue.config.productionTip = false
Vue.use(VueRouter);


/* eslint-disable no-new */
const router = new VueRouter({
  routes: Routes,
  mode:'history',
});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router,
});
