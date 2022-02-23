<template>
  <article itemscope itemtype="http://schema.org/Service">
    <HeroBlock hero-classes="next-consulting waves cloud-native-waves">
      <template #content>
        <div class="pb-24 lg:pb-0">
          <h1 itemprop="name" class="leading-tight text-5xl">
            Launch and scale faster and more securely with cloud-native
            applications
          </h1>
          <nuxt-link class="btn btn-red w-full lg:w-auto" to="/contact/">
            Let’s get started
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <nuxt-img
          alt=""
          class="h-auto m-auto max-w-2xl w-full lg:pb-32"
          format="webp"
          height="1030"
          src="/img/hero-images/cloud-native-consulting.png"
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

    <!-- <SingleQuote :testimonial="testimonial" /> -->

    <HeroBlockVariation data-aos="fade-up" :content="community" />

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
} from '~/content/specialties/cloud-native.js';

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
