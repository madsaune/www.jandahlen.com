<template>
  <header>
    <div class="header-wrapper">
      <h1>Jan Dahlen</h1>

      <nav>
        <ul>
          <li><a href="#discography">{{ $t('section.discography') }}</a></li>
          <li><a href="#bio">{{ $t('section.bio') }}</a></li>
          <li><a href="#contact">{{ $t('section.contact') }}</a></li>
          <li>
            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
              <input type="hidden" name="cmd" value="_s-xclick">
              <input type="hidden" name="encrypted"
                value="-----BEGIN PKCS7-----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-----END PKCS7-----">
              <input class="btn-paypal" type="submit" border="0" name="submit" value="Handlekurv">
              <img alt="" border="0" src="https://www.paypalobjects.com/no_NO/i/scr/pixel.gif" width="1" height="1">
            </form>
          </li>
        </ul>
      </nav>
    </div>

    <LanguageSwitcher />

  </header>
</template>

<script>

import LanguageSwitcher from './LanguageSwitcher.vue';

export default {
  name: 'Header',
  components: {
    LanguageSwitcher,
  }
}
</script>

<style>

</style>
