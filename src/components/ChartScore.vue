<template>
  <div id="score">
    <div class="column">
      <span title>Score</span>
      <span>{{ score.toFixed(2) }}</span>
    </div>
    <div class="column">
      <span title>Health</span>
      <div :class="['health', health]" />
    </div>
    <div class="column">
      <span title>Points per Day</span>
      <span>{{ pointsPerDay.toFixed(2) }}</span>
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
      health() {
        const realized = this.realized.filter(r => r);
        let sum = 0;
        realized.forEach((r) => {
          sum += r;
        });
        if (!sum || !realized.length) return 'poor';
        const health = sum / realized.length;

        const poor = this.pointsPerDay * 0.3;
        const bad = this.pointsPerDay * 0.5;
        const okay = this.pointsPerDay * 0.7;
        const good = this.pointsPerDay * 0.9;

        if (health <= poor) {
          return 'poor';
        } else if (health <= bad && health > poor) {
          return 'bad';
        } else if (health <= okay && health > bad) {
          return 'okay';
        } else if (health <= good && health > okay) {
          return 'good';
        }
        return 'excelent';
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

      .health {
        width: 50px;
        height: 20px;
        border-radius: 4px;
        align-self: center;
        margin-top: 6px;

        &.poor {
          background-color: #F44336;
        }

        &.bad {
          background-color: #FF9800;
        }

        &.okay {
          background-color: #FFEB3B;
        }

        &.good {
          background-color: #8BC34A;
        }

        &.excelent {
          background-color: #4CAF50;
        }
      }
    }
  }
</style>
