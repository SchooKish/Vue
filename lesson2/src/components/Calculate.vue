<template>
  <div class="hello">
    <input class="input" id="op1" v-model.number="operand1" ref="op1" />
    <input class="input" id="op2" v-model.number="operand2" ref="op2" /> =
    <span class="result">{{ result }}</span>
    <div>
      <button
        class="btn"
        v-for="(btn, id) in btns"
        :key="id"
        @click="calc(btn)"
      >
        {{ btn }}
      </button>
    </div>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">Отобразить экранную клавиатуру</label>
    <div v-if="checked">
      <button
        class="keyboard"
        v-for="(key, id) in keyboard"
        :key="id"
        @click="input(key)"
      >
        {{ key }}
      </button>
      <button @click="del()">Del</button>
    </div>
    <div>
      <input
        type="radio"
        id="one"
        value="1"
        v-model="picked"
        @click="focusOp1()"
      />
      <label for="one">Левое поле</label>
      <input
        type="radio"
        id="two"
        value="2"
        v-model="picked"
        @click="focusOp2()"
      />
      <label for="two">Правое поле</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculate",
  data: () => ({
    operand1: "",
    operand2: "",
    result: 0,
    btns: ["+", "-", "*", "/", "^", "%"],
    keyboard: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    checked: false,
    picked: "",
  }),

  props: {},

  methods: {
    calc(op) {
      let value = op;

      switch (value) {
        case "+":
          this.result = this.operand1 + this.operand2;
          break;
        case "-":
          this.result = this.operand1 - this.operand2;
          break;
        case "*":
          this.result = this.operand1 * this.operand2;
          break;
        case "/":
          this.result = this.operand1 / this.operand2;
          break;
        case "^":
          this.result = this.operand1 ** this.operand2;
          break;
        case "%":
          this.result = this.operand1 % this.operand2;
          break;
      }
    },
    focusOp1() {
      let op = this.$refs.op1;
      if (op) {
        op.focus();
        this.picked = 1;
      }
    },

    focusOp2() {
      let op = this.$refs.op2;
      if (op) {
        op.focus();
        this.picked = 2;
      }
    },

    del() {
      if (this.picked == 1) {
        this.operand1 = String(this.operand1)
        this.operand1 = this.operand1.slice(0, -1);
      } else if (this.picked == 2) {
        this.operand2 = String(this.operand2)
        this.operand2 = this.operand2.slice(0, -1);
      }
    },

    input(key) {
      key = String(key);
      if (this.picked == 1) {
        this.operand1 = this.operand1 + key;
        this.operand1 = Number(this.operand1);
      } else if (this.picked == 2) {
        this.operand2 = this.operand2 + key;
        this.operand2 = Number(this.operand2);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input {
  width: 100px;
  margin-bottom: 15px;

  &:nth-child(1) {
    margin-right: 10px;
  }
}

.result {
  display: inline-block;
  text-align: left;
  border-radius: 2px;
  width: fit-content;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
}

.btn {
  width: 25px;

  &:hover {
    box-shadow: 0 0 5px black;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
}

.keyboard {
  margin-right: 10px;
}
</style>
