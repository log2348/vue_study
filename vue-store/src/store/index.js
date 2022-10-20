import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      count: 1,
    }
  },
  actions: {
    setCount({commit}, number) {
      commit("SET_COUNT", number);
    }

  },
  mutations: {
    SET_COUNT(state, number) {
      state.count = number;
    }
  },
  getters: {
    getCount(state) {
      return "출력한 값은 " + state.count;
    }

  }
});
