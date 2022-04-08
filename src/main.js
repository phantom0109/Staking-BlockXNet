import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import ethers from "./plugins/ethers"

Vue.config.productionTip = false
Vue.use(ethers)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
