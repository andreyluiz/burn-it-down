import { Line } from 'vue-chartjs';

export default Line.extend({
  data() {
    return {
      optimal: this.$select('optimal'),
    };
  },
  mounted() {
    this.renderChart({
      labels: this.optimal.map((o, index) => `Day ${index + 1}`),
      datasets: [
        {
          label: 'Optimal',
          data: this.optimal,
        },
      ],
    });
  },
});
