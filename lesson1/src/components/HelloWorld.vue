<template>
  <div class="hello">
    <input v-model.number="operand1" />
    <input v-model.number="operand2" /> = {{ result }}
    <div>
      <button @click="calc(1)">+</button>
      <button @click="calc(2)">-</button>
      <button @click="calc(3)">*</button>
      <button @click="calc(4)">/</button>
      <button @click="calc(5)">^</button>
      <button @click="calc(6)">%</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () =>({
    operand1: 0,
    operand2: 0,
    result: 0
  }),
  props: {
  },
  methods: {
    calc(op) {
      let value = op;

      switch(value) {
        case 1:
          this.result = this.operand1 + this.operand2;
          break;
        case 2:
          this.result = this.operand1 - this.operand2;
          break;
        case 3:
          this.result = this.operand1 * this.operand2;
          break;
        case 4:
          this.result = this.operand1 / this.operand2;
          break;
        case 5:
          this.result = this.operand1 ** this.operand2;
          break;
        case 6:
          this.result = this.operand1 % this.operand2;
          break;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped lang="scss">
</style> -->
