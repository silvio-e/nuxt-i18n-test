<script>
export default {
  name: 'IndexPage'
}
</script>

<template>
  <main>
    <ul>
      <li
        v-for="(locale, index) in this.$i18n.locales"
        :key="index"
      >
        Locale "{{ locale.code }}":
        <a
          :href="`/${locale.code}/`"
          class="underline"
        >
          ssr</a> /
        <nuxt-link :to="`/${locale.code}/`" class="underline">
          client
        </nuxt-link>
        <span v-if="index === 0">(default locale)</span>
      </li>
    </ul>
  </main>
</template>

<style>

</style>
