<template>
  <div class="container" style="text-align: end">
    <button
      type="button"
      class="btn btn-danger"
      @click="$store.commit('DELETE_ALL', $store.state.selected)"
    >
      선택 삭제</button
    >&nbsp;&nbsp;
    <button
      type="button"
      class="btn btn-success"
      @click="$store.dispatch('clickUpdateAllBtn')"
      v-b-modal.modal-1
    >
      일괄 수정</button
    >&nbsp;&nbsp;<router-link
      :to="{ name: 'detail', query: $store.state.list }"
    >
      <button class="btn btn-light">이동</button></router-link
    >
    <br /><br />
    <button
      class="btn btn-outline-secondary"
      @click="$store.dispatch('showJsonData')"
    >
      항목 JSON 반환</button
    >&nbsp;&nbsp;
    <button
      class="btn btn-outline-secondary"
      @click="$store.commit('GET_DATA')"
    >
      항목 불러오기</button
    >&nbsp;&nbsp;
    <button
      class="btn btn-outline-secondary"
      @click="$store.commit('INIT_DATA')"
    >
      초기화
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
