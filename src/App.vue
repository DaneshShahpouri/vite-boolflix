<script>
import axios from 'axios';
import { store } from './store.js';

// Components
import AppSideBar from './components/AppSideBar.vue';
import AppNavbar from './components/AppNavbar.vue';
import AppMain from './components/AppMain.vue';
import AppSearchBar from './components/AppSearchBar.vue';


export default {
  data() {
    return {
      store,

    }

  },

  methods: {
    CallResearch(parameter) {
      this.store.ApiResearchArray = [];
      this.store.isSearch = true;
      this.store.PagNum = 1;
      this.store.lastcall = '';

      clearInterval(this.store.carosellTime);

      if (this.store.isGeneralResearch) {
        this.store.call = 'https://api.themoviedb.org/3/search/' + 'multi' + '?api_key=017b7d25b6cd87444b6dd86827b3e4cc&language=it-IT&query=' + this.store.researchinput + '&page=' + '1' + '&include_adult=false'
      } else if (this.store.isFilmResearch) {
        this.store.call = 'https://api.themoviedb.org/3/search/' + 'movie' + '?api_key=017b7d25b6cd87444b6dd86827b3e4cc&language=it-IT&query=' + this.store.researchinput + '&page=' + '1' + '&include_adult=false'
      } else if (this.store.isSerieResearch) {
        this.store.call = 'https://api.themoviedb.org/3/search/' + 'tv' + '?api_key=017b7d25b6cd87444b6dd86827b3e4cc&language=it-IT&query=' + this.store.researchinput + '&page=' + '1' + '&include_adult=false'
      }
      this.store.lastcall = this.store.researchinput;

      //Chiamata di ricerca
      axios.get(this.store.call).then((res) => {
        res.data.results.forEach(element => {
          if (element.media_type != "person") {

            this.store.ApiResearchArray.push(element);

          }

        });

        this.store.isLoading = false;

        if (this.store.ApiResearchArray.length == 20) {
          this.store.isMorePage = true;
        } else if (this.store.PagNum <= 1) {
          this.store.isMorePage = false;
        }

        this.store.researchinput = '';

      }).catch((err) => {
        console.log('errore nella chiamata api');

        this.store.comm = 'Spiacenti, la ricerca non è andata a buon fine'


      });

      setTimeout(
        () => {
          if (this.store.ApiResearchArray.length < 1) {
            this.store.comm = 'Spiacenti, la ricerca non è andata a buon fine'
          } else {
            this.store.comm = ''
          }
        }
        , 1000)




    },

    CallResearchPage() {
      this.store.ApiResearchArray = [];
      this.store.isSearch = true;



      if (this.store.isGeneralResearch) {
        this.store.call = 'https://api.themoviedb.org/3/search/' + 'multi' + '?api_key=017b7d25b6cd87444b6dd86827b3e4cc&language=it-IT&query=' + this.store.lastcall + '&page=' + this.store.PagNum + '&include_adult=false'
      } else if (this.store.isFilmResearch) {
        this.store.call = 'https://api.themoviedb.org/3/search/' + 'movie' + '?api_key=017b7d25b6cd87444b6dd86827b3e4cc&language=it-IT&query=' + this.store.lastcall + '&page=' + this.store.PagNum + '&include_adult=false'
      } else if (this.store.isSerieResearch) {
        this.store.call = 'https://api.themoviedb.org/3/search/' + 'tv' + '?api_key=017b7d25b6cd87444b6dd86827b3e4cc&language=it-IT&query=' + this.store.lastcall + '&page=' + this.store.PagNum + '&include_adult=false'
      }

      axios.get(this.store.call).then((res) => {
        res.data.results.forEach(element => {
          if (element.media_type != "person") {

            this.store.ApiResearchArray.push(element);

          }
        });

        this.store.isLoading = false;

        //Controllo dell'ultima pagina
        if (this.store.ApiResearchArray.length == 20) {
          this.store.isMorePage = true;
        } else if (this.store.PagNum == 1) {
          this.store.isMorePage = false;
        } else if (this.store.ApiResearchArray.length == 0) {
          this.store.PagNum = 1;
          this.CallResearchPage()
        }

        this.store.researchinput = '';

      }).catch((err) => {

        this.store.comm = 'Spiacenti, la ricerca non è andata a buon fine'
      });

      setTimeout(
        () => {
          if (this.store.ApiResearchArray.length < 1) {
            this.store.comm = 'Spiacenti, la ricerca non è andata a buon fine'
          } else {
            this.store.comm = ''
          }
        }
        , 1000)

    },

    prevpageCall() {
      if (this.store.PagNum > 1) {
        this.store.PagNum--;
        this.CallResearchPage()
      }
    },

    nextpageCall() {

      store.PagNum++

      this.CallResearchPage()

    },

    CallResearchFilm() {
      this.store.isMorePage = false;
      this.store.isSearchBar = true;
      this.activeFilmStatus();
      this.store.ApiResearchArray = [];
      this.store.isSearch = true;

      let firstcall = 'https://api.themoviedb.org/3/trending/movie/week' + this.store.APIKey + '&include_adult=false';

      //Chiamata di ricerca
      axios.get(firstcall).then((res) => {
        res.data.results.forEach(element => {
          if (element.media_type != "person") {

            this.store.ApiResearchArray.push(element);

          }
        });

        this.store.isLoading = false;



        this.store.researchinput = '';

      }).catch((err) => {


        this.store.comm = 'Spiacenti, la ricerca non è andata a buon fine'
      });

      setTimeout(
        () => {
          if (this.store.ApiResearchArray.length < 1) {
            this.store.comm = 'Spiacenti, la ricerca non è andata a buon fine'
          } else {
            this.store.comm = ''
          }
        }
        , 400)



    },

    CallResearchSerie() {
      this.store.isMorePage = false;
      this.store.isSearchBar = true;
      this.activeSerieStatus();
      this.store.ApiResearchArray = [];
      this.store.isSearch = true;

      let firstcall = 'https://api.themoviedb.org/3/trending/tv/week' + this.store.APIKey + '&page=1&include_adult=false'

      //Chiamata di ricerca
      axios.get(firstcall).then((res) => {
        res.data.results.forEach(element => {
          if (element.media_type != "person") {

            this.store.ApiResearchArray.push(element);

          }
        });

        this.store.isLoading = false;



        this.store.researchinput = '';

      }).catch((err) => {
        this.store.comm = 'Spiacenti, la ricerca non è andata a buon fine'
      });

      setTimeout(
        () => {
          if (this.store.ApiResearchArray.length < 1) {
            this.store.comm = 'Spiacenti, la ricerca non è andata a buon fine'
          } else {
            this.store.comm = ''
          }
        }
        , 400)



    },

    //Attivatori Stati Generali
    activeGeneralStatus() {
      this.store.isGeneralResearch = true;
      this.store.isFilmResearch = false;
      this.store.isSerieResearch = false;

      clearInterval(this.store.carosellTime);

    },

    activeFilmStatus() {
      this.store.isGeneralResearch = false;
      this.store.isFilmResearch = true;
      this.store.isSerieResearch = false;

      clearInterval(this.store.carosellTime);
    },

    activeSerieStatus() {
      this.store.isGeneralResearch = false;
      this.store.isFilmResearch = false;
      this.store.isSerieResearch = true;

      clearInterval(this.store.carosellTime);
    },


  },

  created() {
    this.store.isLoading = true;

    //Chiamata per trend giornaliero generico
    axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=017b7d25b6cd87444b6dd86827b3e4cc&language=it-IT').then((res) => {
      res.data.results.forEach(element => {

        this.store.ApiTrendDailyArray.push(element);
      });

      this.store.isLoading = false;
      ////console.log(this.store.ApiTrendDailyArray)

    }).catch((err) => {
      console.log('errore nella chiamata api');
      this.store.isLoading = false;
    });

    //Chiamata per trend settimanale generico
    axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=017b7d25b6cd87444b6dd86827b3e4cc&language=it-IT').then((res) => {
      res.data.results.forEach(element => {

        this.store.ApiTrendWeekArray.push(element);
      });

      this.store.isLoading = false;
      //console.log(this.store.ApiTrendWeekArray)

    }).catch((err) => {
      console.log('errore nella chiamata api');
      this.store.isLoading = false;
    });

    //Chiamata per serietv
    axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=017b7d25b6cd87444b6dd86827b3e4cc&language=it-IT').then((res) => {
      res.data.results.forEach(element => {

        this.store.Apigenre.push(element);
      });

      this.store.isLoading = false;
      //console.log(this.store.Apigenre)

    }).catch((err) => {
      console.log('errore nella chiamata api');
      this.store.isLoading = false;
    });




  },

  components: {
    AppSideBar,
    AppNavbar,
    AppMain,
    AppSearchBar,

  },


}
</script>

<template>
  <div class="is-loading" v-if="store.isLoading">Caricamento..</div>

  <div class="main-container">
    <AppSideBar @attiva-stato-ricerca-generale="activeGeneralStatus()" @attiva-stato-ricerca-film="activeFilmStatus()"
      @attiva-stato-ricerca-serie="activeSerieStatus()"></AppSideBar>
    <div class="right-side">
      <AppNavbar @start-carosell="" @searchFilm="CallResearchFilm()" @searchSeries="CallResearchSerie()"></AppNavbar>
      <AppSearchBar @search="CallResearch(this.store.researchinput)" class="appSearchBar"></AppSearchBar>
      <AppMain @nextpage="nextpageCall()" @prevpage="prevpageCall()"></AppMain>


    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './scss/variables' as *;

.main-container {
  width: 100%;
  height: 100vh;

  display: flex;

  .right-side {
    @include d-flex-col-center();
    width: calc(100% - 40px);
    z-index: 1;
  }

}

.appSearchBar {
  z-index: 4;
}

.is-loading {
  position: absolute;
  width: 100%;
  height: 100vh;


  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 3em;
  z-index: 5;
}
</style>
