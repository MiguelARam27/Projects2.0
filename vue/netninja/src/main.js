import Vue from 'vue'
import App from './App.vue'
import Ninjas from './components/Ninja.vue'
Vue.component('ninjas',Ninjas);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
