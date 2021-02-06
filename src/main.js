import Vue from 'vue'
import App from './App.vue'
import Paginate from 'vuejs-paginate'
import router from './router'
import mixin  from './mixin';
import VueGtag from "vue-gtag";

// Vue.use(VueGtag, {
//   config: { id: "UA-136323734-1" }
// }, router);
Vue.use(VueGtag, {
  config: { id: "GTM-KRZWQFF" }
}, router);

Vue.config.productionTip = false
Vue.component('paginate', Paginate)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
