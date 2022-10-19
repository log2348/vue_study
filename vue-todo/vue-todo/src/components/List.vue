<template>
  <div style="text-align: center">
    <table class="table">
      <thead>
        <tr>
          <td>
            <input
              id="allCheck"
              name="checkbox"
              type="checkbox"
              @change="checkAll()"
            />
          </td>
          <th>날짜</th>
          <th>내용</th>
          <th>완료여부</th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody id="table-body">
        <tr align="center" v-for="item in this.list" :key="item.rowId">
          <th>
            <input
              :value="item.rowId"
              type="checkbox"
              name="checkbox"
              v-model="selected"
              @change="selectItem()"
            />
          </th>
          <td :id="'date-' + item.rowId">{{ item.date }}</td>
          <td :id="'contents-' + item.rowId">{{ item.contents }}</td>
          <td>
            <input
              :id="'complete-' + item.rowId"
              type="checkbox"
              v-if="item.complete == 'Y'"
              v-model="completed"
              checked
            />
            <input :id="'complete-' + item.rowId" type="checkbox" v-else />
          </td>
          <td></td>
          <td>
            <span
              style="color: red; cursor: pointer"
              @click="deleteRow(item.rowId)"
              >삭제</span
            >&nbsp;&nbsp;
            <span
              style="color: blue; background-color: white; cursor: pointer"
              v-b-modal.modal-1
              @click="clickUpdateBtn(item.rowId)"
              >수정</span>
          </td>
        </tr>
      </tbody>
    </table>

    <Popup
      :selectedId="selectedId"
      :contents="contents"
      @clickUpdateBtn="clickUpdateBtn"
      @updateRow="updateRow"
      @showModal="showModal"
    ></Popup>
  </div>
</template>

<script>
import Popup from "../components/Popup.vue";
export default {
  data() {
    return {
      selectedId: 0,
      contents: document.getElementById("contents-" + this.selectedId).textContent,
      selected: [],
      allChecked: false,
    };
  },
  props: ["list"],
  methods: {
    checkAll() {},
    deleteRow(id) {
      this.$emit("deleteRow", id);
    },
    selectItem() {
      this.$emit("selectItem", this.selected);
    },
    // 단건 수정 버튼 클릭
    clickUpdateBtn(id) {
      this.selectedId = id;
      alert(this.selectedId);

      // let strContent = document.getElementById("contents-" + id).textContent;

      // document.getElementById("update-btn").style.display = "block";
      // document.getElementById("update-all-btn").style.display = "none";
      // document.getElementById("before-update-text").value = strContent;
      // document.getElementById("before-update-text").disabled = true;
    },
    updateRow(id) {
      this.$emit("updateRow", id);
    },
    showModal(txtBefore) {
      alert(txtBefore.textContent);
      txtBefore.disabled = true;
    }
  },
  components: {
    Popup,
  },
};
</script>

<style></style>
