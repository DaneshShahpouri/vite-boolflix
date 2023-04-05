<script>
import { store } from '../store.js';
import AppSearchScreen from './AppSearchScreen.vue';



export default {
  name: 'AppMain',

  data() {
    return {
      store,

    }
  },

  components: {
    AppSearchScreen,
  },

  emits: ['prevpage', 'nextpage', 'changeDayly', 'changeWeek', 'changeSeries'],

  methods: {
    scrollLeftThumb(index) {
      let container = document.querySelectorAll('.wrapper-thumb-bar');
      container[index].scrollLeft -= 750
    },

    scrollRightThumb(index) {
      let container = document.querySelectorAll('.wrapper-thumb-bar');
      container[index].scrollLeft += 750
    },

    genreResoult(parametro) {
      let resoult = parametro;
      switch (resoult) {
        case 28: resoult = 'Azione'; break;
        case 12: resoult = 'Avventura'; break;
        case 16: resoult = 'Animazione'; break;
        case 35: resoult = 'Commedia'; break;
        case 80: resoult = 'Crime'; break;
        case 99: resoult = 'Documentario'; break;
        case 18: resoult = 'Dramma'; break;
        case 10751: resoult = 'Famiglia'; break;
        case 14: resoult = 'Fantasy'; break;
        case 36: resoult = 'Storico'; break;
        case 27: resoult = 'Horror'; break;
        case 10402: resoult = 'Musica'; break;
        case 9648: resoult = 'Mistero'; break;
        case 10749: resoult = 'Romantico'; break;
        case 878: resoult = 'Science Fiction'; break;
        case 10770: resoult = 'Film tv'; break;
        case 53: resoult = 'Thriller'; break;
        case 10752: resoult = 'Guerra'; break;
        case 37: resoult = 'Western'; break;

        case 10759: resoult = 'Azione/Avventura'; break;
        case 16: resoult = 'Animazione'; break;
        case 35: resoult = 'Commedia'; break;
        case 80: resoult = 'Crime'; break;
        case 99: resoult = 'Documentario'; break;
        case 18: resoult = 'Dramma'; break;
        case 10751: resoult = 'Famiglia'; break;
        case 10762: resoult = 'Kids'; break;
        case 9648: resoult = 'Mistero'; break;
        case 10763: resoult = 'News'; break;
        case 10764: resoult = 'Reality'; break;
        case 10765: resoult = 'Sci-fi&Fantasy'; break;
        case 10766: resoult = 'Soap'; break;
        case 10767: resoult = 'Talk'; break;
        case 10768: resoult = 'Guerra&Politica'; break;
        case 37: resoult = 'Western'; break;

      }
      //console.log('il risultato è ' + resoult)
      return resoult
    }
  },


}
</script>

