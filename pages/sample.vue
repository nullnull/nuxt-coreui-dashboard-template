<template lang="pug">
  div
    .animated.fadeIn
      b-row
        b-col(lg='6')
          c-table(caption="<i class='fa fa-align-justify'></i> Simple Table")
        // /.col
        b-col(lg='6')
          c-table(striped='', caption="<i class='fa fa-align-justify'></i> Striped Table")
        // /.col
        // /.row
        b-row
          b-col(lg='6')
            c-table(small='', caption="<i class='fa fa-align-justify'></i> Condensed Table")
          // /.col
          b-col(lg='6')
            c-table(fixed='', bordered='', caption="<i class='fa fa-align-justify'></i> Bordered Table")
          // /.col
          // /.row
          b-row
            b-col(sm='12')
              c-table(hover='', striped='', bordered='', small='', fixed='', caption="<i class='fa fa-align-justify'></i> Combined All Table")
</template>

<script>
  import cTable from './../components/table.vue'

  export default {
    name: 'tables',
    components: {cTable}
  }
</script>
