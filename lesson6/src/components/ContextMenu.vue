<template>
  <div>
    <button @click="edit">Edit</button>
    <button @click="del">Delete</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  props: {
    // idCost: Object,
    idCost: Number,
  },

  methods: {
    ...mapActions(["deleteElemList"]),
    ...mapActions(["editElemList"]),
    edit() {
      // this.editElemList(this.getData);
      // console.log(this.getData);
      this.$emit("toModal", this.idCost);
      this.$modal.show("PaymentForm");
    },
    del() {
      this.deleteElemList(this.idCost);
      this.$context.close();
    },
  },
  computed: {
    ...mapGetters(["getMainList"]),
    getData() {
      return this.getMainList[this.idCost];
    },
  },
};
</script>

<style></style>
