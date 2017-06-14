<template>
  <button
    type="submit"
    :class="{ 'action-button': true, 'block': block, 'medium': medium }"
    v-on:click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'action-button',
  props: {
    block: {
      type: Boolean,
      value: false,
    },
    medium: {
      type: Boolean,
      value: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.action-button {
  font: inherit;
  background-color: #FF5722;
  border: 1px solid #FF5722;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  width: 100px;
  outline: none;

  &.block {
    width: 100%;
  }

  &.medium {
    height: 30px;
  }
}

.action-button:hover {
  background-color: #FF6833;
}

.action-button:active {
  background-color: #EE4611;
}
</style>
