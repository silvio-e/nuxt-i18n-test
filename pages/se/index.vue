<script>
export default {
  name: 'IndexSe'
}
</script>

<template>
  <div>
    My locale is {{ this.$i18n.locale }}. Go to the <nuxt-link to="/no/">
      Norwegian page
    </nuxt-link>
  </div>
</template>

<style lang="sass" scoped>

</style>
