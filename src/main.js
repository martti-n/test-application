import Vue from 'vue'
import App from './App.vue'

import router from './routes.js'


export const eventBus = new Vue ();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
