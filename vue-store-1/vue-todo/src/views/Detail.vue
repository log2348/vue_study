<template>
  <div class="container">
    <div style="text-align: center">
      <h2>완료된 목록</h2>
    </div>
    <div class="row">
      <select
        style="width: 20%"
        v-model="selectedDate"
        @change="selectByDate(selectedDate)"
      >
        <option>전체</option>
        <option v-for="item in dateList" :key="item" :value="item">
          {{ item }}
        </option></select
      >&nbsp;&nbsp;
      <select style="width: 20%" v-model="sorted" @change="orderByDate">
        <option :value="1">오름차순</option>
        <option :value="2">내림차순</option>
      </select>
    </div>
    <table style="text-align: center" class="table">
      <thead>
        <tr>
          <th>날짜</th>
          <th>내용</th>
        </tr>
      </thead>

      <tbody id="table-body" v-if="!isFiltered">
        <tr align="center" v-for="item in list" :key="item.rowId">
          <td>{{ item.date }}</td>
          <td>{{ item.contents }}</td>
        </tr>
      </tbody>

      <tbody id="table-body" v-if="isFiltered">
        <tr align="center" v-for="item in filteredList" :key="item.rowId">
          <td>{{ item.date }}</td>
          <td>{{ item.contents }}</td>
        </tr>
      </tbody>
    </table>
    <router-link to="/"
      ><button class="btn btn-outline-secondary">메인으로</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      list: this.$route.query.filter((a) => a.complete == "Y"),
      selectedDate: "",
      sorted: "",
      filteredList: [],
    };
  },
  methods: {
    // 날짜별 검색
    selectByDate(date) {
      if (date != "전체") {
        this.filteredList = this.list.filter((a) => a.date == date);
        this.isFiltered = true;
      } else {
        this.isFiltered = false;
      }
    },
    // 정렬
    orderByDate() {
      if (this.sorted == 1) {
        // 오름차순
        this.list = this.list.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
      } else {
        // 내림차순
        this.list = this.list.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      }
    },
  },
  computed: {
    dateList: function () {
      return Array.from(new Set(this.list.map((a) => a.date)));
    },
  },
};
</script>

<style scoped>
div {
  padding: 20px;
}
</style>
