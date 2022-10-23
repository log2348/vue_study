<template>
  <div>
    <b-modal id="modal-1" title="내용 수정" @show="setModal" v-if="showModal">
      <div style="padding: 10px">
        <label><b>수정 전</b></label
        >&nbsp;&nbsp;
        <input
          type="text"
          id="before-update-text"
          v-model="before"
          :disabled="!isUpdatedAll"
        />
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
          v-if="!isUpdatedAll"
        >
          수정
        </button>
        <button
          type="button"
          class="btn btn-primary"
          @click="updateAll"
          v-if="isUpdatedAll"
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
    };
  },
  props: [
    "selectedId",
    "txtBefore",
    "isMultiSelect",
    "showModal",
    "isUpdatedAll",
  ],
  methods: {
    // 단건 수정
    updateRow() {
      this.$emit("updateRow", this.selectedId, this.after);
    },
    // 일괄 수정
    updateAll() {
      this.txtBefore = "";
      this.$emit("updateAll", this.before, this.after);
    },
    // 모달 세팅
    setModal() {
      this.before = "";
      this.after = "";

      // 단건 수정일 경우에만 수정 전 값 세팅
      if (!this.isUpdatedAll) {
        this.before = this.txtBefore;
      }
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
