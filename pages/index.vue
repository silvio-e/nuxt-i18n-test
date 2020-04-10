<template>
  <main>
    <h1>{{ $t('Hello') }} world! :)</h1>
    <p>Welcome to the {{ this.$i18n.locale }} website</p>
    <button @click="changeLocale">
      Change locale
    </button>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    changeLocale () {
      if (this.$i18n.locale === 'no') {
        this.$i18n.setLocale('se')
      } else if (this.$i18n.locale === 'se') {
        this.$i18n.setLocale('no')
      }
    }
  }
}
</script>

<style>

</style>
