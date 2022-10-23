<template>
  <div class="container">
    <Header @selectByDate="selectByDate"></Header>
    <List></List>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import List from "../components/List.vue";
import Footer from "../components/Footer.vue";

export default {
  methods: {
    // 날짜별 검색 (필터링)
    selectByDate(date) {
      if (date != "전체") {
        this.$store.state.filteredList = this.$store.state.list.filter(
          (a) => a.date == date
        );
        this.$store.state.isFiltered = true;
      } else {
        this.$store.state.isFiltered = false;
      }

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
