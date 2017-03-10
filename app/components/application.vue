<template lang="html">
  <div class="app">
    <!-- HEADER -->
    <div class="section section--header">
      <div class="container">
        <h1 class="logo">Marvel</h1>
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
              <characteritem v-for="item in characterData" v-bind:character="item"></characteritem>
            </ul>
          </div>

          <!-- MAIN__Comics -->
          <div class="main__item">
            <h2 class="comics-title">Comics</h2>
            <ul class="comics-list">
              <comicitem v-for="item in comicData" v-bind:comic="item" v-on:readmore="showModal"> </comicitem>
            </ul>
          </div>

        </div>


      </div>
    </div>

  <div v-if="modal" class="section section--modal">
      <div class="modal">
        <button class="modal__close" v-on:click="closeModal">X</button>
        <p class="modal__text">
          {{comicData.description}} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, laboriosam, pariatur. Ea saepe quod animi amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quasi perferendis, similique tenetur est veritatis consequuntur eaque saepe nostrum laborum incidunt ipsam optio velit ad repudiandae! Deleniti porro voluptas sit.Voluptas ab sequi eaque adipisci rerum. Amet blanditiis porro, perferendis minus veniam quam eligendi.
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
    };
  },

  mounted() {
    store.dispatch(seriesInfoSearch('Hulk'));
  },

  methods: {
    showModal(data) {
      store.dispatch(modalSet(data));
    },

    closeModal() {
      store.dispatch(modalClear());
    }
  },
};
</script>
