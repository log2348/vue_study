<template>
  <div class="container">
    <Header :list="list" @appendRow="appendRow"></Header>
    <List
      :list="list"
      @deleteRow="deleteRow"
      @updateRow="updateRow"
      @selectItem="selectItem"
      @checkComplete="checkComplete"
    ></List>
    <Footer
      :list="list"
      :selected="selected"
      @getData="getData"
      @deleteSelectedData="deleteSelectedData"
      @getJsonData="getJsonData"
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
      selected: [],
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
    appendRow(rowId, date, contents) {
      if (date == "") {
        alert("날짜를 입력하세요.");
        return;
      }

      if (contents == "") {
        alert("내용을 입력하세요.");
        return;
      }

      let objTodo = {
        rowId: rowId + 1,
        date: date,
        contents: contents,
        complete: "N",
      };

      this.list.push(objTodo);

      document.getElementById("date").value = "";
      document.getElementById("contents").value = "";
    },
    // 수정
    updateRow(iRowId, strNewContent) {
      alert("수정이벤트 발생");
      document.getElementById("content-" + iRowId).textContent = strNewContent;
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
    getJsonData() {
      alert(JSON.stringify(this.list));
    },
    selectItem(selected) {
      this.selected = selected;
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
