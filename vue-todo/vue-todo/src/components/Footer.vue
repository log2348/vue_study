<template>
  <div class="container" style="text-align: end">
    <button type="button" class="btn btn-danger">선택 삭제</button>&nbsp;&nbsp;
    <button
      type="button"
      class="btn btn-success"
      id="show-modal"
      @click="showModal = true"
    >
      일괄 수정</button
    >&nbsp;&nbsp;
    <button class="btn btn-light">
      <router-link to="/detail">이동</router-link>
    </button>
    <br /><br />
    <button class="btn btn-outline-secondary">항목 JSON 반환</button
    >&nbsp;&nbsp;
    <button class="btn btn-outline-secondary">항목 불러오기</button>&nbsp;&nbsp;
    <button class="btn btn-outline-secondary" @click="initData()">
      초기화
    </button>
  </div>
</template>

<script>
export default {
  props: ["list"],
  methods: {
    // 초기화
    initData() {
      document.getElementById("table-body").innerHTML = "";
    },
  },
};
</script>

<style></style>
