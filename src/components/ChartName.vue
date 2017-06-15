<template>
  <div class="name">
    <text-input id="name" v-model="name" placeholder="Sprint name" @input="nameChanged" />
  </div>
</template>

<script>
import TextInput from './ui/TextInput';
import { store, setSprintName } from '../state';

export default {
  name: 'chart-name',
  data() {
    return {
      name: this.$select('name'),
    };
  },
  methods: {
    nameChanged(name) {
      store.dispatch(setSprintName(name));
    },
  },
  components: { TextInput },
};
</script>

<style lang="scss" scoped>
.name {
  text-align: left;
  width: 100%;
  margin-bottom: 24px;
}
</style>

