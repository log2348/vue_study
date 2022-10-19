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
            <b-button
              style="color: blue; background-color: white; cursor: pointer"
              v-b-modal.modal-1
              @click="clickUpdateBtn()"
              >수정</b-button
            >
          </td>
        </tr>
      </tbody>
    </table>

    <Popup @clickUpdateBtn="clickUpdateBtn"></Popup>
  </div>
</template>

<script>
import Popup from "../components/Popup.vue";
export default {
  data() {
    return {
      selected: [],
    };
  },
  computed: {},
  props: ["list"],
  methods: {
    checkAll() {
      
    },
    deleteRow(id) {
      this.$emit("deleteRow", id);
    },
    // 다중 삭제
    deleteSelectedAll() {},
    // 단건 수정폼 세팅
    clickUpdateBtn() {
      //let strContent = document.getElementById("contents-" + id).textContent;

      document.getElementById("update-btn").style.display = "block";
      document.getElementById("update-all-btn").style.display = "none";
      //document.getElementById("before-update-text").value = strContent;
      document.getElementById("before-update-text").disabled = true;
      //document.getElementById("table-id").value = id;

      console.log(document.getElementById("before-update-text").value);
    },
    selectItem() {
      this.$emit("selectItem", this.selected);
    },
  },
  components: {
    Popup,
  },
};
</script>

<style></style>
