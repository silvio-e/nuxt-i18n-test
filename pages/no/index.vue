<script>
export default {
  name: 'IndexNO'
}
</script>

<template>
  <div>
    My locale is {{ this.$i18n.locale }}. Go to the <nuxt-link to="/se/">
      Swedish page
    </nuxt-link>
  </div>
</template>

<style lang="sass" scoped>

</style>
