import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeCode: false,
    selectedCodeItem: '',
    componentNames: {
      'code-hero-component': 'HeroComponent.vue',
      'code-jobs-component': 'JobsComponent.vue',
      'code-projects-component': 'ProjectsComponent.vue',
      'code-repositories-component': 'RepositoriesComponent.vue',
    },
  },
  getters: {
    componentName: ({ componentNames }) => (index) => componentNames[index],
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
