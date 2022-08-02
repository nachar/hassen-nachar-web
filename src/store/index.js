import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeCode: false,
    selectedCodeItem: '',
  },
  getters: {
  },
  mutations: {
    TOGGLE_CODE(state) {
      state.activeCode = !state.activeCode;
    },
    SELECT_CODE_ITEM(state, selectedCodeItem) {
      state.selectedCodeItem = selectedCodeItem;
    },
  },
  actions: {
  },
  modules: {
  },
});
