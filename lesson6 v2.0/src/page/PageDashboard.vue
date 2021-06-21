<template>
  <div>
    <button type="button" class="btn" @click="showPaymentsForm">
      Add new cost
    </button>
    <Main />
    <router-link tag="button" :to="{ name: 'form', query: { category: 'Food', price: 100 } }">Template</router-link>
  </div>
</template>

<script>
import Main from "../components/Main";

import { mapActions } from "vuex";

export default {
  components: {
    Main,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    ...mapActions(["fetchData"]),

    showPaymentsForm() {
      this.$modal.show("PaymentForm");
    },
  },
};
</script>

<style></style>
