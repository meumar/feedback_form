import Vue from 'vue'
import Vuex from 'vuex'
import questions from './questions'
import auth from './auth'
//import json from './questions.json'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const moduleNames = [
  'auth',
]
export default new Vuex.Store({
  modules: {
    questions,
    auth
  },
  actions: {
    globalReset({
      commit
    }) {
      moduleNames.forEach(module => {
        commit(`${module}/reset`)
      })
    },
  },
  plugins: [createPersistedState({
    key: "customer_feeback"
  })]

})

