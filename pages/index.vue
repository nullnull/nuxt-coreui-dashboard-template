<template lang="pug">
  div
    .animated.fadeIn
      | Dashboard
</template>

<script>
export default {
  middleware: 'authenticated'
}
</script>
