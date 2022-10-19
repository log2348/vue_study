<template>
  <div
    v-if="ModalDisplay"
    class="shadow-lg w-full h-full flex bg-black bg-opacity-70 justify-center align-middle items-center"
  >
    <div class="w-1/3 h-1/2 bg-white rounded relative">
      <div class="relative w-full">
        <div class="flex text-center items-center justify-center pt-2">
          <h1 class="font-bold text-2xl">모달창 레이아웃</h1>
        </div>
        <svg
          @click="ModalDisplay = false"
          id="closeModalBtn"
          xmlns="http://www.w3.org/2000/svg"
          class="cursor-pointer h-10 w-10 absolute top-0 right-0 hover:text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div class="w-full pt-5">
        <hr />
        <p class="py-5 px-5 text-xl">
          안녕하십니까?<br />
          모달창입니다.
        </p>
      </div>
      <div class="w-full">
        <button
          @click="ModalDisplay = false"
          class="absolute bottom-0 right-0 border border-solid round w-24 h-10 my-2 mx-3 hover:text-red-700 hover:border-red-500"
        >
          닫기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      props: {
        visible: {
          type: Boolean,
          require: true,
          default: false,
        },
        title: {
          type: String,
          require: false,
        },
      },
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
      },
    };
  },
};
</script>

<style></style>
