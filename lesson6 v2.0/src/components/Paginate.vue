<template>
  <div :class="[$style.wrap]">
    <button @click="onClick(page - 1)">
      Назад
    </button>
    <div v-for="i in quanPage" :key="i" @click="onClick(i)" :class="{ [$style.active]: page === i }">{{ i }}</div>
    <button @click="onClick(page + 1)">
      Вперед
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    length: Number,
    onPage: Number,
    page: Number,
  },
  computed: {
    quanPage() {
      return Math.ceil(this.length / this.onPage);
    },
  },
  methods: {
    ...mapActions(["fetchData"]),
    onClick(p) {
      if (p < 1 || p > this.quanPage) {
        return;
      }
      this.$emit("click", p);
    },
  },
};
</script>

<style module lang="scss">
.wrap {
  display: flex;
  width: 300px;
  justify-content: space-between;

  & > div {
    padding: 5px;
    &.active {
      background: #ccc;
    }
  }
}
</style>
