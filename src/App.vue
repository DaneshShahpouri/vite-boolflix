<script>
import axios from 'axios';
import { store } from './store.js';

// Components
// import HelloWorld from './components/HelloWorld.vue';


export default {
  data() {
    return {
      store,

    }
  },

  components: {

  },


}
</script>

<template>
  <div class="main-container">

  </div>
</template>

<style lang="scss" scoped>
@use './scss/variables' as *;

.main-container {
  width: 100%;
  height: 100vh;
}
</style>
