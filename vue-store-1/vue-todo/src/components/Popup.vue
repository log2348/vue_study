<template>
  <div>
    <b-modal id="modal-1" title="내용 수정" @show="setModal" v-if="$store.state.showModal" >
      <div style="padding: 10px">
        <label><b>수정 전</b></label
        >&nbsp;&nbsp;
        <input type="text" id="before-update-text" v-model="before" :disabled="!$store.state.isUpdatedAll" />
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
          v-if="!$store.state.isUpdatedAll"
        >
          수정
        </button>
        <button
          type="button"
          class="btn btn-primary"
          @click="updateAll(before, after)"
          v-if="$store.state.isUpdatedAll"
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
  props: ["txtBefore", "selectedId"],
  methods: {
    updateRow(selectedId, after) {
      this.$store.commit('UPDATE_ROW', { selectedId, after });
    },
    updateAll(before, after) {
      this.$store.commit('UPDATE_ALL', {before, after});
    },
    // 모달 세팅
    setModal() {
      this.before = "";
      this.after = "";
      if (!this.$store.state.isUpdatedAll) {
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
