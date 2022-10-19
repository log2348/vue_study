<template>
  <div>
    <div style="text-align: center">
      <h2>My Todo List</h2>
    </div>
    <br />
    <br />
    <div class="form-group">
      <div>
        <select
          class="form-control"
          style="width: 10%"
          @change="selectByDate()"
        >
          <option>전체</option>
          <option>1</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <br />
      <div style="width: 30%">
        <label><b>날짜</b></label>
        <div class="row">
          <input
            class="form-control col-sm-4 datepicker"
            placeholder="날짜를 입력하세요."
            id="date"
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
            id="contents"
            placeholder="내용을 입력하세요."
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
  props: ["list"],
  methods: {
    // 날짜별 검색
    selectedByDate() {
      alert("select box change");
    },
    // 추가
    appendRow() {
      let rowId = document.getElementById("table-body").childElementCount + 1;
      let date = document.getElementById("date").value;
      let contents = document.getElementById("contents").value;

      this.$emit("appendRow", rowId, date, contents);
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
