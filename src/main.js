import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n';
import Flag from 'vue-flagpack';
import messages from './messages';


Vue.use(VueI18n);
Vue.use(Flag, {
  name: 'Flag',
});

const i18n = new VueI18n({
  locale: 'en',
  messages
});



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  i18n,
}).$mount('#app')
