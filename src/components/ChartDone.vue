<template>
  <div class="done" :style="{ display: isDone ? 'block' : 'none' }">
    <h2>Your sprint is done!</h2>
    <p>What do you want to do next?</p>
    <div class="actions">
      <div class="col">
        <action-button block medium v-on:click="newSprint">Create another sprint</action-button>
      </div>
      <div class="col">
        <action-button block medium v-on:click="showStats">Show me some stats</action-button>
      </div>
    </div>
  </div>
</template>

<script>
import includes from 'lodash/includes';
import ActionButton from './ui/ActionButton';
import { store, newSprint } from '../state';

export default {
  name: 'chart-done',
  data() {
    return {
      realized: this.$select('realized'),
    };
  },
  computed: {
    isDone() {
      return !includes(this.realized, 0);
    },
  },
  methods: {
    newSprint() {
      this.$router.push('/');
      store.dispatch(newSprint());
    },
    showStats() {
      console.log('Show Stats!');
    },
  },
  components: { ActionButton },
};
</script>

<style lang="scss" scoped>
.done {
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
  margin-bottom: 24px;
  padding: 12px 0;

  p[title] {
    font-size: 22px;
  }

  .actions {
    display: flex;
    margin: 0 12px;

    .col {
      flex: 1 1 50%;
      padding: 6px;
    }
  }
}
</style>
