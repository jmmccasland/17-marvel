<template lang="html">
  <div class="app">
    <!-- HEADER -->
    <div class="section section--header">
      <div class="container container--header">
        <h1 class="logo">Marvel</h1>
        <form class="search" v-on:submit.prevent="searchByName(searchValue)">
          <input type="text" placeholder="Search for a comic" class="search__input" v-model="searchValue">
          <button class="search__submit">Submit</button>
        </form>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="section section--content">
      <div class="container container--content">

        <!-- SIDEBAR -->
        <div class="sidebar">
          <img v-bind:src="`${seriesInfo.thumbnail.path}.${seriesInfo.thumbnail.extension}`" alt="" class="sidebar__img">
          <h2 class="sidebar__title">{{ seriesInfo.title }}</h2>
          <p class="sidebar__date">{{seriesInfo.startYear}} - {{seriesInfo.endYear}}</p>
          <h2 class="sidebar__creators-title">Creators</h2>
          <ul class="sidebar__creators">
            <li v-for="item in seriesInfo.creators.items" class="sidebar__creators-item">{{ item.name }}</li>

          </ul>
        </div>

        <!-- MAIN -->
        <div class="main">

          <!-- MAIN__Characters -->
          <div class="main__item">
            <h2 class="characters-title">Characters</h2>
            <ul class="characters-list">
              <characteritem v-for="character in characterData" v-bind:key="character.id" v-bind:character="character"></characteritem>
            </ul>
          </div>

          <!-- MAIN__Comics -->
          <div class="main__item">
            <h2 class="comics-title">Comics</h2>
            <ul class="comics-list">
              <comicitem v-for="item in comicData" v-bind:key="item.id" v-bind:comic="item" v-on:readmore="showModal"> </comicitem>
            </ul>
          </div>
        </div>
      </div>
    </div>

  <div v-if="modal" class="section section--modal">
      <div class="modal">
        <button class="modal__close" v-on:click="closeModal">X</button>
        <p class="modal__text"  >
        {{modal.description}}
        </p>
      </div>
  </div>

  </div>
</template>

<script>
import store from '../store';
import { seriesInfoSearch, modalSet, modalClear } from '../actions';
import characteritem from './character-item.vue';
import comicitem from './comic-item.vue';

export default {
  components: {
    characteritem,
    comicitem,
  },

  data() {
    return {
      seriesInfo: this.$select('seriesInfo'),
      characterData: this.$select('characterData'),
      comicData: this.$select('comicData'),
      modal: this.$select('modal'),
      searchValue: '',
    };
  },

  mounted() {
    store.dispatch(seriesInfoSearch('Spider-Man'));
  },

  methods: {

    searchByName(searchValue) {
      store.dispatch(seriesInfoSearch(searchValue));
    },

    showModal(data) {
      store.dispatch(modalSet(data));
    },

    closeModal() {
      store.dispatch(modalClear());
    }
  },
};
</script>
