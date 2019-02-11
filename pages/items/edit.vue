<template lang="pug">
  div
    .animated.fadeIn
      b-row
        b-col(lg='12')
          | {{ item.productName }}
</template>

<script>
  export default {
    computed: {
      item() {
        return this.$store.state.items.current || {}
      }
    },
    async fetch ({ store, query }) {
      await store.dispatch('items/get', query.id);
    },
  }
</script>
