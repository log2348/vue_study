<template>
  <div class="container" style="text-align: end">
    <button
      type="button"
      class="btn btn-danger"
      @click="deleteSelectedData(selected)"
    >
      선택 삭제</button
    >&nbsp;&nbsp;
    <button
      type="button"
      class="btn btn-success"
      @click="clickUpdateAllBtn"
      v-b-modal.modal-1
    >
      일괄 수정</button
    >&nbsp;&nbsp;<router-link
      :to="{ name: 'detail', query: list }"
      :completed="completed"
    >
      <button class="btn btn-light">이동</button></router-link
    >
    <br /><br />
    <button class="btn btn-outline-secondary" @click="$emit('showJsonData')">
      항목 JSON 반환</button
    >&nbsp;&nbsp;
    <button class="btn btn-outline-secondary" @click="$emit('getData')">
      항목 불러오기</button
    >&nbsp;&nbsp;
    <button class="btn btn-outline-secondary" @click="$emit('initData')">
      초기화
    </button>
  </div>
</template>

<script>
export default {
  props: ["list", "completed", "selected"],
  methods: {
    selectComplete() {
      this.completed = this.list.filter((a) => a.complete == "Y");
    },
    // 다중 삭제
    deleteSelectedData(selected) {
      selected = this.selected;
      this.$emit("deleteSelectedData", selected);
    },
    // 일괄 수정 버튼 클릭
    clickUpdateAllBtn() {
      this.$emit("clickUpdateAllBtn");
    },
  },
};
</script>

<style></style>
