<template>
  <div id="chart">
    <div class="data">
      <sprint-done />
      <sprint-score />
      <sprint-name />
      <sprint-form />
      <sprint-list />
    </div>
    <div class="burndown">
      <burndown :chartData="chartData" />
    </div>
  </div>
</template>

<script>
import Burndown from './Burndown';
import SprintDone from './SprintDone';
import SprintScore from './SprintScore';
import SprintName from './SprintName';
import SprintForm from './SprintForm';
import SprintList from './SprintList';
import { store, sprintById } from '../../state';

export default {
  name: 'chart',
  beforeMount() {
    const sprintId = this.$router.currentRoute.params.id;
    store.dispatch(sprintById(sprintId));

    if ((this.optimal && !this.optimal.length) ||
        (this.remaining && !this.remaining.length) ||
        (this.realized && !this.realized.length)) {
      this.$router.push('/');
    }
  },
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
  components: { Burndown, SprintDone, SprintScore, SprintName, SprintForm, SprintList },
};
</script>

<style lang="scss" scoped>
#chart {
  display: flex;
  margin: 0 auto;
  max-width: 1000px;

  .burndown {
    flex: 1 1 70%;
    margin-left: 12px;
  }

  .data {
    flex: 1 1 30%;
    margin: 24px;
    display: flex;
    flex-direction: column;
  }
}
</style>
