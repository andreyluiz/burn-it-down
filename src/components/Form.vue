<template>
  <div id="form">
    <img src="../assets/fire.png">
    <h2>Burn it Down</h2>
    <p>Track your daily burnt points.</p>
    <form v-on:submit="submitData">
      <div class="inputs">
        <div class="form-group">
          <label for="days">Days in Sprint</label>
          <input name="days" v-model="days" placeholder="e.g 10">
        </div>
        <div class="separator" />
        <div class="form-group">
          <label for="points">Planned points</label>
          <input name="points" v-model="points" placeholder="e.g 50">
        </div>
      </div>
      <div class="actions">
        <button type="submit">Go!</button>
      </div>
    </form>
  </div>
</template>

<script>
import { store, submitData } from '../state';

export default {
  name: 'form',
  data: () => ({
    days: '',
    points: '',
  }),
  methods: {
    submitData(e) {
      e.preventDefault();
      store.dispatch(submitData({
        days: parseInt(this.days, 10),
        points: parseInt(this.points, 10),
      }));
      // TODO go to chart
    },
  },
};
</script>

<style lang="scss" scoped>
  .inputs {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-group {
    flex: 0 0 50px;

    label {
      display: block;
      margin-bottom: 12px;
    }

    input {
      padding: 12px;
      font-size: 18px;
      max-width: 90px;
      text-align: center;
      border: none;
      border-bottom: 2px solid #2c3e50;
      outline: none;
    }
  }

  .separator {
    flex: 0 0 0px;
    border: 1px solid #2c3e50;
    height: 50px;
    margin: 0 20px;
  }

  .actions {
    margin-top: 24px;

    button {
      font-size: 24px;
      background-color: #FF5722;
      border: 1px solid #FF5722;
      color: white;
      cursor: pointer;
      border-radius: 4px;
      width: 100px;
      height: 50px;
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
