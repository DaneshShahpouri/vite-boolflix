<script>
import { store } from '../store.js';



export default {
  name: 'AppSearchScreen',

  data() {
    return {
      store,

    }
  },

  emits: ['prevpage', 'nextpage'],
}
</script>

<template>
  <div class="container">
    <div class="research-screen">

      <!-- Span di comunicazione -->
      <span class="comunication-span" v-if="this.store.comm != ''">{{ this.store.comm }}</span>

      <!-- Controllo Pagine -->
      <div class="pages" v-if="this.store.isMorePage">
        <div class="prevpage" @click="$emit('prevpage')" v-if="this.store.PagNum > 1"><i
            class="fa-solid fa-arrow-left"></i></div>
        <div class="prevpage" v-if="this.store.PagNum <= 1"></div>
        <span>page {{ this.store.PagNum }}</span>
        <div class="nextpage" @click="$emit('nextpage')"><i class="fa-solid fa-arrow-right"></i></div>
      </div>



      <!-- Card di ricerca -->
      <div class="card-search" v-for="element in this.store.ApiResearchArray"
        v-if="this.store.ApiResearchArray.length > 0">

        <div class="info-wrapper">
          <span class="title">

            <strong>
              {{ this.store.isFilmResearch ? element.title : (element.media_type == "movie" ? element.title :
                element.name) }}
            </strong>
          </span>
          <span class="original-title">

            Original Title:
            <strong>
              {{ this.store.isFilmResearch ? element.original_title : (element.media_type == "movie" ?
                element.original_title : element.original_name) }}
            </strong>

            <!-- Voto -->
          </span>

          <div class="starwrapper">


            <div class="star-empty">
              <i class="fa-regular fa-star"></i>
              <div class="star" v-if="element.vote_average >= 8"><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="star-empty">
              <i class="fa-regular fa-star"></i>
              <div class="star" v-if="element.vote_average >= 6"><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="star-empty">
              <i class="fa-regular fa-star"></i>
              <div class="star" v-if="element.vote_average >= 4"><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="star-empty">
              <i class="fa-regular fa-star"></i>
              <div class="star" v-if="element.vote_average >= 2"><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="star-empty">
              <i class="fa-regular fa-star"></i>
              <div class="star" v-if="element.vote_average > 0"><i class="fa-solid fa-star"></i></div>
            </div>

          </div>

          <div class="release-date">
            {{ this.store.isFilmResearch ? element.release_date : (element.media_type == "movie" ? element.release_date
              :
              element.first_air_date) }}
          </div>

          <div class="lang">
            <!-- {{ element.original_language }} -->

            <span :class="'fi fi-gb'" v-if="element.original_language == 'en'"></span>
            <span :class="'fi fi-jp'" v-if="element.original_language == 'ja'"></span>
            <span :class="'fi fi-kr'" v-if="element.original_language == 'ko'"></span>
            <span :class="'fi fi-ht'" v-if="element.original_language == 'hi'"></span>
            <span :class="'fi fi-dk'" v-if="element.original_language == 'da'"></span>
            <span :class="'fi fi-fk'" v-if="element.original_language == 'fa'"></span>
            <span :class="'fi fi-uy'" v-if="element.original_language == 'ur'"></span>
            <span :class="'fi fi-cn'" v-if="element.original_language == 'zh'"></span>


            <span :class="'fi fi-' + element.original_language" v-if="element.original_language != 'en' ||
              element.original_language != 'ja' ||
              element.original_language != 'ko' ||
              element.original_language != 'da' ||
              element.original_language == 'hi' ||
              element.original_language == 'zh' ||
              element.original_language == 'fa'"></span>
          </div>

        </div>

        <div class=" shadow-over-bg">
        </div>
        <!-- posizione relative -->
        <div class="bg-cards">
          <img :src="`${this.store.ApiBasehttps}/original${element.poster_path}`" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './../scss/variables' as *;

.research-screen {
  width: 100%;
  height: 100%;
  margin-top: 5em;
  margin-bottom: 2em;
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  align-items: center;
  align-content: flex-start;
  justify-content: center;

  .pages {
    position: absolute;
    top: 20px;
    display: flex;
    align-items: center;
    gap: 1em;

    span {
      color: grey;
      cursor: default;
    }

    .prevpage,
    .nextpage {
      font-size: .8em;
      padding: 1em;
      color: rgb(163, 163, 163);
      cursor: pointer;

      &:hover {
        color: white;
      }
    }
  }

  .comunication-span {
    font-size: 1.2em;
    text-align: center;
    width: 100%;

    animation: appear .4s;
  }


  .card-search {
    width: 200px;
    height: 300px;
    margin: 2em 0;
    background: white;
    position: relative;



    &:hover .info-wrapper {
      opacity: 1;
    }

    .info-wrapper {
      position: absolute;
      z-index: 1;
      padding: .5em;
      opacity: 0;

      @include d-flex-col-center();
      justify-content: flex-start;
      align-items: stretch;
      gap: 1em;


      .title {
        font-size: .9em;
        text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.639);
        border: black;
      }

      .original-title {
        font-size: .8em;
      }

      .starwrapper {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;

        .star {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          color: $secondary;

          &-empty {
            position: relative;
            z-index: 1;
            text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.315);
          }
        }
      }

      .release-date {
        font-size: .8em;
      }

      .lang {
        font-size: .9em;
      }
    }

    .shadow-over-bg {
      position: absolute;
      top: 0;
      left: 0;
      background: radial-gradient(rgba(0, 0, 0, 0) 70%, $backgroundColor 150%);
      width: 100%;
      height: 100%;
      z-index: 2;
      opacity: 1;

      &:hover+.bg-cards>img {
        background: radial-gradient(rgba(0, 0, 0, 0) 70%, $backgroundColor 120%);
        opacity: .3;
      }
    }

    .bg-cards {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: black;


      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: .8;
        scale: 1.15;
      }

    }
  }


}
</style>
