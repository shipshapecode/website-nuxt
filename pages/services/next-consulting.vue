<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock
      hero-classes="next-consulting waves next-waves !pb-20 2xl:!pb-48"
    >
      <template #content>
        <h1 itemprop="name" class="leading-tight text-5xl">
          Boost performance and easily make the leap from React to Next.js
        </h1>
        <div>
          <nuxt-link class="btn btn-red w-full lg:w-auto" to="/contact/">
            Let’s get started
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <nuxt-img
          class="h-auto m-auto max-w-2xl w-full"
          format="webp"
          height="1000"
          src="/img/hero-images/next-consulting.png"
          width="1344"
        />
      </template>
    </HeroBlock>

    <AllAboutSpecialty
      :text="specialtyDetails.text"
      :benefits="specialtyDetails.benefits"
    />

    <HeroBlockVariation
      data-aos="fade-up"
      hero-classes="mt-20"
      :content="marketing"
      :is-flipped="true"
    />

    <SingleQuote :testimonial="testimonial" />

    <HeroBlockVariation :content="community" />

    <WaveMoreLinks />
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';
import {
  community,
  head,
  marketing,
  specialtyDetails,
  testimonial
} from '~/content/specialties/next.js';

export default {
  speedkitComponents: {
    AllAboutSpecialty: () => import('@/components/AllAboutSpecialty'),
    HeroBlock: () => import('@/components/HeroBlock'),
    HeroBlockVariation: () => import('@/components/HeroBlockVariation'),
    SingleQuote: () => import('@/components/SingleQuote'),
    WaveMoreLinks: () => import('@/components/WaveMoreLinks')
  },
  data() {
    return { community, head, marketing, specialtyDetails, testimonial };
  },
  head() {
    const { title, description, url } = head;
    return generateMeta(title, description, url);
  }
};
</script>

<style lang="scss">
.logo-red path {
  fill: #ed6a5e;
}
</style>
