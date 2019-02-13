<template>
  <HeroBlock class="home">
    <h1 class="heading">Code that won't sink</h1>
    <p>
      Ship Shape is a software consultancy specializing in all things Ember.
      We leverage Ember.js, and all the latest Ember addons and technologies,
      to create truly ambitious, state of the art applications that are future-proof and easily maintainable.
    </p>
    <div>
      <nuxt-link to="/work/" class="btn-navy">
        See what we've helped create
      </nuxt-link>
    </div>
  </HeroBlock>
</template>

<script>
  import HeroBlock from '~/components/HeroBlock.vue';

  export default {
    components: {
      HeroBlock
    }
  };
</script>
