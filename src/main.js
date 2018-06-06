import Vue from 'vue'
import App from './components/App/App.vue'
import Home from './components/Home/Home.vue'
import VueRouter from 'vue-router'
import router from './router/router.js'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
