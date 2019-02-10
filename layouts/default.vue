<template>
  <div class="app">
    <Header/>
    <div class="app-body">
      <Sidebar :navItems="nav"/>
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <nuxt />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import nav from './menu'
import Header from '~/components/Header/Header'
import Sidebar from '~/components/Sidebar/Sidebar'
import Breadcrumb from '~/components/Breadcrumb'

export default {
  name: 'full',
  components: {
    Header,
    Sidebar,
    Breadcrumb
  },
  data () {
    return {
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    }
  }
}
</script>
