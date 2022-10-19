<template>
  <div class="container">
   <table style="text-align: center" class="table">
      <thead>
        <tr>
          <th>날짜</th>
          <th>내용</th>
        </tr>
      </thead>

      <tbody id="table-body">
        <tr align="center" v-for="item in this.list" :key="item.rowId">
          <td>{{ item.date }}</td>
          <td>{{ item.contents }}</td>
        </tr>
      </tbody>
    </table>
    <router-link to="/"
      ><button class="btn btn-outline-secondary">메인으로</button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["completed"]
};
</script>

<style></style>
