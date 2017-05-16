<template>
  <div id="chart">
    <div class="form">
      <chart-form />
    </div>
    <div class="list">
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
  flex-direction: column;
  justify-content: center;

  .form, .list, .burndown {
    flex: 1 1 auto;
    align-self: center;
  }
}
</style>
