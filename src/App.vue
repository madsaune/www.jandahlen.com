<template>
  <div>
    <ScrollToTop />
    <Header />

    <!-- DISCOGRAPHY -->
    <section id="discography">
      <h2 class="section--title">{{ $t("section.discography") }}</h2>
      <div class="section--body">
        <Record
          title="Kæm e du (2018)"
          spotifyURL="https://open.spotify.com/embed/album/5ftW7Z5zbwIsLPOXMxV7jj"
          albumCover="https://jandahlen.com/static/img/kemedu_low.png"
          paypalID="X62Y5B5UGXV8N"
          :tracks="[
            'Minnans spor',
            'Du betyr ingenting',
            'Kæm e du',
            'Flyskrækk',
            'Søndagsblues',
            'Min babe',
            'Minnan',
            'Kåffer',
            'Prøve å ikkje tænk på dæ',
            'Sa æ ja',
            'Vuggevise',
          ]"
        />
      </div>
    </section>

    <!-- BIO -->
    <section id="bio">
      <h2 class="section--title">{{ $t("section.bio") }}</h2>
      <div class="section--body">
        <p v-for="(p, idx) in messages[this.$i18n.locale].text.bio" :key="idx">
          {{ p }}
        </p>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import ScrollToTop from "./components/ScrollToTop.vue";
import Header from "./components/Header.vue";
import Record from "./components/Record.vue";
import Footer from "./components/Footer.vue";
import messages from "./messages";

export default {
  name: "App",
  components: {
    ScrollToTop,
    Header,
    Record,
    Footer,
  },
  data() {
    return {
      messages: {},
    };
  },

  created() {
    console.log(this.$i18n.locale);
    this.messages = messages;
    console.log(this.messages[this.$i18n.locale].text.bio);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
