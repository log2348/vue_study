<template>
  <div>
    <b-modal id="modal-1" title="내용 수정" @show="setModal" v-show="isShow">
      <div style="padding: 10px">
        <label><b>수정 전</b></label
        >&nbsp;&nbsp;
        <input type="text" id="before-update-text" v-model="before" />
      </div>
      <div style="padding: 10px">
        <label><b>수정 후</b></label
        >&nbsp;&nbsp;
        <input type="text" id="after-update-text" v-model="after" />
      </div>

      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-primary"
          @click="updateRow(selectedId, after)"
        >
          수정
        </button>
        <button
          type="button"
          class="btn btn-primary"
          @click="updateAll(before, after)"
        >
          일괄 수정
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      before: "",
      after: "",
      isShow: true,
    };
  },
  props: ["selectedId", "txtBefore", "isMultiSelect"],
  methods: {
    updateRow(selectedId, after) {
      this.$store.commit('UPDATE_ROW', { selectedId, after });
      this.initUpdateForm();
    },
    updateAll(before, after) {
      this.$store.commit('UPDATE_ALL', {before, after});
      this.initUpdateForm();
    },
    // 모달 텍스트 폼 세팅
    initUpdateForm() {
      this.before = "";
      this.after = "";
    },
    // 모달 세팅
    setModal() {
      this.initUpdateForm();
      this.before = this.txtBefore;
    },
  },
};
</script>

<style>
#modal-1___BV_modal_footer_ {
  display: none;
}
.close {
  display: none;
}
</style>
