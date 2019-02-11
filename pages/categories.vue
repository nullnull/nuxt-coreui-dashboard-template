<template lang="pug">
  div
    .animated.fadeIn
      b-row
        b-col(lg='12')
          Table(:items="$store.state.categories.list", :fields="fields" caption="<i class='fa fa-align-justify'></i> Categories")
</template>

<script>
  import Table from './../components/table.vue'

  export default {
    name: 'tables',
    components: {Table},
    async fetch ({ store, params }) {
      await store.dispatch('categories/get');
    },
    data () {
      return {
        fields: [
          {key: 'id'},
          {key: 'name'},
        ],
      }
    },
  }
</script>
