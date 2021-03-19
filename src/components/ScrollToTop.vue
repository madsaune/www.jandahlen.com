<template>
  <a href="#" @click="scrollToTop()">{{ $t('btn.scrollToTop') }} &uarr;</a>
</template>

<script>
export default {
  name: 'ScrollToTop',
  methods: {
    scrollToTop: function() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style scoped>
a {
  display: block;
  background-color: #000000;
  color: white;
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 1em;
  font-size: .8em;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
