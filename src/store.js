import { reactive } from 'vue';

export const store = reactive({
    researchinput: '',

    //Api componenets
    APIBase: 'https://api.themoviedb.org/3',
    ApiBasehttps: 'http://image.tmdb.org/t/p/',
    ApibaseNew: 'https://api.themoviedb.org/3/search/multi?api_key=017b7d25b6cd87444b6dd86827b3e4cc&language=it-IT&query=',



    //Tipologia di filtro
    APIGeneralSearch: '/search',
    APIMovie: '/movie',
    APITv: '/tv',

    APIKey: '?api_key=017b7d25b6cd87444b6dd86827b3e4cc',
    APIquery: '&query=',

    //Arrayfiltro
    ApiFilm: [],
    Apigenre: [],
    ApiTrendDailyArray: [],
    ApiTrendWeekArray: [],
    ApiTrendArray: [],
    ApiResearchArray: [],


    // Client Status
    isOnline: false,
    isLoading: false,
    isSearch: false,
    isSearchBar: false,

    //Variabili di stringa
    //Comunicazione al main in caso di ricerca
    comm: '',


});