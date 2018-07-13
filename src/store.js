import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import createPersistedState from "vuex-persistedstate";

const store =  new Vuex.Store({
  state: {
      inBasket: [],
  },
  getters: {
      countProds: state => {
          return state.inBasket.length
      }
  },
  mutations: {
      ADD_PRODUCT: (state, product) => {
          state.inBasket.unshift(product)
      },
      RM_PRODUCT: (state, i) => {
          state.inBasket.splice(i, 1)
      },
      RM_ALL: (state) => {
          state.inBasket = []
      }
  },
  plugins: [createPersistedState()]
});

export default store;
