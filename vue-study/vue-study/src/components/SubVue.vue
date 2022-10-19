<template>
  <div>
    {{ no }}

    <br />

    <button value="버튼" v-on:click="getValue()">버튼</button>
  </div>
</template>

<script>
export default {
  props: ["no"],
  methods: {
    getValue() {
      this.$emit("getValue", 200);
    },
  },
};
</script>

<style></style>
