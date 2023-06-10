<template>

  <Header/>
  <Contacts/>
  <Footer/>
</template>

<script>

import Header from './components/Header.vue'
import Contacts from './components/Contacts.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Contacts,
    Footer
  }
}
</script>

<style>

#app {
  
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}
</style>
