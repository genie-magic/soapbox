import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import router from './router'
import './assets/soapbox.scss'
import './assets/fonts/font-awesome/css/all.min.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