<template>
  <div class="main-container">

    <div class="main-visible">
      <div class="anteprima-main" v-if="!store.isSearch" :class="this.store.isAnimate ? 'animated' : ''">

        <div class="bg-main" v-if="this.store.ApiTrendDailyArray.length > 0">

          <div class="info-main-wrapper">
            <div class="top-side">

              <div class="title-and-flag">

                <!-- Titolo Main -->
                <div class="title" v-if="this.store.isDaily">
                  {{ (this.store.ApiTrendDailyArray[this.store.globalindex].media_type === "movie" ?
                    this.store.ApiTrendDailyArray[this.store.globalindex].title :
                    this.store.ApiTrendDailyArray[this.store.globalindex].name) }}
                </div>
                <div class="title" v-if="this.store.isWeekly">
                  {{ (this.store.ApiTrendWeekArray[this.store.globalindex].media_type === "movie" ?
                    this.store.ApiTrendWeekArray[this.store.globalindex].title :
                    this.store.ApiTrendWeekArray[this.store.globalindex].name) }}
                </div>
                <div class="title" v-if="this.store.isSerie">
                  {{ (this.store.Apigenre[this.store.globalindex].media_type === "movie" ?
                    this.store.Apigenre[this.store.globalindex].title :
                    this.store.Apigenre[this.store.globalindex].name) }}
                </div>

              </div>

              <div class="years-star-type">

                <!-- Stelle -->
                <div class="starwrapper" v-if="this.store.isDaily">


                  <div class="star-empty">
                    <i class="fa-regular fa-star"></i>
                    <div class="star" v-if="store.ApiTrendDailyArray[this.store.globalindex].vote_average >= 8"><i
                        class="fa-solid fa-star"></i></div>
                  </div>

                  <div class="star-empty">
                    <i class="fa-regular fa-star"></i>
                    <div class="star" v-if="store.ApiTrendDailyArray[this.store.globalindex].vote_average >= 6"><i
                        class="fa-solid fa-star"></i></div>
                  </div>

                  <div class="star-empty">
                    <i class="fa-regular fa-star"></i>
                    <div class="star" v-if="store.ApiTrendDailyArray[this.store.globalindex].vote_average >= 4"><i
                        class="fa-solid fa-star"></i></div>
                  </div>

                  <div class="star-empty">
                    <i class="fa-regular fa-star"></i>
                    <div class="star" v-if="store.ApiTrendDailyArray[this.store.globalindex].vote_average >= 2"><i
                        class="fa-solid fa-star"></i></div>
                  </div>

                  <div class="star-empty">
                    <i class="fa-regular fa-star"></i>
                    <div class="star" v-if="store.ApiTrendDailyArray[this.store.globalindex].vote_average > 0"><i
                        class="fa-solid fa-star"></i></div>
                  </div>

                </div>

                <div class="starwrapper" v-if="this.store.isWeekly">


                  <div class="star-empty">
                    <i class="fa-regular fa-star"></i>
                    <div class="star" v-if="store.ApiTrendWeekArray[this.store.globalindex].vote_average >= 8"><i
                        class="fa-solid fa-star"></i></div>
                  </div>

                  <div class="star-empty">
                    <i class="fa-regular fa-star"></i>
                    <div class="star" v-if="store.ApiTrendWeekArray[this.store.globalindex].vote_average >= 6"><i
                        class="fa-solid fa-star"></i></div>
                  </div>

                  <div class="star-empty">
                    <i class="fa-regular fa-star"></i>
                    <div class="star" v-if="store.ApiTrendWeekArray[this.store.globalindex].vote_average >= 4"><i
                        class="fa-solid fa-star"></i></div>
                  </div>

                  <div class="star-empty">
                    <i class="fa-regular fa-star"></i>
                    <div class="star" v-if="store.ApiTrendWeekArray[this.store.globalindex].vote_average >= 2"><i
                        class="fa-solid fa-star"></i></div>
                  </div>

                  <div class="star-empty">
                    <i class="fa-regular fa-star"></i>
                    <div class="star" v-if="store.ApiTrendWeekArray[this.store.globalindex].vote_average > 0"><i
                        class="fa-solid fa-star"></i></div>
                  </div>

                </div>

                <div class="starwrapper" v-if="this.store.isSerie">


                  <div class="star-empty">
                    <i class="fa-regular fa-star"></i>
                    <div class="star" v-if="store.Apigenre[this.store.globalindex].vote_average >= 8"><i
                        class="fa-solid fa-star"></i></div>
                  </div>

                  <div class="star-empty">
                    <i class="fa-regular fa-star"></i>
                    <div class="star" v-if="store.Apigenre[this.store.globalindex].vote_average >= 6"><i
                        class="fa-solid fa-star"></i></div>
                  </div>

                  <div class="star-empty">
                    <i class="fa-regular fa-star"></i>
                    <div class="star" v-if="store.Apigenre[this.store.globalindex].vote_average >= 4"><i
                        class="fa-solid fa-star"></i></div>
                  </div>

                  <div class="star-empty">
                    <i class="fa-regular fa-star"></i>
                    <div class="star" v-if="store.Apigenre[this.store.globalindex].vote_average >= 2"><i
                        class="fa-solid fa-star"></i></div>
                  </div>

                  <div class="star-empty">
                    <i class="fa-regular fa-star"></i>
                    <div class="star" v-if="store.Apigenre[this.store.globalindex].vote_average > 0"><i
                        class="fa-solid fa-star"></i></div>
                  </div>

                </div>
                <!-- Stelle -->

                <!-- Tipo -->
                <div class="info-type" v-if="this.store.isDaily">
                  {{ this.store.ApiTrendDailyArray[this.store.globalindex].media_type == 'movie' ? 'Film' : 'Serie Tv' }}
                </div>
                <div class="info-type" v-if="this.store.isWeekly">
                  {{ this.store.ApiTrendWeekArray[this.store.globalindex].media_type == 'movie' ? 'Film' : 'Serie Tv' }}
                </div>
                <div class="info-type" v-if="this.store.isSerie">
                  {{ this.store.Apigenre[this.store.globalindex].media_type == 'movie' ? 'Film' : 'Serie Tv' }}
                </div>

                <!-- data -->
                <div class="release-date" v-if="this.store.isDaily">
                  {{ store.ApiTrendDailyArray[this.store.globalindex].media_type == "movie" ?
                    store.ApiTrendDailyArray[this.store.globalindex].release_date.substr(0, 4) :
                    store.ApiTrendDailyArray[this.store.globalindex].first_air_date.substr(0, 4) }}
                </div>
                <div class="release-date" v-if="this.store.isWeekly">
                  {{ store.ApiTrendWeekArray[this.store.globalindex].media_type == "movie" ?
                    store.ApiTrendWeekArray[this.store.globalindex].release_date.substr(0, 4) :
                    store.ApiTrendWeekArray[this.store.globalindex].first_air_date.substr(0, 4) }}
                </div>
                <div class="release-date" v-if="this.store.isSerie">
                  {{ store.Apigenre[this.store.globalindex].media_type == "movie" ?
                    store.Apigenre[this.store.globalindex].release_date.substr(0, 4) :
                    store.Apigenre[this.store.globalindex].first_air_date.substr(0, 4) }}
                </div>

                <!-- Flag -->
                <div class="lang" v-if="this.store.isDaily">
                  <!-- {{ store.ApiTrendDailyArray[this.store.globalindex].original_language }} -->

                  <span :class="'fi fi-gb'"
                    v-if="store.ApiTrendDailyArray[this.store.globalindex].original_language == 'en'"></span>
                  <span :class="'fi fi-jp'"
                    v-if="store.ApiTrendDailyArray[this.store.globalindex].original_language == 'ja'"></span>
                  <span :class="'fi fi-kr'"
                    v-if="store.ApiTrendDailyArray[this.store.globalindex].original_language == 'ko'"></span>
                  <span :class="'fi fi-ht'"
                    v-if="store.ApiTrendDailyArray[this.store.globalindex].original_language == 'hi'"></span>
                  <span :class="'fi fi-dk'"
                    v-if="store.ApiTrendDailyArray[this.store.globalindex].original_language == 'da'"></span>
                  <span :class="'fi fi-fk'"
                    v-if="store.ApiTrendDailyArray[this.store.globalindex].original_language == 'fa'"></span>
                  <span :class="'fi fi-uy'"
                    v-if="store.ApiTrendDailyArray[this.store.globalindex].original_language == 'ur'"></span>
                  <span :class="'fi fi-cn'"
                    v-if="store.ApiTrendDailyArray[this.store.globalindex].original_language == 'zh'"></span>


                  <span :class="'fi fi-' + store.ApiTrendDailyArray[this.store.globalindex].original_language" v-if="store.ApiTrendDailyArray[this.store.globalindex].original_language != 'en' ||
                    store.ApiTrendDailyArray[this.store.globalindex].original_language != 'ja' ||
                    store.ApiTrendDailyArray[this.store.globalindex].original_language != 'ko' ||
                    store.ApiTrendDailyArray[this.store.globalindex].original_language != 'da' ||
                    store.ApiTrendDailyArray[this.store.globalindex].original_language == 'hi' ||
                    store.ApiTrendDailyArray[this.store.globalindex].original_language == 'zh' ||
                    store.ApiTrendDailyArray[this.store.globalindex].original_language == 'fa'"></span>
                </div>
                <div class="lang" v-if="this.store.isWeekly">
                  <!-- {{ store.ApiTrendDailyArray[this.store.globalindex].original_language }} -->

                  <span :class="'fi fi-gb'"
                    v-if="store.ApiTrendWeekArray[this.store.globalindex].original_language == 'en'"></span>
                  <span :class="'fi fi-jp'"
                    v-if="store.ApiTrendWeekArray[this.store.globalindex].original_language == 'ja'"></span>
                  <span :class="'fi fi-kr'"
                    v-if="store.ApiTrendWeekArray[this.store.globalindex].original_language == 'ko'"></span>
                  <span :class="'fi fi-ht'"
                    v-if="store.ApiTrendWeekArray[this.store.globalindex].original_language == 'hi'"></span>
                  <span :class="'fi fi-dk'"
                    v-if="store.ApiTrendWeekArray[this.store.globalindex].original_language == 'da'"></span>
                  <span :class="'fi fi-fk'"
                    v-if="store.ApiTrendWeekArray[this.store.globalindex].original_language == 'fa'"></span>
                  <span :class="'fi fi-uy'"
                    v-if="store.ApiTrendWeekArray[this.store.globalindex].original_language == 'ur'"></span>
                  <span :class="'fi fi-cn'"
                    v-if="store.ApiTrendWeekArray[this.store.globalindex].original_language == 'zh'"></span>


                  <span :class="'fi fi-' + store.ApiTrendWeekArray[this.store.globalindex].original_language" v-if="store.ApiTrendWeekArray[this.store.globalindex].original_language != 'en' ||
                    store.ApiTrendWeekArray[this.store.globalindex].original_language != 'ja' ||
                    store.ApiTrendWeekArray[this.store.globalindex].original_language != 'ko' ||
                    store.ApiTrendWeekArray[this.store.globalindex].original_language != 'da' ||
                    store.ApiTrendWeekArray[this.store.globalindex].original_language == 'hi' ||
                    store.ApiTrendWeekArray[this.store.globalindex].original_language == 'zh' ||
                    store.ApiTrendWeekArray[this.store.globalindex].original_language == 'fa'"></span>
                </div>
                <div class="lang" v-if="this.store.isSerie">
                  <!-- {{ store.ApiTrendDailyArray[this.store.globalindex].original_language }} -->

                  <span :class="'fi fi-gb'"
                    v-if="store.Apigenre[this.store.globalindex].original_language == 'en'"></span>
                  <span :class="'fi fi-jp'"
                    v-if="store.Apigenre[this.store.globalindex].original_language == 'ja'"></span>
                  <span :class="'fi fi-kr'"
                    v-if="store.Apigenre[this.store.globalindex].original_language == 'ko'"></span>
                  <span :class="'fi fi-ht'"
                    v-if="store.Apigenre[this.store.globalindex].original_language == 'hi'"></span>
                  <span :class="'fi fi-dk'"
                    v-if="store.Apigenre[this.store.globalindex].original_language == 'da'"></span>
                  <span :class="'fi fi-fk'"
                    v-if="store.Apigenre[this.store.globalindex].original_language == 'fa'"></span>
                  <span :class="'fi fi-uy'"
                    v-if="store.Apigenre[this.store.globalindex].original_language == 'ur'"></span>
                  <span :class="'fi fi-cn'"
                    v-if="store.Apigenre[this.store.globalindex].original_language == 'zh'"></span>


                  <span :class="'fi fi-' + store.Apigenre[this.store.globalindex].original_language" v-if="store.Apigenre[this.store.globalindex].original_language != 'en' ||
                    store.Apigenre[this.store.globalindex].original_language != 'ja' ||
                    store.Apigenre[this.store.globalindex].original_language != 'ko' ||
                    store.Apigenre[this.store.globalindex].original_language != 'da' ||
                    store.Apigenre[this.store.globalindex].original_language == 'hi' ||
                    store.Apigenre[this.store.globalindex].original_language == 'zh' ||
                    store.Apigenre[this.store.globalindex].original_language == 'fa'"></span>
                </div>

              </div>

              <div class="genre">
                <span v-if="this.store.isDaily"
                  v-for="(genre, index) in this.store.ApiTrendDailyArray[this.store.globalindex].genre_ids">
                  {{ index < this.store.ApiTrendDailyArray[this.store.globalindex].genre_ids.length - 1 ?
                    genreResoult(genre) + ', ' : genreResoult(genre) }} </span>



                    <span v-if="this.store.isWeekly"
                      v-for="(genre, index) in this.store.ApiTrendWeekArray[this.store.globalindex].genre_ids">{{ index <
                        this.store.ApiTrendWeekArray[this.store.globalindex].genre_ids.length - 1 ? genreResoult(genre)
                      + ', ' : genreResoult(genre) }}</span>
                        <span v-if="this.store.isSerie"
                          v-for="(genre, index) in this.store.Apigenre[this.store.globalindex].genre_ids">{{ index <
                            this.store.Apigenre[this.store.globalindex].genre_ids.length - 1 ? genreResoult(genre) + ', '
                            : genreResoult(genre) }}</span>
              </div>


              <div class="cast">
                <span>Cast: </span>
                <span class="cast-span" v-if="this.store.globalCast.length > 0"
                  v-for="(actor, index) in this.store.globalCast">{{ index < this.store.globalCast.length - 1 ? actor
                    + ', ' : actor }}</span>
              </div>
            </div>


            <!-- Sinossi -->
            <div class="over-view" v-if="this.store.isDaily">
              {{ store.ApiTrendDailyArray[this.store.globalindex].overview }}
            </div>
            <div class="over-view" v-if="this.store.isWeekly">
              {{ store.ApiTrendWeekArray[this.store.globalindex].overview }}
            </div>
            <div class="over-view" v-if="this.store.isSerie">
              {{ store.Apigenre[this.store.globalindex].overview }}
            </div>
          </div>


          <div class="shadows-img"></div>
          <img v-if="this.store.isDaily"
            :src="`${this.store.ApiBasehttps}/original${this.store.ApiTrendDailyArray[this.store.globalindex].backdrop_path}`"
            alt="">

          <img v-if="this.store.isWeekly"
            :src="`${this.store.ApiBasehttps}/original${this.store.ApiTrendWeekArray[this.store.globalindex].backdrop_path}`"
            alt="">

          <img v-if="this.store.isSerie"
            :src="`${this.store.ApiBasehttps}/original${this.store.Apigenre[this.store.globalindex].backdrop_path}`"
            alt="">
        </div>
      </div>

      <!-- Consigliati -->
      <div class="consi_wrapper"></div>
      <!--Popolari Oggi-->
      <div class="anteprima-bar trendgiornalieri" v-if="!store.isSearch">
        <h3 class="bar-title main">Popolari Oggi</h3>

        <div class="thumbnails-bar">

          <!-- Btn -->
          <button class="btn btn-left" @click="scrollLeftThumb(0)"><i class="fa-solid fa-caret-left"></i></button>
          <button class="btn btn-right" @click="scrollRightThumb(0)"><i class="fa-solid fa-caret-right"></i></button>

          <div class="wrapper-thumb-bar">

            <!-- V-For -->
            <div class="thumbnail" v-for="(element, index) in store.ApiTrendDailyArray"
              :class="this.store.isDaily ? (this.store.globalindex == index ? 'active' : '') : ''"
              @click="$emit('changeDayly', index)">

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
            <div class="thumbnail" v-for="(element, index) in this.store.ApiTrendWeekArray"
              @click="$emit('changeWeek', index)"
              :class="this.store.isWeekly ? (this.store.globalindex == index ? 'active' : '') : ''">

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
            <div class="thumbnail" v-for="(element, index) in this.store.Apigenre" @click="$emit('changeSeries', index)"
              :class="this.store.isSerie ? (this.store.globalindex == index ? 'active' : '') : ''">

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
      <AppSearchScreen v-else @prevpage="$emit('prevpage')" @nextpage="$emit('nextpage')"></AppSearchScreen>


      <footer>
        <div class="container-footer">
          <span>Create By Danesh</span>
        </div>
      </footer>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use './../scss/variables' as *;

