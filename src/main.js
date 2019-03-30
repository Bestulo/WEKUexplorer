// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ChainProperties from './mixins/ChainProperties'
import revlogo from '@/assets/explogo.png' // dont sedit here simple put your file and rename in the assets folder

Vue.config.productionTip = false

Vue.mixin(ChainProperties);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
