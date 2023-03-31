<script>
import { store } from '../store.js';



export default {
  name: 'sideBar',

  data() {
    return {
      store,

    }
  },

  emits: {

  },

  methods: {
    accedi() {
      setTimeout(
        () => {
          this.store.isOnline = true
        }, 1000
      )
    },

    esci() {
      setTimeout(
        () => {
          this.store.isOnline = false
        }, 1000
      )
    },

    changeSearchbar() {
      if (this.store.isSearchBar) {
        this.store.isSearchBar = false
      } else {
        this.store.isSearchBar = true;
      }
    },
  },
}
</script>

<template>
  <div class="general-container">

    <div class="icons">

      <div class="icon-wrapper search" @click="changeSearchbar()">
        <i class="fa-solid fa-magnifying-glass"></i>

        <div class="icon-menu-position">
          <div class="menu">
            <ul>
              <li id="newResearch" @click="changeSearchbar()">Nuova Ricerca..</li>
              <li @click="changeSearchbar()">Cerca film</li>
              <li @click="changeSearchbar()">Cerca serie</li>
              <li @click="changeSearchbar()">Cerca Kids</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="icon-wrapper user">
        <i class="fa-regular fa-user"></i>

        <div class="icon-menu-position">
          <div class="menu">
            <ul>
              <li @click="accedi()">Accedi con le tue credenziali</li>
              <li>Accedi</li>
              <li @click="esci()">Esci</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="icon-wrapper option">
        <i class="fa-solid fa-gear"></i>

        <div class="icon-menu-position">
          <div class="menu">
            <ul>
              <li>Impostazioni Account</li>
              <li>Preferenze</li>
              <li>Crediti</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="account-sidebar">

      <div class="status-wrapper">
        <div class="status" :class="this.store.isOnline ? 'online' : 'offline'"></div>
      </div>

      <div class="img-wrapper">
        <img src="https://picsum.photos/200/300" alt="" v-if="this.store.isOnline">
        <i class="fa-solid fa-user" v-else></i>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
@use './../scss/variables' as *;


.general-container {
  width: 40px;
  height: 100vh;

  background: darken($backgroundColor, $amount: 5);

  padding: 2em .5em;

  @include d-flex-col-center();
  justify-content: space-between;


  .icons {
    @include d-flex-col-center();
    margin-top: 2em;
    gap: 1em;

    .icon-wrapper {
      width: 30px;
      height: 30px;


      position: relative;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: center;

      i {
        font-size: 1.2em;
        color: rgb(155, 155, 155);
        cursor: pointer;
        transition: all .3s;

        &:hover {
          color: white
        }

        &:hover+.icon-menu-position>.menu {
          display: block;
        }

        &:active {
          color: rgb(130, 130, 130)
        }
      }

      .icon-menu-position {
        width: 1px;
        height: 1px;

        position: absolute;
        right: 0;
        top: 0;

        .menu {
          width: 200px;


          background: #000000e1;

          position: absolute;
          left: -5px;
          top: 0px;

          display: none;
          z-index: 2;

          padding: .5em;

          &:hover {
            display: block
          }

          ul {
            list-style-type: none;


            #newResearch:hover>.search-input-wrapper {
              display: block;


              &:hover {
                display: block;
              }
            }



            li {
              padding: .5em .4em;
              //border-left: 1px solid rgba(255, 255, 255, 0);
              color: grey;
              cursor: pointer;
              font-weight: 100;
              text-align: center;



              &:hover {
                //border-left: 1px solid white;
                color: white;
                background: #ff000045;
              }

              &:active {
                //border-left: 1px solid rgb(255, 255, 255);
                color: white;
                background: #52010192;
              }
            }
          }
        }
      }
    }
  }

  .account-sidebar {
    @include d-flex-col-center();

    .img-wrapper {
      width: 35px;
      height: 35px;
      border-radius: 50%;

      overflow: hidden;

      img {
        width: 100%;
        height: 100%;

        object-fit: cover;
      }

      i {
        font-size: 1.8em;

      }
    }

    .status-wrapper {
      position: relative;
      width: 100%;

      .status {
        width: 10px;
        height: 10px;
        background: #5d5d5d;
        border-radius: 50%;

        position: absolute;
        top: 1px;

        &.online {
          background: green;
        }

        &.offline {
          background: red;
        }
      }

    }

  }

}
</style>
