<template lang="pug">
  div
    .animated.fadeIn
      b-row
        b-col(lg='12')
          c-table(caption="<i class='fa fa-align-justify'></i> Simple Table")
        // /.col
</template>

<script>
  import cTable from './../components/table.vue'

  export default {
    name: 'tables',
    components: {cTable}
  }
</script>
