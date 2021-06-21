<script>
import { Doughnut, mixins } from "vue-chartjs";
export default {
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  props: {
    data: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.renderDoughnutChart();
    console.log(this.data);
  },

  methods: {
    renderDoughnutChart() {
      this.renderChart(this.data, this.options);
    },
  },

  watch: {
    data() {
      // this._chart.destroy();
      // console.log(this.data);
      // console.log(this.options);
      //this.renderChart(this.data, this.options);
      this.renderDoughnutChart();
    },
  },
};
</script>
