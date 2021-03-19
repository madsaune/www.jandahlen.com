<template>
  <footer id="contact">
      <h2 class="section--title">{{ $t('section.contact') }}</h2>

      <div class="section--body">
        <p class="text-center" v-html="$t('footer.text')"></p>
        <p class="text-large text-center">janedahlen ({{ $t('footer.at') }}) hotmail.com<br>/<br>+47 91375839</p>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>

</style>
