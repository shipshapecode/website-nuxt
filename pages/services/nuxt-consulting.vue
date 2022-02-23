<template>
  <article itemscope itemtype="http://schema.org/Service">
    <HeroBlock
      hero-classes="nuxt-consulting waves nuxt-waves !pb-48 2xl:!pb-56"
    >
      <template #content>
        <h1 itemprop="name" class="leading-tight text-5xl">
          Create a Nuxt.js app that's universal — without all the hassle
        </h1>

        <div>
          <nuxt-link class="btn btn-red w-full lg:w-auto" to="/contact/">
            Let's get started
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <nuxt-img
          class="h-auto m-auto max-w-2xl w-full"
          format="webp"
          height="834"
          src="/img/hero-images/nuxt-consulting.png"
          width="1344"
        />
      </template>
    </HeroBlock>

    <AllAboutSpecialty
      :text="specialtyDetails.text"
      :benefits="specialtyDetails.benefits"
      :flip-paragraphs="true"
    />

    <HeroBlockVariation
      data-aos="fade-up"
      hero-classes="mt-20"
      :content="marketing"
      :is-flipped="true"
    />

    <SingleQuote :testimonial="testimonial" />

    <HeroBlockVariation data-aos="fade-up" :content="community">
      <template #content>
        <h3 class="text-2xl" data-aos="fade-up">Proud Nuxt.js partners</h3>
        <p data-aos="fade-up">
          Ship Shape proudly
          <a href="https://nuxtjs.org/partners/ship-shape">sponsors Nuxt.js</a>
          to support its talented team and dynamic framework. Our partnership is
          one of the main reasons we’re always ready to create Nuxt.js apps:
          because we stay up-to-date with the Nuxt team and give back to the
          community.
        </p>
      </template>
    </HeroBlockVariation>

    <WaveMoreLinks />
  </article>
</template>

<script>
import { generateMeta } from '~/utils/meta';
import {
  community,
  head,
  marketing,
  specialtyDetails,
  testimonial
} from '~/content/specialties/nuxt.js';

export default {
  speedkitComponents: {
    AllAboutSpecialty: () => import('@/components/AllAboutSpecialty'),
    HeroBlock: () => import('@/components/HeroBlock'),
    HeroBlockVariation: () => import('@/components/HeroBlockVariation'),
    SingleQuote: () => import('@/components/SingleQuote'),
    WaveMoreLinks: () => import('@/components/WaveMoreLinks')
  },
  data() {
    return { community, head, marketing, testimonial, specialtyDetails };
  },
  head() {
    const { title, description, url } = head;

    return generateMeta(title, description, url);
  }
};
</script>
