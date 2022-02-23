<template>
  <article itemscope itemtype="http://schema.org/Service">
    <HeroBlock hero-classes="next-consulting waves tailwind-waves p-32">
      <template #content>
        <div class="pb-24 xl:pb-0">
          <h1 itemprop="name" class="leading-tight text-5xl">
            Customize your app quickly with the help of our Tailwind CSS experts
          </h1>
          <nuxt-link class="btn btn-red w-full lg:w-auto" to="/contact/">
            Let’s get started
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <nuxt-img
          class="h-auto m-auto max-w-2xl w-full lg:pb-32"
          format="webp"
          height="1030"
          src="/img/hero-images/tailwind-consulting.png"
          width="1344"
          alt=""
        />
      </template>
    </HeroBlock>

    <AllAboutSpecialty
      :text="specialtyDetails.text"
      :benefits="specialtyDetails.benefits"
      :flip-paragraphs="true"
    >
      <template #unboxed-text>
        <p class="text-white lg:content-center lg:place-self-center">
          At Ship Shape, we like Tailwind CSS so much that we even use it on our
          own products and passion projects, such as our
          <a href="https://swach.io/"
            >robust color management app called Swach.</a
          >
          In addition to building Tailwind UIs, we also love training other
          teams on it to help sharpen their skills too.
        </p>
      </template>
    </AllAboutSpecialty>

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
} from '~/content/specialties/tailwind.js';

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
