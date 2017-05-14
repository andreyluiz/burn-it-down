<template>
  <div id="chart">
    <div class="burndown">
      <burndown />
    </div>
  </div>
</template>

<script>
import Burndown from './Burndown';

export default {
  name: 'chart',
  components: { Burndown },
};
</script>

<style lang="scss" scoped>
#chart {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .burndown {
    flex: 1 1 auto;
    align-self: center;
  }
}
</style>
