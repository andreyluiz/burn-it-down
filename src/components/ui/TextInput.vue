<template>
  <input
    type="text"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :autofocus="autofocus"
    v-model="email"
    @change="$emit('change')"
    @input="$emit('input', email)">
</template>

<script>
export default {
  name: 'text-input',
  watch: {
    value(newValue) {
      this.email = newValue;
    },
  },
  data() {
    return {
      email: this.value,
    };
  },
  props: {
    name: {
      type: String,
      value: '',
    },
    placeholder: {
      type: String,
      value: '',
    },
    id: {
      type: String,
      value: '',
    },
    autofocus: {
      type: Boolean,
      value: false,
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  flex: 1 1 auto;
  padding: 4px;
  font: inherit;
  color: inherit;
  border: 1px solid #2c3e50;
  border-radius: 4px;
}
</style>
