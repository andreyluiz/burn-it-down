import { Line, mixins } from 'vue-chartjs';

export default Line.extend({
  mixins: [mixins.reactiveProp],
  props: ['chartData'],
  mounted() {
    this.renderChart(this.chartData, {
      elements: {
        point: {
          radius: 0,
        },
        line: {
          tension: 0,
        },
      },
    });
  },
});
