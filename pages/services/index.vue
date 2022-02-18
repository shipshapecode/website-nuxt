<template>
  <div>
    <HeroBlock hero-classes="services">
      <template #content>
        <h1>Our Services</h1>
        <p>
          We turn ideas into industry-leading products. Our experts proactively
          remedy issues with existing code and build innovations from the ground
          up.
        </p>
        <div>
          <nuxt-link class="btn btn-red" to="/contact/">
            Work with us
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <nuxt-img
          class="h-auto m-auto max-w-2xl w-full"
          height="1020"
          format="webp"
          src="/img/hero-images/services.png"
          width="1344"
        />
      </template>
    </HeroBlock>

    <ServicesBlurbs />
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';

export default {
  speedkitComponents: {
    HeroBlock: () => import('@/components/HeroBlock'),
    ServicesBlurbs: () => import('@/components/ServicesBlurbs')
  },

  head() {
    const title =
      'Ember.js, Next.js & Nuxt.js Software Consultant | Ship Shape';
    const description =
      'Ship Shape’s software consultants are top-tier engineers who tackle tough tech challenges in Ember.js, Next.js, Nuxt.js, Tailwind CSS, cloud-native, & more.';
    const url = 'https://shipshape.io/services/';

    return generateMeta(title, description, url);
  }
};
</script>
