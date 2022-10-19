<template>
  <div class="container" style="text-align: end">
    <button type="button" class="btn btn-danger" @click="deleteSelectedData(selected)">선택 삭제</button>&nbsp;&nbsp;
    <button
      type="button"
      class="btn btn-success"
      id="show-modal"
      @click="showModal = true"
    >
      일괄 수정</button
    >&nbsp;&nbsp;<router-link to="/detail" :completed="completed">
      <button class="btn btn-light">이동</button></router-link
    >
    <br /><br />
    <button class="btn btn-outline-secondary" @click="getData()">항목 JSON 반환</button
    >&nbsp;&nbsp;
    <button class="btn btn-outline-secondary">항목 불러오기</button>&nbsp;&nbsp;
    <button class="btn btn-outline-secondary" @click="initData()">
      초기화
    </button>
    
  </div>
</template>

<script>
export default {
  completed: [],
  props: ["list", "selected"],
  methods: {
    // 초기화
    initData() {
      document.getElementById("table-body").innerHTML = "";
    },
    getData() {
      this.$emit("getData");
    },
    selectComplete() {
      this.completed = this.list.filter((a) => a.complete == "Y");
    },
    // 다중 삭제
    deleteSelectedData(selected) {
      this.$emit("deleteSelectedData", selected);
    }
  },
};
</script>

<style></style>
