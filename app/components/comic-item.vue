<template lang="html">
  <li class="comics-list__item">
    <img class="comics-list__item__image" :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" alt="">
    <p class="comics-list__item__issue">#{{comic.issueNumber}}</p>
    <p class="comics-list__item__name">{{comic.title}}</p>
    <button class="comics-list__item__read">Read More</button>
  </li>
</template>

<script>


export default {
  props: ['comic'],

  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
