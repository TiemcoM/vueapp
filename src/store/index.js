import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "",
    email: "",
    loggedin: false
  },
  mutations: {
    login(state, data){
      state.name = data.name,
          state.email = data.email;
      state.loggedin = true;
    },
    logout(state){
      state.name = "",
          state.email = "";
      state.loggedin = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
