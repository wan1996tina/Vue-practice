// 沒有點斜線的是套件
import Vue from 'vue'
// 有點斜線的是本地檔案
import App from './App.vue'
import './style/style.styl'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
