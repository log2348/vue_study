<template>
  <div style="text-align: center">
    <table class="table">
      <thead>
        <tr>
          <td>
            <input type="checkbox" v-model="selectAll" />
          </td>
          <th>날짜</th>
          <th>내용</th>
          <th>완료여부</th>
          <th></th>
        </tr>
      </thead>

      <tbody id="table-body">
        <tr
          :style="item.complete == 'Y' ? 'background-color: pink' : ''"
          align="center"
          v-for="item in list"
          :key="item.rowId"
        >
          <th>
            <input
              type="checkbox"
              :value="item.rowId"
              v-model="selected"
              @change="$emit('selectItem', selected)"
            />
          </th>
          <td>{{ item.date }}</td>
          <td>{{ item.contents }}</td>
          <td>
            <input
              type="checkbox"
              v-if="item.complete == 'Y'"
              @change="checkComplete(item.rowId)"
              checked
            />
            <input type="checkbox" @change="checkComplete(item.rowId)" v-else />
          </td>
          <td>
            <input type="hidden" id="row-id" :value="item.rowId" />
            <span
              style="color: red; cursor: pointer"
              @click="$emit('deleteRow', item.rowId)"
              >삭제</span
            >&nbsp;&nbsp;
            <span
              style="color: blue; cursor: pointer"
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
      :showModal="showModal"
      :isUpdatedAll="isUpdatedAll"
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
      txtBefore: "",
      selected: [],
    };
  },
  props: ["list", "showModal", "isUpdatedAll"],
  methods: {
    // 단건 수정 버튼 클릭
    clickUpdateBtn(id) {
      this.selectedId = id;
      this.txtBefore = this.list.find(
        (a) => a.rowId == this.selectedId
      ).contents;
      this.$emit("clickUpdateBtn");
    },
    // 단건 수정
    updateRow(id, strNewContent) {
      this.$emit("updateRow", id, strNewContent);
    },
    // 일괄 수정
    updateAll(txtBefore, txtAfter) {
      this.$emit("updateAll", txtBefore, txtAfter);
    },
    // 완료여부 체크에 따른 행 색상 변경
    checkComplete(id) {
      for (let i = 0; i < this.list.length; i++) {
        this.list.find((a) => a.rowId == id).complete =
          this.list.find((a) => a.rowId == id).complete == "N" ? "Y" : "N";
      }
    },
  },
  computed: {
    // 체크박스 전체 선택 및 전체 해제
    selectAll: {
      get() {
        return this.list.length === this.selected.length;
      },
      set(e) {
        this.selected = e ? this.list.map((a) => a.rowId) : [];
        this.$emit("selectItem", this.selected);
      },
    },
  },
  components: {
    Popup,
  },
};
</script>

<style></style>
