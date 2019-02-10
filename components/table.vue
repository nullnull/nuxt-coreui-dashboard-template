<template lang="pug">
  b-card(:header='caption')
    b-table(:hover='hover', :striped='striped', :bordered='bordered', :small='small', :fixed='fixed', responsive='sm', :items='items', :fields='fields', :current-page='currentPage', :per-page='perPage')
      template(slot='status', slot-scope='data')
        b-badge(:variant='getBadge(data.item.status)') {{data.item.status}}
    nav
      b-pagination(:total-rows='getRowCount(items)', :per-page='perPage', v-model='currentPage', prev-text='Prev', next-text='Next', hide-goto-end-buttons='')
</template>

<script>
  export default {
    name: 'c-table',
    props: {
      caption: {
        type: String,
        default: 'Table'
      },
      hover: {
        type: Boolean,
        default: false
      },
      striped: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: false
      },
      items: {
        type: Array,
        default() {[]},
      },
      fields: {
        type: Array,
        default() {[]},
      },
      perPage: {
        type: Number,
        default: 5
      }
    },
    data: () => {
      return {
        currentPage: 1
      }
    },
    methods: {
      getBadge (status) {
        return status === 'Active' ? 'success'
          : status === 'Inactive' ? 'secondary'
            : status === 'Pending' ? 'warning'
              : status === 'Banned' ? 'danger' : 'primary'
      },
      getRowCount (items) {
        return items.length
      }
    }
  }
</script>
