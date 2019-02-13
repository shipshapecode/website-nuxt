<template>
  <div itemscope itemtype="https://schema.org/Organization" itemid="shipshapeorg">
    <nav-menu />
    <nuxt />
    <wave-footer />
  </div>
</template>

<script>
import NavMenu from '~/components/NavMenu.vue';
import WaveFooter from '~/components/WaveFooter.vue';

export default {
  components: {
    NavMenu,
    WaveFooter
  }
};
</script>
