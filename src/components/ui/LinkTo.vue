<template>
  <div class="history">
    <a :href="href"><slot /></a>
  </div>
</template>

<script>
export default {
  name: 'link-to',
  props: {
    href: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.history {
  a {
    color: #FF5722;
  }
}
</style>
