<template>
  <div>
    <v-data-table :headers="tableHeaders" :items="indexForList">
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="edit(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="del(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {},
  data() {
    return {
      tableHeaders: [
        { text: "#", value: "id" },
        { text: "Date", value: "date" },
        { text: "Category", value: "category" },
        { text: "Value", value: "price" },
        { text: "Action", value: "actions" },
      ],
    };
  },

  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["deleteItem"]),
    ...mapMutations(["editItem"]),

    del(item) {
      this.deleteItem(item.id - 1);
    },
    edit(item) {
      this.$emit("edit", item);
      this.$emit("openDialog");
      // console.log(item.id - 1);
    },
  },

  mounted() {
    this.fetchData();
  },

  computed: {
    ...mapGetters(["getMainList"]),
    indexForList() {
      return this.getMainList.map((obj, i) => {
        obj.index = i + 1;
        return obj;
      });
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
