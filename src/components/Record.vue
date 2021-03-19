<template>
  <div>
    <h3 class="record-title">{{ title }}</h3>

    <iframe v-if="spotifyURL !== ''" :src="spotifyURL" width="100%|" height="80"
      frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

    <div class="record-body">
      <img class="record-cover" :src="albumCover" :alt="title + ' cover'">

      <div class="record-songlist">
        <ol>
          <li v-for="(song, idx) in tracks" :key="idx">{{ song }}</li>
        </ol>
      </div>
    </div>

    <div v-if="paypalID !== ''" class="record-footer">
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" :value="paypalID">
        <button class="btn-paypal-add-to-cart paypal-black" name="submit">{{ $t('btn.addToBasket') }}</button>
        <img alt="" border="0" src="https://www.paypalobjects.com/no_NO/i/scr/pixel.gif" width="1" height="1">
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Record',
  props: {
    title: String,
    spotifyURL: String,
    albumCover: String,
    tracks: Array,
    paypalID: String
  }
}
</script>

<style>

</style>
