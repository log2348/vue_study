<template>
  <div>
    <!-- 테이블로 Todo List -->
    <!-- 1. 리스트를 그린다. -->
    <!-- 2. 단건 삭제 버튼도 그린다. -->
    <!-- 3. 삭제 버튼을 기능이 되게 함수를 만든다. -->
    <!-- 4. 등록(추가) 이벤트도 만든다. -->
    <div style="text-align: center">
      <h2>My Todo List</h2>
    </div>
    <br />
    <br />
    <div>
      <label><b>날짜</b></label>
      <br />
      <input class="datepicker" placeholder="yyyy-MM-dd" id="date" />
      <br />
      <br />

      <label><b>내용</b></label>
      <br />
      <input
        type="text"
        id="contents"
        placeholder="내용을 입력하세요."
      />&nbsp;&nbsp;
      <button type="button" @click="appendRow()">추가</button>
    </div>
    <br />
    <br />

    <div style="text-align: center">
      <table border="1" width="80%" height="200">
        <thead>
          <tr>
            <td><input type="checkbox" value="1" v-model="checkbox" /></td>
            <th>날짜</th>
            <th>내용</th>
            <th>완료여부</th>
            <th></th>
          </tr>
        </thead>

        <tbody id="table-body">
          <tr align="center" v-for="item in list" :key="item.rowId">
            <th><input type="checkbox" /></th>
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
            <td>
              <button @click="deleteRow(item.rowId)">삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          rowId: 1,
          date: "2022-10-10",
          contents: "내용1",
          complete: "Y",
        },
        {
          rowId: 2,
          date: "2022-10-11",
          contents: "내용2",
          complete: "N",
        },
        {
          rowId: 3,
          date: "2022-10-11",
          contents: "내용3",
          complete: "N",
        },
        {
          rowId: 4,
          date: "2022-10-12",
          contents: "내용4",
          complete: "N",
        },
        {
          rowId: 5,
          date: "2022-10-13",
          contents: "내용5",
          complete: "Y",
        },
      ],
      complete: "",
    };
  },
  methods: {
    // 삭제
    deleteRow(id) {
      this.list = this.list.filter((a) => a.rowId != id);
    },
    // 추가
    appendRow() {
      if (document.getElementById("date").value == "") {
        alert("날짜를 입력하세요.");
        return;
      }

      if (document.getElementById("contents").value == "") {
        alert("내용을 입력하세요.");
        return;
      }

      let objTodo = {
        rowId: document.getElementById("table-body").childElementCount + 1,
        date: document.getElementById("date").value,
        contents: document.getElementById("contents").value,
        complete: "N",
      };
      this.list.push(objTodo);

      document.getElementById("date").value = "";
      document.getElementById("contents").value = "";
    },
  },
};
</script>

<style>
div {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
