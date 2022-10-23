import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      isFiltered: false,
      isUpdatedAll: false,
      showModal: false,
      selected: [],
      dateList: [],
      filteredList: [],
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
    // 단건 수정 버튼 클릭
    clickUpdateBtn({ commit }, id) {
      commit("CLICK_UPDATE_BTN", id);
    },
    // 일괄 수정 버튼 클릭
    clickUpdateAllBtn({ commit }) {
      commit("CLICK_UPDATE_ALL_BTN");
    },
    showJsonData() {
      alert(JSON.stringify(this.state.list));
    },
  },
  mutations: {
    // 추가
    APPEND_ROW(state, data) {
      if (data.date == "") {
        alert("날짜를 입력하세요.");
        return;
      }
      if (data.contents == "") {
        alert("내용을 입력하세요.");
        return;
      }

      let objTodo = {
        rowId: 0,
        date: data.date,
        contents: data.contents,
        complete: "N",
      };

      state.list.push(objTodo);
      this.commit("SET_INDEX");
    },
    // 단건 삭제
    DELETE_ROW(state, id) {
      state.list = state.list.filter((a) => a.rowId != id);
      this.commit("SET_INDEX");
    },
    // 다중 삭제
    DELETE_ALL(state, selected) {
      selected.forEach((element) => {
        state.list = state.list.filter((a) => a.rowId != element);
      });
      state.selected = [];
      this.commit("SET_INDEX");
    },
    // 단건 수정
    UPDATE_ROW(state, data) {
      if (data.after == "") {
        alert("내용을 입력하세요.");
      }

      state.list.forEach((element) => {
        if (element.rowId == data.selectedId) {
          element.contents = data.after;
        }
      });
      state.showModal = false;
    },
    // 일괄 수정
    UPDATE_ALL(state, data) {
      if (data.before == "" || data.after == "") {
        alert("텍스트를 입력하세요.");
        return;
      }

      state.list.forEach((v) => {
        if (v.contents.indexOf(data.before) != -1) {
          v.contents = v.contents.replaceAll(data.before, data.after);
        }
      });
      state.showModal = false;
    },
    // 초기화
    INIT_DATA(state) {
      state.list = [];
    },
    // 항목 불러오기
    GET_DATA(state) {
      axios
        .get("/todo.json")
        .then((res) => {
          state.list.push(...res.data);
          this.commit("SET_INDEX");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    GET_DATE_LIST(state) {
      state.dateList = Array.from(new Set(state.list.map((a) => a.date)));
    },
    // 날짜 검색
    SELECT_BY_DATE(state, date) {
      if (date != "전체") {
        state.filteredList = state.list.filter((a) => a.date == date);
        state.isFiltered = true;
      } else {
        state.isFiltered = false;
      }
    },
    // 완료여부 변경
    CHECK_COMPLETE(state, id) {
      for (let i = 0; i < state.list.length; i++) {
        state.list.find((a) => a.rowId == id).complete =
          state.list.find((a) => a.rowId == id).complete == "N" ? "Y" : "N";
      }
    },
    CLICK_UPDATE_BTN(state, id) {
      state.selected = id;
      state.showModal = true;
      state.isUpdatedAll = false;
    },
    CLICK_UPDATE_ALL_BTN(state) {
      state.showModal = true;
      state.isUpdatedAll = true;
    },
    /**
     * id값 다시 세팅
     * 다중 삭제시 오류 방지 위함
     */
    SET_INDEX(state) {
      for (let i = 0; i < state.list.length; i++) {
        state.list[i].rowId = i + 1;
      }
    },
  },
  getters: {
    // 현재 리스트의 날짜 중복 제거 후 가져오기
    getDateList: (state) => {
      return new Array.from(new Set(state.dateList.map((a) => a.date)));
    },
  },
});