.main-container {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 4em;

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


    .animated {
      .bg-main {

        img {

          animation: appearImgtoLeft .5s .2s, appear .5s;
        }

        .info-main-wrapper {


          .title {
            position: relative;
            animation: appearTexttoLeft .4s
          }

          // .info-type {
          //   position: relative;
          //   animation: hiddenStart .1s, appearTexttoLeft .4s .1s
          // }

          // .starwrapper {
          //   position: relative;
          //   animation: hiddenStart .2s, appearTexttoLeft .4s .2s
          // }

          // .release-date {
          //   position: relative;
          //   animation: hiddenStart .3s, appearTexttoLeft .4s .3s
          // }

          // .lang {
          //   position: relative;
          //   animation: hiddenStart .4s, appearTexttoLeft .4s .4s
          // }

          .years-star-type {
            position: relative;
            animation: hiddenStart .2s, appearTexttoLeft .4s .2s
          }

          .genre {
            position: relative;
            animation: hiddenStart .3s, appearTexttoLeft .4s .3s
          }

          .cast {
            position: relative;
            animation: hiddenStart .3s, appearTexttoLeft .4s .3s
          }

          .over-view {
            position: relative;
            animation: hiddenStart .2s, appearTexttoLeft .4s .2s
          }
        }
      }
    }

    .anteprima-main {
      width: 100%;
      height: 60%;
      margin: 1em .5em;

      .shadows-img {
        width: 100%;
        height: 600px;
        position: absolute;
        background: linear-gradient(.25turn, $backgroundColor 25%, rgba(0, 0, 0, 0)80%);
        scale: 1;

        z-index: 1;
      }

      .bg-main {
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 150px top;

        }

        .info-main-wrapper {
          position: absolute;
          height: 60%;
          z-index: 3;
          padding: .5em;
          padding-left: 2em;
          display: flex;
          flex-flow: column;
          justify-content: flex-start;
          align-content: center;
          gap: 5em;


          .top-side {
            display: flex;
            flex-direction: column;
            gap: .5em;

            .years-star-type,
            .title-and-flag {
              width: 100%;
              display: flex;
              flex-flow: row nowrap;
              align-items: center;
              gap: 1em;
            }

            .genre {
              span {
                font-size: .9em;
                font-weight: 200;
                color: grey;
              }
            }

            .cast {
              width: 50%;

              .cast-span {
                font-size: .9em;
                font-weight: 500;
                color: rgb(183, 183, 183);
              }
            }

          }

          .title {

            font-size: 2.1em;
            font-weight: 600;
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
              z-index: 0;
              color: $secondary;
              scale: 1;

              &-empty {
                position: relative;
                z-index: 2;
                text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.315);
                scale: .9;
              }
            }
          }

          .over-view {

            width: 50%;
            height: 100%;

            font-size: 1.1em;
            font-weight: 200;
            color: rgb(174, 174, 174);
            overflow: hidden;
          }
        }
      }
    }

  }

  .anteprima-bar {
    width: 100%;
    height: 400px;
    display: flex;
    position: relative;
    flex-direction: column;
    background: $backgroundColor;
    opacity: 1;
    transition: all .4s;
    z-index: 2;

    &:hover {
      opacity: 1;
    }

    .bar-title {
      left: 10px;
      position: absolute;
      top: -1.5em;
      font-size: 1.5em;
      opacity: .6;
      font-weight: 300;

    }

    .thumbnails-bar {
      display: flex;
      align-items: center;
      height: 100%;

      position: relative;

      .btn {
        position: absolute;
        height: 155px;

        border-radius: 0;
        border: 0;

        font-size: 1.5em;


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
      gap: .2em;


      height: 100%;
      width: 100%;

      margin: auto;
      padding: .5em;
      padding-left: 4em;

      overflow: hidden;

      .thumbnail.active {
        opacity: 1;

        .bg-thumb {
          img {
            opacity: 1;
            filter: contrast(1) saturate(1);
          }
        }
      }

      .thumbnail {
        width: 300px;
        height: 100%;
        display: block;
        position: relative;
        transition: all .4s;

        opacity: .3;


        &:hover {
          opacity: 1;
          scale: 1.2;
          margin: 0 1.1em;

          &>.bg-thumb {
            opacity: .9;
            filter: contrast(1.1) saturate(1);
          }
        }

        .title {
          position: absolute;
          font-size: .9em;
          text-shadow: 1px 1px 3px black;
          margin: .2em;
          font-weight: 200;
          z-index: 2;
        }

        .bg-thumb {
          width: 200px;
          height: 100%;
          background: rgba(203, 203, 13, 0.397);
          transition: all .4s;


          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all .4s;

          }
        }
      }
    }

  }

  .container-footer {
    margin: 1.5em;

    span {
      color: grey;
      font-size: .7em;
    }
  }

}

