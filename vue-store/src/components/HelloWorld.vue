<template>
  <div>
    {{ $store.state.count }}<br />
    {{ $store.getters.getCount }}<br />
    <input type="text" v-model="number" />
    <button @click="clickButton">버튼</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      number: 1,
    };
  },
  computed: {
    ...mapState({
      count(state) {
        return state.count;
      },
    }),
    ...mapGetters ([
      "getCount"
    ]),
  },
  mounted: {},
  methods: {
    clickButton() {
      this.$store.dispatch("setCount", this.number);
    },
  },
};
</script>

<!-- 스타일 안에 scoped 키워드 달아주어야 지역적으로 쓰임 -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
