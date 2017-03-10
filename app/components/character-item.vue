<template lang="html">

    <li class="characters-list__item">
      <div class="image-wrapper">
        <img class="characters-list__item__image" v-bind:src="`${character.thumbnail.path}.${character.thumbnail.extension}`" alt="">
      </div>
      <p class="characters-list__item__name">{{character.name}}</p>
    </li>

</template>

<script>
export default {
  props: ['character'],

  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
