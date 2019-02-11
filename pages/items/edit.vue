<template lang="pug">
  div
    .animated.fadeIn
      b-card
        div(slot='header')
          strong Edit Item
        b-form-group(label='Id', label-for='id', :label-cols='3', :horizontal='true')
          b-form-input#id(plaintext='', type='text', :value='item.id')
        b-form-group(label='Condition', label-for='condition', description='', :label-cols='3', :horizontal='true')
          b-form-input#condition(type='text', placeholder='N' v-model='item.condition')
        div(slot='footer')
          b-button(type='submit', size='sm', variant='primary' @click="submit")
            i.fa.fa-dot-circle-o
            |  Submit
</template>

<script>
import UIkit from 'uikit'

export default {
  middleware: 'authenticated',
  computed: {
    item() {
      return this.$store.state.items.current || {}
    }
  },
  async fetch({ store, query }) {
    await store.dispatch('items/get', query.id)
  },
  methods: {
    async submit() {
      const response = await this.$store.dispatch('items/update')
      if (response.status == 200) {
        UIkit.notification('Success!!', { status: 'primary' })
      } else {
        UIkit.notification('Failure!!', { status: 'danger' })
      }
    }
  }
}
</script>
