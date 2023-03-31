<script>
import { store } from '../store.js';



export default {
  name: 'AppMain',

  data() {
    return {
      store,

    }
  },

  methods: {
    scrollLeftThumb(index) {
      let container = document.querySelectorAll('.wrapper-thumb-bar');
      container[index].scrollLeft -= 750
    },
    scrollRightThumb(index) {
      let container = document.querySelectorAll('.wrapper-thumb-bar');
      container[index].scrollLeft += 750
    },
  }
}
</script>

<template>
  <div class="main-container">

    <div class="main-visible">
      <div class="anteprima-main" v-if="!store.isSearch"></div>

      <!--Popolari Oggi-->
      <div class="anteprima-bar trendgiornalieri" v-if="!store.isSearch">
        <h3 class="bar-title main">Popolari Oggi</h3>

        <div class="thumbnails-bar">

          <!-- Btn -->
          <button class="btn btn-left" @click="scrollLeftThumb(0)"><i class="fa-solid fa-caret-left"></i></button>
          <button class="btn btn-right" @click="scrollRightThumb(0)"><i class="fa-solid fa-caret-right"></i></button>

          <div class="wrapper-thumb-bar">

            <!-- V-For -->
            <div class="thumbnail" v-for="element in store.ApiTrendDailyArray">

              <h3 class="title">
                {{ element.media_type == 'movie' ? element.title : element.name }}
              </h3>
              <div class="bg-thumb">
                <img :src="`${this.store.ApiBasehttps}/w500${element.backdrop_path}`" alt="">
              </div>
            </div>
          </div>

        </div>
      </div>

      <!--Popolari settimana-->
      <div class="anteprima-bar week" v-if="!store.isSearch">
        <h3 class="bar-title main">Popolari della Settimana</h3>

        <div class="thumbnails-bar">

          <!-- Btn -->
          <button class="btn btn-left" @click="scrollLeftThumb(1)"><i class="fa-solid fa-caret-left"></i></button>
          <button class="btn btn-right" @click="scrollRightThumb(1)"><i class="fa-solid fa-caret-right"></i></button>

          <div class="wrapper-thumb-bar">

            <!-- V-For -->
            <div class="thumbnail" v-for="element in this.store.ApiTrendWeekArray">

              <h3 class="title">
                {{ element.media_type == 'movie' ? element.title : element.name }}
              </h3>
              <div class="bg-thumb">
                <img :src="`${this.store.ApiBasehttps}/w500${element.backdrop_path}`" alt="">
              </div>
            </div>
          </div>

        </div>
      </div>

      <!--Popolari serieTv-->
      <div class="anteprima-bar serietv" v-if="!store.isSearch">
        <h3 class="bar-title main">Serie Tv</h3>

        <div class="thumbnails-bar">

          <!-- Btn -->
          <button class="btn btn-left" @click="scrollLeftThumb(2)"><i class="fa-solid fa-caret-left"></i></button>
          <button class="btn btn-right" @click="scrollRightThumb(2)"><i class="fa-solid fa-caret-right"></i></button>

          <div class="wrapper-thumb-bar">

            <!-- V-For -->
            <div class="thumbnail" v-for="element in this.store.Apigenre">

              <h3 class="title">
                {{ element.media_type == 'movie' ? element.title : element.name }}
              </h3>
              <div class="bg-thumb">
                <img :src="`${this.store.ApiBasehttps}/w500${element.backdrop_path}`" alt="">
              </div>
            </div>
          </div>

        </div>
      </div>




      <!------- Schermo di ricerca -------------->

      <div class="research-screen" v-else>

        <span class="comunication-span" v-if="this.store.comm != ''">{{ this.store.comm }}</span>

        <div class="card-search" v-for="element in this.store.ApiResearchArray">

          <div class="info-wrapper">
            <span class="title">

              <strong>
                {{ element.media_type == "movie" ? element.title : element.name }}
              </strong>
            </span>
            <span class="original-title">

              Original Title:
              <strong>
                {{ element.media_type == "movie" ? element.original_title : element.original_name }}
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
              {{ element.media_type == "movie" ? element.release_date : element.first_air_date }}
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

  </div>
</template>

<style lang="scss" scoped>
@use './../scss/variables' as *;

.main-container {
  width: 100%;
  height: 100vh;
  overflow-y: auto;

  .main-visible {
    width: 100%;
    height: 100vh;
    position: relative;
    bottom: 0px;
    bottom: 0;
    margin-top: 4em;

    @include d-flex-col-center();
    justify-content: flex-start;
    gap: 5em;

    .anteprima-main {
      width: 100%;
      height: 70%;

    }

  }

  .anteprima-bar {
    width: 100%;
    height: 200px;
    display: flex;
    position: relative;
    flex-direction: column;
    background: $backgroundColor;
    opacity: .6;
    transition: all .4s;

    &:hover {
      opacity: 1;
    }

    .bar-title {
      left: 10px;
      position: absolute;
      top: -1.5em;
      font-size: 1.5em;
      opacity: .6;

    }

    .thumbnails-bar {
      display: flex;
      align-items: center;
      height: 100%;

      position: relative;

      .btn {
        position: absolute;
        height: 125px;

        border-radius: 0;
        border: 0;

        font-size: 2em;


        z-index: 2;



        &-right {
          right: 0;
          background: linear-gradient(0.25turn, rgba(0, 0, 0, 0) 10%, $backgroundColor 80%);
          padding-left: 1.3em;
        }

        &-left {
          left: 0;
          background: linear-gradient(-0.25turn, rgba(0, 0, 0, 0) 10%, $backgroundColor 80%);
          padding-right: 1.3em;
        }

        &:hover {
          box-shadow: none;
        }
      }


    }

    .wrapper-thumb-bar {
      display: flex;
      align-items: center;
      gap: 1em;


      height: 100%;
      width: 100%;

      margin: auto;
      padding: .5em;
      padding-left: 4em;

      overflow: hidden;

      .thumbnail {
        width: 300px;
        height: 100%;
        display: block;
        position: relative;
        transition: all .4s;

        opacity: .7;

        &:hover {
          opacity: 1;

          &>.bg-thumb {
            opacity: .9;
            filter: contrast(1.5) saturate(1);
          }
        }

        .title {
          position: absolute;
          font-size: .9em;
          text-shadow: 1px 1px 3px black;
          margin: .2em;
          font-weight: 400;
          z-index: 2;
        }

        .bg-thumb {
          width: 200px;
          height: 100%;
          background: rgba(203, 203, 13, 0.397);
          filter: contrast(1) saturate(0.7);

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

  }

  .research-screen {
    width: 100%;
    height: 100%;
    margin-top: 5em;
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
    align-items: center;
    align-content: flex-start;
    justify-content: center;


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
}

// @media screen and (max-width: 900px) {
//   .main-container .research-screen .card-search {
//     width: calc((100% / 5) - ((10px / 4) * 5));

//   }
// }


// @media screen and (max-width: 600px) {
//   .main-container .research-screen .card-search {
//     width: calc((100% / 3) - ((10px / 2) * 3));

//   }
// }

// @media screen and (max-width: 400px) {
//   .main-container .research-screen .card-search {
//     width: 100%;

//   }
// }
</style>
