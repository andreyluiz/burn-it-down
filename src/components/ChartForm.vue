<template>
  <form v-on:submit="submitData">
    <select name="day" v-model="day">
      <option :value="-1">Select a day...</option>
      <option v-for="day in days" :value="day">
        {{ `Day ${day + 1}` }}
      </option>
    </select>
    <input name="points" v-model="points" placeholder="Points spent..." />
    <button type="submit">Set</button>
  </form>
</template>

<script>
import { store, setPoints } from '../state';

export default {
  name: 'chart-form',
  data() {
    return {
      day: -1,
      optimal: this.$select('optimal'),
      points: null,
    };
  },
  computed: {
    days() {
      return this.optimal.map((o, index) => index);
    },
  },
  methods: {
    submitData(e) {
      e.preventDefault();
      store.dispatch(setPoints({
        day: parseInt(this.day, 10),
        points: parseInt(this.points, 10),
      }));
    },
  },
};
</script>
