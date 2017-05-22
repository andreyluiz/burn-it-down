<template>
  <div id="chart">
    <div class="data">
      <chart-form />
      <chart-list />
    </div>
    <div class="burndown">
      <burndown :chartData="chartData" />
    </div>
  </div>
</template>

<script>
import Burndown from './Burndown';
import ChartForm from './ChartForm';
import ChartList from './ChartList';

export default {
  name: 'chart',
  data() {
    return {
      optimal: this.$select('optimal'),
      remaining: this.$select('remaining'),
      realized: this.$select('realized'),
    };
  },
  computed: {
    chartData() {
      return {
        labels: this.optimal.map((o, index) => `Day ${index + 1}`),
        datasets: [
          {
            label: 'Optimal',
            data: this.optimal,
            borderColor: '#3F51B5',
            backgroundColor: '#3F51B5',
            fill: false,
          },
          {
            label: 'Remaining',
            data: this.remaining,
            borderColor: '#F44336',
            backgroundColor: '#F44336',
            fill: false,
          },
          {
            label: 'Realized',
            data: this.realized,
            borderColor: '#FFC107',
            backgroundColor: '#FFC107',
            fill: false,
          },
        ],
      };
    },
  },
  components: { Burndown, ChartForm, ChartList },
};
</script>

<style lang="scss" scoped>
#chart {
  display: flex;
  margin: 0 100px;

  .burndown {
    flex: 1 1 60%;
    margin-left: 12px;
  }

  .data {
    flex: 1 1 40%;
    display: flex;
    flex-direction: column;
  }
}
</style>
