import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';
import fa from './components/globals/Fa.vue';

Vue.config.productionTip = false;

Vue.component('fa', fa);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
