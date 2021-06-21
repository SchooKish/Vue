<template>
  <transition>
    <div class="d-flex flex-column">
      <div class="pt-5 text-center">Add new cost</div>
      <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y>
        <template v-slot:activator="{ on }">
          <v-text-field class="mx-5" v-model="date" label="Date" prepend-icon="mdi-calendar" readonly v-on="on"> </v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">
            Cancel
          </v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-select class="mx-5" v-model="category" :items="getCategoryList" label="Category" required></v-select>
      <v-text-field class="mx-5" v-model="price" label="Value" required></v-text-field>
      <div class="d-flex">
        <v-text-field class="mx-5" v-model="newCategory" label="Add new category" required></v-text-field>
        <v-btn @click="addNewCategory" class="mr-5 mt-2">ADD</v-btn>
      </div>
      <v-btn color="teal" @click="choosePaymentForm" aria-label="Close modal">
        Save and close
      </v-btn>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "Modal",

  data() {
    return {
      menu: false,
      date: "",
      category: "",
      price: "",
      newCategory: "",
    };
  },
  props: {
    obj: Object,
  },
  methods: {
    ...mapMutations(["updateMainList"]),
    ...mapMutations(["addNewCateg"]),
    ...mapMutations(["editItem"]),

    choosePaymentForm() {
      if (this.obj.price) {
        this.editPaymentForm();
        console.log("edit");
      } else {
        this.savePaymentForm();
        console.log("save");
      }
    },

    editPaymentForm() {
      const { date, category, price } = this;
      const payload = {
        id: this.obj.id - 1,
        data: { date, category, price },
      };
      this.editItem(payload);
      this.date = "";
      this.category = "";
      this.price = "";
      this.$emit("close-dialog");
    },

    savePaymentForm() {
      const { date, category, price } = this;
      this.updateMainList({ date, category, price });
      this.date = "";
      this.category = "";
      this.price = "";
      this.$emit("close-dialog");
    },

    addNewCategory() {
      this.addNewCateg(this.newCategory);
      this.newCategory = "";
    },
  },
  computed: {
    ...mapGetters(["getMainList"]),
    ...mapGetters(["getCategoryList"]),
  },
  mounted() {
    if (this.$route.query.price) {
      this.date = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      this.category = this.$route.query.category;
      this.price = this.$route.query.price;
      this.savePaymentForm();
      this.$router.push("dashboard");
    }

    if (this.obj.price) {
      const item = this.getMainList[this.obj.id - 1];
      this.date = item.date;
      this.category = item.category;
      this.price = item.price;
      console.log(item.id);
    }
  },
};
</script>

<style></style>
