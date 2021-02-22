<template>

  <div id="app">

    <Header
      @select-championship="changeChampionship"
      @change-component="changeComponent"
    />

    <Section
    />
    <Footer />

  </div>

</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Section
  },
  data() {
    return {
      // championship: 'Campeonato Brasileiro',
    }
  },
  methods: {

    ...mapActions(['changeChampionship']),

    // changeChampionship: function(value){
    //   this.$store.dispatch('changeChampionship', value)
    // },

 
    changeComponent(value) {

      let component;
      
      switch (value) {
        case 'home':
        default:
          component = 'SectionBanner';

        break;

        case 'news':
            component = 'SectionNews';
        break;
      }

      this.currentSectionComponent = component;

    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap')
</style>
