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
          <th></th>
        </tr>
      </thead>

      <tbody id="table-body" v-if="$store.state.isFiltered">
        <tr
          :style="item.complete == 'Y' ? 'background-color: pink' : ''"
          align="center"
          v-for="item in this.$store.state.filteredList"
          :key="item.rowId"
        >
          <th>
            <input
              type="checkbox"
              :value="item.rowId"
              v-model="$store.state.selected"
            />
          </th>
          <td>{{ item.date }}</td>
          <td>{{ item.contents }}</td>
          <td>
            <input
              type="checkbox"
              v-if="item.complete == 'Y'"
              @click="$store.commit('CHECK_COMPLETE', item.rowId)"
              checked
            />
            <input
              type="checkbox"
              @click="$store.commit('CHECK_COMPLETE', item.rowId)"
              v-else
            />
          </td>
          <td></td>
          <td>
            <span
              style="color: red; cursor: pointer"
              @click="$store.commit('DELETE_ROW', item.rowId)"
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

      <tbody id="table-body" v-if="!$store.state.isFiltered">
        <tr
          :style="item.complete == 'Y' ? 'background-color: pink' : ''"
          align="center"
          v-for="item in this.$store.state.list"
          :key="item.rowId"
        >
          <th>
            <input
              type="checkbox"
              :value="item.rowId"
              v-model="$store.state.selected"
            />
          </th>
          <td>{{ item.date }}</td>
          <td>{{ item.contents }}</td>
          <td>
            <input
              type="checkbox"
              v-if="item.complete == 'Y'"
              @click="$store.commit('CHECK_COMPLETE', item.rowId)"
              checked
            />
            <input
              type="checkbox"
              @click="$store.commit('CHECK_COMPLETE', item.rowId)"
              v-else
            />
          </td>
          <td></td>
          <td>
            <span
              style="color: red; cursor: pointer"
              @click="$store.commit('DELETE_ROW', item.rowId)"
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
    <Popup :txtBefore="txtBefore" :selectedId="selectedId"></Popup>
  </div>
</template>

<script>
import Popup from "../components/Popup.vue";
export default {
  data() {
    return {
      selectedId: 0,
      txtBefore: "",
    };
  },

  methods: {
    // 단건 수정 버튼 클릭
    clickUpdateBtn(id) {
      this.selectedId = id;
      this.txtBefore = this.$store.state.list.find(
        (a) => a.rowId == this.selectedId
      ).contents;

      this.$store.dispatch("clickUpdateBtn", this.selectedId);
    },
  },
  computed: {
    // 체크박스 전체 선택 및 전체 해제
    selectAll: {
      get() {
          return this.$store.state.list.length === this.$store.state.selected.length;
      },
      set(boolean) {
        this.$store.state.selected = boolean
          ? this.$store.state.list.map((a) => a.rowId)
          : [];
      },
    },
  },
  components: {
    Popup,
  },
};
</script>

<style></style>
