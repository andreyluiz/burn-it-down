<template>
  <table id="table">
    <thead>
      <tr>
        <th>Day</th>
        <th>Realized</th>
        <th>Remaining</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(points, index) in realized">
        <td>
          {{ `Day ${index + 1}` }}
        </td>
        <td>
          {{ points }}
        </td>
        <td>
          {{ remaining[index] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'chart-list',
  data() {
    return {
      realized: this.$select('realized'),
      remaining: this.$select('remaining'),
    };
  },
};
</script>

<style lang="scss" scoped>
#table {
  width: 100%;
  color: #2c3e50;
  margin: 24px 0;
  border-collapse: collapse;

  td, th {
    padding: 8px 4px;
  }

  tr:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }

}
</style>
