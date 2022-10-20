<template>
  <div>
    <b-modal id="modal-1" title="내용 수정" v-model="myModal" @show="setModal">
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
          @click="updateRow"
          v-show="!this.isMultiSelect"
        >
          수정
        </button>
        <button
          type="button"
          class="btn btn-primary"
          @click="updateAll"
          v-show="this.isMultiSelect"
        >
          수정
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
      modal: "",
    };
  },
  props: ["selectedId", "txtBefore", "isMultiSelect"],
  methods: {
    // 단건 수정
    updateRow() {
      let id = this.selectedId;
      let strNewContent = this.after;
      // let strOldContent = this.before;
      this.$emit("updateRow", id, strNewContent);
      // TODO 모달창 닫기
      this.initUpdateForm();
    },
    // 일괄 수정
    updateAll() {
      let txtBefore = this.before;
      let txtAfter = this.after;
      this.$emit("updateAll", txtBefore, txtAfter);
    },
    initUpdateForm() {
      this.before = "";
      this.after = "";
    },
    setModal() {
      this.before = this.txtBefore;
    },
  },
};
</script>

<style>
#modal-1___BV_modal_footer_ {
  display: none;
}
</style>
