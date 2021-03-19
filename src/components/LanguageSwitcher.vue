<template>
  <div>
    <a href="#" v-on:click="$i18n.locale = 'no'">
      <Flag code="NO" />
    </a> /
    <a href="#" v-on:click="$i18n.locale = 'en'">
      <Flag code="US" />
    </a>
  </div>
</template>

<script>

export default {
  name: 'LanguageSwitcher',
}
</script>

<style>

</style>
