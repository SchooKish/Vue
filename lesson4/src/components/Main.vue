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
        <tr v-for="(item, id) in currentElements" :key="id">
          <td>{{ page * 10 + id + 1 - 10 }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </table>
    <Paginate v-model="page" :pageCount="pageCount" @click="pageChange" :prevText="'Prev'" :nextText="'Next'" :containerClass="'paginate'"></Paginate>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      page: 1,
      onPage: 10,
    };
  },
  computed: {
    ...mapGetters(["getMainList"]),
    currentElements() {
      const { onPage, page } = this;
      return this.getMainList.slice(onPage * (page - 1), onPage * (page - 1) + onPage);
    },
    pageCount() {
      return Math.ceil(this.getMainList.length / this.onPage);
    },
  },
  methods: {
    pageChange(p) {
      this.page = p;
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
