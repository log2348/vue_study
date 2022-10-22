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
        <button type="button" class="btn btn-primary" @click="updateRow">
          수정
        </button>
        <button type="button" class="btn btn-primary" @click="updateAll">
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
      isShow: true
    };
  },
  props: ["selectedId", "txtBefore", "isMultiSelect"],
  methods: {
    // 단건 수정
    updateRow() {
      this.isShow = false;
      this.$emit("updateRow", this.selectedId, this.after);
      
      this.before = "";
      this.after = "";
    },
    // 일괄 수정
    updateAll() {
      this.$emit("updateAll", this.before, this.after);
      this.isShow = false;

      this.before = "";
      this.after = "";
    },
    // 모달 세팅
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
.close {
  display: none;
}
</style>
