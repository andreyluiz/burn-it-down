<template>
  <div id="score">
    <div class="column">
      <span title>Score</span>
      <span>{{ score }}</span>
    </div>
    <div class="column">
      <span title>Points per Day</span>
      <span>{{ pointsPerDay }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'chart-score',
    data() {
      return {
        pointsPerDay: this.$select('pointsPerDay'),
        realized: this.$select('realized'),
      };
    },
    computed: {
      score() {
        let sum = 0;
        this.realized.forEach((r) => {
          sum += r;
        });
        return sum / this.realized.length;
      },
    },
  };
</script>

<style scoped lang="scss">
  #score {
    display: flex;
    border: 1px solid #2c3e50;
    background-color: #2c3e50;
    border-radius: 4px;
    margin-bottom: 24px;
    padding: 12px 0;

    .column {
      display: flex;
      flex-direction: column;
      flex: 1 1 50%;
      color: white;

      span {
        font-size: 24px;
      }

      span[title] {
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 6px;
      }
    }
  }
</style>
