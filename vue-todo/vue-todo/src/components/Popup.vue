<template>
  <div>
    <b-modal id="modal-1" title="내용 수정" @show="showModal()">
      <div style="padding: 10px">
        <label><b>수정 전</b></label
        >&nbsp;&nbsp;
        <input type="text" id="before-update-text" :value="contents" />
      </div>
      <div style="padding: 10px">
        <label><b>수정 후</b></label
        >&nbsp;&nbsp;
        <input type="text" id="after-update-text" />
      </div>

      <div class="modal-footer">
        <input id="table-id" type="hidden" />
        <button
          type="button"
          class="btn btn-primary"
          id="update-btn"
          @click="clickUpdateBtn()"
        >
          수정
        </button>
        <button
          type="button"
          style="display: none"
          class="btn btn-primary"
          id="update-all-btn"
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
      txtBefore: document.getElementById("before-update-text"),
      
    }
  },
  props: ["selectedId", "contents"],
  methods: {
    clickUpdateBtn(id) {
      let strContent = document.getElementById("contents-" + id).textContent;

      document.getElementById("update-btn").style.display = "block";
      document.getElementById("update-all-btn").style.display = "none";
      document.getElementById("before-update-text").value = strContent;
      document.getElementById("before-update-text").disabled = true;

      alert("단건수정");
    },
    updateRow() {
      let id = this.selectedId;
      this.$emit("updateRow", id);

    },
    showModal() {
      let txtBefore = this.txtBefore;
      this.$emit("showModal", txtBefore);
    }
  },
};
</script>

<style>
#modal-1___BV_modal_footer_ {
  display: none;
}
</style>
