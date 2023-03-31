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

    changeDaylyIndex(index) {
      this.store.isDaily = true;
      this.store.isSerie = false;
      this.store.isWeekly = false;
      this.store.globalindex = index;
      clearInterval(this.store.carosellTime)
      this.changeIndexGlobal();

      this.store.isAnimate = true
      setTimeout(() => {
        this.store.isAnimate = false
      }, 1200)

    },
    changeWeekIndex(index) {
      this.store.isDaily = false;
      this.store.isSerie = false;
      this.store.isWeekly = true;
      this.store.globalindex = index;

      clearInterval(this.store.carosellTime)
      this.changeIndexGlobal();

      this.store.isAnimate = true
      setTimeout(() => {
        this.store.isAnimate = false
      }, 1200)

    },
    changeSeriesIndex(index) {
      this.store.isDaily = false;
      this.store.isSerie = true;
      this.store.isWeekly = false;
      this.store.globalindex = index;

      clearInterval(this.store.carosellTime)
      this.changeIndexGlobal();

      this.store.isAnimate = true
      setTimeout(() => {
        this.store.isAnimate = false
      }, 1200)

    },

    changeIndexGlobal() {

      this.store.carosellTime = setInterval(() => {
        this.store.globalindex++

        //console.log(this.store.globalindex)

        if (this.store.isDaily && this.store.globalindex == this.store.ApiTrendDailyArray.length) {
          this.store.globalindex = 0;
        } else if (this.store.isWeekly && this.store.globalindex == this.store.ApiTrendWeekArray.length) {
          this.store.globalindex = 0;
        } else if (this.store.isSerie && this.store.globalindex == this.store.Apigenre.length) {
          this.store.globalindex = 0;
        }

        this.store.isAnimate = true;

        setTimeout(() => {
          this.store.isAnimate = false
          //console.log('isanimate timeout' + this.store.isAnimate)
        }, 1200)
        //console.log('isanimate interval' + this.store.isAnimate)
      }, 6000)
    }
  },

  mounted() {
    this.changeIndexGlobal();
  }
}
</script>

<template>
  <div class="main-container">

    <div class="main-visible">
      <div class="anteprima-main" v-if="!store.isSearch" :class="this.store.isAnimate ? 'animated' : ''">

        <div class="bg-main" v-if="this.store.ApiTrendDailyArray.length > 0">

          <div class="info-main-wrapper">
            <div class="top-side">

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

              <!-- Tipo -->
              <div class="info-type" v-if="this.store.isDaily">
                {{ this.store.ApiTrendDailyArray[this.store.globalindex].media_type }}
              </div>
              <div class="info-type" v-if="this.store.isWeekly">
                {{ this.store.ApiTrendWeekArray[this.store.globalindex].media_type }}
              </div>
              <div class="info-type" v-if="this.store.isSerie">
                {{ this.store.Apigenre[this.store.globalindex].media_type }}
              </div>

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


              <!-- data -->
              <div class="release-date" v-if="this.store.isDaily">
                {{ store.ApiTrendDailyArray[this.store.globalindex].media_type == "movie" ?
                  store.ApiTrendDailyArray[this.store.globalindex].release_date :
                  store.ApiTrendDailyArray[this.store.globalindex].first_air_date }}
              </div>
              <div class="release-date" v-if="this.store.isWeekly">
                {{ store.ApiTrendWeekArray[this.store.globalindex].media_type == "movie" ?
                  store.ApiTrendWeekArray[this.store.globalindex].release_date :
                  store.ApiTrendWeekArray[this.store.globalindex].first_air_date }}
              </div>
              <div class="release-date" v-if="this.store.isSerie">
                {{ store.Apigenre[this.store.globalindex].media_type == "movie" ?
                  store.Apigenre[this.store.globalindex].release_date :
                  store.Apigenre[this.store.globalindex].first_air_date }}
              </div>

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

                <span :class="'fi fi-gb'" v-if="store.Apigenre[this.store.globalindex].original_language == 'en'"></span>
                <span :class="'fi fi-jp'" v-if="store.Apigenre[this.store.globalindex].original_language == 'ja'"></span>
                <span :class="'fi fi-kr'" v-if="store.Apigenre[this.store.globalindex].original_language == 'ko'"></span>
                <span :class="'fi fi-ht'" v-if="store.Apigenre[this.store.globalindex].original_language == 'hi'"></span>
                <span :class="'fi fi-dk'" v-if="store.Apigenre[this.store.globalindex].original_language == 'da'"></span>
                <span :class="'fi fi-fk'" v-if="store.Apigenre[this.store.globalindex].original_language == 'fa'"></span>
                <span :class="'fi fi-uy'" v-if="store.Apigenre[this.store.globalindex].original_language == 'ur'"></span>
                <span :class="'fi fi-cn'" v-if="store.Apigenre[this.store.globalindex].original_language == 'zh'"></span>


                <span :class="'fi fi-' + store.Apigenre[this.store.globalindex].original_language" v-if="store.Apigenre[this.store.globalindex].original_language != 'en' ||
                  store.Apigenre[this.store.globalindex].original_language != 'ja' ||
                  store.Apigenre[this.store.globalindex].original_language != 'ko' ||
                  store.Apigenre[this.store.globalindex].original_language != 'da' ||
                  store.Apigenre[this.store.globalindex].original_language == 'hi' ||
                  store.Apigenre[this.store.globalindex].original_language == 'zh' ||
                  store.Apigenre[this.store.globalindex].original_language == 'fa'"></span>
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
              @click="changeDaylyIndex(index)">

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
              @click="changeWeekIndex(index)"
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
            <div class="thumbnail" v-for="(element, index) in this.store.Apigenre" @click="changeSeriesIndex(index)"
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

          .info-type {
            position: relative;
            animation: hiddenStart .1s, appearTexttoLeft .4s .1s
          }

          .starwrapper {
            position: relative;
            animation: hiddenStart .2s, appearTexttoLeft .4s .2s
          }

          .release-date {
            position: relative;
            animation: hiddenStart .3s, appearTexttoLeft .4s .3s
          }

          .lang {
            position: relative;
            animation: hiddenStart .4s, appearTexttoLeft .4s .4s
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
          object-position: 150px;

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

          }

          .title {
            margin-top: 0.5em;
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
              z-index: 1;
              color: $secondary;

              &-empty {
                position: relative;
                z-index: 1;
                text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.315);
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
    height: 200px;
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
        height: 125px;

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
      gap: 1em;


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

          scale: 1.1;

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
