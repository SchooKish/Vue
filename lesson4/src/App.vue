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
      <Main />
    </main>
  </div>
</template>

<script>
import Main from "./components/Main";
import Form from "./components/Form";

import { mapActions } from 'vuex'

export default {
  name: "App",
  components: {
    Main,
    Form,
  },
  data() {
    return {
      isModalVisible: false,
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
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
  mounted() {
    this.fetchData()
  },
};
</script>

<style lang="scss">

</style>
