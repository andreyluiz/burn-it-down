import { Line } from 'vue-chartjs';

export default Line.extend({
  data() {
    return {
      optimal: this.$select('optimal'),
      realized: this.$select('realized'),
    };
  },
  mounted() {
    this.renderChart({
      labels: this.optimal.map((o, index) => `Day ${index + 1}`),
      datasets: [
        {
          label: 'Optimal',
          data: this.optimal,
          borderColor: '#3F51B5',
          backgroundColor: '#3F51B5',
          pointRadius: 0,
          fill: false,
        },
        {
          label: 'Realized',
          data: this.realized,
          borderColor: '#F44336',
          backgroundColor: '#F44336',
          pointRadius: 0,
          fill: false,
        },
      ],
    });
  },
});
