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
          <td><button @click="showContext(index)">...</button></td>
        </tr>
      </tbody>
    </table>
    <Paginate :length="countPages" :onPage="onPage" :page="page" @click="onPaginate"></Paginate>
  </div>
</template>

<script>
import Paginate from "./Paginate.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Paginate,
  },
  data() {
    return {
      page: 1,
      onPage: 3,
      contextActive: false,
      xPos: 0,
      yPos: 0,
    };
  },

  methods: {
    ...mapActions(["fetchData"]),
    onPaginate(p) {
      this.page = p;
      this.fetchData(p);
      console.log(p);
    },

    showContext(id) {
      if (!this.contextActive) {
        this.$context.show("Context", id);
        this.contextActive = true;
      } else {
        this.$context.close();
        this.contextActive = false;
      }

      this.setPosition(id);
    },

    setPosition(id) {
      const computed = id.getBoundingClientRect();
      this.xPos = computed.left;
      this.yPos = computed.top;
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
    styles() {
      return {
        top: `${this.yPos}px`,
        left: `${this.xPos + 20}px`,
      };
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
