//引入Vue
import Vue from 'vue'
//引入VueResource
import VueResource from '_vue-resource@1.5.3@vue-resource'
//引入App
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router/index'
//引入axios
import axios from 'axios'

// axios全局配置
axios.defaults.baseURL = 'https://vuedemo-387e1-default-rtdb.firebaseio.com'
/* axios.defaults.headers.common['Authorization'] = 'Token'
axios.defaults.headers.post['Content-tyoe'] = 'application/urlencode'
axios.defaults.headers.get['Accepts'] = 'application/json' */

//关闭Vue的生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.directive('theme',{
  bind(e,binding,vnode){
    if(binding.value == 'wide'){
      e.style.maxWidth = "1260px"
    }else if(binding.value == 'narrow'){
      e.style.maWidth = "560px"
    }

    if(binding.arg == 'column'){
      e.style.background = "#6677cc"
      e.style.padding = "20px"
    }
  }
})

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
