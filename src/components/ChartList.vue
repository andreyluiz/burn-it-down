<template>
  <table>
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
