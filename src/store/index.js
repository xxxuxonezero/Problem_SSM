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
  },
  getters:{
    getLoginVisivble(state){
      return state.LoginVisible
    }
  }
})

export default store
