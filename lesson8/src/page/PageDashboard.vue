<template>
  <div>
    <v-row>
      <v-col>
        <div class="text-h5 text-md-h3 my-5">My personal costs</div>
        <v-dialog max-width="400" v-model="dialog">
          <template v-slot:activator="{ on }">
            <v-btn color="teal" dark v-on="on"> Add new cost <v-icon dark>mdi-plus</v-icon></v-btn>
          </template>
          <v-card>
            <Form @close-dialog="closeDialog" :obj="idFromMain" />
          </v-card>
        </v-dialog>
        <Main @edit="idForForm" @openDialog="dialog = true"
      /></v-col>
      <v-col>
        <Chart :data="chartData" :options="chartOptions" />
      </v-col>
    </v-row>
    <!-- <router-link tag="button" :to="{ name: 'form', query: { category: 'Food', price: 100 } }">Template</router-link> -->
  </div>
</template>

<script>
import Chart from "../components/Chart.vue";
import Main from "../components/Main";
import Form from "../components/Form.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Main,
    Form,
    Chart,
  },
  data() {
    return {
      idFromMain: {},
      dialog: false,
      // chartData: {},
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      prices: {
        data: [],
      },
    };
  },
  methods: {
    ...mapActions(["fetchData"]),

    closeDialog() {
      this.dialog = false;
    },

    idForForm(id) {
      this.idFromMain = id;
    },
  },

  computed: {
    ...mapGetters(["getMainList"]),
    ...mapGetters(["getCategoryList"]),

    chartData() {
      return {
        labels: this.getCategoryList,
        datasets: [
          {
            label: "Расходы по категориям",
            backgroundColor: ["blue", "red", "green", "yellow", "orange", "black"],
            data: this.getCategoryList.map((c) => {
              return this.getMainList.reduce((total, r) => {
                if (r.category === c) {
                  total += r.price;
                }

                return total;
              }, 0);
            }),
          },
        ],
      };
    },
  },

  mounted() {},
};
</script>

<style></style>
