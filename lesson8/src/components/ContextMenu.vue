<template>
  <div v-if="shown" :class="[$style.context]" :style="styles">
    <div v-for="(item, index) in items" :key="index" :class="[$style.context__item]" @click="onClick(item)">{{ item.text }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      shown: false,
      xPos: 0,
      yPos: 0,
    };
  },
  methods: {
    onClick(item) {
      item.action();
      this.onClose();
    },
    onShow({ items, caller }) {
      this.shown = true;
      this.items = items;

      this.setPosition(caller);
    },
    onClose() {
      this.shown = false;
      this.items = [];
    },
    setPosition(caller) {
      const computed = caller.getBoundingClientRect();
      this.xPos = computed.left;
      this.yPos = computed.top;
    },
  },
  computed: {
    styles() {
      return {
        top: `${this.yPos}px`,
        left: `${this.xPos + 30}px`,
      };
    },
  },
  mounted() {
    this.$context.EventBus.$on("show", this.onShow);
    this.$context.EventBus.$on("close", this.onClose);
  },
  beforeDestroy() {
    this.$context.EventBus.$off("show", this.onShow);
    this.$context.EventBus.$off("close", this.onClose);
  },
};
</script>

<style module lang="scss">
.context {
  position: absolute;
  background: #ccc;
}
</style>
