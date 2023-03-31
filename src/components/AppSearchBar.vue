<script>
import { store } from '../store.js';



export default {
  name: 'AppSearchBar',

  data() {
    return {
      store,

    }
  },

  emits:
    ['search']

}
</script>

<template>
  <div class="container" v-if="this.store.isSearchBar">
    <div class="search-input-wrapper">
      <input type="text"
        :placeholder="this.store.isGeneralResearch ? 'Cerca un film o una serie' : (this.store.isFilmResearch ? 'Cerca un film' : 'Cerca una serie')"
        v-model="this.store.researchinput" @keyup.enter="$emit('search')">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './../scss/variables' as *;

.container {
  position: relative;
  width: 100%;
  top: 0;
  left: 0;

  .search-input-wrapper {
    position: absolute;
    height: 30px;

    width: 50%;
    margin: auto;
    z-index: 1;
    top: 15px;
    left: 45%;
    display: flex;
    align-content: center;
    transform: translateX(-50%);


    display: flex;


    input {
      width: 100%;
      padding: .5em;
      outline: -webkit-focus-ring-color auto 0px;
      border: none;
      background-color: lighten($color: $backgroundColor, $amount: 5);

      max-height: 50px;
      animation: appearEffects 1s;

      &:focus {
        outline: -webkit-focus-ring-color auto 0px;
        border: none;
      }

      &:focus-visible {
        outline: -webkit-focus-ring-color auto 0px;
        border: none;
        border-bottom: 1px solid $primary;
      }
    }
  }

}

@keyframes appearEffects {
  0% {
    height: 0px;
    overflow: hidden;
    opacity: 0;
  }

  100% {
    height: 30px;
    overflow: hidden;
    opacity: 1;
  }
}

// -MQ----------------------
@media screen and (max-width: 1150px) {
  .container .search-input-wrapper {
    width: 45%;
    left: 40%;
  }
}




@media screen and (max-width: 900px) {
  .container .search-input-wrapper {
    top: 60px;
    left: 30%;
  }
}
</style>
