<template>
  <form v-on:submit="submitData" id="form">
    <select name="day" v-model="day">
      <option :value="-1">Select a day...</option>
      <option v-for="day in days" :value="day">
        {{ `Day ${day + 1}` }}
      </option>
    </select>
    <input name="points" v-model="points" placeholder="Points spent..." autofocus />
    <button type="submit">Set</button>
  </form>
</template>

<script>
import { store, setPoints } from '../state';

export default {
  name: 'chart-form',
  data() {
    return {
      day: 0,
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
        points: parseInt(this.points, 10) || 0,
      }));
      if (this.day < (this.optimal.length - 1)) {
        this.day = this.day + 1;
      }
      this.points = null;
    },
  },
};
</script>

<style lang="scss" scoped>
#form {
  text-align: left;
  display: flex;
  font-size: 16px;
  color: #2c3e50;
  margin-right: 12px;

  select {
    margin-right: 6px;
    font: inherit;
    color: inherit;
    background: transparent;
    border: 1px solid #2c3e50;
    cursor: pointer;
    border-radius: 4px;
  }

  input {
    flex: 1 1 auto;
    margin: 0 6px;
    padding: 4px;
    font: inherit;
    color: inherit;
    border: 1px solid #2c3e50;
    border-radius: 4px;
  }

  button {
    margin-left: 6px;
    font: inherit;
    background-color: #FF5722;
    border: 1px solid #FF5722;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    width: 100px;
    outline: none;
  }

  button:hover {
    background-color: #FF6833;
  }

  button:active {
    background-color: #EE4611;
  }
}
</style>
