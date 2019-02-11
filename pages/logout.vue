<template lang="pug">
</template>

<script>
export default {
  fetch() {
    this.$store.dispatch('session/logout')
    return redirect('/login')
  }
}
</script>
