<template>
  <div>
    <b-modal id="modal-1" title="내용 수정">
      <div style="padding: 10px">
        <label><b>수정 전</b></label
        >&nbsp;&nbsp;
        <input type="text" id="before-update-text" />
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
      methods: {
        // 단건 수정
        updateRow() {
          let iRowId = document.getElementById("table-id").value;
          let strNewContent =
            document.getElementById("after-update-text").value;

          if (strNewContent == "") {
            alert("수정하실 문자열을 입력하세요.");
            return;
          }

          // 모달창 닫기
          document.getElementById("close-update-modal").click();
          this.$emit("updateRow", iRowId, strNewContent);
        },
        // 삭제
        deleteRow(id) {
          this.$emit("deleteRow", id);
        },
        // 일괄 수정
        updateSelectedAll() {
          this.$emit("updateSelectedAll");
          /*
          let arrTodoList = getAllData();
          let strBeforeContent =
            document.getElementById("before-update-text").value;
          let strAfterContent = document.getElementById("after-update-text").value;
    
          let isUpdated = false;
    
          if (strAfterContent == "" || strBeforeContent == "") {
            alert("텍스트를 입력하세요.");
            return;
          }
    
          arrTodoList.forEach((v, i) => {
            if (v.content.indexOf(strBeforeContent) != -1) {
              v.content = v.content.replaceAll(strBeforeContent, strAfterContent);
              isUpdated = true;
    
              document.getElementById("content-" + i).textContent = v.content;
            }
          });
    
          if (!isUpdated) {
            alert("찾으시는 문자열이 없습니다.");
            return;
          }
    
          // 모달창 닫기
          document.getElementById("close-update-modal").click();
    
          */
        },
        clickUpdateBtn() {
          alert("단건수정");
          this.$emit("clickUpdateBtn");
        },
      },
    };
  },
};
</script>

<style></style>
