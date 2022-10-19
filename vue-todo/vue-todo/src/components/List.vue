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
            <span style="color: blue; cursor: pointer" @click="updateRow()">
              수정
            </span>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  showModal: false,
  openPopup: false,
  props: ["list"],
  methods: {
    
    // 다중 삭제
    deleteSelectedAll() {},
  },
  components: {
  },
};
</script>

<style></style>
