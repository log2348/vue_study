<template>
  <div class="container">
    <Header
      :list="list"
      :dateList="dateList"
      @appendRow="appendRow"
      @selectByDate="selectByDate"
    ></Header>
    <List
      :list="list"
      :dateList="dateList"
      :showModal="showModal"
      :isUpdatedAll="isUpdatedAll"
      :isFiltered="isFiltered"
      :filteredList="filteredList"
      @updateAll="updateAll"
      @deleteRow="deleteRow"
      @updateRow="updateRow"
      @clickUpdateBtn="clickUpdateBtn"
      @selectItem="selectItem"
    ></List>
    <Footer
      :list="list"
      :selected="selected"
      :completed="completed"
      @initData="initData"
      @getData="getData"
      @clickUpdateAllBtn="clickUpdateAllBtn"
      @deleteSelectedData="deleteSelectedData"
      @showJsonData="showJsonData"
    ></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import List from "../components/List.vue";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {
      completed: [],
      selected: [],
      filteredList: [],
      isFiltered: false,
      isUpdatedAll: false,
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
  methods: {
    // 추가
    appendRow(date, contents) {
      if (date == "") {
        alert("날짜를 입력하세요.");
        return;
      }

      if (contents == "") {
        alert("내용을 입력하세요.");
        return;
      }

      let objTodo = {
        rowId: this.list.length + 1,
        date: date,
        contents: contents,
        complete: "N",
      };

      this.list.push(objTodo);
    },
    // 수정
    updateRow(iRowId, strNewContent) {
      if (strNewContent == "") {
        alert("내용을 입력하세요.");
      }

      this.list.forEach((element) => {
        if (element.rowId == iRowId) {
          element.contents = strNewContent;
        }
      });

      // 모달창 닫기
      this.showModal = false;
    },
    // 일괄 수정
    updateAll(txtBefore, txtAfter) {
      if (txtBefore == "" || txtAfter == "") {
        alert("텍스트를 입력하세요.");
        return;
      }

      this.list.forEach((v) => {
        if (v.contents.indexOf(txtBefore) != -1) {
          v.contents = v.contents.replaceAll(txtBefore, txtAfter);
        }
      });
      this.showModal = false;
    },
    // 단건 삭제
    deleteRow(id) {
      this.list = this.list.filter((a) => a.rowId != id);
    },
    // 다중 삭제
    deleteSelectedData(selected) {
      selected.forEach((element) => {
        this.list = this.list.filter((a) => a.rowId != element);
      });
    },
    // 항목 JSON 형식 반환
    showJsonData() {
      alert(JSON.stringify(this.list));
    },
    // 선택 항목 배열에 담기
    selectItem(selected) {
      this.selected = selected;
    },
    // selectbox 날짜 세팅
    getDate() {
      if (this.dateList.length != 0) {
        this.dateList = Array.from(new Set(this.list.map((a) => a.date)));
      } else {
        this.dateList = this.list;
      }
    },
    // 날짜별 검색 (필터링)
    selectByDate(date) {
      if (date != "전체") {
        this.filteredList = this.list.filter(
          (a) => a.date == date
        );
        this.isFiltered = true;
      } else {
        this.isFiltered = false;
      }
    },
    getData() {
      this.$axios
        .get("/todo.json")
        .then((res) => {
          console.log(res.data);
          // rowId값 다시 세팅 (중복 방지)
          let rowNum = this.list.length + 1;
          for (let i = 0; i < res.data.length; i++) {
            res.data[i].rowId = rowNum++;
          }

          this.list.push(...res.data);
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    clickUpdateBtn() {
      this.showModal = true;
      this.isUpdatedAll = false;
    },
    clickUpdateAllBtn() {
      this.showModal = true;
      this.isUpdatedAll = true;
    },
    // 초기화
    initData() {
      this.list = [];
    },
  },
  computed: {
    dateList: function () {
      // 중복제거한 날짜 배열에 담기
      return Array.from(new Set(this.list.map((a) => a.date)));
    },
  },
  components: {
    Header,
    List,
    Footer,
  },
};
</script>

<style></style>
