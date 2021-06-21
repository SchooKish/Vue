<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>#</td>
          <td>Date</td>
          <td>Category</td>
          <td>Value</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in currentElements" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.price }}</td>
          <td><button @click="showContext($event, item.id - 1)">...</button></td>
        </tr>
      </tbody>
    </table>
    <Paginate :length="countPages" :onPage="onPage" :page="page" @click="onPaginate"></Paginate>
  </div>
</template>

<script>
import Paginate from "./Paginate.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    Paginate,
  },
  data() {
    return {
      page: 1,
      onPage: 3,
    };
  },

  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["deleteItem"]),
    ...mapMutations(["editItem"]),
    onPaginate(p) {
      this.page = p;
      this.fetchData(p);
      console.log(p);
    },
    showContext(event, id) {
      const items = [
        {
          text: "Delete",
          action: () => {
            this.deleteItem(id);
          },
        },
        {
          text: "Edit",
          action: () => {
            // this.editItem(id);
            this.$modal.show("PaymentForm", { id });
          },
        },
      ];
      this.$context.show({ event, items });
    },
  },

  mounted() {
    this.fetchData(1);
  },

  computed: {
    ...mapGetters(["getMainList"]),
    currentElements() {
      const { onPage, page } = this;
      return this.getMainList.slice(onPage * (page - 1), onPage * (page - 1) + onPage);
    },
    countPages() {
      return 1 + this.getMainList.length;
    },
  },
};
</script>

<style>
td {
  width: 100px;
}

.paginate {
  width: 300px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  list-style-type: none;
}
</style>
