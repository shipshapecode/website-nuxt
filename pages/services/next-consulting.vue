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
          alt=""
        />
      </template>
    </HeroBlock>

    <AllAboutSpecialty
      :text="specialtyDetails.text"
      :benefits="specialtyDetails.benefits"
    />

    <div
      class="section flex flex-wrap justify-center !pt-40"
      data-aos="fade-down"
    >
      <div class="section-content">
        <h2 class="pb-8">Next.js in action</h2>
        <div
          class="
            bg-blue-light
            rounded-b-lg
            lg:grid lg:grid-cols-2 lg:rounded-l-lg lg:gap-x-12
          "
          data-aos="flip-down"
        >
          <div
            class="
              bg-red
              flex
              justify-center
              pt-12
              px-8
              relative
              rounded-t-lg
              lg:pt-24 lg:px-12 lg:order-last
            "
          >
            <div class="bg-white h-48 rounded-t-lg w-full">
              <nuxt-img
                class="
                  object-cover
                  h-full
                  max-w-full
                  w-full
                  rounded-t-lg
                  mb-0
                  lg:h-case lg:rounded-t-none lg:rounded-r-lg
                "
                src="/img/work/enigma/enigma-hirer-dashboard.png"
                alt="Enigma hirer dashboard with a pop-up notification introducing the page"
              />
            </div>
          </div>
          <div class="p-8 lg:p-12">
            <inline-svg
              class="h-8 max-w-full mb-8 self-start w-auto logo-navy"
              src="/svgs/clients/enigma.svg"
            />
            <p class="mb-16">
              Enigma is a platform designed to help cybersecurity teams make
              faster hiring decisions and find...
            </p>
            <nuxt-link class="learn-more" to="/work/enigma/">
              Dive deeper
              <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

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
.logo-navy path {
  fill: var(--navy);
}
</style>
