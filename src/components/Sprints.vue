<template>
  <div id="form">
    <img src="../assets/fire.png">
    <h2>Burn it Down</h2>
    <p>Track your daily burnt points.</p>
    <h3>History</h3>
    <div class="table">
      <p v-if="isEmpty" class="empty">No sprints to show.</p>
      <table v-if="!isEmpty">
        <thead>
          <tr>
            <th class="col-left">ID</th>
            <th class="col-left">Sprint Name</th>
            <th class="col-right">Days</th>
            <th class="col-right">Points</th>
            <th class="col-right">Points per Day</th>
            <th />
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          <tr v-for="sprint in history">
            <td class="col-left">{{ sprint.id }}</td>
            <td class="col-left">{{ sprint.name }}</td>
            <td class="col-right">{{ sprint.days }}</td>
            <td class="col-right">{{ sprint.points }}</td>
            <td class="col-right">{{ sprint.pointsPerDay.toFixed(2) }}</td>
            <td><link-to :href="`/sprint/${sprint.id}`">View</link-to></td>
            <td><link-to href="#">Stats</link-to></td>
            <td><link-to href="#" @click="deleteSprint.bind(this, sprint.id)">Delete</link-to></td>
          </tr>
        </tbody>
      </table>
    </div>
    <link-to href="#/">Go back</link-to>
  </div>
</template>

<script>
import isEmpty from 'lodash/isEmpty';
import LinkTo from './ui/LinkTo';

export default {
  name: 'sprints',
  data() {
    return {
      history: this.$select('sprints'),
    };
  },
  computed: {
    isEmpty() {
      return isEmpty(this.history);
    },
  },
  methods: {
    deleteSprint(sprintId) {
      console.log(sprintId);
    },
  },
  components: { LinkTo },
};
</script>

<style lang="scss" scoped>
.table {
  min-height: 108px;
  width: 800px;
  margin: 0 auto 24px auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.38);

  .empty {
    padding-top: 50px;
  }

  table {
    padding: 8px;
    width: 100%;

    th, td {
      padding: 8px;
    }

    td, th {
      &.col-left {
        text-align: left;
      }

      &.col-right {
        text-align: right;
      }
    }
  }
}
</style>
