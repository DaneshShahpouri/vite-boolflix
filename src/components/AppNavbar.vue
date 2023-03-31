<script>
import { store } from '../store.js';



export default {
  name: 'AppNavbar',

  data() {
    return {
      store,

    }
  },

  emits: ['searchFilm', 'searchSeries'],

  methods: {
    goHome() {
      this.store.isSearchBar = false;
      this.store.isSearch = false;
    }
  }
}
</script>

<template>
  <div class="nav-container">
    <div class="logo-wrapper">
      <span>Boolflix</span>
    </div>



    <div class="types-prod">
      <div class="icon home" @click="goHome()">
        <i class="fa-solid fa-house"></i>
        <div class="info-icon">home</div>
      </div>

      <div class="icon tv-series" @click="$emit('searchSeries')">
        <i class="fa-solid fa-tv"></i>
        <div class="info-icon">SerieTv</div>
      </div>

      <div class="icon film" @click="$emit('searchFilm')">
        <i class="fa-solid fa-film"></i>
        <div class="info-icon">Film</div>
      </div>

      <div class="icon kids">
        <i class="fa-solid fa-person-breastfeeding"></i>
        <div class="info-icon">Kids</div>
      </div>

      <div class="icon comedy">
        <i class="fa-solid fa-masks-theater"></i>
        <div class="info-icon">Comedy</div>
      </div>

    </div>
  </div>
  <div class="shadows"></div>
</template>

<style lang="scss" scoped>
@use './../scss/variables' as *;

.nav-container {
  width: calc(100% - 57px);
  height: 60px;
  background: linear-gradient(darken($backgroundColor, $amount: 5) 45%, rgba(0, 0, 0, 0) 95%);

  position: absolute;
  top: 0;
  right: 17px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 4;

  .logo-wrapper {
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;

    padding-left: 1em;
    font-size: 2em;
    font-weight: 300;
    text-shadow: .4px .5px rgba(255, 255, 255, 0.427);


    color: $secondary;
  }

  .types-prod {
    display: flex;
    padding-right: 3em;

    gap: 2em;


    .icon {
      position: relative;
      top: 0;
      left: 0;

      i {
        color: grey;
        cursor: pointer;
        transition: all .3s;

        &:hover {
          color: white;
        }

        &:hover+.info-icon {
          display: block;
        }

      }

      .info-icon {
        position: absolute;
        right: -2em;
        top: 3em;
        font-size: .9em;
        color: rgb(188, 188, 188);
        border-radius: 5px;


        background: darken($backgroundColor, $amount: 5);
        padding: .4em 1em;

        display: none;

        animation: appear 1.5s;
      }
    }



  }

}

.shadows {
  width: calc(100% - 57px);
  height: 60px;
  background: linear-gradient($backgroundColor 35%, rgba(0, 0, 0, 0) 100%);
  position: absolute;
  top: 0;
  right: 17px;
  z-index: 1;
}
</style>
