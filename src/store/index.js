import Vuex from 'vuex'
import Vue from 'vue'
import state from "./state";

Vue.use(Vuex)


const store=new Vuex.Store({
  state,
  mutations:{
    changeLoginVisible(state,flag){
      state.LoginVisible=flag
    },
    setUserInfo(state,userInfo){
      localStorage.setItem("userInfo",JSON.stringify(userInfo))
      localStorage.setItem("isLogin",true)
      state.userInfo=userInfo
      state.isLogin=true
    },
    delUserInfo(state){
    localStorage.removeItem("userInfo")
      localStorage.removeItem("isLogin")
      state.userInfo=null
      state.isLogin=false
    }
  },
  getters:{
    getUserInfo(state) {
      if(typeof state.userInfo=='string'){
        return JSON.parse(state.userInfo)
      }else{
        return state.userInfo
      }
    },
  }
})

export default store
