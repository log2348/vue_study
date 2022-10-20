<template>
  <div style="text-align: center">
    <table class="table">
      <thead>
        <tr>
          <td>
            <input
              name="checkbox"
              type="checkbox"
              v-model="selectAll"
              @click="checkAll($event.target.checked)"
              :value="all"
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
              type="checkbox"
              :value="item.rowId"
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
              v-model="allCheck"
              checked
            />
            <input :id="'complete-' + item.rowId" type="checkbox" v-else />
          </td>
          <td></td>
          <td>
            <input type="hidden" id="row-id" :value="item.rowId" />
            <span
              style="color: red; cursor: pointer"
              @click="deleteRow(item.rowId)"
              >삭제</span
            >&nbsp;&nbsp;
            <span
              style="color: blue; background-color: white; cursor: pointer"
              v-b-modal.modal-1
              @click="clickUpdateBtn(item.rowId)"
              >수정</span
            >
          </td>
        </tr>
      </tbody>
    </table>

    <Popup
      :selectedId="selectedId"
      :txtBefore="txtBefore"
      :isMultiSelect="isMultiSelect"
      @updateRow="updateRow"
      @updateAll="updateAll"
    ></Popup>
  </div>
</template>

<script>
import Popup from "../components/Popup.vue";
export default {
  data() {
    return {
      selectedId: 0,
      isMultiSelect: this.isUpdatedAll,
      txtBefore: "",
      selected: [],
    };
  },
  props: ["list", "isUpdatedAll"],

  methods: {
    deleteRow(id) {
      this.$emit("deleteRow", id);
    },
    selectItem() {
      this.$emit("selectItem", this.selected);
    },
    // 단건 수정 버튼 클릭
    clickUpdateBtn(id) {
      this.selectedId = id;
      this.txtBefore = document.getElementById("contents-" + id).textContent;
      this.isUpdatedAll = false;
    },
    // 단건 수정
    updateRow(id, strNewContent) {
      this.$emit("updateRow", id, strNewContent);
    },
    // 일괄 수정
    updateAll(txtBefore, txtAfter) {
      this.$emit("updateAll", txtBefore, txtAfter);
    },

    // TODO 완료여부 체크에 따른 행 색상 세팅
  },
  computed: {
    selectAll: {
      get: function () {
        return this.list.length === this.selected.length;
      },
      set: function (e) {
        this.selected = e ? this.list.map((a) => a.rowId) : [];
      },
    },
    // selectAll: {
    //     get: function () {
    //       return this.check ? this.selected.length == this.check.length : false;
    //     },
    //     set: function (value) {
    //       const selected = [];

    //       if (value) {
    //         this.check.forEach(function (content) {
    //           selected.push(content.id);
    //         });
    //       }

    //       this.selected = selected;
    //     },
    //   },
  },

  components: {
    Popup,
  },
};
</script>

<style></style>
