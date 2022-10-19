<template>
  <div class="container">
    <Header :list="list"></Header>
    <List :list="list"></List>
    <Footer :list="list"></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import List from "../components/List.vue";
import Footer from "../components/Footer.vue";

export default {
  data() {
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
      complete: "",
    };
  },
  methods: {
    updateRow(id) {
      alert("수정 이벤트 발생" + id);
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
