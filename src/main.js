import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './styles/main.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import LazyLoadDirective from './directives/LazyLoadDirective';

Vue.directive('lazyload', LazyLoadDirective);

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
