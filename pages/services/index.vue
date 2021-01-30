<template>
  <div>
    <HeroBlock class="services">
      <template #content>
        <h1>Our Services</h1>
        <p>
          We turn ideas into industry-leading products. Our experts proactively
          remedy issues with existing code and build innovations from the ground
          up.
        </p>
        <div>
          <nuxt-link class="btn btn-navy" to="/contact/">
            Work with us
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <img
          class="h-auto m-auto max-w-2xl w-full"
          :src="require('~/assets/img/hero-images/services.png?webp')"
        />
      </template>
    </HeroBlock>

    <ServicesBlurbs />
  </div>
</template>

<script>
import HeroBlock from '~/components/HeroBlock.vue';
import ServicesBlurbs from '~/components/ServicesBlurbs.vue';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    HeroBlock,
    ServicesBlurbs
  },

  head() {
    const title = 'Custom Software Development';
    const description =
      'Ship Shape specializes in custom software and app development services. ' +
      'Learn how we turn ideas into world-class products.';
    const url = 'https://shipshape.io/services/';

    return generateMeta(title, description, url);
  }
};
</script>
