<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock hero-classes="services bg-blue-light waves blue-light-waves">
      <template #content>
        <h1 itemprop="name" class="leading-tight text-5xl">
          Software consultants who build it right the first time, every time
        </h1>
        <div>
          <nuxt-link class="btn btn-red w-full lg:w-auto" to="/contact/">
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
    const title = 'Custom Software Development';
    const description =
      'Ship Shape specializes in custom software and app development services. ' +
      'Learn how we turn ideas into world-class products.';
    const url = 'https://shipshape.io/services/';

    return generateMeta(title, description, url);
  }
};
</script>
