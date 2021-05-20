<template>
  <div id="app">
    <header>
      
    </header>
    <main>
      <button
      type="button"
      class="btn"
      @click="showModal"
    >
      Add new cost
    </button>
      <Form  v-show="isModalVisible"
      @close="closeModal" @add="add"/>
      <Main :items="mainList" />
    </main>
  </div>
</template>

<script>
import Main from "./components/Main";
import Form from "./components/Form";

export default {
  name: "App",
  components: {
    Main,
    Form,
  },
  data() {
    return {
      isModalVisible: false,

      mainList: []
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    add(date) {
      this.mainList.push(date)
    }
  },
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
