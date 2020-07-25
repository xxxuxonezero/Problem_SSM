// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import VueAxios from "vue-axios";
import Axios from "axios";
//引入富文本编辑器
import  VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
//导入api
import api from "./assets/js/api";
//状态管理
import store from "./store";
import router from "./router/router";


Vue.use(VueAxios, Axios);
Vue.use(ElementUI)
Vue.use(VueQuillEditor)
Vue.prototype.api=api
//是否携带cookeies
Axios.defaults.withCredentials=true

// Vue.prototype.$http.interceptors.response.use()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render:h=>h(App)
})
