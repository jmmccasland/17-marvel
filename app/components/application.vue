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
          <p class="sidebar__date">Series Dates</p>
          <h3 class="sidebar__creators-title">Creators</h3>
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

          <!-- Characters -->
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

          <!-- Comics -->

          <div class="main__item">
            <h2 class="comics-title">Comics</h2>
            <ul class="comics-list">
              <li class="comics-list__item">
                <img class="comics__list__item__image" src="http://placecera.com/100/100" alt="">
                <p class="comics-list__item__issue">Issue #</p>
                <p class="comics-list__item__name">Comic Name</p>
                <button class="comics-list__item__read">Read More</button>
              </li>
              <li class="comics-list__item">
                <img class="comics__list__item__image" src="http://placecera.com/100/100" alt="">
                <p class="comics-list__item__issue">Issue #</p>
                <p class="comics-list__item__name">Comic Name</p>
                <button class="comics-list__item__read">Read More</button>
              </li>
              <li class="comics-list__item">
                <img class="comics__list__item__image" src="http://placecera.com/100/100" alt="">
                <p class="comics-list__item__issue">Issue #</p>
                <p class="comics-list__item__name">Comic Name</p>
                <button class="comics-list__item__read">Read More</button>
              </li>
              <li class="comics-list__item">
                <img class="comics__list__item__image" src="http://placecera.com/100/100" alt="">
                <p class="comics-list__item__issue">Issue #</p>
                <p class="comics-list__item__name">Comic Name</p>
                <button class="comics-list__item__read">Read More</button>
              </li>

            </ul>
          </div>

        </div>


      </div>
    </div>






    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {

  },
};
</script>
