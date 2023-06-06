<template>

  <Header/>
  <Contacts/>
</template>

<script>

import Header from './components/Header.vue'
import Contacts from './components/Contacts.vue';
export default {
  name: 'App',
  components: {
    Header,
    Contacts
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
