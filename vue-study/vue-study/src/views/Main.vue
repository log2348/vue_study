<template>
  <div>
    <SubVue :no="number" v-on:getValue="getMainValue"></SubVue>
  </div>
</template>

<script>
import SubVue from "../components/SubVue.vue";
export default {
  components: {
    SubVue, // SubVue(정의할 이름): SubVue(컴포넌트 이름)
  },
  data() {
    return {
      number: 1,
    };
  },
  methods: {
    getMainValue(num) {
      alert(num);
    },
  },
};
</script>

<style></style>
