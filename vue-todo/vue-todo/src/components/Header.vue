<template>
  <div>
    <br />
    <div style="text-align: center">
      <h2>My Todo List</h2>
    </div>
    <br />
    <br />
    <div class="form-group">
      <div style="text-align: right">
        <select style="width: 10%" @change="selectByDate" v-model="selected">
          <option>전체</option>
          <option v-for="item in this.dateList" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
      <br />
      <div style="width: 30%">
        <label><b>날짜</b></label>
        <div class="row">
          <input
            class="form-control col-sm-4 datepicker"
            placeholder="날짜를 입력하세요."
            v-model="date"
          />
        </div>
      </div>
      <br />

      <div style="width: 30%">
        <label><b>내용</b></label>
        <div class="row">
          <input
            type="text"
            class="form-control col-sm-4"
            placeholder="내용을 입력하세요."
            v-model="contents"
          />
        </div>
        <button
          type="button"
          class="btn btn-primary"
          style="width=10%"
          @click="appendRow()"
        >
          추가
        </button>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  selected: "",
  date: "",
  contents: "",
  props: ["list", "dateList"],
  methods: {
    // 날짜별 검색
    selectByDate() {
      this.$emit("selectByDate", this.selected);
    },
    // 추가
    appendRow() {
      let rowId = this.$store.state.list.length + 1;

      this.$emit("appendRow", rowId, this.date, this.contents);

      // 입력폼 초기화
      this.date = "";
      this.contents = "";
    },
  },
};
</script>

<style>
div {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
