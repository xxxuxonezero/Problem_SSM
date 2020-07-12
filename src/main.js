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
import QuillRedefine from 'vue-quill-editor-upload'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


Vue.use(VueAxios, Axios);
Vue.use(ElementUI)
Vue.use(VueQuillEditor)
// Vue.use(QuillRedefine)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App)
})
