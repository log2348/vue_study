<template>
  <div class="container">
    <Header
      :dateList="dateList"
      @selectByDate="selectByDate"
    ></Header>
    <List
      :dateList="dateList"
      :isUpdatedAll="isUpdatedAll"
      @clickUpdateBtn="clickUpdateBtn"
      @selectItem="selectItem"
    ></List>
    <Footer
      :selected="selected"
      :isUpdatedAll="isUpdatedAll"
      @getData="getData"
      @clickUpdateAllBtn="clickUpdateAllBtn"
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
      selected: [],
      isUpdatedAll: false,
    };
  },
  methods: {
    // 항목 JSON 형식 반환
    showJsonData() {
      alert(JSON.stringify(this.$store.state.list));
    },
    // 선택된 항목 배열에 담기
    selectItem(selected) {
      this.selected = selected;
    },
    // 날짜별 검색 (필터링)
    selectByDate(date) {
      this.$store.state.list = this.$store.state.list.filter((a) => a.date == date);
    },
    getData() {
      this.$store.commit('GET_DATA');
    },
    clickUpdateBtn() {
      this.isUpdatedAll = false;
    },
    clickUpdateAllBtn() {
      this.isUpdatedAll = true;
    },
  },
  computed: {
    dateList: function () {
      // 중복제거한 날짜 배열에 담기
      return Array.from(new Set(this.$store.state.list.map((a) => a.date)));
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
