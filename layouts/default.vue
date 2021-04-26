<template>
  <div
    itemscope
    itemtype="https://schema.org/Organization"
    itemid="shipshapeorg"
    :class="{ 'bg-navy': $route.name === 'about' }"
  >
    <meta itemprop="legalName" content="Ship Shape Consulting LLC" />

    <NavMenu />

    <main>
      <Nuxt />
    </main>

    <WaveFooter />
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
