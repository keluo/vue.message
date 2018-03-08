import Vue from 'vue'
import App from './App.vue'
import Message from '../src'
Vue.use(Message)
new Vue({
  render: h => h(App)
}).$mount('#app')