@media screen and (max-width: 950px) {
  .main-container {

    .main-visible {

      .anteprima-main {
        width: 100%;
        height: 50%;


        .bg-main {
          width: 100%;
          height: 100%;



          .info-main-wrapper {
            margin-top: .5em;
            padding: 0;
            gap: .2em;

            .top-side {
              display: flex;
              flex-direction: column;
              gap: .5em;


              .title {
                margin-top: .2em;
              }

            }

            .over-view {
              width: 70%;
            }
          }

        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .main-container {

    .main-visible {

      .anteprima-main {
        width: 100%;
        height: 50%;


        .bg-main {
          width: 100%;
          height: 100%;



          .info-main-wrapper {
            margin-top: .0em;
            padding: 0;
            gap: .2em;
            height: 35%;

            .top-side {
              display: flex;
              flex-direction: column;
              gap: .2em;

              .title {
                margin-top: 0em;
              }

            }

            .over-view {
              width: 70%;
              font-size: .9em;
            }
          }

        }
      }
    }
  }
}

@media screen and (max-width: 570px) {
  .main-container {

    .main-visible {

      .anteprima-main {
        width: 100%;
        height: 50%;


        .bg-main {
          width: 100%;
          height: 100%;

          img {
            object-position: 10px;
          }



          .info-main-wrapper {
            margin-top: .0em;
            padding: 0;
            gap: .2em;
            height: 35%;

            .top-side {
              display: flex;
              flex-direction: column;
              gap: .2em;

              font-size: .8em;

              .title {
                margin-top: 0em;
                font-size: 1.4em;
              }

            }

            .over-view {
              width: 90%;
              font-size: .8em;
            }
          }

        }
      }
    }
  }
}
</style>
