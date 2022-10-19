<template>
  <div style="text-align: center">
    <table class="table">
      <thead>
        <tr>
          <td>
            <input
              type="checkbox"
              id="allCheck"
              name="allCheck"
              class="check_all_list"
              @click="allCheck(event)"
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
              name="checkRow"
                class="check_all_list"
                @click="checkAllList(event)"
            />
          </th>
          <td>{{ item.date }}</td>
          <td>{{ item.contents }}</td>
          <td>
            <input
              id="check-complete"
              type="checkbox"
              v-if="item.complete == 'Y'"
              checked
            />
            <input type="checkbox" v-else />
          </td>
          <td></td>
          <td>
            <span
              style="color: red; cursor: pointer"
              @click="deleteRow(item.rowId)"
              >삭제</span
            >&nbsp;&nbsp;
            <span style="color: blue; cursor: pointer"> 수정 </span>
          </td>
        </tr>
      </tbody>
    </table>
    <button id="show-modal" @click="showModal = true">Show Modal</button>

    <Teleport to="body">
      <modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>custom header</h3>
        </template>
      </modal>
    </Teleport>
    <Popup :show="show"></Popup>
  </div>
</template>

<script>
import Popup from "./Popup.vue";
export default {
  showModal: false,
  props: ["list"],
  methods: {
    // CheckBox
    allCheck(e) {
      if (e.target.checked) {
        document.querySelectorAll(".check_all_list").forEach(function (v) {
          v.checked = true;
        });
      } else {
        document.querySelectorAll(".check_all_list").forEach(function (v) {
          v.checked = false;
        });
      }
    },

    checkAllList() {
      let checkCount = 0;
      document.querySelectorAll(".check_all_list").forEach(function (v) {
        if (v.checked === false) {
          checkCount++;
        }
      });

      if (checkCount > 0) {
        document.getElementById("allCheck").checked = false;
      } else if (checkCount === 0) {
        document.getElementById("allCheck").checked = true;
      }
    },
    // 삭제
    deleteRow(id) {
      this.list = this.list.filter((a) => a.rowId != id);
    },
    // 다중 삭제
    deleteSelectedAll() {
      
    },
  },
  components: {
    Popup,
  },
};
</script>

<style></style>
