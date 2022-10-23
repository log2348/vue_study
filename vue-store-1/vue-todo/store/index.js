import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  // 컴포넌트 간에 공유할 data
  state() {
    return {
      showModal: false,
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
    // 날짜 검색
  },
  // state 값을 변경하는 로직
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
        rowId: state.list.length + 1,
        date: data.date,
        contents: data.contents,
        complete: "N",
      };

      state.list.push(objTodo);
    },
    // 단건 삭제
    DELETE_ROW(state, id) {
      state.list = state.list.filter((a) => a.rowId != id);
    },
    // 다중 삭제
    DELETE_ALL(state, selected) {
      selected.forEach((element) => {
        state.list = state.list.filter((a) => a.rowId != element);
      });
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
          // rowId값 다시 세팅 (중복 방지)
          let rowNum = state.list.length + 1;
          for (let i = 0; i < res.data.length; i++) {
            res.data[i].rowId = rowNum++;
          }

          state.list.push(...res.data);
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
});
