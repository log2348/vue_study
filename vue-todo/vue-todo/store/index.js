import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    // 컴포넌트 간에 공유할 data
    return {
      list: [
        {
          rowId: 1,
          date: "2022-10-10",
          contents: "내용1",
          complete: "Y",
        },
        {
          rowId: 2,
          date: "2022-10-11",
          contents: "내용2",
          complete: "N",
        },
        {
          rowId: 3,
          date: "2022-10-11",
          contents: "내용3",
          complete: "N",
        },
        {
          rowId: 4,
          date: "2022-10-12",
          contents: "내용4",
          complete: "N",
        },
        {
          rowId: 5,
          date: "2022-10-13",
          contents: "내용5",
          complete: "Y",
        },
      ],
    };
  },
  actions: {
    appendRow() {},
    deleteRow({ commit }, id) {
      commit("DELETE_ROW", id);
    },
  },
  mutations: {
    // state 값을 변경하는 로직
    APPEND_ROW() {},
    // 단건 삭제
    DELETE_ROW(state, id) {
      state.list = state.list.filter((a) => a.rowId != id);
    },
  },
  getters: {},
});
