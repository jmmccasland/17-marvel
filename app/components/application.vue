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
          <img src="http://placecage.com/200/200" alt="" class="sidebar__img">
          <h2 class="sidebar__title">Series Title</h2>
          <p class="sidebar__date">1992 - 2001</p>
          <h2 class="sidebar__creators-title">Creators</h2>
          <ul class="sidebar__creators">
            <li class="sidebar__creators-item">Creator Name</li>
            <li class="sidebar__creators-item">Creator Name</li>
            <li class="sidebar__creators-item">Creator Name</li>
            <li class="sidebar__creators-item">Creator Name</li>
            <li class="sidebar__creators-item">Creator Name</li>
            <li class="sidebar__creators-item">Creator Name</li>
          </ul>
        </div>

        <!-- MAIN -->
        <div class="main">

          <!-- MAIN__Characters -->
          <div class="main__item">
            <h2 class="characters-title">Characters</h2>
            <ul class="characters-list">
              <li class="characters-list__item">
                <img class="characters-list__item__image" src="http://placecage.com/100/100" alt="">
                <p class="characters-list__item__name">Character Name</p>
              </li>
              <li class="characters-list__item">
                <img class="characters-list__item__image" src="http://placecage.com/100/100" alt="">
                <p class="characters-list__item__name">Character Name</p>
              </li>
              <li class="characters-list__item">
                <img class="characters-list__item__image" src="http://placecage.com/100/100" alt="">
                <p class="characters-list__item__name">Character Name</p>
              </li>
              <li class="characters-list__item">
                <img class="characters-list__item__image" src="http://placecage.com/100/100" alt="">
                <p class="characters-list__item__name">Character Name</p>
              </li>
            </ul>
          </div>

          <!-- Main__Comics -->
          <div class="main__item">
            <h2 class="comics-title">Comics</h2>
            <ul class="comics-list">
              <li class="comics-list__item">
                <img class="comics-list__item__image" src="http://placecera.com/100/100" alt="">
                <p class="comics-list__item__issue">Issue #</p>
                <p class="comics-list__item__name">Comic Name</p>
                <button class="comics-list__item__read">Read More</button>
              </li>
              <li class="comics-list__item">
                <img class="comics-list__item__image" src="http://placecera.com/100/100" alt="">
                <p class="comics-list__item__issue">Issue #</p>
                <p class="comics-list__item__name">Comic Name</p>
                <button class="comics-list__item__read">Read More</button>
              </li>
              <li class="comics-list__item">
                <img class="comics-list__item__image" src="http://placecera.com/100/100" alt="">
                <p class="comics-list__item__issue">Issue #</p>
                <p class="comics-list__item__name">Comic Name</p>
                <button class="comics-list__item__read">Read More</button>
              </li>
              <li class="comics-list__item">
                <img class="comics-list__item__image" src="http://placecera.com/100/100" alt="">
                <p class="comics-list__item__issue">Issue #</p>
                <p class="comics-list__item__name">Comic Name</p>
                <button class="comics-list__item__read">Read More</button>
              </li>

            </ul>
          </div>

        </div>


      </div>
    </div>

  <div class="section section--modal">
    <div class="container">
      <div class="modal">
        <div class="modal__close">X</div>
        <p class="modal__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet expedita aspernatur, minima in nobis doloremque numquam perspiciatis tempore cupiditate! Porro, aut numquam hic consectetur provident quod rem nostrum. Tenetur.
        </p>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import store from '../store';
import { seriesInfoSearch } from '../actions';

export default {
  data() {
    return {
      seriesInfo: this.$select('seriesInfo'),
      characterData: this.$select('characterData'),
      comicData: this.$select('comicData'),
    };
  },

  created() {
    store.dispatch(seriesInfoSearch('spider'));
  },

  methods: {

  },
};
</script>
