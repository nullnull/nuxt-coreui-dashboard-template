<template lang="pug">
  div
    .animated.fadeIn
      b-row
        b-col(lg='12')
          Table(:items="items", :fields="fields" caption="<i class='fa fa-align-justify'></i> Simple Table")
        // /.col
</template>

<script>
  import Table from './../components/table.vue'

  export default {
    name: 'tables',
    components: {Table},
    data () {
      return {
        items: [
          {username: 'Samppa Nori', registered: '2012/01/01', role: 'Member', status: 'Active'},
          {username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
          {username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
          {username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},
          {username: 'Friderik Dávid', registered: '2012/01/21', role: 'Staff', status: 'Active'},
          {username: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active'},
          {username: 'Avram Tarasios', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
          {username: 'Quintin Ed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
          {username: 'Enéas Kwadwo', registered: '2012/03/01', role: 'Member', status: 'Pending'},
          {username: 'Agapetus Tadeáš', registered: '2012/01/21', role: 'Staff', status: 'Active'},
          {username: 'Carwyn Fachtna', registered: '2012/01/01', role: 'Member', status: 'Active'},
        ],
        fields: [
          {key: 'username'},
          {key: 'registered'},
          {key: 'role'},
          {key: 'status'}
        ],
      }
    },
  }
</script>
