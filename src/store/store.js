import Vue from 'vue'
import Vuex from 'vuex'
import questions from './questions'
import response from './login'
//import json from './questions.json'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      questions,
      response
    },
    plugins:[createPersistedState({
        key:"customer_feeback"
    })]
   
})
   
