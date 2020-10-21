import Vue from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import '@aws-amplify/ui-vue';
import vuetify from './plugins/vuetify';
import router from './router'
Amplify.configure(aws_exports);
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
